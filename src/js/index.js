(function init(g, d, c, $j) {
    'use strict';
    
    try {
        if (typeof $j === 'function') {
            $j('#bb-navbar a').click(function() {
                $j('#bb-navbar li.active').removeClass('active');
                $j(this).parent().addClass('active');
            });
        }
    } catch (exception) {
        if (!!c && typeof c === 'object' && typeof c.error === 'function') {
            c.error(exception.message);
        }
    }
})(window, window.document, window.console, window.jQuery);