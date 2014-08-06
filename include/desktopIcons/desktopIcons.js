function desktopIcons_setDesktopSize() {
	var height = $(window).height();
	$('.desktopIcons').css('height', height - 
		parseInt($('.desktopIcons').css('padding-top')) - 
		parseInt($('.desktopIcons').css('padding-bottom')));
}

var response;
$.ajax({ type: "GET",   
     url: "include/desktopIcons/desktopIcons.html",   
     async: false,
     success : function(text)
     {
         response= text;
     }
});
$('header').prepend(response).queue(function(next) {
	desktopIcons_setDesktopSize();
	window.addEventListener('resize', function(event) {
		desktopIcons_setDesktopSize();
	});
	next();
});