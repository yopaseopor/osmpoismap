/**
 * Mapillary Viewer Implementation
 */
function initMapillaryViewer(map) {
    // Create Mapillary vector layer for coverage visualization
    var mapillarySource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {
            var epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            var bbox = epsg4326Extent.join(',');
            
            // Fetch Mapillary coverage data
            fetch(`https://graph.mapillary.com/images?access_token=MLY|9116824181759144|d7242bf6a8614c2c6d13c5b0787ab629&bbox=${bbox}&fields=geometry,id`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.data) {
                        var features = data.data.map(function(image) {
                            return new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([
                                    image.geometry.coordinates[0],
                                    image.geometry.coordinates[1]
                                ])),
                                id: image.id
                            });
                        });
                        mapillarySource.addFeatures(features);
                    }
                })
                .catch(error => {
                    console.error('Error fetching Mapillary data:', error);
                });
        },
        strategy: ol.loadingstrategy.bbox
    });

    var mapillaryLayer = new ol.layer.Vector({
        source: mapillarySource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 4,
                fill: new ol.style.Fill({
                    color: '#05CB63'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 1
                })
            })
        })
    });

    map.addLayer(mapillaryLayer);

    // Create viewer container
    var viewerContainer = $('<div>').addClass('mapillary-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('credits')
            .append($('<div>').addClass('credit').html('© <a href="https://www.mapillary.com" target="_blank">Mapillary</a>'))
            .append($('<div>').addClass('credit').html('© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors')))
        .append($('<iframe>').attr({
            'id': 'mapillary-iframe',
            'allowfullscreen': 'true'
        }));
    
    $('body').append(viewerContainer);

    // Create viewer button control
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-mapillary');
        
        // Map view button
        var mapViewButton = $('<button type="button">')
            .html('<i class="fa fa-camera"></i>')
            .on('click', function() {
                if ($('.mapillary-viewer').hasClass('active')) {
                    hideMapillaryViewer();
                    mapillaryLayer.setVisible(false);
                } else {
                    // Hide Panoramax viewer if it's active
                    if ($('.panoramax-viewer').hasClass('active')) {
                        hidePanoraMaxViewer();
                        $('.osmcat-panoramax button').removeClass('active');
                    }
                    mapillaryLayer.setVisible(true);
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    showMapillaryViewer(center[1], center[0], zoom);
                }
                $(this).toggleClass('active');
            });
        
        container.append(mapViewButton);
        return container[0];
    };

    // Add the viewer control to the map
    map.addControl(new ol.control.Control({
        element: viewerControlBuild()
    }));

    // Handle viewer close button
    $('.mapillary-viewer .close-button').on('click', function() {
        hideMapillaryViewer();
        mapillaryLayer.setVisible(false);
        $('.osmcat-mapillary button').removeClass('active');
    });

    // Make viewer resizable
    $('.mapillary-viewer').resizable({
        handles: 'e, s, se',
        minWidth: 300,
        minHeight: 200,
        resize: function(event, ui) {
            $('.mapillary-viewer iframe').css({
                width: ui.size.width,
                height: ui.size.height - 30 // Account for credits height
            });
        }
    });

    // Function to show the viewer with a specific image
    function showMapillaryViewer(lat, lon, zoom, imageId) {
        // Build URL with embed parameters
        var url = `https://www.mapillary.com/embed?` +
            `client_id=9116824181759144&` +
            `style=photo&` +
            `map_style=OpenStreetMap&` +
            `lat=${lat}&` +
            `lng=${lon}&` +
            `z=${zoom}&` +
            `width=100%25&` +
            `height=100%25`;
            
        if (imageId) {
            url += `&image_key=${imageId}`;
        }
        
        var iframe = $('#mapillary-iframe');
        
        // Configure iframe
        iframe.attr({
            'src': 'about:blank',
            'frameborder': '0',
            'width': '100%',
            'height': '100%',
            'allowfullscreen': 'true'
        });

        // Force reload the iframe with new coordinates
        setTimeout(function() {
            iframe.attr('src', url);
        }, 100);
        
        $('.mapillary-viewer').addClass('active');
        $('#map').addClass('viewer-active');

        // On mobile, adjust map view center after showing viewer
        if (window.innerWidth < 600) {
            setTimeout(function() {
                map.updateSize(); // Force OL to update its size calculations
                if (imageId) {
                    map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
                }
            }, 300);
        }
    }

    // Function to hide the viewer
    function hideMapillaryViewer() {
        $('.mapillary-viewer').removeClass('active');
        $('#map').removeClass('viewer-active');
        setTimeout(function() {
            $('#mapillary-iframe').attr('src', '');
            map.updateSize(); // Force OL to update its size calculations
        }, 300);
    }

    // Handle map click events
    map.on('click', function(evt) {
        if ($('.mapillary-viewer').hasClass('active')) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
                return feature;
            });
            
            if (feature) {
                var coords = ol.proj.transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                showMapillaryViewer(coords[1], coords[0], map.getView().getZoom(), feature.get('id'));
            }
        }
    });

    // Handle window resize
    $(window).on('resize', function() {
        if ($('.mapillary-viewer').hasClass('active')) {
            map.updateSize(); // Force OL to update its size calculations
        }
    });

    // Initially hide the Mapillary layer
    mapillaryLayer.setVisible(false);
} 