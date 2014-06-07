function setHeaderSize() {
	$(".header").css("height", $(window).height());
	$(".headerBG").css("height", $(window).height());
	$(".headerBG::before").css("height", $(window).height());
}

function initHeaderSize() {
	$duration = 1400;
	$(".header").animate({height: $(window).height()}, $duration);
	$(".headerBG").animate({height: $(window).height()}, $duration);
	$(".headerBG::before").animate({height: $(window).height()}, $duration);
}

window.onload=function() {
	initHeaderSize();
	if (navigator.userAgent.indexOf("Chrome") != -1) {
		console.log("%c\n _    _               _      _   _   _____ \n| |  | |             | |    | \\ | | / ____|\n| |__| |  __ _   ___ | | __ |  \\| || |     \n|  __  | / _` | / __|| |/ / | . ` || |     \n| |  | || (_| || (__ |   <  | |\\  || |____ \n|_|  |_| \\__,_| \\___||_|\\_\\ |_| \\_| \\_____|\n                                           \n         WELCOME TO HACKER COUNTRY         ", "background-color:black; color:green;font-size:1.5em;");
	} else {
		console.log("\n _    _               _      _   _   _____ \n| |  | |             | |    | \\ | | / ____|\n| |__| |  __ _   ___ | | __ |  \\| || |     \n|  __  | / _` | / __|| |/ / | . ` || |     \n| |  | || (_| || (__ |   <  | |\\  || |____ \n|_|  |_| \\__,_| \\___||_|\\_\\ |_| \\_| \\_____|\n                                           \n         WELCOME TO HACKER COUNTRY         ");
	}
}

window.addEventListener("resize", function(event) {
	setHeaderSize();
})



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        $('html,body').animate({
        // subtract navbar height;
        	scrollTop: (-20+$target.offset().top)
        }, 500);
        $target.addClass("fade-in");
        return false;
      }
    }
  });
});