(function init(g, d, c, $j) {
    'use strict';
    
    try {
        if (typeof $j === 'function') {
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
                }, 0);
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
            zoom: 16
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