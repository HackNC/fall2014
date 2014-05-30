var width = 1280;
document.addEventListener("DOMContentLoaded", function(event) {
	setBg()
});
window.addEventListener("resize", function(event) {
	setBg()
});

function setBg() {
	width = window.innerWidth;
	document.getElementById("header").style.backgroundImage = "url('./images/purpletint.png'), url('http://placekitten.com/g/" + width + "/513')";	
}