const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  spaceBetween: 25,
  centeredSlides: false,
  fade: 'true',
  loop: true,
  grabCursor: 'true',
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


breakpoints:{
  0: {
      slidesPerView:1,
  },
  767: {
      slidesPerView:1,
  },
  950: {
      slidesPerView:1,
  },
  1400: {
    slidesPerView:1,
  }
  },
});
