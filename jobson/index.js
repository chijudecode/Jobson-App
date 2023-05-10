"use-strict";

const openNav = document.querySelector(".open-nav-btn");
const headerNavLink = document.querySelector(".header-nav-links");

openNav.addEventListener("click", function (e) {
  e.preventDefault();

  headerNavLink.classList.toggle("show-nav");
});
