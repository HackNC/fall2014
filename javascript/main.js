////////////////// run this after the page has been built //////////////////
var image = selectRandomBackground();
setHeaderSize();
setBackground(image);
window.addEventListener('resize', function(event) {
	setHeaderSize();
});
startTime();

// loading sequence
$('.everything').hide();
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
$('.everything').delay(1900).fadeIn(1000);
$('.background').delay(1800).fadeIn(1000);


//display notification center when icon is clicked
var visibleNav = false;
$('#notecenter').click( function() {
	if (visibleNav) {
		$('.notelist').animate({ right: -250 },'slow', function() {this.hide();});
	}
	else {
		$('.notelist').show().animate({ right: 0 },'slow');

	}
	visibleNav = !visibleNav;
});

//////////////////// Toolbar javascript ///////////////////
var fadeTime = 10;

// Menubar clicks
var lastOpen;
$('.element-left ul.topnav > li > a').click(function() {
	var button = $(this).parent();
	var menu = $(this).next('ul.subnav');
	if (lastOpen) {
		// if a menu is open
		if (lastOpen.hasClass('open') && button.hasClass('open')) {
			// if this is the same menu that was just opened, close it
			menu.fadeOut(fadeTime);
			button.removeClass('open');
			lastOpen = null;
		} else {
			// if this is a different menu than what is already open, close the old and open this
			lastOpen.find('ul.subnav').fadeOut(fadeTime);
			lastOpen.removeClass('open');
			menu.fadeIn(fadeTime);
			button.addClass('open');
			lastOpen = button;
		}
	} else {
		// else no menu is open, open the menu that was clicked
		menu.fadeIn(fadeTime);
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
			lastOpen.find('ul.subnav').fadeOut(fadeTime);
			lastOpen.removeClass('open');
			menu.fadeIn(fadeTime);
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
		lastOpen.find('ul.subnav').fadeOut(fadeTime);
		lastOpen.removeClass('open');
		lastOpen = null;
	}
});

////////////////// easter egg //////////////////
if (navigator.userAgent.indexOf('Chrome') != -1) {
	console.log('%c\n _    _               _      _   _   _____ \n| |  | |             | |    | \\ | | / ____|\n| |__| |  __ _   ___ | | __ |  \\| || |     \n|  __  | / _` | / __|| |/ / | . ` || |     \n| |  | || (_| || (__ |   <  | |\\  || |____ \n|_|  |_| \\__,_| \\___||_|\\_\\ |_| \\_| \\_____|\n                                           \n         WELCOME TO HACKER COUNTRY         ', 'background-color:black; color:green;font-size:1.5em;');
} else {
	console.log('\n _    _               _      _   _   _____ \n| |  | |             | |    | \\ | | / ____|\n| |__| |  __ _   ___ | | __ |  \\| || |     \n|  __  | / _` | / __|| |/ / | . ` || |     \n| |  | || (_| || (__ |   <  | |\\  || |____ \n|_|  |_| \\__,_| \\___||_|\\_\\ |_| \\_| \\_____|\n                                           \n         WELCOME TO HACKER COUNTRY         ');
}

////////////////// function definitions //////////////////
// scrolling on anchor clicks
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			$target = $(this.hash);
			$target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('html,body').animate({
			        // subtract navbar height;
			        scrollTop: ($target.offset().top-$('.nav table').height())
			    }, 500);
				$target.fadeOut(100).fadeIn(500);
				return false;
			}
		}
	});
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
})

function selectRandomBackground() {
	var numImages = 10;
	return Math.floor(Math.random() * numImages);
}

// align all kinds of things that depend on the viewport size
function setHeaderSize() {
	var height = $(window).height();
	$('header').css('height', height);
	$('.background').css('height', height);
	$('.background::before').css('height', height);
	$('.logo').css('height', height);
	$('.logo').css('max-height', height);
	$('.notelist').css('top', $('.nav table').height());
	$('.nav ul').css('top', $('.nav table').height());
	$('footer').css('margin-top', height);
}

function setBackground(image) {
	var size = '320';
	var width = $(window).width();
	if (width <= 640) {
		size = '640';
	} else if (width <= 800) {
		size = '800';
	} else if (width <= 1024) {
		size = '1024';
	} else if (width <= 1600) {
		size = '1600';
	} else {
		size = '2048';
	}
	$('.background').css({'background-image': 'url(./images/' + image + '_' + size + '.jpg)'});
}

function startTime() {
	var today=new Date();
	var day=today.getDay();
	var month=today.getMonth();
	var date=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var amPm = getAmPm(h);
	switch(day) {
		case 0:
			day = 'Sunday';
			break;
		case 1:
			day = 'Monday';
			break;
		case 2:
			day = 'Tuesday';
			break;
		case 3:
			day = 'Wednesday';
			break;
		case 4:
			day = 'Thursday';
			break;
		case 5:
			day = 'Friday';
			break;
		case 6:
			day = 'Saturday';
			break;
		default:
			day = '';
			break;

	}
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
	document.getElementById('clock').innerHTML = day + ' ' + month + ' ' + date + ', ' + h + ':' + m + ' ' + amPm;
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
