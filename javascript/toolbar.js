startTime();
//display notification center when icon is clicked
var isNotificationCenterVisible = false;
$('#notificationCenter').click( function() {
	if (isNotificationCenterVisible) {
		$('.notificationCenter').animate({ right: -250 },'slow', function() {
			$(this).hide();
		});
	}
	else {
		$('.notificationCenter').css('top', $('.nav table').height());
		$('.notificationCenter').show().animate({ right: 0 },'slow');

	}
	isNotificationCenterVisible = !isNotificationCenterVisible;
});

//////////////////// Toolbar javascript ///////////////////

// Menubar clicks
var lastOpen;
$('.element-left ul.topnav > li > a').click(function() {
	var button = $(this).parent();
	var menu = $(this).next('ul.subnav');
	if (lastOpen) {
		// if a menu is open
		if (lastOpen.hasClass('open') && button.hasClass('open')) {
			// if this is the same menu that was just opened, close it
			closeMenu(menu);
			button.removeClass('open');
			lastOpen = null;
		} else {
			// if this is a different menu than what is already open, close the old and open this
			closeMenu(lastOpen.find('ul.subnav'));
			lastOpen.removeClass('open');
			openMenu(menu);
			button.addClass('open');
			lastOpen = button;
		}
	} else {
		// else no menu is open, open the menu that was clicked
		openMenu(menu);
		button.addClass('open');
		lastOpen = button;
	}
	return false;
});

// Menubar hover.  Hover is enabled after a menu button is clicked.
$('.element-left ul.topnav > li').hover(
	// on mouse enter
	function() {
		var button = $(this);
		var menu = $(this).find('ul.subnav');
		if (lastOpen && !button.hasClass('open')) {
			// if a menu is open but it's not this menu, open this and close the old
			closeMenu(lastOpen.find('ul.subnav'));
			lastOpen.removeClass('open');
			openMenu(menu);
			button.addClass('open');
			lastOpen = button;
		}
	}, 
	// on mouse exit
	function() {
		// do nothing
	}
);

// Submenu clicks
$('.element-left ul.topnav > li').each(function() {
	var button = $(this);
	var menu = button.find('ul.subnav');
	$(this).find('ul.subnav > li > a').click(function() {
		menu.fadeOut(fadeTime);
		button.removeClass('open');
		lastOpen = null;
		if($(this).hasClass('external')) {
			return true;
		} else {
			return false;
		}
	});
});
	

// Submenu closes on page click
$('.everything:not(.nav)').click(function() {
	if (lastOpen) {
		// if a menu is open and the click is not on a new menu
		closeMenu(lastOpen.find('ul.subnav'));
		lastOpen.removeClass('open');
		lastOpen = null;
	}
});

// power button
var poweredOn = true;
var animatingNow = false;
$(function() {
	$('.power').click(function() {
		if (!animatingNow) {
			animatingNow = true;
			if (poweredOn) {
				poweredOn = false;
				$('.everything').fadeOut(400, function() {
					$('.standby').fadeIn();
					animatingNow = false;
				});
			} else {
				$('.standby').fadeOut(200, function() {
					$('.everything').fadeIn();
					poweredOn = true;
					animatingNow = false;
				});
			}
		}
	})
});


var fadeTime = 10;
function openMenu(menu) {
	menu.fadeIn(fadeTime);
	menu.css('top', $('.nav table').height());
	if (menu.offset().left + menu.width() > $(window).width()) {
		menu.css('left', $(window).width()- (menu.offset().left + menu.width()));
	}
}

function closeMenu(menu) {
	menu.fadeOut(fadeTime);
}

function startTime() {
	var today=new Date();
	var month=today.getMonth();
	var date=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var amPm = getAmPm(h);
	switch(month) {
		case 0:
			month = 'January';
			break;
		case 1:
			month = 'February';
			break;
		case 2:
			month = 'March';
			break;
		case 3:
			month = 'April';
			break;
		case 4:
			month = 'May';
			break;
		case 5:
			month = 'June';
			break;
		case 6:
			month = 'July';
			break;
		case 7:
			month = 'August';
			break;
		case 6:
			month = 'September';
			break;
		case 6:
			month = 'October';
			break;
		case 6:
			month = 'November';
			break;
		case 6:
			month = 'December';
			break;
		default:
			month = '';
			break;

	}
	h = fixHours(h);
	m = fixMinutes(m);
	document.getElementById('clock').innerHTML = month + ' ' + date + ', ' + h + ':' + m + ' ' + amPm;
	var t = setTimeout(function(){
		startTime()
	},1000);
}

function getAmPm(h) {
	if (h >= 12) {
		return 'PM';
	} else {
		return 'AM';
	}
}

function fixHours(h) {
	if (h > 12) {
		return h - 12;
	} else if (h == 0) {
		return 12;
	} else {
		return h;
	}
}

function fixMinutes(i) {
    if (i<10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
}
