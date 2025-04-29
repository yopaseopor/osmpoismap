// Vector Tile Style for Shortbread schema
// This is a minimal OpenLayers style function for vector tiles based on feature properties
// You can expand this with more sophisticated styling as needed

import { Style, Fill, Stroke } from 'ol/style';

// Example: style for "land" layer (expand as needed)
export function vectorTileStyle(feature, resolution) {
    const layer = feature.get('layer');
    const kind = feature.get('kind');
    // Example: simple color by kind
    if (layer === 'land') {
        switch (kind) {
            case 'forest':
                return new Style({ fill: new Fill({ color: '#b5e3b5' }) });
            case 'grass':
            case 'meadow':
                return new Style({ fill: new Fill({ color: '#d9f5c7' }) });
            case 'orchard':
            case 'vineyard':
                return new Style({ fill: new Fill({ color: '#e5e0b0' }) });
            default:
                return new Style({ fill: new Fill({ color: '#e0e0e0' }) });
        }
    }
    // Add more layer/kind logic as needed
    return new Style({
        fill: new Fill({ color: 'rgba(200,200,200,0.2)' }),
        stroke: new Stroke({ color: '#888', width: 1 })
    });
}
