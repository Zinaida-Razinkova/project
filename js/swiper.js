const swiper = new Swiper(".advantages__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".advantages__pagination ",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".advantages__button-next",
    prevEl: ".advantages__button-prev",
  },
});
