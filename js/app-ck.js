$(window).scroll(function(){var e=$(window).scrollTop()/2;$("#project-banner img").css({"-webkit-filter":"grayscale("+e+"%)",filter:"grayscale("+e+"%)"})});$(function(){$(".sticky").stickyMenu()});(function(e){e.fn.stickyMenu=function(t){var n=this,r={left:0,top:0,menu_offset_top:n.offset().top},i=e.extend({},r,t);e(window).on("scroll.stickyMenu",function(){if(e(window).scrollTop()>i.menu_offset_top){n.css({position:"fixed",top:i.left,left:i.top,zIndex:9999});e("body").css({"padding-top":n.innerHeight()})}else{n.css({position:"relative"});e("body").css({"padding-top":0})}});return n}})(jQuery);