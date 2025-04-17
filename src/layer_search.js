// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
    const searchInput = document.getElementById('layer-search');
    const dropdown = document.getElementById('layer-search-dropdown');

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        // Check for active base layer
        var hasActiveLayer = false;
        var activeLayer = null;
        $.each(window.layers, function(indexLayer, layerObj) {
            if (layerObj._olLayerGroup && layerObj._olLayerGroup.getVisible && layerObj._olLayerGroup.getVisible()) {
                hasActiveLayer = true;
                activeLayer = layerObj;
            } else if (layerObj.getVisible && layerObj.getVisible()) {
                hasActiveLayer = true;
                activeLayer = layerObj;
            }
        });
        // Add a 'Clear Active Layer' button if a layer is active
        if (hasActiveLayer) {
            var clearBtn = document.createElement('div');
            clearBtn.textContent = '✖ Clear Active Layer';
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.padding = '6px 10px';
            clearBtn.style.background = '#ffeaea';
            clearBtn.style.color = '#b00';
            clearBtn.style.fontWeight = 'bold';
            clearBtn.id = 'clear-active-layer-btn';
            clearBtn.tabIndex = 0;
            clearBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                if (activeLayer && activeLayer._olLayerGroup && activeLayer._olLayerGroup.setVisible) {
                    activeLayer._olLayerGroup.setVisible(false);
                } else if (activeLayer && activeLayer.setVisible) {
                    activeLayer.setVisible(false);
                }
                if (window.renderLayerList) window.renderLayerList([], '');
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdown.appendChild(clearBtn);
        }
        if (!results.length || !searchInput.value.trim()) {
            dropdown.style.display = 'none';
            return;
        }
        // Limit results to 10
        results.slice(0, 10).forEach((layer, idx) => {
            const opt = document.createElement('div');
            opt.className = 'layer-search-option';
            opt.textContent = (layer.group ? layer.group + ': ' : '') + layer.title;
            opt.tabIndex = 0;

            // Opacity slider
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = 0;
            slider.max = 100;
            slider.value = (layer._olLayerGroup && layer._olLayerGroup.getOpacity) ? Math.round(layer._olLayerGroup.getOpacity() * 100) : (layer.getOpacity ? Math.round(layer.getOpacity() * 100) : 100);
            slider.style.marginLeft = '10px';
            slider.style.verticalAlign = 'middle';
            slider.title = 'Opacity';
            slider.addEventListener('input', function(e) {
                var val = parseInt(e.target.value, 10) / 100;
                if (layer._olLayerGroup && layer._olLayerGroup.setOpacity) {
                    layer._olLayerGroup.setOpacity(val);
                } else if (layer.setOpacity) {
                    layer.setOpacity(val);
                }
            });
            opt.appendChild(slider);

            // Layer orderer buttons
            const upBtn = document.createElement('button');
            upBtn.textContent = '↑';
            upBtn.title = 'Move layer up';
            upBtn.style.marginLeft = '10px';
            upBtn.style.cursor = 'pointer';
            upBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const idx = window.layers.indexOf(layer);
                if (idx > 0) {
                    // Swap in array
                    [window.layers[idx-1], window.layers[idx]] = [window.layers[idx], window.layers[idx-1]];
                    // Also swap in config.layers if present
                    if (window.config && Array.isArray(window.config.layers)) {
                        [window.config.layers[idx-1], window.config.layers[idx]] = [window.config.layers[idx], window.config.layers[idx-1]];
                    }
                    if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                    renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                }
            });
            opt.appendChild(upBtn);

            const downBtn = document.createElement('button');
            downBtn.textContent = '↓';
            downBtn.title = 'Move layer down';
            downBtn.style.marginLeft = '2px';
            downBtn.style.cursor = 'pointer';
            downBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const idx = window.layers.indexOf(layer);
                if (idx < window.layers.length - 1) {
                    [window.layers[idx], window.layers[idx+1]] = [window.layers[idx+1], window.layers[idx]];
                    if (window.config && Array.isArray(window.config.layers)) {
                        [window.config.layers[idx], window.config.layers[idx+1]] = [window.config.layers[idx+1], window.config.layers[idx]];
                    }
                    if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                    renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                }
            });
            opt.appendChild(downBtn);

            opt.addEventListener('mousedown', function(e) {
                // Prevent slider or orderer from triggering layer activation
                if (e.target === slider || e.target === upBtn || e.target === downBtn) return;
                e.preventDefault();
                searchInput.value = layer.title;
                dropdown.style.display = 'none';
                // Toggle layer visibility (allow multiple active)
                if (layer._olLayerGroup && layer._olLayerGroup.setVisible) {
                    layer._olLayerGroup.setVisible(!layer._olLayerGroup.getVisible());
                } else if (layer.setVisible) {
                    layer.setVisible(!layer.getVisible());
                }
                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
            });
            dropdown.appendChild(opt);
        });
        dropdown.style.display = 'block';
    }

    function filterAndRender(filtered, query) {
        if (window.renderLayerList) {
            window.renderLayerList(filtered, query);
        }
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            dropdown.style.display = 'none';
            filterAndRender([], '');
            return;
        }
        const filtered = window.layers.filter(layer =>
            (layer.title && layer.title.toLowerCase().includes(query)) ||
            (layer.group && layer.group.toLowerCase().includes(query))
        );
        lastResults = filtered;
        lastQuery = query;
        renderDropdown(filtered);
        filterAndRender(filtered, query);
    });

    // Keyboard navigation for dropdown
    searchInput.addEventListener('keydown', function(e) {
        if (!['ArrowDown','ArrowUp','Enter','Escape'].includes(e.key)) return;
        const opts = dropdown.querySelectorAll('.layer-search-option');
        if (!opts.length) return;
        let idx = Array.from(opts).findIndex(opt => document.activeElement === opt);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            opts[Math.min(idx+1, opts.length-1)].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            opts[Math.max(idx-1, 0)].focus();
        } else if (e.key === 'Enter' && idx >= 0) {
            opts[idx].dispatchEvent(new MouseEvent('mousedown'));
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
        }
    });

    // Hide dropdown on blur, but keep it open if the clear button is being clicked
    searchInput.addEventListener('blur', function() {
        setTimeout(function() {
            var clearBtn = document.getElementById('clear-active-layer-btn');
            if (clearBtn && document.activeElement === clearBtn) {
                return;
            }
            dropdown.style.display = 'none';
        }, 100);
    });
})();
