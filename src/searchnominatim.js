import Search from 'ol-ext/control/Search';
import {transform} from 'ol/proj';

class SearchNominatim extends Search {
  constructor(options) {
    options.url = options.url || 'https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=10&q={s}';
    options.typology = options.typology || 'location';
    super(options);
    this.on('select', function(e) {
      var feature = e.search;
      if (feature) {
        var properties = feature.getProperties();
        if (properties.address) {
          var address = [];
          if (properties.address.road) address.push(properties.address.road);
          if (properties.address.house_number) address.push(properties.address.house_number);
          if (address.length) address.push('<br>');
          if (properties.address.postcode) address.push(properties.address.postcode);
          if (properties.address.city) address.push(properties.address.city);
          if (properties.address.state) address.push(properties.address.state);
          if (properties.address.country) address.push(properties.address.country);
          properties.name = address.join(' ');
        }
        var center = feature.getGeometry().getCoordinates();
        if (options.autoCenter) {
          this.getMap().getView().animate({center: center});
        }
        var coord4326 = transform(center, this.getMap().getView().getProjection(), 'EPSG:4326');
        this.dispatchEvent({type: 'select', search: feature, coordinate: center, coord4326: coord4326, address: properties.name});
      }
    }, this);
  }
}

export default SearchNominatim;