setHeaderSize();
setBackground(selectRandomBackground());
window.addEventListener('resize', function(event) {
	setHeaderSize();
});
// align all kinds of things that depend on the viewport size
function setHeaderSize() {
	var height = $(window).height();
	$('header').css('height', height);
	$('.container.icon').css('height', height-$('.slogan').height()-$('.nav > table').height());
	$('.container.icon').css('padding-top', $('.nav > table').height());
	$('.container.icon').css('padding-bottom', $('.slogan').height());
	$('footer').css('margin-top', height);
}
