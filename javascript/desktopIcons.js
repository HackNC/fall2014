function desktopIcons_setDesktopSize() {
	var height = $(window).height();
	$('.desktopIcons').css('height', height - 
		parseInt($('.desktopIcons').css('padding-top')) - 
		parseInt($('.desktopIcons').css('padding-bottom')));
}

desktopIcons_setDesktopSize();
window.addEventListener('resize', function(event) {
	desktopIcons_setDesktopSize();
});

$('#pizzaLink').click(function() {
	if ($('#pizza').is(':visible')) {
		$('#pizza').hide();
	} else {
		$('#pizza').show();
	}
});

$('#mentorsLink').click(function() {
	if ($('#mentors').is(':visible')) {
		$('#mentors').hide();
	} else {
		$('#mentors').show();
	}
});

$('#scheduleLink').click(function() {
	if ($('#schedule').is(':visible')) {
		$('#schedule').hide();
	} else {
		$('#schedule').show();
	}
});

$('#prizesLink').click(function() {
	if ($('#prizes').is(':visible')) {
		$('#prizes').hide();
	} else {
		$('#prizes').show();
	}
});

$('#mapLink').click(function() {
	if ($('#map').is(':visible')) {
		$('#map').hide();
	} else {
		$('#map').show();
	}
});

$('.popup').click(function(e) {
	if (e.target === this) {
		if ($(this).is(':visible')) {
			$(this).hide();
		}
	}
});

