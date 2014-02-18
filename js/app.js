$(window).scroll(function(){
	var oVal = ($(window).scrollTop()/2);
	$("#project-banner img").css({
		"-webkit-filter": "grayscale("+oVal+"%)",
		"filter": "grayscale("+oVal+"%)"
	});
});

$(function(){
    $('.sticky').stickyMenu();
});


(function( $ ){
    $.fn.stickyMenu = function( options ) {
		
        var $this = this,
        defaults = {
            'left' : 0,
            'top' : 0,
            'menu_offset_top' : $this.offset().top
        },
        settings = $.extend({}, defaults, options);
        $(window).on('scroll.stickyMenu', function(){
            if ($(window).scrollTop() > settings.menu_offset_top)
            { 
                $this.css({ 
                    'position': 'fixed',
                    'top':settings.left,
                    'left':settings.top,
                    'zIndex':9999
                });
                $('body').css({'padding-top': $this.innerHeight()})
            }
            else
            {
                $this.css({ 
                    'position': 'relative',
                }); 
                $('body').css({'padding-top': 0})
            }
        });
        return $this;
    };
})(jQuery);


