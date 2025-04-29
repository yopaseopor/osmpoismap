import { getTranslation } from '../i18n/index.js';

export const translatedOverlays = [
    {
        group: getTranslation('leisure'),
        title: getTranslation('mcdonalds'),
        query: '[out:json][timeout:25];(nwr["brand:wikidata"="Q38076"]({{bbox}}););out body;>;out skel qt;',
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
        query: '[out:json][timeout:25];(nwr["brand:wikidata"="Q37158"]({{bbox}}););out body;>;out skel qt;',
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
    },
    {
        group: getTranslation('shopping'),
        title: 'Zara',
        query: '[out:json][timeout:25];(nwr["brand:wikidata"="Q147662"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,0,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,0,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
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
    },
    {
        group: getTranslation('health'),
        title: 'Pharmacies',
        query: '[out:json][timeout:25];(node["amenity"="pharmacy"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pharmacy_symbol.svg/1200px-Pharmacy_symbol.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,255,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,255,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pharmacy_symbol.svg/1200px-Pharmacy_symbol.svg.png',
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
        group: getTranslation('education'),
        title: 'Schools',
        query: '[out:json][timeout:25];(node["amenity"="school"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/School_icon.svg/1200px-School_icon.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(255,165,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/School_icon.svg/1200px-School_icon.svg.png',
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
        group: getTranslation('culture'),
        title: 'Museums',
        query: '[out:json][timeout:25];(node["tourism"="museum"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museum_icon.svg/1200px-Museum_icon.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(128,0,128,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(128,0,128,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Museum_icon.svg/1200px-Museum_icon.svg.png',
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
        group: getTranslation('services'),
        title: 'Banks',
        query: '[out:json][timeout:25];(node["amenity"="bank"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bank_icon.svg/1200px-Bank_icon.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,128,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,128,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bank_icon.svg/1200px-Bank_icon.svg.png',
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
        group: getTranslation('accommodation'),
        title: 'Hotels',
        query: '[out:json][timeout:25];(node["tourism"="hotel"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hotel_icon.svg/1200px-Hotel_icon.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(255,0,255,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(255,0,255,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hotel_icon.svg/1200px-Hotel_icon.svg.png',
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
        group: getTranslation('religion'),
        title: 'Churches',
        query: '[out:json][timeout:25];(node["amenity"="place_of_worship"]["religion"="christian"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Church_icon.svg/1200px-Church_icon.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(128,128,128,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(128,128,128,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Church_icon.svg/1200px-Church_icon.svg.png',
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