// americana_style_loader.js
// Dynamically loads and applies Mapbox GL style to an OpenLayers VectorTile layer

/**
 * Apply a Mapbox GL style (from a style.json URL) to an OpenLayers VectorTile layer.
 *
 * @param {ol.layer.VectorTile} vectorTileLayer - The OpenLayers VectorTile layer to style.
 * @param {string} styleUrl - The URL to the Mapbox GL style.json.
 * @param {function} [callback] - Optional callback when style is loaded and applied.
 */
export function applyAmericanaMapStyle(vectorTileLayer, styleUrl, callback) {
    // Load ol-mapbox-style dynamically if not already loaded
    if (!window.olms) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.11.1/dist/olms.js';
        script.onload = function() {
            _applyStyle(vectorTileLayer, styleUrl, callback);
        };
        document.head.appendChild(script);
    } else {
        _applyStyle(vectorTileLayer, styleUrl, callback);
    }
}

function _applyStyle(vectorTileLayer, styleUrl, callback) {
    // Use olms.stylefunction to apply the style
    fetch(styleUrl)
        .then(response => response.json())
        .then(styleJson => {
            window.olms.stylefunction(
                vectorTileLayer,
                styleJson,
                styleUrl,
                'vector',
                () => {
                    if (callback) callback();
                }
            );
        });
}
