import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Dispatch config loaded event after everything is initialized
window.dispatchEvent(new CustomEvent('configLoaded', {
    detail: window.config
}));

// Notify overlay searcher that overlays are ready
window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
    detail: {
        overlays: window.config.overlays
    }
}));

// Initialize map when document is ready
$(document).ready(function() {
    // Map initialization will be handled by index.js
}); 