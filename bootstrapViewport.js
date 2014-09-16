(function( $ ) {

 $.bootstrapViewport =  function(options) {
     
    var settings = $.extend({
            // These are the defaults.
            prefix: 'device-',
            breakpoints: ['lg','md','sm','xs']
    }, options );

    var i = 0;
    var breakpoint = '';
    var curDivName = '';
    
    for (i in settings.breakpoints){
        breakpoint = settings.breakpoints[i];
        curDivName = settings.prefix + breakpoint;
        var existing = $('#' + curDivName);
        if (existing.length === 0){
            var div = $('<div>');
            
            div.attr('id', curDivName);
            div.addClass('visible-' + breakpoint);
            
            $('body')
                .append(div);    
        }
        if ($('#' + curDivName).is(':visible'))
            return breakpoint;
    }

    for (i in settings.breakpoints){
        breakpoint = settings.breakpoints[i];
        curDivName = settings.prefix + breakpoint;
    }
  };

}( jQuery ));