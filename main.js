let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.oneclick = () => {
  menu.classList.toggle("fa-time");
  navbar.classList.toggle("active");
}

var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".anime-slide", {
  slidesPerview: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
  loop: true,
});
