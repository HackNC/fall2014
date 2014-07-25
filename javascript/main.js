////////////////// run this after the page has been built //////////////////
setHeaderSize();
setBackground(selectRandomBackground());
window.addEventListener('resize', function(event) {
	setHeaderSize();
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

function selectRandomBackground() {
	var numImages = 10;
	return Math.floor(Math.random() * numImages);
}

// align all kinds of things that depend on the viewport size
function setHeaderSize() {
	var height = $(window).height();
	$('header').css('height', height);
	$('.container.icon').css('height', height-$('.slogan').height()-$('.navbar').height());
	$('.container.icon').css('padding-top', $('.navbar').height());
	$('.container.icon').css('padding-bottom', $('.slogan').height());
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