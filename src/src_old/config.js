/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Layers',
		completeWith: 'Complete with:',
		editWith: 'Edit with:',
		openWith: 'Open with:',
		checkTools: 'Validation:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node:',
		noNodesFound: 'No nodes found.',
		wayLabel: 'Way:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = true;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://overpass.kumi.systems/api/interpreter';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap DE',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			maxZoom: 18,
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{
			
			
			group: 'Limits',
			title: 'Vies amb "maxspeed"',
			query: '(way[highway=motorway][maxspeed]({{bbox}});node(w);way[highway=trunk][maxspeed]({{bbox}});node(w);way[highway=primary][maxspeed]({{bbox}});node(w);way[highway=secondary][maxspeed]({{bbox}});node(w);way[highway=tertiary][maxspeed]({{bbox}});node(w);way[highway=unclassified][maxspeed]({{bbox}});node(w);way[highway=track][maxspeed]({{bbox}});node(w);way[highway=living_street][maxspeed]({{bbox}});node(w);way[highway=pedestrian][maxspeed]({{bbox}});node(w);way[highway=residential][maxspeed]({{bbox}});node(w);way[highway=service][maxspeed]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxspeed') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 1.0;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.5)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed,
								font: 'bold 14px/1 Arial',
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'Limits',
			title: 'Vies amb "maxheight"',
			query: '(way[highway=motorway][maxheight]({{bbox}});node(w);way[highway=trunk][maxheight]({{bbox}});node(w);way[highway=primary][maxheight]({{bbox}});node(w);way[highway=secondary][maxheight]({{bbox}});node(w);way[highway=tertiary][maxheight]({{bbox}});node(w);way[highway=unclassified][maxheight]({{bbox}});node(w);way[highway=track][maxheight]({{bbox}});node(w);way[highway=living_street][maxheight]({{bbox}});node(w);way[highway=pedestrian][maxheight]({{bbox}});node(w);way[highway=residential][maxheight]({{bbox}});node(w);way[highway=service][maxheight]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxheight.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxheight') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 1.0;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.3)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxheight_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed,
								font: 'small-caps bold 10px/1 sans-serif',
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'Limits',
			title: 'Vies amb "maxlength"',
			query: '(way[highway=motorway][maxlength]({{bbox}});node(w);way[highway=trunk][maxlength]({{bbox}});node(w);way[highway=primary][maxlength]({{bbox}});node(w);way[highway=secondary][maxlength]({{bbox}});node(w);way[highway=tertiary][maxlength]({{bbox}});node(w);way[highway=unclassified][maxlength]({{bbox}});node(w);way[highway=track][maxlength]({{bbox}});node(w);way[highway=living_street][maxlength]({{bbox}});node(w);way[highway=pedestrian][maxlength]({{bbox}});node(w);way[highway=residential][maxlength]({{bbox}});node(w);way[highway=service][maxlength]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxlength.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxlength') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 1.0;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.1)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxlength_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'Limits',
			title: 'Vies amb "maxwidth"',
			query: '(way[highway=motorway][maxwidth]({{bbox}});node(w);way[highway=trunk][maxwidth]({{bbox}});node(w);way[highway=primary][maxwidth]({{bbox}});node(w);way[highway=secondary][maxwidth]({{bbox}});node(w);way[highway=tertiary][maxwidth]({{bbox}});node(w);way[highway=unclassified][maxwidth]({{bbox}});node(w);way[highway=track][maxwidth]({{bbox}});node(w);way[highway=living_street][maxwidth]({{bbox}});node(w);way[highway=pedestrian][maxwidth]({{bbox}});node(w);way[highway=residential][maxwidth]({{bbox}});node(w);way[highway=service][maxwidth]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxwidth.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxwidth') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 0.3) + 1.0;
				var color = linearColorInterpolation([0, 0, 255], [0, 255, 255], Math.min(maxspeed) / 5);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ',0.5)',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.7)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxwidth_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'Limits',
			title: 'Vies amb "width"',
			query: '(way[highway=motorway][width]({{bbox}});node(w);way[highway=trunk][width]({{bbox}});node(w);way[highway=primary][width]({{bbox}});node(w);way[highway=secondary][width]({{bbox}});node(w);way[highway=tertiary][width]({{bbox}});node(w);way[highway=unclassified][width]({{bbox}});node(w);way[highway=track][width]({{bbox}});node(w);way[highway=living_street][width]({{bbox}});node(w);way[highway=pedestrian][width]({{bbox}});node(w);way[highway=residential][width]({{bbox}});node(w);way[highway=service][width]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxwidth.svg',
			style: function (feature) {
				var maxspeed = feature.get('width') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 0.3) + 1.0;
				var color = linearColorInterpolation([0, 0, 255], [0, 255, 255], Math.min(maxspeed, 20) / 5);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ',0.5)',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.7)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxwidth_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
		},
		{
			group: 'Limits',
			title: 'Vies amb "maxweight"',
			query: '(way[highway=motorway][maxweight]({{bbox}});node(w);way[highway=trunk][maxweight]({{bbox}});node(w);way[highway=primary][maxweight]({{bbox}});node(w);way[highway=secondary][maxweight]({{bbox}});node(w);way[highway=tertiary][maxweight]({{bbox}});node(w);way[highway=unclassified][maxweight]({{bbox}});node(w);way[highway=track][maxweight]({{bbox}});node(w);way[highway=living_street][maxweight]({{bbox}});node(w);way[highway=pedestrian][maxweight]({{bbox}});node(w);way[highway=residential][maxweight]({{bbox}});node(w);way[highway=service][maxweight]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxweight.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxweight') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 1.0;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.9)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxweight_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed,
								font: 'bold 12px/1 Arial',
						})
					}));
				}

				return styles;
			}
		},
		{
			group: 'Limits',
			title: 'Vies amb "maxaxleload"',
			query: '(way[highway=motorway][maxaxleload]({{bbox}});node(w);way[highway=trunk][maxaxleload]({{bbox}});node(w);way[highway=primary][maxaxleload]({{bbox}});node(w);way[highway=secondary][maxaxleload]({{bbox}});node(w);way[highway=tertiary][maxaxleload]({{bbox}});node(w);way[highway=unclassified][maxaxleload]({{bbox}});node(w);way[highway=track][maxaxleload]({{bbox}});node(w);way[highway=living_street][maxaxleload]({{bbox}});node(w);way[highway=pedestrian][maxaxleload]({{bbox}});node(w);way[highway=residential][maxaxleload]({{bbox}});node(w);way[highway=service][maxaxleload]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxaxleload.svg',
			style: function (feature) {
				var maxspeed = feature.get('maxaxleload') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 30) + 1.0;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.min(maxspeed, 120) / 120);

				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						geometry: new ol.geom.Point(new ol.geom.LineString(coords).getCoordinateAt(0.11)), // show the image in the middle of the segment
						image: new ol.style.Icon({
							src: imgSrc + 'icones/maxaxleload_empty.svg',
							scale:0.07
						}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'No limits',
			title: 'No maxspeed',
			query: '(way[highway=motorway][!"maxspeed"]({{bbox}});node(w);way[highway=trunk][!"maxspeed"]({{bbox}});node(w);way[highway=primary][!"maxspeed"]({{bbox}});node(w);way[highway=secondary][!"maxspeed"]({{bbox}});node(w);way[highway=tertiary][!"maxspeed"]({{bbox}});node(w);way[highway=unclassified][!"maxspeed"]({{bbox}});node(w);way[highway=track][!"maxspeed"]({{bbox}});node(w);way[highway=living_street][!"maxspeed"]({{bbox}});node(w);way[highway=pedestrian][!"maxspeed"]({{bbox}});node(w);way[highway=residential][!"maxspeed"]({{bbox}});node(w);way[highway=service][!"maxspeed"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'No limits',
			title: 'No maxheight',
			query: '(way[highway=motorway][!"maxheight"]({{bbox}});node(w);way[highway=trunk][!"maxheight"]({{bbox}});node(w);way[highway=primary][!"maxheight"]({{bbox}});node(w);way[highway=secondary][!"maxheight"]({{bbox}});node(w);way[highway=tertiary][!"maxheight"]({{bbox}});node(w);way[highway=unclassified][!"maxheight"]({{bbox}});node(w);way[highway=track][!"maxheight"]({{bbox}});node(w);way[highway=living_street][!"maxheight"]({{bbox}});node(w);way[highway=pedestrian][!"maxheight"]({{bbox}});node(w);way[highway=residential][!"maxheight"]({{bbox}});node(w);way[highway=service][!"maxheight"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxheight_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'No limits',
			title: 'No maxlength',
			query: '(way[highway=motorway][!"maxlength"]({{bbox}});node(w);way[highway=trunk][!"maxlength"]({{bbox}});node(w);way[highway=primary][!"maxlength"]({{bbox}});node(w);way[highway=secondary][!"maxlength"]({{bbox}});node(w);way[highway=tertiary][!"maxlength"]({{bbox}});node(w);way[highway=unclassified][!"maxlength"]({{bbox}});node(w);way[highway=track][!"maxlength"]({{bbox}});node(w);way[highway=living_street][!"maxlength"]({{bbox}});node(w);way[highway=pedestrian][!"maxlength"]({{bbox}});node(w);way[highway=residential][!"maxlength"]({{bbox}});node(w);way[highway=service][!"maxlength"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxlength_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'No limits',
			title: 'No maxwidth',
			query: '(way[highway=motorway][!"maxwidth"]({{bbox}});node(w);way[highway=trunk][!"maxwidth"]({{bbox}});node(w);way[highway=primary][!"maxwidth"]({{bbox}});node(w);way[highway=secondary][!"maxwidth"]({{bbox}});node(w);way[highway=tertiary][!"maxwidth"]({{bbox}});node(w);way[highway=unclassified][!"maxwidth"]({{bbox}});node(w);way[highway=track][!"maxwidth"]({{bbox}});node(w);way[highway=living_street][!"maxwidth"]({{bbox}});node(w);way[highway=pedestrian][!"maxwidth"]({{bbox}});node(w);way[highway=residential][!"maxwidth"]({{bbox}});node(w);way[highway=service][!"maxwidth"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxwidth_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'No limits',
			title: 'No width',
			query: '(way[highway=motorway][!"width"]({{bbox}});node(w);way[highway=trunk][!"width"]({{bbox}});node(w);way[highway=primary][!"width"]({{bbox}});node(w);way[highway=secondary][!"width"]({{bbox}});node(w);way[highway=tertiary][!"width"]({{bbox}});node(w);way[highway=unclassified][!"width"]({{bbox}});node(w);way[highway=track][!"width"]({{bbox}});node(w);way[highway=living_street][!"width"]({{bbox}});node(w);way[highway=pedestrian][!"width"]({{bbox}});node(w);way[highway=residential][!"width"]({{bbox}});node(w);way[highway=service][!"width"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxwidth_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'No limits',
			title: 'No maxweight',
			query: '(way[highway=motorway][!"maxweight"]({{bbox}});node(w);way[highway=trunk][!"maxweight"]({{bbox}});node(w);way[highway=primary][!"maxweight"]({{bbox}});node(w);way[highway=secondary][!"maxweight"]({{bbox}});node(w);way[highway=tertiary][!"maxweight"]({{bbox}});node(w);way[highway=unclassified][!"maxweight"]({{bbox}});node(w);way[highway=track][!"maxweight"]({{bbox}});node(w);way[highway=living_street][!"maxweight"]({{bbox}});node(w);way[highway=pedestrian][!"maxweight"]({{bbox}});node(w);way[highway=residential][!"maxweight"]({{bbox}});node(w);way[highway=service][!"maxweight"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxweight_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'No limits',
			title: 'No maxaxleload',
			query: '(way[highway=motorway][!"maxaxleload"]({{bbox}});node(w);way[highway=trunk][!"maxaxleload"]({{bbox}});node(w);way[highway=primary][!"maxaxleload"]({{bbox}});node(w);way[highway=secondary][!"maxaxleload"]({{bbox}});node(w);way[highway=tertiary][!"maxaxleload"]({{bbox}});node(w);way[highway=unclassified][!"maxaxleload"]({{bbox}});node(w);way[highway=track][!"maxaxleload"]({{bbox}});node(w);way[highway=living_street][!"maxaxleload"]({{bbox}});node(w);way[highway=pedestrian][!"maxaxleload"]({{bbox}});node(w);way[highway=residential][!"maxaxleload"]({{bbox}});node(w);way[highway=service][!"maxaxleload"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxaxleload_question.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'No tracktype <a href="https://imgur.com/a/rioaJEC">A tenir en compte</a>',
			query: '(way["highway"="track"][!"tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/no_tracktype.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Fire hydrant',
			query: '(node["emergency"="fire_hydrant"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/fire_hydrant.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^fire_hydrant:diameter$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(117,63,79,0.4)'
				});
				var stroke = new ol.style.Stroke(
					color: 'rgba(117,63,79,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/hydrant_sign.svg',
							scale:0.07
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -10,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		{
			
			group: 'Test',
			title: 'Fire hydrant',
			query: '(node["emergency"="fire_hydrant"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/fire_hydrant.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var name = feature.get('fire_hydrant:diameter') || '';
				var name2 = feature.get('survey:date') || '';
				var styles = {
					'fire_hydrant:diameter': {
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
							src: imgSrc + 'icones/hydrant_sign.svg',
							scale:0.07
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -10,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'survey:date': {
						'.*': new ol.style.Style({
							image: new ol.style.Icon({
							src: imgSrc + 'icones/hydrant_sign.svg',
							offsetX : 7,
							offsetY : -13,
							scale:0.07
						}),
							text: new ol.style.Text({
								text: name2,
								offsetX : 7,
								offsetY : -13,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:P1': new ol.style.Style({
						image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:S900': new ol.style.Style({
						image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png'
						}),
						stroke: new ol.style.Stroke({
						color: 'rgba(170, 170, 170, 1.0)',
						width: 1
						}),
						fill: new ol.style.Fill({
						color: 'rgba(170, 170, 170, 0.3)'
						})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		},
		{
			group: 'Emergency',
			title: 'Suction point',
			query: '(node["emergency"="suction_point"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/suction_point.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Water tank',
			query: '(nwr["emergency"="water_tank"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/water_tank.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Fire water pond',
			query: '(nwr["emergency"="fire_water_pond"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/water_pond.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },


		{
			group: 'Emergency',
			title: 'No Survey:date',
			query: '(nwr[!"survey:date"]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Survey:date > 2020',
			query: '(nwr[~"^survey:date$"~"201[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Survey:date < 2020',
			query: '(nwr[~"^survey:date$"~"202[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Emergency',
			title: 'No check_date',
			query: '(nwr[!"check_date"]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'check_date > 2020',
			query: '(nwr[~"^check_date$"~"201[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'check_date < 2020',
			query: '(nwr[~"^check_date$"~"202[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },

		{
			group: 'Emergency',
			title: 'No operational_status:date ',
			query: '(nwr[!"operational_status:date"]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'operational_status:date > 2020',
			query: '(nwr[~"^operational_status:date$"~"201[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Emergency',
			title: 'Operational_status:date < 2020',
			query: '(nwr[~"^operational_status:date$"~"202[0-9]."]["emergency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},


		{
			group: 'Survey:date',
			title: 'No Survey:date',
			query: '(nwr[!"survey:date"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: 'Survey:date > 2020',
			query: '(nwr[~"^survey:date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '> 2015',
			query: '(nwr[~"^survey:date$"~"201[0-5]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(117,63,79,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(117,63,79,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(117,63,79,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2016',
			query: '(nwr[~"^survey:date$"~"201[6]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(187,92,120,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(187,92,120,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(187,92,120,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2017',
			query: '(nwr[~"^survey:date$"~"201[7]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,152,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,152,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,152,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2018',
			query: '(nwr[~"^survey:date$"~"201[8]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,209,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,209,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,209,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2019',
			query: '(nwr[~"^survey:date$"~"201[9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,251,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,251,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,251,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2020',
			query: '(nwr[~"^survey:date$"~"202[0]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(190,255,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(190,255,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(190,255,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2021',
			query: '(nwr[~"^survey:date$"~"202[1]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,166,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,166,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,166,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: '2022',
			query: '(nwr[~"^survey:date$"~"202[2]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,245,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,245,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Survey:date',
			title: 'Survey:date < 2020',
			query: '(nwr[~"^survey:date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Check_date',
			title: 'No check_date',
			query: '(nwr[!"check_date"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: 'check_date > 2020',
			query: '(nwr[~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '> 2015',
			query: '(nwr[~"^check_date$"~"201[0-5]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(117,63,79,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(117,63,79,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(117,63,79,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2016',
			query: '(nwr[~"^check_date$"~"201[6]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(187,92,120,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(187,92,120,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(187,92,120,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2017',
			query: '(nwr[~"^check_date$"~"201[7]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,152,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,152,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,152,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2018',
			query: '(nwr[~"^check_date$"~"201[8]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,209,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,209,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,209,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2019',
			query: '(nwr[~"^check_date$"~"201[9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,251,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,251,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,251,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2020',
			query: '(nwr[~"^check_date$"~"202[0]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(190,255,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(190,255,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(190,255,124,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2021',
			query: '(nwr[~"^check_date$"~"202[1]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,166,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,166,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,166,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: '2022',
			query: '(nwr[~"^check_date$"~"202[2]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,245,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,245,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Check_date',
			title: 'check_date < 2020',
			query: '(nwr[~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },

		{
			group: 'Operational_status:date',
			title: 'No operational_status:date ',
			query: '(nwr[!"operational_status:date"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Operational_status:date',
			title: 'operational_status:date > 2020',
			query: '(nwr[~"^operational_status:date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Operational_status:date',
			title: 'Operational_status:date < 2020',
			query: '(nwr[~"^operational_status:date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Tracktype',
			title: 'Grade1',
			query: '(way["highway"="track"]["tracktype"="grade1"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/grade1.svg',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.5)',
					width: 6
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 0
					}),
							text: new ol.style.Text({
								text: name,
								font: 'small-caps bold 10px/1 sans-serif',
								offsetX : 10,
								offsetY : 10,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							}),
					fill:  fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Tracktype',
			title: 'Grade2',
			query: '(way["highway"="track"]["tracktype"="grade2"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/grade2.svg',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.5)',
					width: 3
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 0
					}),
							text: new ol.style.Text({
								text: name,
								font: 'small-caps bold 10px/1 sans-serif',
								offsetX : 10,
								offsetY : 10,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							}),
					fill:  fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Tracktype',
			title: 'Grade3',
			query: '(way["highway"="track"]["tracktype"="grade3"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/grade3.svg',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.5)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 0
					}),
							text: new ol.style.Text({
								text: name,
								font: 'small-caps bold 10px/1 sans-serif',
								offsetX : 10,
								offsetY : 10,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							}),
					fill:  fill,
					stroke: stroke
				});
				return style;
			}
  },


		{
			group: 'Tracktype',
			title: 'No Survey:date',
			query: '(nwr[!"survey:date"]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'Survey:date > 2020',
			query: '(nwr[~"^survey:date$"~"201[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'Survey:date < 2020',
			query: '(nwr[~"^survey:date$"~"202[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Tracktype',
			title: 'No check_date',
			query: '(nwr[!"check_date"]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'check_date > 2020',
			query: '(nwr[~"^check_date$"~"201[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'check_date < 2020',
			query: '(nwr[~"^check_date$"~"202[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },

		{
			group: 'Tracktype',
			title: 'No operational_status:date ',
			query: '(nwr[!"operational_status:date"]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'operational_status:date > 2020',
			query: '(nwr[~"^operational_status:date$"~"201[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Tracktype',
			title: 'Operational_status:date < 2020',
			query: '(nwr[~"^operational_status:date$"~"202[0-9]."]["tracktype"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^operational_status:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		
		
				// OUTSIDE OSM DATA
		{
			
			group: 'Dades possibles',
			title: 'Senyals Barcelona (Opendata Ajuntament BCN - NO OSM)',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			geojson: 'https://raw.githubusercontent.com/osm-catalan/osmcatmap/master/src/img/base/2021_06_27_senyals_transit_bcn.geojson',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'traffic_sign:backward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
										},
					'traffic_sign:forward': {
						'ES:R1': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
						}),
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						}),
'ES:P1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P10c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P11a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P13b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P14b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16a_14': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a_14.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P16b_17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b_17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P17b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P1d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P20a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P21LUZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21LUZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P25 bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25 bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P26': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P31': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P34': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P50o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:P9c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PANEL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PANEL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PAP': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PAP.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ParadaBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ParadaBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PARCCOLL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PARCCOLL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_4Pictos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_4Pictos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_AreaGosso': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_AreaGosso.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'Parcs_JocsInfan': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/Parcs_JocsInfan.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PelPeat': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PelPeat.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PrioritatBus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PrioritatBus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROH_TAX_JPeiro': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROH_TAX_JPeiro.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PROHPILOTA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PROHPILOTA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'PuntVerd': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/PuntVerd.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R100Bus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100Bus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R101 VP Bici': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101 VP Bici.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R104': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_16.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_16.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_20.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_20.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_6.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_6.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R107_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R114': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R116': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_1.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_1.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_16': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_16.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R201_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R202_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_12': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_12.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_7.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_7.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R203_8.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203_8.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.0': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.0.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R204_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_1.9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_1.9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_2.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_2.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_3.8': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_3.8.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_4.7': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_4.7.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R205_5.5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205_5.5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R2o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R300': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_10': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_10.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_60': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_60.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_80': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_80.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R301_90': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301_90.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R302': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R303': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R304': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R305': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R306': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Da': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Da.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307Ia': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307Ia.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307La': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307La.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R307PL_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307PL_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308 ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308 ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU2_A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU2_A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU3_C': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU3_C.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308CAMPNOU4_B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308CAMPNOU4_B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308cL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308cL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308D2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308D2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308dI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308dI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308I_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308I_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308L_Minus': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308L_Minus.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_1-15': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_1-15.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308P_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308P_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PD_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PD_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_0-24h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_0-24h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PI_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PI_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R308PL': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308PL.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R309': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R310': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400CanviSenti': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400CanviSenti.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R400e': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R401b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R402': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R403c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R404': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R405': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R407_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R410_FIN': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410_FIN.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R413': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R501_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R502': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R503': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R506_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:R6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ2 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ2 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ3 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ3 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'RestriccioZ4 S4': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/RestriccioZ4 S4.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S1': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102R': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102R.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S102RD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102RD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S103': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105a_500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105a_500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aD': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aD.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aI': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aI.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105aR': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105aR.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S105vi': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105vi.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S106_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S108': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S109': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S111': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S118_200': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118_200.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_Microf': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_Microf.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S122_TÃºnel': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122_TÃºnel.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S13_AMA': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13_AMA.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15b': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S15d': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_10min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_10min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_20min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_20min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_2h': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_2h.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_30min': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_30min.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_Glories': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_Glories.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17D_motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17D_motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Fila': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Fila.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_MINUS': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_MINUS.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17I_Motos': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17I_Motos.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S17L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18D': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18D.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S18L': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18L.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S19': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S20': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_050': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_050.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S22_250': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_250.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23A': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23A.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23B': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23B.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S23o': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23o.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S24': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S26c': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S28': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S29': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35_Verde': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35_Verde.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_Blanca': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_Blanca.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S35REC_BlancaF': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S35REC_BlancaF.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S36REC': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S36REC.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S5': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S51': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52c2': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52c2.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S52d3': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52d3.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S6': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a11': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a11.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S60a21': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a21.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_30': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_40': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S7_50': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_1500': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_1500.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800_2000': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800_2000.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_5km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_5km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S800b_7km': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800b_7km.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S820': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S840_100': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840_100.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S870I': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870I.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S9': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),
'ES:S900': new ol.style.Style({
image: new ol.style.Icon({
scale: 0.4,
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png'
}),
stroke: new ol.style.Stroke({
color: 'rgba(170, 170, 170, 1.0)',
width: 1
}),
fill: new ol.style.Fill({
color: 'rgba(170, 170, 170, 0.3)'
})
}),


						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
//Mapcomplete editor
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete limits', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Flimits.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones/maxspeed_question.svg', height: 20, width: 20})));
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Hydrants', href: 'https://www.osmhydrant.org/en/#zoom=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmhydrant_logo.png', height: 20, width: 20})));
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete hydrants', href: 'https://mapcomplete.osm.be//hailhydrant.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&language=en&background=osm', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapcomplete_logo.png', height: 20, width: 20})));
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete track type', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Ftracktype.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones/no_tracktype.svg', height: 20, width: 20})));
		
		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(complete, edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
