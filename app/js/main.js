window.onload = () => {
  document.querySelectorAll('.slider-section').forEach(container => {
    const currentSlideNum = container.querySelector('.slider-section__current-slide-num');
    const totalSlideNum = container.querySelector('.slider-section__total-slide-num');
    const buttonPrev = container.querySelector('.slider-section__arrow-prew');
    const buttonNext = container.querySelector('.slider-section__arrow-next');
    const swiperContainer = container.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        clickable: true,
      },
      on: {
        slideChange: function () {
          currentSlideNum.innerHTML = this.realIndex + 1;
        },
      },
    });

    totalSlideNum.innerHTML = `/${swiper.slides.length}`;

    buttonPrev.onclick = () => {
      swiper.slideTo(swiper.realIndex - 1);
    }

    buttonNext.onclick = () => {
      swiper.slideTo(swiper.realIndex + 1);
    }
  });


  const burgerButton = document.querySelector('.header-mobile__menu-button ');

  burgerButton.onclick = () => {
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('.header-mobile__menu-button').classList.toggle('header-mobile__menu-button-opened');
    document.querySelector('.header').classList.toggle('header-opened');
  }

  const location = document.querySelector('.header__location-current');

  location.onclick = () => {
    document.querySelector('.header__location-list').classList.toggle('header__location-hide');
  }

  const subMenus = document.querySelectorAll('.header__menu-item-parent');

  subMenus.forEach((el, key) => {
    el.onclick = () => {
      document.querySelectorAll('.header__submenu')[key].classList.toggle('header__submenu-hide');
    }
  })

}
