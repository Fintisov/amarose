const swiper = new Swiper('.ingredients-list', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 8,
  allowSlideNext: true,

  breakpoints: {
    576: {

    },
    767: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  },
  
  navigation: {
    nextEl: '.ingredient-btn-next',
    // prevEl: '.swiper-button-prev',
  },
});
