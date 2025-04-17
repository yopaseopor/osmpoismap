// Mobile menu toggle logic
$(function() {
    // Add toggle button and overlay background if on mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
        if (!$('.mobile-menu-toggle').length) {
            var $btn = $('<button class="mobile-menu-toggle" aria-label="Show menu">☰</button>');
            $('body').append($btn);
        }
        if (!$('.menu-overlay-bg').length) {
            var $bg = $('<div class="menu-overlay-bg"></div>');
            $('body').append($bg);
        }
        // Hide menu by default
        $('.menu').removeClass('menu-active');
        // Toggle menu on button click
        $(document).on('click', '.mobile-menu-toggle', function() {
            $('.menu').toggleClass('menu-active');
            $('.menu-overlay-bg').toggle($('.menu').hasClass('menu-active'));
        });
        // Hide menu when clicking overlay background
        $(document).on('click', '.menu-overlay-bg', function() {
            $('.menu').removeClass('menu-active');
            $('.menu-overlay-bg').hide();
        });
    }
});
