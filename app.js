const hamburger = document.querySelector(".hamburger");
const burgerItems = document.querySelector(".hamburger-items");
const card = document.querySelectorAll(".project-card");

hamburger.addEventListener("click", mobileMenu);
burgerItems.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  burgerItems.classList.toggle("show");
}
