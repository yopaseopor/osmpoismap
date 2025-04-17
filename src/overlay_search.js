// Overlay Searcher: interactive with predictive dropdown
// Assumes overlays are available globally as window.overlays

(function() {
    // Create predictive dropdown
    const searchInput = document.getElementById('overlay-search');
    const dropdown = document.createElement('div');
    dropdown.id = 'overlay-search-dropdown';
    dropdown.className = 'overlay-search-dropdown';
    searchInput.parentNode.appendChild(dropdown);

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        var hasActiveOverlay = false;
        var activeOverlay = null;
        // Check if any overlay is currently active
        $.each(config.layers, function(indexLayer, layerGroup) {
            if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                    if (olayer.getVisible && olayer.getVisible()) {
                        hasActiveOverlay = true;
                        activeOverlay = olayer;
                    }
                });
            }
        });

        if (!searchInput.value || !results.length) {
            dropdown.style.display = 'none';
            return;
        }
        // Group overlays by first letter, limit to 10 per letter
        let letterMap = {};
        results.forEach(function(overlay) {
            var titleOrGroup = (overlay.title || overlay.group || '').trim();
            var firstLetter = titleOrGroup.charAt(0) ? titleOrGroup.charAt(0).toUpperCase() : '_';
            if (!letterMap[firstLetter]) letterMap[firstLetter] = [];
            if (letterMap[firstLetter].length < 10) {
                letterMap[firstLetter].push(overlay);
            }
        });
        Object.keys(letterMap).sort().forEach(function(letter) {
            letterMap[letter].forEach(function(overlay, idx) {
            const opt = document.createElement('div');
            opt.className = 'overlay-search-option';
            // Add icon if available (use iconSrc from config)
            if (overlay.iconSrc) {
                const iconImg = document.createElement('img');
                iconImg.src = overlay.iconSrc;
                iconImg.alt = '';
                iconImg.className = 'overlay-search-option-icon';
                iconImg.style.maxWidth = '30px';
                iconImg.style.maxHeight = '30px';
                iconImg.style.width = 'auto';
                iconImg.style.height = 'auto';
                iconImg.style.marginRight = '10px';
                iconImg.style.verticalAlign = 'middle';
                opt.appendChild(iconImg);
            }
            // Add the text (group/category: title)
            const textSpan = document.createElement('span');
            textSpan.textContent = overlay.group + ': ' + overlay.title;
            opt.appendChild(textSpan);
            opt.tabIndex = 0;
            opt.addEventListener('mousedown', function(e) {
                e.preventDefault();
                searchInput.value = overlay.title;
                dropdown.style.display = 'none';
                // Toggle overlay visibility independently
                $.each(config.layers, function(indexLayer, layerGroup) {
                    if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                        $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                            if ((overlay.id && olayer.get('id') === overlay.id) ||
                                (olayer.get('title') === overlay.title && olayer.get('group') === overlay.group)) {
                                if (olayer.getVisible && olayer.getVisible()) {
                                    // If already visible, hide it
                                    olayer.setVisible(false);
                                } else {
                                    // If hidden, show it
                                    olayer.setVisible(true);
                                }
                            }
                        });
                    }
                });
                // Optionally update overlay list UI
                if (window.renderOverlayList) window.renderOverlayList([], '');
            });
            dropdown.appendChild(opt);
            });
        });
        dropdown.style.display = 'block';
    }

    function filterAndRender(filtered, query) {
        if (window.renderOverlayList) {
            window.renderOverlayList(filtered, query);
        }
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            dropdown.style.display = 'none';
            filterAndRender([], '');
            return;
        }
        const filtered = window.overlays.filter(overlay =>
            (overlay.title && overlay.title.toLowerCase().includes(query)) ||
            (overlay.group && overlay.group.toLowerCase().includes(query))
        );
        lastResults = filtered;
        lastQuery = query;
        renderDropdown(filtered);
        filterAndRender(filtered, query);
    });

    // Keyboard navigation for dropdown
    searchInput.addEventListener('keydown', function(e) {
        if (!['ArrowDown','ArrowUp','Enter','Escape'].includes(e.key)) return;
        const opts = dropdown.querySelectorAll('.overlay-search-option');
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
            // Check if the active element is the clear button
            var clearBtn = document.getElementById('clear-active-overlay-btn');
            if (clearBtn && document.activeElement === clearBtn) {
                // Do not hide dropdown
                return;
            }
            dropdown.style.display = 'none';
        }, 100);
    });
})();
