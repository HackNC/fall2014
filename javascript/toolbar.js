// function definitions

var fadeTime = 10;
function openMenu(menu) {
	menu.fadeIn(fadeTime);
	menu.css('top', $('.toolbar table').height());
	if (menu.offset().left + menu.width() > $(window).width()) {
		menu.css('left', $(window).width()- (menu.offset().left + menu.width()));
	}
}

function closeMenu(menu) {
	menu.fadeOut(fadeTime);
}

function tickTime() {
	var today = new Date();
	var month = today.getMonth();
	var date = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();
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
		case 8:
		month = 'September';
		break;
		case 9:
		month = 'October';
		break;
		case 10:
		month = 'November';
		break;
		case 11:
		month = 'December';
		break;
		default:
		month = 'Caturday';
		break;
	}
	h = fixHours(h);
	m = fixMinutes(m);
	$('.toolbar #clock').html(month + ' ' + date + ', ' + h + ':' + m + ' ' + amPm);
	var t = setTimeout(function(){
		tickTime()
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
    if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
}

function createCalendar() {
	var today = new Date();
	var month = today.getMonth();
	var year = today.getFullYear();
	var beginningOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
	var daysInMonth = 0;
	switch (month) {
		case 0:
			month = 'January';
			daysInMonth = 31;
			break;
		case 1:
			month = 'February';
			daysInMonth = (year % 4 == 0 && year % 400 != 0) ? 29 : 28;
			break;
		case 2:
			month = 'March';
			daysInMonth = 31;
			break;
		case 3:
			month = 'April';
			daysInMonth = 30;
			break;
		case 4:
			month = 'May';
			daysInMonth = 31;
			break;
		case 5:
			month = 'June';
			daysInMonth = 30;
			break;
		case 6:
			month = 'July';
			daysInMonth = 31;
			break;
		case 7:
			month = 'August';
			daysInMonth = 31;
			break;
		case 8:
			month = 'September';
			daysInMonth = 30;
			break;
		case 9:
			month = 'October';
			daysInMonth = 31;
			break;
		case 10:
			month = 'November';
			daysInMonth = 30;
			break;
		case 11:
			month = 'December';
			daysInMonth = 31;
			break;
		default:
			month = 'Caturday';
			daysInMonth = 666;
			break;
	}
	var startDay = beginningOfMonth.getDay();
	console.log(beginningOfMonth + " " + startDay);
	var i = 1 - startDay;
	$('.toolbar #clock + ul.submenu').append('<li class=\'calendar\'>' + 
		'<table><tbody>' +
		'<tr colspan=\'7\'><h3>' + month + '</h3></tr>' + 
		'<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th></tr>' +
		'<tr><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + ((i++ > 0) ? i-1 : '') + '</td><td>' + i++ + '</td></tr>' +
		'<tr><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td></tr>' +
		'<tr><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td></tr>' +
		'<tr><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td><td>' + i++ + '</td></tr>' +
		'<tr><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td></tr>' +
		((i > daysInMonth) ? '' : ('<tr><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td><td>' + ((i++ > daysInMonth) ? '' : i - 1) + '</td></tr>')) +
		'</tbody></table>' + 
		'</li>');
}

var numberOfBatteryImageFrames = 38;
var cachedChargeLevel = 0;
function getChargeLevel() {
	if (cachedChargeLevel) {
		return cachedChargeLevel;
	}
	var arbitraryDate = new Date(2014, 6, 6, 6, 6, 6, 6);
	var today = new Date();
	var HackNC = new Date(2014, 9, 25, 11, 0, 0, 0);
	
	var percentCharged;

	if (HackNC < today) {
		percentCharged = 1;
	} else {
		percentCharged = (today - arbitraryDate) / (HackNC - arbitraryDate);
	}
	return cachedChargeLevel = Math.floor(percentCharged * numberOfBatteryImageFrames);
}

function doChargeUp() {
	var maxCharge = getChargeLevel();
	var imgs = [];
	for (var i=0; i <= maxCharge; i++) {
		imgs[i] = new Image();
		imgs[i].src = './images/toolbar/battery_' + i + '.png';
	}
	var i = 0;
	window.setInterval(function() {
		if (i <= maxCharge) {
			$('.toolbar #battery img').attr('src', imgs[i++].src);
		}
	}, 250);
}

function setBatteryMenuText() {
	var maxCharge = getChargeLevel();
	$('.toolbar #battery ul.submenu').append('<li>' +
		Math.floor(maxCharge/numberOfBatteryImageFrames*100) + '% charged</li>');
}

// code to run

tickTime();
createCalendar();
doChargeUp();
setBatteryMenuText();
if (getChargeLevel() != numberOfBatteryImageFrames) {
	window.setInterval(function() {
			doChargeUp();
		}, 10000);
}
//display notification center when icon is clicked
var isNotificationCenterVisible = false;
$('.toolbar #notificationCenter').click( function() {
	if (isNotificationCenterVisible) {
		$('.toolbar .notificationCenter').animate({ right: -250 },'slow', function() {
			$(this).hide();
		});
	}
	else {
		$('.notificationCenter').css('top', $('.toolbar table').height());
		$('.notificationCenter').show().animate({ right: 0 },'slow');

	}
	isNotificationCenterVisible = !isNotificationCenterVisible;
});

//////////////////// Toolbar javascript ///////////////////

// Menubar clicks
var lastOpen;
$('.toolbar ul.topmenu > li > a').click(function() {
	var button = $(this).parent();
	var menu = $(this).next('ul.submenu');
	if(!menu.length) {
		return;
	}
	if (lastOpen) {
		// if a menu is open
		if (lastOpen.hasClass('open') && button.hasClass('open')) {
			// if this is the same menu that was just opened, close it
			closeMenu(menu);
			button.removeClass('open');
			lastOpen = null;
		} else {
			// if this is a different menu than what is already open, close the old and open this
			closeMenu(lastOpen.find('ul.submenu'));
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
$('.toolbar ul.topmenu > li').hover(
	// on mouse enter
	function() {
		var button = $(this);
		var menu = $(this).find('ul.submenu');
		if (!menu.length) {
			return;
		}
		if (lastOpen && !button.hasClass('open')) {
			// if a menu is open but it's not this menu, open this and close the old
			closeMenu(lastOpen.find('ul.submenu'));
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
$('.toolbar ul.topmenu > li').each(function() {
	var button = $(this);
	var menu = button.find('ul.submenu');
	if (!menu.length) {
		return;
	}
	$(this).find('ul.submenu > li > a').click(function() {
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

// Submenu hover 
$('.toolbar ul.submenu a').hover(function() {
		$(this).parent().addClass('open');
	}, function() {
		$(this).parent().removeClass('open');
	});

// Submenu closes on page click
$('.everything:not(.toolbar)').click(function() {
	if (lastOpen) {
		// if a menu is open and the click is not on a new menu
		closeMenu(lastOpen.find('ul.submenu'));
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