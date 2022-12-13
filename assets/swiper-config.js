try {
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

  const swiperProductHowItWork = new Swiper(".how-it-works-pdp__list", {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    allowSlideNext: true,
    autoHeight: true,
    watchOverflow: true,

    breakpoints: {
      414: {
        slidesPerView: 2.2,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
      }
    },

    navigation: {
      nextEl: '.ingredient-btn-next',
    },
  });

  const announcementMessage = new Swiper(".announcement-message", {
    loop: true,
    slidesPerView: 1,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,

    autoplay: {
      delay: 3000,
    },
  });

} catch (e) {

}
