// loading sequence
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// mobile
	$('.background').show();
	$('.everything').show();
} else {
	// everything else
	$('.everything').hide();
	setLogoSize();
	window.addEventListener('resize', function(event) {
		setLogoSize();
	});
	$('.logo').css('display', 'table');
	$('.logo').addClass('zoomInEntrance');
	$('.logo').delay(1900).queue(function(next){
		$(this).removeClass('zoomInEntrance');
		$(this).addClass('zoomInExit')
		next();
	});
	$('.logo').delay(400).queue(function(next){
		$(this).hide();
		next();
	})
	$('.everything').delay(1900).queue(function(next) {
		$(this).show();
		setHeaderSize(); // defined in header.js
		$(this).hide();
		$(this).fadeIn(1000);
		$('.background').fadeIn(1000);
		next();
	});
}

function setLogoSize() {
	var height = $(window).height();
	$('.logo').css('height', height);
	$('.logo').css('max-height', height);
}