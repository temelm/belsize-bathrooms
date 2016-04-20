(function init(g, d, c, $j) {
    'use strict';
    
    try {
        if (typeof $j === 'function') {
            g.scrollSpeed = 500;
            
            $j('#bb-navbar a').click(function(event) {
                // Prevent default behaviour
                event.preventDefault();
                
                // Highlight active 'page'
                $j('#bb-navbar li.active').removeClass('active');
                $j(this).parent().addClass('active');
                
                // Collapse navigation bar (mobile)
                $j('[data-target="#bb-navbar"]:not(".collapsed")').click();
                
                // Set current 'page'
                g.currentPage = $j(this).prop('href').substring($j(this).prop('href').indexOf('#'));
                
                $j('html, body').animate({
                    scrollTop: (g.currentPage === '#home') ? 0 : $j(g.currentPage).offset().top
                }, g.scrollSpeed);
            });
            
            $j('.back-to-top-link').click(function(event) {
                event.preventDefault();
                
                $j('html, body').animate({
                    scrollTop: 0
                }, g.scrollSpeed);
            });
            
            $j('#store .list-group-item a').prop('target', '_blank');
            
            $j('#send').click(function(event) {
                //event.preventDefault();
            });
        }
    } catch (exception) {
        if (!!c && typeof c === 'object' && typeof c.error === 'function') {
            c.error(exception.message);
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
            window.console.error(exception.message);
        }
    }
};