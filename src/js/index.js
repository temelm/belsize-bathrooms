(function init(g, d, c, $j) {
    'use strict';
    
    try {
        if (typeof $j === 'function') {
            g.scrollSpeed = 500;
            
            // Open store links in a new window/tab
            $j('#store .list-group-item a').prop('target', '_blank');
            
            // Handle navigation link clicks
            $j('#bb-navbar a').click(function(event) {
                event.preventDefault();
                
                // Collapse navigation bar (mobile)
                $j('[data-target="#bb-navbar"]:not(".collapsed")').click();
                
                // Highlight active navigation link
                $j('#bb-navbar li.active').removeClass('active');
                $j(this).parent().addClass('active');
                
                // Set current 'page' and scroll to it
                g.currentPage = $j(this).prop('href').substring($j(this).prop('href').indexOf('#'));
                
                $j('html, body').animate({
                    scrollTop: (g.currentPage === '#home') ? 0 : $j(g.currentPage).offset().top
                }, g.scrollSpeed);
            });
            
            // Handle 'Back to top' link clicks
            $j('.back-to-top-link').click(function(event) {
                event.preventDefault();
                
                $j('html, body').animate({
                    scrollTop: 0
                }, g.scrollSpeed);
            });
        }
    } catch (exception) {
        if (!!c && typeof c === 'object' && typeof c.error === 'function') {
            c.error('[init]:', exception.message);
        }
    }
})(window, window.document, window.console, window.jQuery);

window.initMap = function() {
    'use strict';
    
    try {
        var latLng = {
            lat: 51.543252,
            lng: -0.179318
        };
        var map = new window.google.maps.Map(window.document.getElementById('map'), {
            center: latLng,
            scrollwheel: false,
            zoom: 15
        });
        var marker = new window.google.maps.Marker({
            map: map,
            position: latLng,
            title: 'Belsize Bathrooms'
        });
    } catch (exception) {
        if (!!window.console && typeof window.console === 'object' && typeof window.console.error === 'function') {
            window.console.error('[initMap]:', exception.message);
        }
    }
};