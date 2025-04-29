import { getTranslation } from '../../i18n/index.js';

export const transportOverlays = [
    {
        group: getTranslation('transport'),
        title: 'Metro Stations',
        query: '[out:json][timeout:25];(node["railway"="station"]["station"="subway"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Metro_Logo.svg/1200px-Metro_Logo.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,0,255,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,0,255,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Metro_Logo.svg/1200px-Metro_Logo.svg.png',
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