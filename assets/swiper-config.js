const swiperIngredientsList = new Swiper(".ingredients-list__content", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 8,
  allowSlideNext: true,
  autoHeight: true,
  centeredSlides: true,
  watchOverflow: true,

  breakpoints: {
    450: {
      slidesPerView: 2.1,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: false,
    },
    991: {
      spaceBetween: 16,
      slidesPerView: 2,
      centeredSlides: false,
    },
    1300: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.ingredient-btn-next',
  },
});

const swiperRunningLine = new Swiper(".running-line__content", {
  spaceBetween: 10,
  loop: true,
  slidesPerView: "auto",
  speed: 2000,
  allowTouchMove: false,

  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
})

