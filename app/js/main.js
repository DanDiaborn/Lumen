window.onload = () => {

  //SWIPER

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
          updateTabs();
          currentSlideNum.innerHTML = this.realIndex + 1;
        },
      },
    });

    totalSlideNum.innerHTML = `/${swiper.slides.length}`;

    buttonPrev.onclick = () => {
      swiper.slideTo(swiper.realIndex - 1);
    };

    buttonNext.onclick = () => {
      swiper.slideTo(swiper.realIndex + 1);
    };

    // TABS

    const updateTabs = () => {
      let currentSlide = swiper.activeIndex;
      let elementsInCurrentSlide = swiper.slides[currentSlide];
      let tubMenuItems = elementsInCurrentSlide.querySelectorAll('.details__menu-item');
      let tubsBody = elementsInCurrentSlide.querySelectorAll('.details__tub');

      tubMenuItems.forEach((el, key) => {
        el.onclick = () => {
          tubMenuItems.forEach((item, index) => {
            if (key === index) {
              item.classList.add('details__menu-item-active');
              tubsBody[index].classList.remove('details__hide');
            } else {
              item.classList.remove('details__menu-item-active');
              tubsBody[index].classList.add('details__hide');
            }
          });
        };
      });
    };
    updateTabs();

    // SCROLL

    swiper.slides.forEach(slide => {
      var scrollableElements = slide.querySelectorAll('.details__menu-wrapper');
      scrollableElements.forEach(function (element) {
        element.addEventListener('touchmove', function (event) {
          event.stopPropagation();
        });
      });
    });

  });



  //ADAPTIVE MENU

  const burgerButton = document.querySelector('.header-mobile__menu-button ');

  burgerButton.onclick = () => {
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('.header-mobile__menu-button').classList.toggle('header-mobile__menu-button-opened');
    document.querySelector('.header').classList.toggle('header-opened');
  }

  //DROPDAWNS

  const location = document.querySelector('.header__location-current');

  location.onclick = () => {
    document.querySelector('.header__location-list').classList.toggle('header__location-hide');
  }

  document.addEventListener('click', (event) => {
    if (!document.querySelector('.header__location-list').contains(event.target) &&
      !location.contains(event.target)
    ) {
      document.querySelector('.header__location-list').classList.add('header__location-hide');
    }
  });


  const subMenus = document.querySelectorAll('.header__menu-item-parent');
  const subMenusBodies = document.querySelectorAll('.header__submenu');


  subMenus.forEach((el, key) => {
    el.onclick = () => {
      for (let i = 0; i < subMenus.length; i++) {
        if (i === key) {
          subMenusBodies[key].classList.toggle('header__submenu-hide');
        }
        else {
          subMenusBodies[i].classList.add('header__submenu-hide');
        }
      }
    }
  })

  document.addEventListener('click', (event) => {
    for (let i = 0; i < subMenusBodies.length; i++) {
      if (!subMenusBodies[i].contains(event.target) && !subMenus[i].contains(event.target)) {
        subMenusBodies[i].classList.add('header__submenu-hide');
      }
    }
  });


  const subMenusFooter = document.querySelectorAll('.footer__menu-item-parent');
  const subMenusBodiesFooter = document.querySelectorAll('.footer__submenu');


  subMenusFooter.forEach((el, key) => {
    el.onclick = () => {
      for (let i = 0; i < subMenusFooter.length; i++) {
        if (i === key) {
          subMenusBodiesFooter[key].classList.toggle('footer__submenu-hide');
        }
        else {
          subMenusBodiesFooter[i].classList.add('footer__submenu-hide');
        }
      }
    }
  })

  document.addEventListener('click', (event) => {
    for (let i = 0; i < subMenusBodiesFooter.length; i++) {
      if (!subMenusBodiesFooter[i].contains(event.target) && !subMenusFooter[i].contains(event.target)) {
        subMenusBodiesFooter[i].classList.add('footer__submenu-hide');
      }
    }
  });

  //POPUP
  const mortgageButton = document.querySelector('.mortgage__button');


  mortgageButton.onclick = () => {
    document.querySelector('.popup').classList.remove('popup__hide');
    document.querySelector('body').classList.add('lock');
    document.querySelector('.popup__bg').classList.remove('popup__hide');
  }

  document.addEventListener('click', (event) => {
    if (!document.querySelector('.popup').contains(event.target) &&
      !mortgageButton.contains(event.target)
    ) {
      document.querySelector('.popup').classList.add('popup__hide');
      document.querySelector('body').classList.remove('lock');
      document.querySelector('.popup__bg').classList.add('popup__hide');
    }
  });


}
