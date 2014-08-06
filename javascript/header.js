setHeaderSize();
window.addEventListener('resize', function(event) {
	setHeaderSize();
});
// align all kinds of things that depend on the viewport size
function setHeaderSize() {
	var height = $(window).height();
	$('header').css('height', height);
	$('footer').css('margin-top', height);
}
