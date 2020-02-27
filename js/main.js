window.onscroll = function() {stickyNav()};


var navbar = document.getElementById("nav");
var content = document.querySelector(".nav-offset");

var sticky = navbar.offsetTop;
var height = navbar.offsetHeight;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    content.style["margin-top"] = height +"px";
  } else {
    navbar.classList.remove("sticky");
    content.style["margin-top"] = 0;
  }
}