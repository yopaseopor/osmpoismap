import { allOverlays } from './overlays/index.js';

// Create overlay configuration
// Helper to merge overlays from group folders
function mergeGroupOverlays(baseOverlays, allOverlays) {
    const groupKeys = ['food', 'shopping', 'health', 'transport', 'education', 'translated'];
    let overlays = baseOverlays.slice();
    groupKeys.forEach(groupName => {
        if (Array.isArray(allOverlays[groupName])) {
            allOverlays[groupName].forEach(overlay => {
                // Avoid duplicates by title+group
                if (!overlays.some(ov => ov.title === overlay.title && ov.group === (overlay.group || groupName))) {
                    overlays.push({
                        group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                        title: overlay.title,
                        query: overlay.query,
                        iconSrc: overlay.iconSrc,
                        iconStyle: overlay.iconStyle,
                        style: overlay.style || function(feature) {
                            return new ol.style.Style({
                                image: new ol.style.Icon({
                                    src: overlay.iconSrc,
                                    scale: 0.5
                                })
                            });
                        },
                        visible: false
                    });
                }
            });
        }
    });
    return overlays;
}

export const overlayConfig = {
    overlays: mergeGroupOverlays(
        Object.entries(allOverlays).flatMap(([groupName, groupOverlays]) => {
            if (!Array.isArray(groupOverlays)) return [];
            return groupOverlays.map(overlay => ({
                group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                title: overlay.title,
                query: overlay.query,
                iconSrc: overlay.iconSrc,
                iconStyle: overlay.iconStyle,
                style: overlay.style || function(feature) {
                    return new ol.style.Style({
                        image: new ol.style.Icon({
                            src: overlay.iconSrc,
                            scale: 0.5
                        })
                    });
                },
                visible: false
            }));
        }),
        allOverlays
    )
};

// Update overlays when they change
window.addEventListener('overlaysUpdated', function(event) {
    if (window.allOverlays && window.config) {
        window.config.overlays = mergeGroupOverlays(
            Object.entries(window.allOverlays).flatMap(([groupName, groupOverlays]) => {
                if (!Array.isArray(groupOverlays)) return [];
                return groupOverlays.map(overlay => ({
                    group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                    title: overlay.title,
                    query: overlay.query,
                    iconSrc: overlay.iconSrc,
                    iconStyle: overlay.iconStyle,
                    style: overlay.style || function(feature) {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                src: overlay.iconSrc,
                                scale: 0.5
                            })
                        });
                    },
                    visible: false
                }));
            }),
            window.allOverlays
        );
        // Dispatch event to notify overlay searcher
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));
    }
}); 