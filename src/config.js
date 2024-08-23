

/**
 * OSM Cat config
 */

//@@ Ruta de imágenes
var imgSrc = 'src/img/';

//@@Coordenadas LONgitud LATitud Rotación Zoom, Zoom de la geolocalización, unidades
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
		//@@ Textos entre comillas.
		layersLabel: 'Capas',
		completeWith: 'Completar con:',
		editWith: 'Editar con:',
		openWith: 'Abrir con:',
		showWith: 'Mostrar con:',
		show2With: 'Mostrar también con:',
		checkTools: 'Validar con:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Nodo:',
		noNodesFound: 'No se ha encontrado información.',
		wayLabel: 'Vía:'
	},
	overpassApi: function(){
		//@@posibilidad de cambiar el servidor de overpass https://overpass-turbo.eu/
		var proxyOverpassApi = true;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://overpass.kumi.systems/api/interpreter';
		}
		return overpassApi;
	},
	//@@ Mapas de fondo
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
			source: new ol.source.OSM()
/*@@ inicio de copia */			}),
								new ol.layer.Tile({
/*@@ título */					title: 'OpenStreetMap DE',
/*@@ icono */					iconSrc: imgSrc + 'icones_web/osmbw_logo-layer.png',
/*@@ zoom máximo */				maxZoom: 18,
								source: new ol.source.XYZ({
/*@@ atribución */				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
/*@@ url */						url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
								}),
/*@@ visible de inicio */		visible: false
/*@@ final de copia */			}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'icones_web/osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'icones_web/opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'icones_web/topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'icones_web/worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'icones_web/cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'icones_web/cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'icones_web/esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'icones_web/logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'icones_web/logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'icones_web/gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'icones_web/gmaps_logo_layer.png',
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
	* title: string títol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
{
			group: 'Alimentación',
			title: 'Supermercados',
			query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

/*@@ inicio-fin de copia */			},
/*   abrir */							{
/*@@ nombre del grupo al que pertenecen */	group: 'Economía',
/*@@ título de la opción */					title: 'Banco Sabadell',
/*@@ consulta overpass */					query: '(nwr["brand:wikidata"="Q762330"]({{bbox}});node(w););out meta;',
/*@@ ruta del icono (URL o relativa) */		iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BSabadell_Logo.svg/220px-BSabadell_Logo.svg.png',
/*@@ color del fondo del icono (r,g,b,a) */	iconStyle: 'background-color:rgba(255,255,255,0.4)',
											style: function (feature) {
/*@@ etiqueta para texto entre barras / / */	var key_regex = /^name:ca$/
												var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
												var name = feature.get(name_key) || '';
												var fill = new ol.style.Fill({
/*@@ color del relleno (r,g,b,a) */					color: 'rgba(255,0,0,0.4)'
/*   cerrar */									});
/*subrallado*/									var stroke = new ol.style.Stroke({
/*@@ color de la línea (r,g,b,a) */					color: 'rgba(255,0,0,1)',
/*@@ anchura de la línea */							width: 1
/*   cerrar */									});
												var style = new ol.style.Style({
/*   icono */										image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */					src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BSabadell_Logo.svg/220px-BSabadell_Logo.svg.png',		
/*@@ rotación */										rotation:0.9,
/*@@ tamaño (en relativo) */							scale:0.30
/*   cerrar */										}),
/*   texto */												text: new ol.style.Text({
																text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */           						color: 'rgba(255,255,255,1)'
/*   cerrar */														}),
/*   cerrar */												}),
/*   texto */										fill: fill,
													stroke: stroke
/*   cerrar */									});
											return style;
/*   cerrar */								}

/*@@ fin-inicio de copia */			},
/*   abrir */							{	
/*@@ nombre del grupo al que pertenecen */				group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
/*@@ título de la opción */								title: 'Ja sense activitat',
/*@@ ruta del archivo geojson con datos */				geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
/*@@ ruta del icono (URL o relativa) */					iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/closed.svg',
/*@@ color del fondo del icono (r,g,b,a) */				iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
/*@@ clave escogida entre barras / / para mostrar en texto sus valores  */					var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
/*@@ clave 1 para filtrar */						'Nom_Activitat': {
/*@@ valor 1 de clave 1 para mostrar */							'Locals buits en venda i lloguer': new ol.style.Style({
/*   icono */						image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */								src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent_sell.svg',
/*@@ tamaño (en relativo) */							scale:1
/*   cerrar */							}),
/*   texto */												text: new ol.style.Text({
																text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */           						color: 'rgba(255,255,255,1)'
/*   cerrar */														}),
/*   cerrar */							})
/*   cerrar */						}),
/*@@ valor 2 de clave 1 para mostrar */						'Locals buits en venda': new ol.style.Style({
/*   icono */					image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/sell.svg',
/*@@ tamaño (en relativo) */							scale:1
/*   cerrar */						}),
/*   texto */							text: new ol.style.Text({
								text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */                             color: 'rgba(0,0,0,1)'
/*   cerrar */														}),
/*   cerrar */							})
/*   cerrar */						}),
/*@@ valor 3 de clave 1 para mostrar */						'Sense informació': new ol.style.Style({
/*   icono */					image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
/*@@ tamaño (en relativo) */							scale:1
/*   cerrar */							}),
/*   texto */												text: new ol.style.Text({
																text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */                             color: 'rgba(0,0,0,1)'
/*   cerrar */														}),
/*   cerrar */							})
/*   cerrar */						}),
/*@@ valor 4 de clave 1 para mostrar */						'Sense informació - Havia tingut activitat (rètol)': new ol.style.Style({
/*   icono */					image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */								src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
/*@@ tamaño (en relativo) */							scale:1
/*   cerrar */							}),
/*   texto */												text: new ol.style.Text({
																text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */                             color: 'rgba(0,0,0,1)'
/*   cerrar */														}),
/*   cerrar */							})
/*   cerrar */						}),
/*@@ valor 5 de clave 1 para mostrar */							'Locals buits en lloguer': new ol.style.Style({
/*   icono */					image: new ol.style.Icon({
/*@@ ruta del icono (URL o relativa) */								src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent.svg',
/*@@ tamaño (en relativo) */							scale:1
/*   cerrar */							}),
/*   texto */												text: new ol.style.Text({
																text: name,
/*@@ peso,tamaño y cuerpo del texto */							font: 'bold 13px Arial, Verdana, Helvetica, sans-serif',
/*@@ rotación del texto */										rotation:0.9,
/*@@ posición x texto relativa al punto */						offsetX : 7,
/*@@ posición y texto relativa al punto */						offsetY : -12,
/* "relleno" del texto */										fill: new ol.style.Fill({
/*@@ color del texto (r,g,b,a) */                             color: 'rgba(0,0,0,1)'
/*   cerrar */														}),
/*   cerrar */							})
/*   cerrar */						}),
/*   cerrar */					}
/*   cerrar */				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
/*   cerrar */							}
/*   cerrar */						}
/*   cerrar */					}
/*   cerrar */				}
				return null;
/*   cerrar */			}

/*@@ inicio-fin de copia */	},
		{
			group: 'Casa-Bricolaje',
			title: 'Buzones particulares',
			query: '(nwr["amenity"="letter_box"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Mayoristas',
			query: '(nwr["shop"="wholesale"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Alimentación deportiva',
			query: '(nwr["shop"="health_food"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Stops <b><a href="https://yopaseopor.github.io/traffic_signs_map">Ampliar</a></b>',
			query: '(nwr["highway"="stop"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Colmados-Ultramarinos',
			query: '(nwr["shop"="convenience"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'A granel',
			query: '(nwr["bulk_purchase"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Aliprox',
			query: '(nwr["name"="Aliprox"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/aliprox.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/aliprox.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Almacén',
			query: '(nwr["shop"="grocery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Ahorramás',
			query: '(nwr["brand:wikidata"="Q58221883"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ahorramas.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ahorramas.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Alcampo',
			query: '(nwr["brand:wikidata"="Q2832081"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.alcampo.es/media/images/h2d/h66/9470439555102.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.alcampo.es/media/images/h2d/h66/9470439555102.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'ALDI',
			query: '(nwr["brand:wikidata"="Q41171373"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/aldi.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/aldi.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Alimerka',
			query: '(nwr["brand:wikidata"="Q16482738"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/220px-Alimerka_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alimerka_logo.svg/220px-Alimerka_logo.svg.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Alsara',
			query: '(nwr["name"="Alsara"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/alsara.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/alsara.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Alteza',
			query: '(nwr["name"="Alteza"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/alteza.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/alteza.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Bip Bip',
			query: '(nwr["name"="Bip Bip"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/bipbip.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/bipbip.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'bonÀrea',
			query: '(nwr["brand:wikidata"="Q11924743"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.bonarea-agrupa.com/Content/img/logo-caixa-guissona-agrupa.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.bonarea-agrupa.com/Content/img/logo-caixa-guissona-agrupa.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'BonPreu/Esclat',
			query: '(nwr["brand:wikidata"="Q11924747"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://pbs.twimg.com/profile_images/1103993935419068416/f8FkyYcp_400x400.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://pbs.twimg.com/profile_images/1103993935419068416/f8FkyYcp_400x400.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Caprabo',
			query: '(nwr["brand:wikidata"="Q1980781"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Caprabo_logo.svg/220px-Caprabo_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Caprabo_logo.svg/220px-Caprabo_logo.svg.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Carrefour',
			query: '(nwr["brand:wikidata"="Q217599"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/carrefour.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/carrefour.jpg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Cash Fresh',
			query: '(nwr["brand:wikidata"="Q111805558"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/cashfresh.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/cashfresh.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Claudio',
			query: '(nwr["name"="Claudio"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/claudio.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/claudio.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Coaliment',
			query: '(nwr["name"="Coaliment"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/coaliment.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/coaliment.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Condis',
			query: '(nwr["brand:wikidata"="Q57417581"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.condis.es/images/header/logo.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.condis.es/images/header/logo.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Consum',
			query: '(nwr["brand:wikidata"="Q8350308"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Consum_Cooperativa.jpg/220px-Consum_Cooperativa.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Consum_Cooperativa.jpg/220px-Consum_Cooperativa.jpg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Covirán',
			query: '(nwr["brand:wikidata"="Q61070539"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.coviran.es/SiteAssets/logo.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.coviran.es/SiteAssets/logo.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Dani',
			query: '(nwr["name"="Dani"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dani.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dani.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Dia',
			query: '(nwr["brand:wikidata"="Q925132"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dia.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dia.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'La Plaza de Dia',
			query: '(nwr["brand:wikidata"="Q58904673"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dia.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dia.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Dialprix',
			query: '(nwr["name"="Dialprix"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dialprix.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dialprix.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'E.Leclerc',
			query: '(nwr["brand:wikidata"="Q1273376"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/eleclerc.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/eleclerc.jpg',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Eroski',
			query: '(nwr["brand:wikidata"="Q1361349"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Eroski_logo.svg/220px-Eroski_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Eroski_logo.svg/220px-Eroski_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Familia',
			query: '(nwr["name"="Familia"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/familia.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/familia.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Hiber',
			query: '(nwr["name"="Hiber"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/hiber.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/hiber.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Hiperber',
			query: '(nwr["brand:wikidata"="Q5898257"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/hiperber.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/hiperber.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Hipercor',
			query: '(nwr["brand:wikidata"="Q191574"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hipercor_logo.svg/220px-Hipercor_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hipercor_logo.svg/220px-Hipercor_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'HiperDino',
			query: '(nwr["brand:wikidata"="Q5278478"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/hiperdino.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/hiperdino.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'La despensa',
			query: '(nwr["name"="La despensa"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ladespensa.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ladespensa.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Lidl',
			query: '(nwr["brand:wikidata"="Q151954"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/220px-Lidl-Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/220px-Lidl-Logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'MAS',
			query: '(nwr["name"="MAS"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/mas.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/MAS.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Mas y mas',
			query: '(nwr["brand:wikidata"="Q11936008"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJx5tO0SEYUL1XhsSE9UzA_FQf_I4ciFvY1mUQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=10ca34f003b937b33427fdd6d01dbe7b70d542fc514f560f34cc26474f7b3673&ipo=images',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJx5tO0SEYUL1XhsSE9UzA_FQf_I4ciFvY1mUQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=10ca34f003b937b33427fdd6d01dbe7b70d542fc514f560f34cc26474f7b3673&ipo=images',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'minymas',
			query: '(nwr["name"="minymas"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/minymas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/minymas.jpg',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Mercadona',
			query: '(nwr["brand:wikidata"="Q377705"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_Mercadona_%28color-300-alpha%29.png/640px-Logo_Mercadona_%28color-300-alpha%29.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_Mercadona_%28color-300-alpha%29.png/640px-Logo_Mercadona_%28color-300-alpha%29.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Proxim',
			query: '(nwr["name"="Proxim"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/proxim.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/proxim.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Suma',
			query: '(nwr["brand:wikidata"="Q58012362"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/suma.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/suma.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Super Cor',
			query: '(nwr["brand:wikidata"="Q6135841"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/supercor.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/supercor.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'SuperDino',
			query: '(nwr["name"="SuperDino"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/superdino.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/superdino.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Sorli Discau',
			query: '(nwr["brand:wikidata"="Q20103935"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.sorli.com/wp-content/uploads/2017/05/logo-sorli.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.sorli.com/wp-content/uploads/2017/05/logo-sorli.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Spar',
			query: '(nwr["brand:wikidata"="Q610492"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spar-logo.svg/220px-Spar-logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spar-logo.svg/220px-Spar-logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Tandy',
			query: '(nwr["name"="Tandy"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/tandy.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/tandy.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Trady`s',
			query: '(nwr["name"~"^Trady"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/tradys.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/tradys.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Udaco',
			query: '(nwr["name"="Udaco"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/udaco.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/udaco.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Unide',
			query: '(nwr["name"="Unide"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/unide.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/unide.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Doctores',
			query: '(nwr["amenity"="doctors"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Hospitales',
			query: '(nwr["amenity"="hospital"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Terapeutas',
			query: '(nwr["office"="therapist"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Farmacias',
			query: '(nwr["amenity"="pharmacy"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Tanatorios',
			query: '(nwr["shop"="funeral_directors"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Cementerios',
			query: '(nwr["amenity"="grave_yard"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Trasteros',
			query: '(nwr["shop"="storage_rental"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Paquetería',
			query: '(nwr["amenity"="post_depot"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Correos',
			query: '(nwr["brand:wikidata"="Q776605"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Correos_2019.svg/220px-Logo_Correos_2019.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Correos_2019.svg/220px-Logo_Correos_2019.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'DHL',
			query: '(nwr["brand:wikidata"="Q489815"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dhl.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dhl.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Fedex',
			query: '(nwr["brand:wikidata"="Q459477"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/fedex.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/fedex.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'MRW',
			query: '(nwr["brand:wikidata"="Q23767821"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/mrw.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/mrw.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Nacex',
			query: '(nwr["name"="Nacex"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/nacex.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/nacex.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'SEUR',
			query: '(nwr["brand:wikidata"="Q9076554"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/seur.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/seur.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'UPS',
			query: '(nwr["brand:wikidata"="Q155026"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ups.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ups.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Consigna recogida',
			query: '(nwr["amenity"="parcel_locker"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Amazon Locker',
			query: '(nwr["brand:wikidata"="Q16974764"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/amazon_locker.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/amazon_locker.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Logística',
			query: '(nwr["office"="logistics"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Muelle de carga',
			query: '(nwr["amenity"="loading_dock"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Transportistas',
			query: '(nwr["office"="courier"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Recogida internet',
			query: '(nwr["shop"="outpost"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Organizadores de eventos',
			query: '(nwr["amenity"="events_venue"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Centro cívico',
			query: '(nwr["amenity"="community_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Juguetería',
			query: '(nwr["shop"="toys"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Juguettos',
			query: '(nwr["brand:wikidata"="Q105339592"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/juguettos.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/juguettos.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Toys `r` Us ',
			query: '(nwr["brand:wikidata"="Q696334"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/toys_r_us.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/toys_r_us.svg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Tren en miniatura',
			query: '(nwr["railway"="miniature"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Caridad',
			query: '(nwr["shop"="charity"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Boutique',
			query: '(nwr["shop"="boutique"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Anticuarios',
			query: '(nwr["shop"="antiques"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Terminal de pago',
			query: '(nwr["amenity"="payment_terminal"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Envío dinero vía móvil',
			query: '(nwr["amenity"="mobile_money_agent"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Casa de cambio',
			query: '(nwr["amenity"="bureau_de_change"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Consultorías',
			query: '(nwr["office"="consulting"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Bancos',
			query: '(nwr["amenity"="bank"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Cajeros automáticos',
			query: '(nwr["amenity"="atm"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Banca March',
			query: '(nwr["brand:wikidata"="Q578252"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/banca_march.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/banca_march.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Banca Pueyo',
			query: '(nwr["brand:wikidata"="Q29895390"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/banca_pueyo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/banca_pueyo.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'BBVA',
			query: '(nwr["brand:wikidata"="Q806189"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/220px-BBVA_2019.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/220px-BBVA_2019.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Caixabank',
			query: '(nwr["brand:wikidata"="Q847225"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_CaixaBank.svg/220px-Logo_CaixaBank.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_CaixaBank.svg/220px-Logo_CaixaBank.svg.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Caixa d`Enginyers',
			query: '(nwr["brand:wikidata"="Q8254967"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.caixaenginyers.com/documents/20143/693294/Logo_Caja_Ingenieros_55a_CA.jpg/a6940b19-a18a-4686-4c81-2308c211f1a1?t=1665070571476',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.caixaenginyers.com/documents/20143/693294/Logo_Caja_Ingenieros_55a_CA.jpg/a6940b19-a18a-4686-4c81-2308c211f1a1?t=1665070571476',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Caja Rural',
			query: '(nwr["brand:wikidata"="Q3649971"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Caja_Rural.png/220px-Caja_Rural.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Caja_Rural.png/220px-Caja_Rural.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Deustche Bank',
			query: '(nwr["brand:wikidata"="Q66048"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/deutsche_bank.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/deutsche_bank.png',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Ibercaja',
			query: '(nwr["brand:wikidata"="Q5907815"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ibercajawordmark.svg/220px-Ibercajawordmark.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ibercajawordmark.svg/220px-Ibercajawordmark.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Kutxabank',
			query: '(nwr["brand:wikidata"="Q5139377"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kutxabank.svg/220px-Kutxabank.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kutxabank.svg/220px-Kutxabank.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Liberbank',
			query: '(nwr["brand:wikidata"="Q2891018"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Liberbank_logo.svg/220px-Liberbank_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Liberbank_logo.svg/220px-Liberbank_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Santander',
			query: '(nwr["brand:wikidata"="Q6496310"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/220px-Banco_Santander_Logotipo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/220px-Banco_Santander_Logotipo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Triodos Bank',
			query: '(nwr["brand:wikidata"="Q688452"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/triodos_bank.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/triodos_bank.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Unicaja',
			query: '(nwr["brand:wikidata"="Q2543704"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Unicaja_logo.svg/220px-Unicaja_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Unicaja_logo.svg/220px-Unicaja_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Agentes financieros',
			query: '(nwr["office"="financial_advisor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Contables',
			query: '(nwr["office"="accountant"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Financieras',
			query: '(nwr["office"="financial"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Gestorías',
			query: '(nwr["office"="tax_advisor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Empeños',
			query: '(nwr["shop"="pawnbroker"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Prestamistas',
			query: '(nwr["shop"="money_lender"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Coworking',
			query: '(nwr["office"="coworking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Empresas',
			query: '(nwr["office"="company"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Economía',
			title: 'Seguros',
			query: '(nwr["office"="insurance"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Abogados',
			query: '(nwr["office"="lawyer"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Notarías',
			query: '(nwr["office"="notary"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Trabajo',
			query: '(nwr["office"="employment_agency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Escuela de música',
			query: '(nwr["amenity"="music_school"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Universidades',
			query: '(nwr["amenity"="university"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Facultades',
			query: '(nwr["amenity"="college"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Oficinas',
			query: '(nwr["office"="educational_institution"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Ludotecas',
			query: '(nwr["amenity"="childcare"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Guarderías',
			query: '(nwr["amenity"="kindergarten"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Escuelas/Institutos',
			query: '(nwr["amenity"="school"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Investigación',
			query: '(nwr["office"="research"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Centro comercial',
			query: '(nwr["shop"="mall"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Bazar (multiprecio)',
			query: '(nwr["shop"="variety_store"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'ALE-HOP',
			query: '(nwr["brand:wikidata"="Q98456840"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/alehop.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/alehop.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Flying Tiger',
			query: '(nwr["brand:wikidata"="Q2786319"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fliyingtiger.svg/220px-Fliyingtiger.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fliyingtiger.svg/220px-Fliyingtiger.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'TEDi',
			query: '(nwr["brand:wikidata"="Q1364603"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/TEDi-Logo.svg/220px-TEDi-Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/TEDi-Logo.svg/220px-TEDi-Logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Bazar',
			query: '(nwr["shop"="houseware"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Ropa (general)',
			query: '(nwr["shop"="clothes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Bershka',
			query: '(nwr["brand:wikidata"="Q827258"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/220px-Bershka_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/220px-Bershka_logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'C&A',
			query: '(nwr["brand:wikidata"="Q701338"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/C%26A_logo.svg/220px-C%26A_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/C%26A_logo.svg/220px-C%26A_logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Celio',
			query: '(nwr["brand:wikidata"="Q2672003"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/celio.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/celio.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Cortefiel',
			query: '(nwr["brand:wikidata"="Q117351825"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/cortefiel.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/cortefiel.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Desigual',
			query: '(nwr["brand:wikidata"="Q83750"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/desigual.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/desigual.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'El Ganso',
			query: '(nwr["brand:wikidata"="Q51955203"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/el_ganso.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/el_ganso.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Etam',
			query: '(nwr["brand:wikidata"="Q3059202"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/etam.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/etam.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Guess',
			query: '(nwr["brand:wikidata"="Q2470307"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/guess.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/guess.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Hollister',
			query: '(nwr["brand:wikidata"="Q1257477"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/hollister.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/hollister.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'H&M',
			query: '(nwr["brand:wikidata"="Q188326"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Ikks',
			query: '(nwr["brand:wikidata"="Q3146711"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ikks.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ikks.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Jack & Jones',
			query: '(nwr["brand:wikidata"="Q6077665"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/jack_jones.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/jack_jones.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Kiabi',
			query: '(nwr["brand:wikidata"="Q3196299"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kiabi_logo.svg/220px-Kiabi_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kiabi_logo.svg/220px-Kiabi_logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Köroshi',
			query: '(nwr["brand:wikidata"="Q99775834"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/koroshi.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/koroshi.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Lefties',
			query: '(nwr["brand:wikidata"="Q12391713"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/lefties.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/lefties.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Levi`s',
			query: '(nwr["brand:wikidata"="Q127962"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/levis.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/levis.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Mango',
			query: '(nwr["brand:wikidata"="Q136503"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mango-logo.jpg/220px-Mango-logo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mango-logo.jpg/220px-Mango-logo.jpg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Massimo Dutti',
			query: '(nwr["brand:wikidata"="Q788231"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/massimodutti.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/massimodutti.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Mayoral',
			query: '(nwr["brand:wikidata"="Q691029"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/mayoral.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/mayoral.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Oysho',
			query: '(nwr["brand:wikidata"="Q3327046"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/oysho.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/oysho.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Pepco',
			query: '(nwr["brand:wikidata"="Q11815580"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pepco.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pepco.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Pepe Jeans',
			query: '(nwr["brand:wikidata"="Q426992"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pepe_jeans.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pepe_jeans.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Pimkie',
			query: '(nwr["brand:wikidata"="Q1758066"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pimkie.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pimkie.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Primark',
			query: '(nwr["brand:wikidata"="Q137023"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/primark.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/primark.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Pull & Bear',
			query: '(nwr["brand:wikidata"="Q691029"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pull_and_bear.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pull_and_bear.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Sergent Major',
			query: '(nwr["brand:wikidata"="Q62521738"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sergent_major.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sergent_major.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Sfera',
			query: '(nwr["brand:wikidata"="Q110065666"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sfera.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sfera.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Springfield',
			query: '(nwr["brand:wikidata"="Q958209"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/springfield.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/springfield.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Stradivarius',
			query: '(nwr["brand:wikidata"="Q3322945"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Stradivarius_logo.svg/220px-Stradivarius_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Stradivarius_logo.svg/220px-Stradivarius_logo.svg.png',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Uniqlo',
			query: '(nwr["brand:wikidata"="Q26070"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/uniqlo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/uniqlo.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'United Colors of Benetton',
			query: '(nwr["brand:wikidata"="Q817139"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/united_colors.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/united_colors.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Zara',
			query: '(nwr["brand:wikidata"="Q147662"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/220px-Zara_Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/220px-Zara_Logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Zeeman',
			query: '(nwr["brand:wikidata"="Q184399"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.zeeman.com/media/wysiwyg/Pers/Zeemanlogo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.zeeman.com/media/wysiwyg/Pers/Zeemanlogo.jpg',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Calzedonia',
			query: '(nwr["brand:wikidata"="Q1027874"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/calzedonia.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/calzedonia.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Intimissimi',
			query: '(nwr["brand:wikidata"="Q305404"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/intimissimi.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/intimissimi.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Tezenis',
			query: '(nwr["brand:wikidata"="Q28056374"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/tezenis.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/tezenis.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Women`s secret',
			query: '(nwr["brand:wikidata"="Q16648226"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/womens_secret.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/womens_secret.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Yamamay',
			query: '(nwr["brand:wikidata"="Q2599214"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/yamamay.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/yamamay.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Tintorería',
			query: '(nwr["shop"="dry_cleaning"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Bolsos',
			query: '(nwr["shop"="bag"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Estudio de grabación',
			query: '(nwr["amenity"="studio"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Fotos',
			query: '(nwr["shop"="photos"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Caridad',
			query: '(nwr["office"="charity"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Congelados',
			query: '(nwr["shop"="frozen_food"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'La Sirena',
			query: '(nwr["brand:wikidata"="Q21034458"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://web-cdne-lasirena-prod.azureedge.net/themes/lasirena/img/logo-header-la-sirena.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://web-cdne-lasirena-prod.azureedge.net/themes/lasirena/img/logo-header-la-sirena.svg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Herbolarios',
			query: '(nwr["shop"="herbalist"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Suplementos alimenticios',
			query: '(nwr["shop"="nutrition_supplements"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Pastelería',
			query: '(nwr["shop"="pastry"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Gourmet',
			query: '(nwr["shop"="deli"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Bebidas',
			query: '(nwr["shop"="beverages"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Confitería',
			query: '(nwr["shop"="confectionery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Peluquería',
			query: '(nwr["shop"="hairdresser"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Jean Louis David',
			query: '(nwr["brand:wikidata"="Q64445174"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/jean_louis_david.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/jean_louis_david.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Marco Aldany',
			query: '(nwr["brand:wikidata"="Q112095114"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/marco_aldany.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/marco_aldany.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Tatuajes',
			query: '(nwr["shop"="tattoo"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Cosmética',
			query: '(nwr["shop"="cosmetics"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Perfumerías',
			query: '(nwr["shop"="perfumery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Equivalenza',
			query: '(nwr["brand:wikidata"="Q104649798"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/equivalenza.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/equivalenza.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'KIKO Milano',
			query: '(nwr["brand:wikidata"="Q3812045"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/kiko_milano.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/kiko_milano.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Primor',
			query: '(nwr["brand:wikidata"="Q101113141"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/primor.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/primor.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Rituals',
			query: '(nwr["brand:wikidata"="Q62874140"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/rituals.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/rituals.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Sephora',
			query: '(nwr["brand:wikidata"="Q2408041"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sephora.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sephora.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'The Body Shop',
			query: '(nwr["brand:wikidata"="Q837851"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/thebodyshop.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/thebodyshop.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Yves Rocher',
			query: '(nwr["brand:wikidata"="Q28496595"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/yves_rocher.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/yves_rocher.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Joyería',
			query: '(nwr["shop"="jewelry"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Bijou Brigitte',
			query: '(nwr["brand:wikidata"="Q599545"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/bijou_brigitte.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/bijou_brigitte.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Pandora',
			query: '(nwr["brand:wikidata"="Q2241604"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pandora.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pandora.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Parfois',
			query: '(nwr["brand:wikidata"="Q7136948"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/parfois.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/parfois.jpg',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Swarovski',
			query: '(nwr["brand:wikidata"="Q611115"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/swarovski.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/swarovski.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Tous',
			query: '(nwr["brand:wikidata"="Q3815128"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Relojería',
			query: '(nwr["shop"="watches"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Inspección Técnica Vehículos',
			query: '(nwr["amenity"="vehicle_inspection"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Autoescuelas',
			query: '(nwr["amenity"="driving_school"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Contenedor grava',
			query: '(nwr["amenity"="grit_bin"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Terminales de ferris',
			query: '(nwr["amenity"="ferry_terminal"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Paradas de taxi',
			query: '(nwr["amenity"="taxi"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Estación de bus',
			query: '(nwr["amenity"="bus_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Parada de bus',
			query: '(nwr["highway"="bus_stop"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Andén',
			query: '(nwr["highway"="platform"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Ceda el paso <b><a href="https://yopaseopor.github.io/traffic_signs_map">Ampliar</a></b>',
			query: '(nwr["highway"="give_way"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Semáforos <b><a href="https://yopaseopor.github.io/traffic_signs_map">Ampliar</a></b>',
			query: '(nwr["highway"="traffic_signals"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Pasos peatones <b><a href="https://yopaseopor.github.io/traffic_signs_map">Ampliar</a></b>',
			query: '(nwr["highway"="crossing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Espejo',
			query: '(nwr["highway"="traffic_mirror"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Compartir coche',
			query: '(nwr["amenity"="car_sharing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Alquiler coches',
			query: '(nwr["amenity"="car_rental"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Alquiler bicis',
			query: '(nwr["amenity"="bicycle_rental"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Aire comprimido',
			query: '(nwr["amenity"="compressed_air"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Reparación bicis',
			query: '(nwr["amenity"="bicycle_repair_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Reparaciones (coche)',
			query: '(nwr["shop"="car_repair"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Feu Vert',
			query: '(nwr["brand:wikidata"="Q3070922"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/feu_vert.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/feu_vert.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Norauto',
			query: '(nwr["brand:wikidata"="Q3317698"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Logo_actuel_de_Norauto.png/220px-Logo_actuel_de_Norauto.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Logo_actuel_de_Norauto.png/220px-Logo_actuel_de_Norauto.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Gasolineras',
			query: '(nwr["amenity"="fuel"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'BP',
			query: '(nwr["brand:wikidata"="Q152057"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bp_textlogo.svg/220px-Bp_textlogo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bp_textlogo.svg/220px-Bp_textlogo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Cepsa',
			query: '(nwr["brand:wikidata"="Q608819"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cepsa.svg/220px-Cepsa.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cepsa.svg/220px-Cepsa.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'DISA',
			query: '(nwr["brand:wikidata"="Q5797102"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.disagrupo.es/assets/img/logodisa2014.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.disagrupo.es/assets/img/logodisa2014.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Galp',
			query: '(nwr["brand:wikidata"="Q1492739"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Galp.png/220px-Galp.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Galp.png/220px-Galp.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Repsol',
			query: '(nwr["brand:wikidata"="Q174747"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Repsol_logo.svg/220px-Repsol_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Repsol_logo.svg/220px-Repsol_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Reparaciones (motos)',
			query: '(nwr["shop"="motorcycle_repair"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Motos',
			query: '(nwr["shop"="motorcycle"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Panadería',
			query: '(nwr["shop"="bakery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Café',
			query: '(nwr["shop"="coffee"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Nespresso',
			query: '(nwr["brand:wikidata"="Q301301"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/nespresso.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/nespresso.jpg',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Té',
			query: '(nwr["shop"="tea"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Tea Shop',
			query: '(nwr["brand:wikidata"="Q111730818"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/tea_shop.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/tea_shop.jpg',
							scale:0.30
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Concesionario',
			query: '(nwr["shop"="car"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Citroën',
			query: '(nwr["brand:wikidata"="Q6746"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/logos/citroen.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/logos/citroen.png',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Kia',
			query: '(nwr["brand:wikidata"="Q35349"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/kia.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/kia.png',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Salón de belleza',
			query: '(nwr["shop"="beauty"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Bronceado',
			query: '(nwr["beauty"="tanning"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Depilación',
			query: '(nwr["beauty"="hair_removal"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Uñas',
			query: '(nwr["beauty"="nails"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Kiosko',
			query: '(nwr["shop"="kiosk"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Videojuegos',
			query: '(nwr["shop"="video_games"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Game',
			query: '(nwr["brand:wikidata"="Q5519813"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/game.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/game.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Baños públicos',
			query: '(nwr["amenity"="public_bath"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Piscina',
			query: '(nwr["leisure"="swimming_pool"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pesca',
			query: '(nwr["shop"="fishing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Estanco',
			query: '(nwr["shop"="tobacco"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cigarrillo electrónico',
			query: '(nwr["shop"="e-cigarette"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Club canábico',
			query: '(nwr["shop"="cannabis"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Arte',
			query: '(nwr["shop"="art"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Vacía',
			query: '(nwr["shop"="vacant"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Puericultura',
			query: '(nwr["shop"="baby_goods"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Instrumentos musicales',
			query: '(nwr["shop"="musical_instrument"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Móviles',
			query: '(nwr["shop"="mobile_phone"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Sedes medios',
			query: '(nwr["office"="newspaper"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Oficinas IT',
			query: '(nwr["office"="it"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Oficinas telecomunicaciones',
			query: '(nwr["office"="telecommunication"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Tienda telecomunicaciones',
			query: '(nwr["shop"="telecommunication"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Informática',
			query: '(nwr["shop"="computer"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Carnicería',
			query: '(nwr["shop"="butcher"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Jamón',
			query: '(nwr["shop"="ham"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Quesería',
			query: '(nwr["shop"="cheese"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Chocolate',
			query: '(nwr["shop"="chocolate"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Frutería-Verdulería',
			query: '(nwr["shop"="greengrocer"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Ametller Origen',
			query: '(nwr["name"="Ametller Origen"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ametller_origen.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ametller_origen.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Veritas',
			query: '(nwr["name"="Veritas"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/veritas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/veritas.jpg',
							scale:0.02
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Ferretería',
			query: '(nwr["shop"="hardware"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Cerrajería',
			query: '(nwr["shop"="locksmith"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Mister Minit',
			query: '(nwr["brand:wikidata"="Q1939269"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/mister_minit.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/mister_minit.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Carpintería/Lampistería',
			query: '(nwr["shop"="craft"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Arquitectos',
			query: '(nwr["office"="architect"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Constructores',
			query: '(nwr["office"="construction_company"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Mudanzas',
			query: '(nwr["office"="moving_company"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Puertas',
			query: '(nwr["shop"="doors"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Inmobiliaria',
			query: '(nwr["office"="estate_agent"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Inmobiliaria (oficina)',
			query: '(nwr["office"="property_management"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Azulejos',
			query: '(nwr["shop"="tiles"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Suelos',
			query: '(nwr["shop"="flooring"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Buzón de libros',
			query: '(nwr["amenity"="public_bookcase"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Biblioteca <b><a href="https://yopaseopor.github.io/osmlibrarymap">Ampliar</a></b>',
			query: '(nwr["amenity"="library"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Marcos',
			query: '(nwr["shop"="frame"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Electricidad',
			query: '(nwr["shop"="electrical"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Electrónica',
			query: '(nwr["shop"="radiotechnics"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Lámparas',
			query: '(nwr["shop"="lighting"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Oficinas luz',
			query: '(nwr["office"="energy_supplier"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Oficinas agua',
			query: '(nwr["office"="water_utility"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Gas',
			query: '(nwr["shop"="gas"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Hazlotúmismo',
			query: '(nwr["shop"="doityourself"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Bauhaus',
			query: '(nwr["brand:wikidata"="Q672043"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/bauhaus.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/bauhaus.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Leroy Merlin',
			query: '(nwr["brand:wikidata"="Q889624"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Leroy_Merlin.svg/220px-Leroy_Merlin.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Leroy_Merlin.svg/220px-Leroy_Merlin.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Pinturas',
			query: '(nwr["shop"="paint"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Decoración',
			query: '(nwr["shop"="interior_decoration"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Alfombras',
			query: '(nwr["shop"="carpet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Cocinas',
			query: '(nwr["shop"="kitchen"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Baño',
			query: '(nwr["shop"="bathroom_furnishing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Camas',
			query: '(nwr["shop"="bed"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Muebles',
			query: '(nwr["shop"="furniture"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Conforama',
			query: '(nwr["brand:wikidata"="Q541134"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Conforama_logo.svg/220px-Conforama_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Conforama_logo.svg/220px-Conforama_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'IKEA',
			query: '(nwr["brand:wikidata"="Q54078"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ikea.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ikea.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Casa-Bricolaje',
			title: 'Zara Home',
			query: '(nwr["brand:wikidata"="Q3114054"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/zarahome.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/zarahome.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Lavado',
			query: '(nwr["amenity"="car_wash"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Entradas al aparcamiento <b><a href="https://osm-es.github.io/osmparkingmap">Ampliar</a></b>',
			query: '(nwr["amenity"="parking_entrance"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Aparcamientos <b><a href="https://osm-es.github.io/osmparkingmap">Ampliar</a></b>',
			query: '(nwr["amenity"="parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Ascensores',
			query: '(nwr["highway"="elevator"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Farolas <b><a href="https://yopaseopor.github.io/osmlitmap">Ampliar</a></b>',
			query: '(nwr["highway"="street_lamp"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Teléfono público',
			query: '(nwr["amenity"="telephone"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Estacionamiento',
			query: '(nwr["amenity"="parking_space"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Fuente',
			query: '(nwr["amenity"="drinking_water"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Máquina expendedora',
			query: '(nwr["amenity"="vending_machine"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Puntos kilométricos',
			query: '(nwr["highway"="milestone"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Teléfonos emergencia',
			query: '(nwr["emergency"="phone"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Cargadores',
			query: '(nwr["amenity"="charging_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
/*@@ fin-inicio de copia */			},	
		{
			group: 'Movilidad',
			title: 'EDP',
			query: '(nwr["brand:wikidata"="Q1341222"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/edp.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/edp.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Repuestos',
			query: '(nwr["shop"="car_parts"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Neumáticos',
			query: '(nwr["shop"="tyres"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Licorería',
			query: '(nwr["shop"="alcohol"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Vino',
			query: '(nwr["shop"="wine"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Agua',
			query: '(nwr["shop"="water"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Lechería',
			query: '(nwr["shop"="dairy"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Alimentación',
			title: 'Pescadería',
			query: '(nwr["shop"="seafood"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Audio',
			query: '(nwr["shop"="hifi"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Videoclub',
			query: '(nwr["shop"="video"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Pequeño electrodoméstico',
			query: '(nwr["shop"="electronics"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'MediaMarkt',
			query: '(nwr["brand:wikidata"="Q2381223"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Media_Markt_logo.svg/220px-Media_Markt_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Media_Markt_logo.svg/220px-Media_Markt_logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Huawei',
			query: '(nwr["brand:wikidata"="Q160120"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/huawei.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/huawei.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Movistar',
			query: '(nwr["brand:wikidata"="Q967735"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/movistar.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/movistar.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Orange',
			query: '(nwr["brand:wikidata"="Q3359411"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/orange.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/orange.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'The Phone House',
			query: '(nwr["brand:wikidata"="Q118046"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/the_phone_house.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/the_phone_house.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Vodafone',
			query: '(nwr["brand:wikidata"="Q7939295"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/vodafone.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/vodafone.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Yoigo',
			query: '(nwr["brand:wikidata"="Q2630989"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/yoigo.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/yoigo.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Gran electrodoméstico',
			query: '(nwr["shop"="appliance"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Vertedero',
			query: '(nwr["amenity"="waste_dump_site"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Veterinarios',
			query: '(nwr["amenity"="veterinary"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Floristería',
			query: '(nwr["shop"="florist"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Forestal (oficina)',
			query: '(nwr["office"="forestry"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Peletería',
			query: '(nwr["shop"="leather"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Zapatería',
			query: '(nwr["shop"="shoes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'AW Lab',
			query: '(nwr["brand:wikidata"="Q116774749"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/aw_lab.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/aw_lab.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Clarks',
			query: '(nwr["brand:wikidata"="Q1095857"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/clarks.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/clarks.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Deichmann',
			query: '(nwr["brand:wikidata"="Q664543"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/deichmann.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/deichmann.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Marypaz',
			query: '(nwr["brand:wikidata"="Q98497264"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/marypaz.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/marypaz.svg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Sketchers',
			query: '(nwr["brand:wikidata"="Q2945643"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sketchers.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sketchers.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Vans',
			query: '(nwr["brand:wikidata"="Q1135366"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/vans.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/vans.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Zapatería (arreglo)',
			query: '(nwr["shop"="shoe_repair"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Complementos',
			query: '(nwr["shop"="fashion_accesories"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Claire`s',
			query: '(nwr["brand:wikidata"="Q2974996"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/claires.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/claires.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Cortinas',
			query: '(nwr["shop"="curtain"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Tejidos',
			query: '(nwr["shop"="fabric"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Mercería',
			query: '(nwr["shop"="sewing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Sastrería',
			query: '(nwr["shop"="tailor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Moda-Belleza',
			title: 'Arreglos',
			query: '(nwr["craft"="tailor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Óptica',
			query: '(nwr["shop"="optician"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Alain Afflelou',
			query: '(nwr["brand:wikidata"="Q2829511"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/alain_afflelou.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/alain_afflelou.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'General Óptica',
			query: '(nwr["brand:wikidata"="Q62391672"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/general_optica.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/general_optica.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Multiópticas',
			query: '(nwr["brand:wikidata"="Q62391719"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/multiopticas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/multiopticas.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'SpecSavers',
			query: '(nwr["brand:wikidata"="Q2000610"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/specsavers.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/specsavers.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Oficinas fisio',
			query: '(nwr["office"="physician"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Audición',
			query: '(nwr["shop"="hearing_aids"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Equipamento',
			query: '(nwr["shop"="medical_supply"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Masajes',
			query: '(nwr["shop"="massage"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Museo',
			query: '(nwr["tourism"="museum"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Centro artístico',
			query: '(nwr["amenity"="arts_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Monumento',
			query: '(nwr["tourism"="artwork"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Galería de arte',
			query: '(nwr["tourism"="gallery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque temático',
			query: '(nwr["tourism"="theme_park"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque acuático',
			query: '(nwr["leisure"="water_park"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Zoo',
			query: '(nwr["tourism"="zoo"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Acuario',
			query: '(nwr["tourism"="aquarium"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Mirador',
			query: '(nwr["tourism"="viewpoint"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Información',
			query: '(nwr["tourism"="information"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Bodegas',
			query: '(nwr["tourism"="wine_cellar"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Sauna',
			query: '(nwr["tourism"="sauna"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Hotel',
			query: '(nwr["tourism"="hotel"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Albergue',
			query: '(nwr["tourism"="hostel"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Motel',
			query: '(nwr["tourism"="motel"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Casa de huéspedes',
			query: '(nwr["tourism"="gest_house"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Apartamento rural',
			query: '(nwr["tourism"="chalet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Apartamento',
			query: '(nwr["tourism"="apartment"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Punto de interés',
			query: '(nwr["tourism"="attraction"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque',
			query: '(nwr["leisure"="park"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque pequeño',
			query: '(nwr["landuse"="recreational_ground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque perros',
			query: '(nwr["leisure"="dog_park"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Jardín',
			query: '(nwr["leisure"="garden"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Parque infantil',
			query: '(nwr["leisure"="playground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pícnic',
			query: '(nwr["tourism"="picnic_site"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pícnic (mesa)',
			query: '(nwr["leisure"="picnic_table"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cámping',
			query: '(nwr["tourism"="camp_site"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cámping (parcela)',
			query: '(nwr["tourism"="camp_pitch"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Caravanas',
			query: '(nwr["tourism"="caravan_site"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Fuente decorativa',
			query: '(nwr["amenity"="fountain"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Lavabos',
			query: '(nwr["amenity"="toilets"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Techado',
			query: '(nwr["amenity"="shelter"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Reserva Servicios-Asociaciones',
			query: '(nwr["tourism"="nature_reserve"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Refugio de montaña',
			query: '(nwr["tourism"="alpine_hut"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Refugio',
			query: '(nwr["tourism"="wilderness_hut"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Souvenirs-Regalos',
			query: '(nwr["shop"="gift"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Heladerías',
			query: '(nwr["amenity"="ice_cream"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Tienda helados',
			query: '(nwr["shop"="ice_cream"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Amorino',
			query: '(nwr["brand:wikidata"="Q2843884"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/amorino.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/amorino.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Belros',
			query: '(nwr["brand:wikidata"="Q100089059"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/belros.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/belros.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Llaollao',
			query: '(nwr["brand:wikidata"="Q12163048"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/llaollao.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/llaollao.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Biergarten',
			query: '(nwr["amenity"="biergarten"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Restaurantes',
			query: '(nwr["amenity"="restaurant"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: '100 Montaditos',
			query: '(nwr["brand:wikidata"="Q8355805"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/100montaditos.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/100montaditos.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'BuenasMigas',
			query: '(nwr["brand:wikidata"="Q115258266"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/buenasmigas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/buenasmigas.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Carl`s Jr.',
			query: '(nwr["brand:wikidata"="Q1043486"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/carlsjr.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/carlsjr.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Foster`s Hollywood',
			query: '(nwr["brand:wikidata"="Q5864366"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/fosters_hollywood.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/fosters_hollywood.jpg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Goiko Grill',
			query: '(nwr["name"="Goiko Grill"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/goiko.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/goiko.jpg',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Ginos',
			query: '(nwr["brand:wikidata"="Q98503664"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/ginos.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/ginos.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'La Sureña',
			query: '(nwr["brand:wikidata"="Q5763573"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/lasurena.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/lasurena.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Lizarran',
			query: '(nwr["brand:wikidata"="Q1866620"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/lizarran.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/lizarran.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Mister Noodles',
			query: '(nwr["name"="Mister Noodles"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/mister_noodles.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/mister_noodles.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Sitio para comer',
			query: '(nwr["amenity"="food_court"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cafés',
			query: '(nwr["amenity"="cafe"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Dunkin` Coffee',
			query: '(nwr["brand:wikidata"="Q847743"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/dunkin.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/dunkin.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Granier',
			query: '(nwr["brand:wikidata"="Q102311169"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/granier.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/granier.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Starbucks',
			query: '(nwr["brand:wikidata"="Q37158"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/starbucks.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/starbucks.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Comida rápida',
			query: '(nwr["amenity"="fast_food"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Burger King',
			query: '(nwr["brand:wikidata"="Q177054"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/220px-Burger_King_2020.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/220px-Burger_King_2020.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'McDonald`s',
			query: '(nwr["brand:wikidata"="Q38076"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pans & Company',
			query: '(nwr["brand:wikidata"="Q11697586"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.pansandcompany.com/bundles/pans/images/logo.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.pansandcompany.com/bundles/pans/images/logo.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Rodilla',
			query: '(nwr["brand:wikidata"="Q7356777"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/rodilla.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/rodilla.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'SandwiChez',
			query: '(nwr["name"="SandwiChez"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sandwichez.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sandwichez.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Subway',
			query: '(nwr["brand:wikidata"="Q244457"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/subway.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/subway.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'KFC',
			query: '(nwr["brand:wikidata"="Q524757"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/220px-KFC_Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/220px-KFC_Logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Popeyes',
			query: '(nwr["brand:wikidata"="Q1330910"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/popeyes.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/popeyes.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Taco Bell',
			query: '(nwr["brand:wikidata"="Q752941"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/taco_bell.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/taco_bell.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Tony Roma`s',
			query: '(nwr["brand:wikidata"="Q2213883"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/tony_romas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/tony_romas.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'The Good Burger',
			query: '(nwr["brand:wikidata"="Q20962086"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/thegoodburger.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/thegoodburger.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'UDON',
			query: '(nwr["brand:wikidata"="Q115679798"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/udon.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/udon.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Viena',
			query: '(nwr["brand:wikidata"="Q11954717"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.viena.es/wp-content/themes/viena/images/viena-logo.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.viena.es/wp-content/themes/viena/images/viena-logo.svg',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Vips',
			query: '(nwr["brand:wikidata"="Q66087862"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/vips.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/vips.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pizzería',
			query: '(nwr["cuisine"="pizza"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Domino`s Pizza',
			query: '(nwr["brand:wikidata"="Q839466"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/220px-Dominos_pizza_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/220px-Dominos_pizza_logo.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'La Tagliatella',
			query: '(nwr["brand:wikidata"="Q113426257"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.amrest-franquicias.com/sites/default/files/logo_tagliatella_clean2x.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.amrest-franquicias.com/sites/default/files/logo_tagliatella_clean2x.png',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Papa John`s',
			query: '(nwr["brand:wikidata"="Q2759586"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/papa_johns.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/papa_johns.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Papizza',
			query: '(nwr["name"="Papizza"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/papizza.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/papizza.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pizzeria Carlos',
			query: '(nwr["name"="Pizzeria Carlos"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pizzeria_carlos.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pizzeria_carlos.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pizza Hut',
			query: '(nwr["brand:wikidata"="Q191615"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pizza_hut.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pizza_hut.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pizza Tutto',
			query: '(nwr["brand:wikidata"="Q72115627"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/pizza_tutto.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/pizza_tutto.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Telepizza',
			query: '(nwr["brand:wikidata"="Q2699863"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Logo_telepizza.svg/220px-Logo_telepizza.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Logo_telepizza.svg/220px-Logo_telepizza.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Bares',
			query: '(nwr["amenity"="pub"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pubs',
			query: '(nwr["amenity"="bar"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Discos',
			query: '(nwr["amenity"="nightclub"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Terrazas',
			query: '(nwr["leisure"="outdoor_seating"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Marina',
			query: '(nwr["leisure"="marina"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pesca',
			query: '(nwr["leisure"="fishing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Resort',
			query: '(nwr["leisure"="resort"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Resort (playa)',
			query: '(nwr["leisure"="beach_resort"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Minigolf',
			query: '(nwr["leisure"="miniature_golf"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Pista de hielo',
			query: '(nwr["leisure"="ice_rink"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Boleras',
			query: '(nwr["leisure"="bowling_alley"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Sala de videojuegos',
			query: '(nwr["leisure"="amusement_arcade"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Escaperooms',
			query: '(nwr["leisure"="escape_game"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Aparcamiento para bicis <b><a href="https://osm-es.github.io/osmparkingmap">Ampliar</a></b>',
			query: '(nwr["amenity"="bicycle_parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Movilidad',
			title: 'Aparcamiento para motos <b><a href="https://osm-es.github.io/osmparkingmap">Ampliar</a></b>',
			query: '(nwr["amenity"="motorcycle_parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Guías',
			query: '(nwr["office"="guide"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cines',
			query: '(nwr["amenity"="cinema"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Cinesa',
			query: '(nwr["brand:wikidata"="Q20732115"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/cinesa.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/cinesa.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Kinepolis',
			query: '(nwr["brand:wikidata"="Q1741993"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/kinepolis.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/kinepolis.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Yelmo',
			query: '(nwr["brand:wikidata"="Q21030996"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/yelmo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/yelmo.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Teatros',
			query: '(nwr["amenity"="theatre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Librería',
			query: '(nwr["shop"="books"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Tienda de música',
			query: '(nwr["shop"="music"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Estadios',
			query: '(nwr["leisure"="stadium"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Campos / Pistas',
			query: '(nwr["leisure"="pitch"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Pistas de atletismo',
			query: '(nwr["leisure"="track"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Centro deportivo',
			query: '(nwr["leisure"="sports_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Gimnasio',
			query: '(nwr["leisure"="fitness_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Holmes Place',
			query: '(nwr["brand:wikidata"="Q15815819"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/holmes_place.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/holmes_place.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Fitness exterior',
			query: '(nwr["leisure"="fitness_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Piscinas',
			query: '(nwr["leisure"="swimming_pool"][!"access"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Tienda bicicletas',
			query: '(nwr["shop"="bicycle"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Tienda deportes',
			query: '(nwr["shop"="sports"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Adidas',
			query: '(nwr["brand:wikidata"="Q3895"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/adidas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/adidas.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Decathlon',
			query: '(nwr["brand:wikidata"="Q509349"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/220px-Decathlon_Logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/220px-Decathlon_Logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Decimas',
			query: '(nwr["brand:wikidata"="Q107262020"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/decimas.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/decimas.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Intersport',
			query: '(nwr["brand:wikidata"="Q666888"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/intersport.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/intersport.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'JD sports',
			query: '(nwr["brand:wikidata"="Q6108019"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/jd_sports.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/jd_sports.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Nike',
			query: '(nwr["brand:wikidata"="Q483915"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/nike.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/nike.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Sports Direct',
			query: '(nwr["brand:wikidata"="Q7579661"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sports_direct.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sports_direct.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Sprinter',
			query: '(nwr["brand:wikidata"="Q6133465"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/sprinter.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/sprinter.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Snipes',
			query: '(nwr["brand:wikidata"="Q42306166"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/snipes.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/snipes.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Comercio excursionismo',
			query: '(nwr["shop"="outdoor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Campo de golf',
			query: '(nwr["leisure"="golf_course"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Deportes',
			title: 'Montar a caballo',
			query: '(nwr["leisure"="horse_riding"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Mercados',
			query: '(nwr["amenity"="marketplace"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Grandes almacenes',
			query: '(nwr["shop"="department_store"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'El Corte Inglés',
			query: '(nwr["brand:wikidata"="Q623133"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Logo_Corte_Ingl%C3%A9s.svg/220px-Logo_Corte_Ingl%C3%A9s.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Logo_Corte_Ingl%C3%A9s.svg/220px-Logo_Corte_Ingl%C3%A9s.svg.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Droguería',
			query: '(nwr["shop"="chemist"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Clarel',
			query: '(nwr["brand:wikidata"="Q48784350"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wFnuFi0Cic8%2FVfLfeBFeWtI%2FAAAAAAAACfU%2FdqSS4SunMg4%2Fs1600%2FHdtgoGacv83MwNx56I4G5PLgBzVR0jrX5G_QWRzE3C8.jpg&f=1&nofb=1&ipt=8c5860e5a5bbca8cb1dca6988b1402830eeb6591e09ad9cd819c7297e52c9166&ipo=images',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wFnuFi0Cic8%2FVfLfeBFeWtI%2FAAAAAAAACfU%2FdqSS4SunMg4%2Fs1600%2FHdtgoGacv83MwNx56I4G5PLgBzVR0jrX5G_QWRzE3C8.jpg&f=1&nofb=1&ipt=8c5860e5a5bbca8cb1dca6988b1402830eeb6591e09ad9cd819c7297e52c9166&ipo=images',
							scale:0.05
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comercio',
			title: 'Alquiler',
			query: '(nwr["shop"="rental"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Agencias de viajes',
			query: '(nwr["shop"="travel_agency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Viajes El Corte Inglés',
			query: '(nwr["brand:wikidata"="Q115268048"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/viajes_el_corte_ingles.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/viajes_el_corte_ingles.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Agentes de viajes',
			query: '(nwr["office"="travel_agent"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Reloj',
			query: '(nwr["amenity"="clock"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Papeleras',
			query: '(nwr["amenity"="waste_basket"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Contenedores <b> <a href="https://yopaseopor.github.io/osmrecyclingmap/#map=8/41.69689/1.59647/0"> Ampliar</a></b>',
			query: '(nwr["amenity"="recycling"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Contenedores privados',
			query: '(nwr["amenity"="waste_disposal"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Buzones',
			query: '(nwr["amenity"="post_box"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Área de drenaje',
			query: '(nwr["amenity"="sanitary_dump_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Relleno agua',
			query: '(nwr["amenity"="water_point"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Oficina correos',
			query: '(nwr["amenity"="post_office"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Lavadero',
			query: '(nwr["amenity"="lavoir"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Lavandería',
			query: '(nwr["shop"="laundry"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Bomberos <b><a href="https://yopaseopor.github.io/osmffmap">Ampliar</a></b>',
			query: '(nwr["amenity"="fire_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Policía',
			query: '(nwr["amenity"="police"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Prisión',
			query: '(nwr["amenity"="prison"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Seguridad privada',
			query: '(nwr["office"="security"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Sedes partidos políticos',
			query: '(nwr["office"="political_party"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Sindicatos',
			query: '(nwr["office"="union"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Criadero',
			query: '(nwr["amenity"="animal_breeding"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Abrevadero',
			query: '(nwr["amenity"="watering_place"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Plataforma cazadores',
			query: '(nwr["amenity"="hunting_stand"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Mascotas',
			query: '(nwr["shop"="pet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Higiene mascotas',
			query: '(nwr["shop"="pet_grooming"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Agricultura (granja)',
			query: '(nwr["shop"="farm"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Agricultura',
			query: '(nwr["shop"="agrarian"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Jardinería',
			query: '(nwr["shop"="garden_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Administrativas',
			query: '(nwr["office"="administrative"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Juzgados',
			query: '(nwr["amenity"="court_house"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Edificios públicos',
			query: '(nwr["amenity"="public_building"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Oficinas',
			query: '(nwr["office"="government"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Ayuntamientos',
			query: '(nwr["amenity"="townhall"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Diplomacia',
			query: '(nwr["office"="diplomatic"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Publicidad',
			query: '(nwr["office"="advertising_agency"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Papelería',
			query: '(nwr["shop"="stationery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Abacus',
			query: '(nwr["brand:wikidata"="Q11903664"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Abacus_Cooperativa_logo.svg/220px-Abacus_Cooperativa_logo.svg.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Abacus_Cooperativa_logo.svg/220px-Abacus_Cooperativa_logo.svg.png',
							scale:0.20
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Copistería',
			query: '(nwr["shop"="copyshop"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Servicios-Asociaciones',
			title: 'Imprenta',
			query: '(nwr["shop"="bookmaker"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Casinos',
			query: '(nwr["amenity"="casino"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Duchas',
			query: '(nwr["amenity"="shower"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Barbacoas',
			query: '(nwr["amenity"="bbq"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Armerías',
			query: '(nwr["shop"="weapons"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Exterior',
			title: 'Bancos (sentarse)',
			query: '(nwr["amenity"="bench"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Fundaciones',
			query: '(nwr["office"="foundation"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Asociaciones',
			query: '(nwr["office"="association"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'ONGs',
			query: '(nwr["office"="ngo"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Fiesta',
			query: '(nwr["shop"="party"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Religión',
			query: '(nwr["shop"="Tienda religiosa"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Monasterio',
			query: '(nwr["amenity"="monastery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Templo religioso',
			query: '(nwr["amenity"="place_of_worship"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Religión (oficinas)',
			query: '(nwr["office"="religion"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Sexshop',
			query: '(nwr["shop"="erotic"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Periódicos',
			query: '(nwr["shop"="newsagent"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Loterías',
			query: '(nwr["shop"="lottery"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Codere',
			query: '(nwr["brand:wikidata"="Q2918415"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/codere.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/codere.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'ONCE',
			query: '(nwr["brand:wikidata"="Q1750397"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://www.once.es/logo.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'https://www.once.es/logo.png',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Ocio',
			title: 'Taquillas',
			query: '(nwr["shop"="ticket"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Residencia',
			query: '(nwr["amenity"="nursing_home"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Centros sociales',
			query: '(nwr["amenity"="social_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Servicios sociales',
			query: '(nwr["amenity"="social_facility"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Dentistas',
			query: '(nwr["amenity"="dentist"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Clínicas',
			query: '(nwr["amenity"="clinic"]({{bbox}});node(w););out meta;',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
			}),
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Salud',
			title: 'Asepeyo',
			query: '(nwr["brand:wikidata"="Q11906879"]({{bbox}});node(w););out meta;',
			iconSrc: 'src/img/logos/asepeyo.jpg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: 'src/img/logos/asepeyo.jpg',
							scale:0.10
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comunitat Catalana',
			title: 'Capitania marítima',
			query: '(nwr["office"="harbour_master"]({{bbox}});node(w);nwr["amenity"="harbourmaster"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comunitat Catalana',
			title: 'Ombres-Refugi climàtic <b><a href="https://app.shadowmap.org">(Mapa ombra solar)</a></b>',
			query: '(nwr["shelter_type"="sun_shelter"]({{bbox}});node(w);nwr["amenity"="harbourmaster"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comunitat Catalana',
			title: 'Cuina catalana',
			query: '(nwr["cuisine"="catalan"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Comunidad Española',
			title: 'Lavaderos',
			query: '(nwr["amenity"="lavoir"]({{bbox}});node(w);nwr["historic"="lavoir"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
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
			group: 'Funciones mapa',
			title: 'Nombre',
			query: '(nwr["name"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -1,
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
			group: 'Funciones mapa',
			title: 'Número portal',
			query: '(nwr["addr:housenumber"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^addr:housenumber$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -11,
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
			group: 'Funciones mapa',
			title: 'Referencia',
			query: '(nwr["ref"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^ref$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -21,
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

   group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
   title: 'Test',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^Nom_Local/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Nom_Local': {
      'Citroen': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Citroen_2022.svg/1024px-Citroen_2022.svg.png',
       rotation: 0,
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Nom_Local': {
      'Sn': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       rotation:9.4,
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
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
			group: 'Exterior',
			title: 'ES:R2',
			query: '(nwr[~"^traffic_sign"~"ES:R2"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^traffic_sign/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'traffic_sign:forward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
							rotation: 0,
							scale: 1
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
					})
				})
			},
					'traffic_sign:backward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
							rotation:9.4,
						scale: 1
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
					})
				})
			},
					'traffic_sign': {
						'ES:R2': new ol.style.Style({
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
			group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
			title: 'Industrial|Construcció|Maquinària',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Maquinària': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial_wheel.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Activitats industrials': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Activitats de la construcció': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18 ,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
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
			group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
			title: 'Allotjament',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/hotel.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						"serveis d'allotjament": new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/hotel.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
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
			group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
			title: 'Restauració',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/eat_drink.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Xocolateries / Geladeries / Degustació': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/ice_cream.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Serveis de menjar take away MENJAR RÀPID': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/fast_food.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'serveis de menjar i begudes': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/eat_drink.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Restaurants': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/restaurant.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Bars   / CIBERCAFÈ': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/cafe.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Bars especials amb actuació / Bars musicals / Discoteques /PUB': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/drink.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
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
			group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
			title: 'Ja sense activitat',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/closed.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Locals buits en venda i lloguer': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent_sell.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Locals buits en venda': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/sell.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Sense informació': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Sense informació - Havia tingut activitat (rètol)': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Locals buits en lloguer': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
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

   group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
   title: 'Test Construcció',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^Nom_Local/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Nom_Activitat': {
      'Activitats de la construcció': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
       rotation: 0,
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name
       })
      })
     },
     'Nom_Local': {
      '.*': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       rotation:9.4,
	   scale: 0.10
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
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
			group: 'Comercio',
			title: 'Segunda mano',
			query: '(nwr["shop"="second_hand"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
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
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		}
		

		
	],
	

	

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
		
		
		
		//@@Mapcomplete direcciones
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Direcciones', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fwherethestreetshavenonumber.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/mcquests/master/images/icones_adreces/casa_plena.svg', height: 20, width: 20})));
		
		//Mapcomplete nombres antiguos
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Nombres antiguos', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fturnbacktime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://cdn.pixabay.com/photo/2016/12/20/05/24/store-1919713_960_720.png', height: 20, width: 20})));
		
		//OSM Hydrants
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Hydrants', href: 'https://www.osmhydrant.org/en/#zoom=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmhydrant_logo.png', height: 20, width: 20})));
		
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete hidrantes', href: 'https://mapcomplete.org/hailhydrant.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&language=en&background=osm', target: '_blank'}).html($('<img>').attr({src:'https://mapcomplete.org/assets/themes/hailhydrant/logo.svg', height: 20, width: 20})));
		
		//Mapcomplete cruces
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Pasos peatones', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fcrossingtime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png', height: 20, width: 20})));
		
		//Mapcomplete basura
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Basura y reciclaje', href: 'https://mapcomplete.org/waste.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src:'https://mapcomplete.org/assets/layers/recycling/recycling-14.svg', height: 20, width: 20})));
		
		//Mapcomplete survey_date
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Validation data', href: 'https://pietervdvn.github.io/mc/legacy/0.27.4/theme.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Ftestcheckdate.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/mcquests/master/images/icones/mc_checkdate.svg', height: 20, width: 20})));
		
		//Mapcomplete eat & drink
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Eat & drink', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Featdrink.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmeatdrinkmap/main/src/img/icones/eat_drink.svg', height: 20, width: 20})));
		
				//Mapcomplete dietes
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Dietas', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fdiets.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmeatdrinkmap/main/src/img/icones_web/osmeatdrink_logo.svg', height: 20, width: 20})));
		
				//Mapcomplete parques
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Parques infantiles', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fplayground_types.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://wiki.openstreetmap.org/w/images/3/31/Playground-16.svg', height: 20, width: 20})));
		
		//Mapcomplete cambiadores
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Cambiadores', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fchangingtable.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmbabymap/main/src/img/icones/pelele.svg', height: 20, width: 20})));
		
		//Mapcomplete salas de lactancia
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Alimentación infantil', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fbabyfeeding.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmbabymap/main/src/img/icones/babyfeeding.svg', height: 20, width: 20})));
		
		var edit = $('<div>').html(config.i18n.editWith);
		//@@ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/ID.svg', height: 20, width: 20})));
		//Level0 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://level0.osmz.ru/index.php?center=' + coordinateLL[1] + ',' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/L0_logo.png', height: 20, width: 20})));
		//JOSM, Mercator, Potlach2 (remote control) editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/JOSM Logotype 2019.svg', height: 20, width: 20})));
		//@@RapiD editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://rapideditor.org/edit#background=Bing&datasets=fbRoads,msBuildings&disable_features=boundaries&map=' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/rapid_logo.png', height: 20, width: 20})));
		
		var open = $('<div>').html(config.i18n.openWith);
		//@@OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osm_logo-layer.svg', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeGo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',transit', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/gmaps_logo_layer.png', height: 20, width: 20})));
		//Apple
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Apple Maps', href: 'https://duckduckgo.com/?t=ffab&q=' + coordinateLL[1] + ',' + coordinateLL[0] + '+Show+on+Map&ia=maps&iaxm=maps,' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/applemaps_logo.png', height: 20, width: 20})));
		//Bing
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Bing', href: 'https://www.bing.com/maps?cp=' + coordinateLL[1] + '~' + coordinateLL[0] + '&lvl=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/bing_logo.png', height: 20, width: 20})));
		//Mapillary
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Mapillary', href: 'https://www.mapillary.com/app/?lat=' + coordinateLL[1] + '&lng=' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/mapillary_logo.png', height: 20, width: 20})));
		
		//Karta View
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Karta View', href: 'https://kartaview.org/map/@' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20) + 'z' , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/kartaview_logo.png', height: 20, width: 20})));
		
		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/geofabrik.png', height: 20, width: 20})));
		
		//Notes Review
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes Review', href: 'https://ent8r.github.io/NotesReview/?view=map&map=' + Math.min(view.getZoom(), 20) + '%2F' + coordinateLL[1] + '%2F' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/notesreview_logo.png', height: 20, width: 20})));
		
		//Latest OpenStreetMap Edits per Tile
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/neis-one_logo.png', height: 20, width: 20})));
		
		//OSMose
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'OSMose', href: 'https://osmose.openstreetmap.fr/map/#zoom=' + view.getZoom() + '&lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmose_logo.png', height: 20, width: 20})));
		
		var show = $('<div>').html(config.i18n.showWith);
		//OpenLevelUp
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenLevelUp!', href: 'https://openlevelup.net/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/openlevelup_logo.png', height: 20, width: 20})));
		
		//Waymarkedtrails
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Waymarked trails', href: 'https://hiking.waymarkedtrails.org/#?map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/waymarkedtrails_logo.png', height: 20, width: 20})));
		
		//OpenCampingMap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenCampingMap', href: 'https://opencampingmap.org/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/0/1/fff', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/opencampingmap_logo.svg', height: 20, width: 20})));
		
		//Osmand
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Osmand', href: 'https://osmand.net/map#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmand_logo.png', height: 20, width: 20})));
		
		//Openrouteservice
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenRouteService', href: 'https://maps.openrouteservice.org/#/place/@' + coordinateLL[0] + ',' + coordinateLL[1] + ',' + Math.min(view.getZoom(), 20) , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/ors_logo.svg', height: 20, width: 20})));
		
		//OSM Routing Machine
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Routing Machine', href: 'http://map.project-osrm.org/?z=' + Math.min(view.getZoom(), 20) + '&center=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&hl=en&alt=0&srv=0', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osrm_logo.png', height: 20, width: 20})));
		
		//Graphhopper
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Graphhopper', href: 'https://graphhopper.com/maps/?point=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&locale=en&elevation=true&profile=car&use_miles=false&selected_detail=Elevation&layer=Omniscale', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/graphhopper_logo.png', height: 20, width: 20})));
		
		//Brouter
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Brouter', href: 'http://brouter.de/brouter-web/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/standard', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/brouter_logo.png', height: 20, width: 20})));
		
		//F4 Map 3D
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://demo.f4map.com/#lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&zoom=' + Math.min(view.getZoom(), 20) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/f4map_logo.png', height: 20, width: 20})));
		
		//Streets.gl
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://streets.gl/#' + coordinateLL[1] + ',' + coordinateLL[0] + ',45.00,0.00,535.89', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/sgl_logo.png', height: 20, width: 20})));
			
		//Qwant
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Qwant', href: 'https://www.qwant.com/maps/place/latlon:' + coordinateLL[1] + ':' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/qwantmaps_logo.svg', height: 20, width: 20})));
		
		//Mapy.cz
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Mapy.cz', href: 'https://en.mapy.cz/zakladni?x=' + coordinateLL[0] + '&y=' + coordinateLL[1] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/mapycz_logo.png', height: 20, width: 20})));
		
				//Windy
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Windy', href: 'https://www.windy.com/' + coordinateLL[1] + '/' + coordinateLL[0] + '?rain,' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/windy.png', height: 20, width: 20})));
			
		//OpenStreetBrowser
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenStreetBrowser', href: 'https://www.openstreetbrowser.org/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osb_logo.png', height: 20, width: 20})));
		
				//Tracesmap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Tracesmap', href: 'https://tracesmap.com/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/tracesmap.png', height: 20, width: 20})));
		
		var show2 = $('<div>').html(config.i18n.show2With);
		
		//@@OSM Accessibility Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Accessibility Map', href: 'https://yopaseopor.github.io/osmaccessibilitymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
						//OSM Baby Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Baby Map', href: 'https://yopaseopor.github.io/osmbabymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmbabymap_logo.svg', height: 20, width: 20})));
		
								//OSM Eat & Drink Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Eat & Drink Map', href: 'https://yopaseopor.github.io/osmeatdrinkmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmeatdrink_logo.svg', height: 20, width: 20})));
		
				//OSM FireFighters Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Fire Fighters Map', href: 'https://yopaseopor.github.io/osmffmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmffmap_logo.svg', height: 20, width: 20})));
		
				//OSM Historic Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Historic Map', href: 'https://yopaseopor.github.io/osmhistoricmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmhistoricmap_logo.svg', height: 20, width: 20})));
		
						//OSM Indoor Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Indoor Map', href: 'https://yopaseopor.github.io/osmindoormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmindoormap_logo.svg', height: 20, width: 20})));
				
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Lit Map', href: 'https://yopaseopor.github.io/osmlitmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmlitmap_logo.svg', height: 20, width: 20})));
		
				//OSM Limits Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Limits Map', href: 'https://yopaseopor.github.io/osmlimitsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmlimitsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Library Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Library Map', href: 'https://yopaseopor.github.io/osmlibrarymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmlibrarymap_logo.svg', height: 20, width: 20})));
		
						//OSM Pets Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Pets Map', href: 'https://yopaseopor.github.io/osmpetsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmpetsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Sports Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Sports Map', href: 'https://yopaseopor.github.io/osmsportsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmsportsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Parking Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Parking Map', href: 'https://osm-es.github.io/osmparkingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmparkingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Recycling Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Recycling Map', href: 'https://yopaseopor.github.io/osmrecyclingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmrecyclingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Validator Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Validator Map', href: 'https://yopaseopor.github.io/osmvalidatormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmvalidatormap_logo.svg', height: 20, width: 20})));
		
				//OSM POIs Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM POIs Map', href: 'https://yopaseopor.github.io/osmpoismap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/osmpoismap_logo.svg', height: 20, width: 20})));
		
					return $.merge($.merge($.merge($.merge($.merge(open, show), show2), tool), complete), edit);
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
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), '=', value, '<br/>']);
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
