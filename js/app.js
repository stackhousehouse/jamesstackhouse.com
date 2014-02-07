$(window).scroll(function(){
	var oVal = ($(window).scrollTop()/2);
	$("#project-banner img").css({
		"-webkit-filter": "grayscale("+oVal+"%)",
		"filter": "grayscale("+oVal+"%)"
	});
});

