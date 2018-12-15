// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyTop()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
  if (window.pageYOffset >= sticky) {
    document.getElementById('myHeader').classList.add("sticky");
  } else {
    document.getElementById('myHeader').classList.remove("sticky");
  }
}