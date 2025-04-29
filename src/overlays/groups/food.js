import { getTranslation } from '../../i18n/index.js';

export function foodOverlays() {
    return [
        {
            group: getTranslation('food'),
            title: getTranslation('mcdonalds'),
            query: '[out:json][timeout:25];(nwr["amenity"="fast_food"]["brand"="McDonald\'s"]({{bbox}}););out body;>;out skel qt;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var key_regex = /^name$/;
                var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
                var name = feature.get(name_key) || '';
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
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
                    }),
                    fill: fill,
                    stroke: stroke
                });
                return style;
            }
        },
        {
            group: getTranslation('food'),
            title: getTranslation('starbucks'),
            query: '[out:json][timeout:25];(nwr["amenity"="cafe"]["brand"="Starbucks"]({{bbox}}););out body;>;out skel qt;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var key_regex = /^name$/;
                var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
                var name = feature.get(name_key) || '';
                var fill = new ol.style.Fill({
                    color: 'rgba(0,112,74,0.4)'
                });
                var stroke = new ol.style.Stroke({
                    color: 'rgba(0,112,74,1)',
                    width: 1
                });
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
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
    ];
}