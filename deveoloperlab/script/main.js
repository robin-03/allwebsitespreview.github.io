// Mobile nabigation menu
let menuTogler = document.getElementById("nav_toggler");
let menuLinks = document.getElementById("nav_links");

menuTogler.addEventListener("click", () => {
   menuLinks.classList.toggle("nav_links_active");
   menuTogler.classList.toggle("fa-xmark");
});

// Scroll animaction for img
const observer = new IntersectionObserver((imgentres) => {
   imgentres.forEach((imgentres) => {
      if (imgentres.isIntersecting) {
         imgentres.target.classList.add("img_show");
      } else {
         imgentres.target.classList.remove("img_show");
      }
   });
});

const hidenElement = document.querySelectorAll(".img_hidden");
hidenElement.forEach((el) => observer.observe(el));

// Scroll animaction for text
const imgObserver = new IntersectionObserver((textentres) => {
   textentres.forEach((textentres) => {
      if (textentres.isIntersecting) {
         textentres.target.classList.add("txt_show");
      } else {
         textentres.target.classList.remove("txt_show");
      }
   });
});

const hiddenImg = document.querySelectorAll(".txt_hidden");
hiddenImg.forEach((ll) => imgObserver.observe(ll));
