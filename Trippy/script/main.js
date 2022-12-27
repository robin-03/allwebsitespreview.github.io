let menuIcon = document.getElementById("menu_icon");
let navLinks = document.getElementById("nav_links");

menuIcon.addEventListener("click", () => {
   navLinks.classList.toggle("menu_show");
   menuIcon.classList.toggle("fa-xmark");
});

window.addEventListener("scroll", () => {
   if (scrollY > 2) {
      navLinks.classList.remove("menu_show");
      menuIcon.classList.remove("fa-xmark");
   }
});

// Onload animaction

var preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
   preloader.style.display = "none";
});
