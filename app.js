let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

/* This code below maked the hamburger menu turn into X or back to burger */
menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

// This code makes it so when we click on one of the menu items, it closes or retracts back. 
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    body.classList.toggle("open");
  });
});

// SLideshow
$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true
  });
});