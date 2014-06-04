var width = 1280;
document.addEventListener("DOMContentLoaded", function(event) {
	setBg();
});
window.addEventListener("resize", function(event) {
	setBg();
});
function setBg() {
	width = window.innerWidth;
	
	// select image based on drawable area's size
	var flickrLink;
	// ignore these lines.  The height of these images is smaller than the header height.
	// if (width <= 240){
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3_m.jpg";
	// } else if (width <= 320) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3_n.jpg";
	// } else if (width <= 500) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3.jpg";
	// } else if (width <= 640) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3_z.jpg";
	// } else
	// if (width <= 800) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3_c.jpg";
	// } else if (width <= 1024) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_92a1a2aed3_b.jpg";
	// } else if (width <= 1600) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_6a61f5ba84_h.jpg";
	// } else if (width <= 2048) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_000c0fadc6_k.jpg";
	// } else if (width <= 3051) {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_dc9c9ae6de_o.jpg";	
	// } else {
	// 	flickrLink = "https://farm9.staticflickr.com/8230/8431583246_6a61f5ba84_h.jpg";
	// 	// default to something medium sized
	// }
	
	// document.getElementById("header").style.backgroundImage = "url('./images/purpletint.png'), url("+flickrLink+")";	
	// document.getElementById("header").style.backgroundSize = "initial, cover";
	// document.getElementById("header").style.backgroundRepeat = "repeat, no-repeat";
}
