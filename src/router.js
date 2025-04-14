/* global config, ol */
function initRouter(map) {
    // Add route layer
    const routeLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 4
            })
        })
    });
    map.addLayer(routeLayer);

    // Initialize loading spinner
    const loading = {
        init: function () {
            this.count = 0;
            this.spinner = $('<div>').addClass('ol-control osmcat-loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
            $('#map').append(this.spinner);
        },
        show: function () {
            this.spinner.show();
            ++this.count;
        },
        hide: function () {
            --this.count;
            if (this.count < 1) {
                this.spinner.hide();
                this.count = 0;
            }
        }
    };
    loading.init();

    let startPlace = null;
    let endPlace = null;
    let viaPlace = null;
    let startMarker = null;
    let endMarker = null;
    let viaMarker = null;
    let clickHandler = null;

    // Create markers for points
    const createMarker = function(coordinate, type) {
        const icon = {
            start: 'play-circle',
            via: 'dot-circle',
            end: 'stop-circle'
        }[type];
        
        const marker = new ol.Overlay({
            position: coordinate,
            element: $('<div>')
                .addClass('route-marker')
                .html(`<i class="fa fa-${icon}"></i>`)[0],
            positioning: 'center-center',
            stopEvent: false // Allow events to pass through
        });
        
        // Make marker draggable
        const element = marker.getElement();
        element.draggable = true;
        
        // Add drag handlers
        element.addEventListener('dragstart', function(evt) {
            evt.dataTransfer.setData('text/plain', type);
        });
        
        element.addEventListener('dragend', function(evt) {
            // Get the pixel position relative to the map
            const mapRect = map.getTargetElement().getBoundingClientRect();
            const pixel = [
                evt.clientX - mapRect.left,
                evt.clientY - mapRect.top
            ];
            
            // Convert to map coordinates
            const coordinate = map.getCoordinateFromPixel(pixel);
            const lonlat = ol.proj.toLonLat(coordinate);
            
            // Validate coordinates
            if (Math.abs(lonlat[0]) > 180 || Math.abs(lonlat[1]) > 90) {
                alert('Invalid coordinates. Please try again.');
                return;
            }
            
            // Update the appropriate point
            if (type === 'start') {
                startPlace = { lon: lonlat[0], lat: lonlat[1] };
                marker.setPosition(coordinate);
            } else if (type === 'via') {
                viaPlace = { lon: lonlat[0], lat: lonlat[1] };
                marker.setPosition(coordinate);
            } else if (type === 'end') {
                endPlace = { lon: lonlat[0], lat: lonlat[1] };
                marker.setPosition(coordinate);
            }
            
            // Only calculate route if we have both start and end points
            if (startPlace && endPlace) {
                // Get the current profile
                const profile = $('.profile-select').val();
                
                // Map profile values to OSRM API base URLs and profiles
                const profileMap = {
                    'car': {
                        baseUrl: 'https://router.project-osrm.org/route/v1',
                        profile: 'driving'
                    },
                    'bike': {
                        baseUrl: 'https://routing.openstreetmap.de/routed-bike/route/v1',
                        profile: 'bicycle'
                    },
                    'foot': {
                        baseUrl: 'https://routing.openstreetmap.de/routed-foot/route/v1',
                        profile: 'foot'
                    }
                };
                
                const routingConfig = profileMap[profile] || profileMap.car;
                
                // Format coordinates with proper precision
                const formatCoord = (coord) => coord.toFixed(6);
                let waypoints = `${formatCoord(startPlace.lon)},${formatCoord(startPlace.lat)}`;
                
                if (viaPlace) {
                    waypoints += `;${formatCoord(viaPlace.lon)},${formatCoord(viaPlace.lat)}`;
                }
                
                waypoints += `;${formatCoord(endPlace.lon)},${formatCoord(endPlace.lat)}`;
                
                const url = `${routingConfig.baseUrl}/${routingConfig.profile}/${waypoints}?overview=full&geometries=geojson`;
                
                console.log('Calculating route with URL:', url);
                
                loading.show();
                
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Route data received:', data);
                        
                        if (!data.routes || data.routes.length === 0) {
                            throw new Error('No route found');
                        }
                        
                        const route = data.routes[0];
                        const format = new ol.format.GeoJSON();
                        const features = format.readFeatures(route.geometry, {
                            featureProjection: map.getView().getProjection(),
                            dataProjection: 'EPSG:4326'
                        });
                        
                        // Remove alternative routes
                        map.getLayers().forEach(l => {
                            if (l !== routeLayer && l.get('type') === 'alternative') {
                                map.removeLayer(l);
                            }
                        });
                        
                        routeLayer.getSource().clear();
                        routeLayer.getSource().addFeatures(features);
                        
                        // Show route info
                        const distance = (route.distance / 1000).toFixed(1);
                        const duration = Math.round(route.duration / 60);
                        alert(`Route calculated!\nDistance: ${distance} km\nDuration: ${duration} minutes`);
                    })
                    .catch(error => {
                        console.error('Error calculating route:', error);
                        alert('Error calculating route: ' + error.message);
                    })
                    .finally(() => {
                        loading.hide();
                    });
            }
        });
        
        // Add click handler for all points
        element.addEventListener('click', function() {
            if (type === 'via' && viaPlace) {
                showAlternativeRoutes();
            } else {
                // For start and end points, allow setting new position
                const evt = { coordinate: coordinate };
                clickHandler(evt);
            }
        });
        
        map.addOverlay(marker);
        return marker;
    };

    // Function to show alternative routes
    const showAlternativeRoutes = function() {
        if (!startPlace || !endPlace || !viaPlace) return;
        
        const profile = $('.profile-select').val();
        loading.show();
        
        // Get alternative routes by slightly offsetting the via point
        const offsets = [
            [0.001, 0.001],   // NE
            [0.001, -0.001],  // SE
            [-0.001, -0.001], // SW
            [-0.001, 0.001]   // NW
        ];
        
        const routes = [];
        let completed = 0;
        
        // Map profile values to OSRM API base URLs and profiles
        const profileMap = {
            'car': {
                baseUrl: 'https://router.project-osrm.org/route/v1',
                profile: 'driving'
            },
            'bike': {
                baseUrl: 'https://routing.openstreetmap.de/routed-bike/route/v1',
                profile: 'bicycle'
            },
            'foot': {
                baseUrl: 'https://routing.openstreetmap.de/routed-foot/route/v1',
                profile: 'foot'
            }
        };
        
        const routingConfig = profileMap[profile] || profileMap.car;
        
        offsets.forEach((offset, index) => {
            const viaLon = viaPlace.lon + offset[0];
            const viaLat = viaPlace.lat + offset[1];
            const waypoints = `${startPlace.lon},${startPlace.lat};${viaLon},${viaLat};${endPlace.lon},${endPlace.lat}`;
            const url = `${routingConfig.baseUrl}/${routingConfig.profile}/${waypoints}?overview=full&geometries=geojson`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.routes && data.routes[0]) {
                        routes[index] = data.routes[0];
                    }
                    completed++;
                    
                    if (completed === offsets.length) {
                        displayAlternativeRoutes(routes);
                    }
                })
                .catch(error => {
                    console.error('Error fetching alternative route:', error);
                    completed++;
                });
        });
    };

    // Function to display alternative routes
    const displayAlternativeRoutes = function(routes) {
        const format = new ol.format.GeoJSON();
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
        
        routes.forEach((route, index) => {
            if (route) {
                const features = format.readFeatures(route.geometry, {
                    featureProjection: map.getView().getProjection(),
                    dataProjection: 'EPSG:4326'
                });
                
                const layer = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: colors[index],
                            width: 4
                        })
                    })
                });
                
                layer.getSource().addFeatures(features);
                map.addLayer(layer);
                
                // Add click handler to select route
                layer.on('click', function() {
                    // Remove all alternative routes
                    map.getLayers().forEach(l => {
                        if (l !== routeLayer && l.get('type') === 'alternative') {
                            map.removeLayer(l);
                        }
                    });
                    
                    // Update main route
                    routeLayer.getSource().clear();
                    routeLayer.getSource().addFeatures(features);
                    
                    // Update via point position
                    const coordinates = route.geometry.coordinates;
                    const viaIndex = Math.floor(coordinates.length / 2);
                    const viaCoord = coordinates[viaIndex];
                    const viaPixel = ol.proj.fromLonLat([viaCoord[0], viaCoord[1]]);
                    viaMarker.setPosition(viaPixel);
                    viaPlace = { lon: viaCoord[0], lat: viaCoord[1] };
                });
                
                layer.set('type', 'alternative');
            }
        });
        
        loading.hide();
    };

    // Function to calculate route
    const calculateRoute = function() {
        if (!startPlace || !endPlace) {
            alert('Please set start and end points');
            return;
        }

        // Validate coordinates
        if (Math.abs(startPlace.lon) > 180 || Math.abs(startPlace.lat) > 90 ||
            Math.abs(endPlace.lon) > 180 || Math.abs(endPlace.lat) > 90 ||
            (viaPlace && (Math.abs(viaPlace.lon) > 180 || Math.abs(viaPlace.lat) > 90))) {
            alert('Invalid coordinates. Please try again.');
            return;
        }

        loading.show();
        
        const profile = $('.profile-select').val();
        
        // Format coordinates with proper precision
        const formatCoord = (coord) => coord.toFixed(6);
        let waypoints = `${formatCoord(startPlace.lon)},${formatCoord(startPlace.lat)}`;
        
        if (viaPlace) {
            waypoints += `;${formatCoord(viaPlace.lon)},${formatCoord(viaPlace.lat)}`;
        }
        
        waypoints += `;${formatCoord(endPlace.lon)},${formatCoord(endPlace.lat)}`;
        
        // Map profile values to OSRM API base URLs and profiles
        const profileMap = {
            'car': {
                baseUrl: 'https://router.project-osrm.org/route/v1',
                profile: 'driving'
            },
            'bike': {
                baseUrl: 'https://routing.openstreetmap.de/routed-bike/route/v1',
                profile: 'bicycle'
            },
            'foot': {
                baseUrl: 'https://routing.openstreetmap.de/routed-foot/route/v1',
                profile: 'foot'
            }
        };
        
        const routingConfig = profileMap[profile] || profileMap.car;
        const url = `${routingConfig.baseUrl}/${routingConfig.profile}/${waypoints}?overview=full&geometries=geojson`;
        
        console.log('Calculating route with URL:', url);
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Route data received:', data);
                
                if (!data.routes || data.routes.length === 0) {
                    throw new Error('No route found');
                }
                
                const route = data.routes[0];
                const format = new ol.format.GeoJSON();
                const features = format.readFeatures(route.geometry, {
                    featureProjection: map.getView().getProjection(),
                    dataProjection: 'EPSG:4326'
                });
                
                // Remove alternative routes
                map.getLayers().forEach(l => {
                    if (l !== routeLayer && l.get('type') === 'alternative') {
                        map.removeLayer(l);
                    }
                });
                
                routeLayer.getSource().clear();
                routeLayer.getSource().addFeatures(features);
                
                // Show route info
                const distance = (route.distance / 1000).toFixed(1);
                const duration = Math.round(route.duration / 60);
                alert(`Route calculated!\nDistance: ${distance} km\nDuration: ${duration} minutes`);
                
                // Zoom to route
                const extent = routeLayer.getSource().getExtent();
                map.getView().fit(extent, {
                    padding: [50, 50, 50, 50],
                    duration: 1000
                });
            })
            .catch(error => {
                console.error('Error calculating route:', error);
                alert('Error calculating route: ' + error.message);
            })
            .finally(() => {
                loading.hide();
            });
    };

    // Add router button and dialog
    const routerButton = $('<button>')
        .addClass('osmcat-button osmcat-router')
        .attr('title', 'Route')
        .html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>')
        .on('click', function() {
            // Check if router is already open
            const existingRouter = $('.osmcat-menu .osmcat-layer').filter(function() {
                return $(this).find('.osmcat-select').text() === 'Router';
            });

            if (existingRouter.length > 0) {
                // Router is open, close it
                if (clickHandler) {
                    map.un('singleclick', clickHandler);
                    clickHandler = null;
                }
                existingRouter.remove();
                routerButton.removeClass('active');
                $('.osmcat-menu').removeClass('router-active');

                // Clear markers and route when closing
                if (startMarker) map.removeOverlay(startMarker);
                if (endMarker) map.removeOverlay(endMarker);
                if (viaMarker) map.removeOverlay(viaMarker);
                routeLayer.getSource().clear();
                
                startPlace = null;
                endPlace = null;
                viaPlace = null;
                startMarker = null;
                endMarker = null;
                viaMarker = null;

                return;
            }

            // Router is closed, open it
            routerButton.addClass('active');
            $('.osmcat-menu').addClass('router-active');

            // Clear any existing markers and route
            if (startMarker) map.removeOverlay(startMarker);
            if (endMarker) map.removeOverlay(endMarker);
            if (viaMarker) map.removeOverlay(viaMarker);
            routeLayer.getSource().clear();
            
            startPlace = null;
            endPlace = null;
            viaPlace = null;
            startMarker = null;
            endMarker = null;
            viaMarker = null;

            // Create router content
            const routerContent = $(`
                <div class="osmcat-layer">
                    <div class="osmcat-select">Router</div>
                    <div class="osmcat-content">
                        <div class="router-form">
                            <div class="router-input">
                                <label>Start:</label>
                                <div class="location-input">
                                    <input type="text" class="start-place" placeholder="Search start location...">
                                    <button class="search-button"><i class="fa fa-search"></i></button>
                                </div>
                                <div class="search-results start-results"></div>
                            </div>
                            <div class="router-input">
                                <label>End:</label>
                                <div class="location-input">
                                    <input type="text" class="end-place" placeholder="Search end location...">
                                    <button class="search-button"><i class="fa fa-search"></i></button>
                                </div>
                                <div class="search-results end-results"></div>
                            </div>
                            <div class="router-input">
                                <label>Via (optional):</label>
                                <div class="location-input">
                                    <input type="text" class="via-place" placeholder="Search via location...">
                                    <button class="search-button"><i class="fa fa-search"></i></button>
                                </div>
                                <div class="search-results via-results"></div>
                            </div>
                            <div class="router-input">
                                <label>Profile:</label>
                                <select class="profile-select">
                                    <option value="car">Car</option>
                                    <option value="bike">Bicycle</option>
                                    <option value="foot">Walking</option>
                                </select>
                            </div>
                            <div class="click-hint">
                                <i class="fa fa-info-circle"></i> Click on the map to set locations
                            </div>
                            <button class="calculate-route">Calculate Route</button>
                        </div>
                    </div>
                </div>
            `);

            // Handle map clicks
            clickHandler = function(evt) {
                const coordinate = evt.coordinate;
                const lonlat = ol.proj.toLonLat(coordinate);
                
                if (!startPlace) {
                    if (startMarker) map.removeOverlay(startMarker);
                    startPlace = { lon: lonlat[0], lat: lonlat[1] };
                    startMarker = createMarker(coordinate, 'start');
                    routerContent.find('.start-place').val('Selected on map');
                } else if (!endPlace) {
                    if (endMarker) map.removeOverlay(endMarker);
                    endPlace = { lon: lonlat[0], lat: lonlat[1] };
                    endMarker = createMarker(coordinate, 'end');
                    routerContent.find('.end-place').val('Selected on map');
                } else if (!viaPlace) {
                    if (viaMarker) map.removeOverlay(viaMarker);
                    viaPlace = { lon: lonlat[0], lat: lonlat[1] };
                    viaMarker = createMarker(coordinate, 'via');
                    routerContent.find('.via-place').val('Selected on map');
                }

                // Calculate route automatically if we have start and end points
                if (startPlace && endPlace) {
                    calculateRoute();
                }
            };

            map.on('singleclick', clickHandler);

            // Handle place search
            const searchPlace = function(input, resultsDiv) {
                const query = input.val();
                if (query.length < 3) return;

                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        resultsDiv.empty().show();
                        data.forEach(place => {
                            const result = $('<div>')
                                .addClass('search-result')
                                .html(`${place.display_name}<br><small>${place.lat}, ${place.lon}</small>`)
                                .on('click', function() {
                                    input.val(place.display_name);
                                    resultsDiv.hide();
                                    const coordinate = ol.proj.fromLonLat([parseFloat(place.lon), parseFloat(place.lat)]);
                                    if (input.hasClass('start-place')) {
                                        if (startMarker) map.removeOverlay(startMarker);
                                        startPlace = place;
                                        startMarker = createMarker(coordinate, 'start');
                                    } else if (input.hasClass('via-place')) {
                                        if (viaMarker) map.removeOverlay(viaMarker);
                                        viaPlace = place;
                                        viaMarker = createMarker(coordinate, 'via');
                                    } else {
                                        if (endMarker) map.removeOverlay(endMarker);
                                        endPlace = place;
                                        endMarker = createMarker(coordinate, 'end');
                                    }

                                    // Calculate route automatically if we have start and end points
                                    if (startPlace && endPlace) {
                                        calculateRoute();
                                    }
                                });
                            resultsDiv.append(result);
                        });
                    });
            };

            // Setup search handlers
            routerContent.find('.search-button').on('click', function() {
                const input = $(this).siblings('input');
                const resultsDiv = input.closest('.router-input').find('.search-results');
                searchPlace(input, resultsDiv);
            });

            // Calculate route
            routerContent.find('.calculate-route').on('click', function(e) {
                e.preventDefault();
                calculateRoute();
            });

            // Add router content to menu
            $('.osmcat-menu').append(routerContent);

            // Remove any existing router content
            $('.osmcat-menu .osmcat-layer').not(routerContent).each(function() {
                if ($(this).find('.osmcat-select').text() === 'Router') {
                    $(this).remove();
                }
            });

            // Clean up when router is closed
            routerContent.find('.osmcat-select').on('click', function() {
                if (clickHandler) {
                    map.un('singleclick', clickHandler);
                    clickHandler = null;
                }
                routerContent.remove();
                routerButton.removeClass('active');
                $('.osmcat-menu').removeClass('router-active');
            });
        });

    // Create a control element for the router button
    const routerControl = new ol.control.Control({
        element: routerButton[0]
    });

    // Add the router control to the map
    map.addControl(routerControl);
}