import {desktop, tab } from './mediaQueries';

/*------------------------------------*\
    SLIDESHOW CORE
\*------------------------------------*/

function createRoomTypeSlideshow(divAroundCards, divCards, divArrowLeft, divArrowRight, desktopMedia, tabMedia) {

  const slideshowPicture = divCards[0];
  const picturesNumber = divCards.length;
  let transitionDistance;
  let CURRENT_SLIDE = 0;
  let visibleSlides = 0;

  function positionSlideshow(e) {
    window.setTimeout(() => {

      const picWidth = slideshowPicture.getBoundingClientRect().width;
      const picMargin = parseFloat(window.getComputedStyle(slideshowPicture)['margin-right'].replace('px', ''));

      transitionDistance = picWidth + picMargin;

      divAroundCards.style.transform = `translateX(-${CURRENT_SLIDE * transitionDistance}px)`;

      if (desktopMedia.matches) {
        visibleSlides = 3;
      } else if (tabMedia.matches) {
        visibleSlides = 2;
      } else {
        visibleSlides = 1;
      }
    }, 500)
  }


  function handleStartSlideshow(e) {


    const slideshowIsLeft = divAroundCards.style.transform === `translateX(0px)`;
    const slideshowIsRight = divAroundCards.style.transform === `translateX(-${(picturesNumber - visibleSlides) * transitionDistance}px)`;
    
    if (this === divArrowLeft && slideshowIsLeft) {
      return;
    } else if (this === divArrowRight && slideshowIsRight) {
      return;
    }

    if (this === divArrowLeft) {
      CURRENT_SLIDE--;
      divAroundCards.style.transform = `translateX(-${CURRENT_SLIDE * transitionDistance}px)`;
    } else if (this === divArrowRight) {
      CURRENT_SLIDE++;
      divAroundCards.style.transform = `translateX(-${CURRENT_SLIDE * transitionDistance}px)`;
    }

  }


  /*------------------------------------*\
      EVENT LISTENERS
  \*------------------------------------*/


  document.addEventListener("DOMContentLoaded", positionSlideshow);
  desktopMedia.addListener(positionSlideshow);
  tab.addListener(positionSlideshow);
  window.addEventListener('resize', positionSlideshow);

  divArrowLeft.addEventListener('click', handleStartSlideshow);
  divArrowRight.addEventListener('click', handleStartSlideshow);
}


/*------------------------------------*\
    OFFERS
\*------------------------------------*/


const slideshowOffersContent = document.querySelector('.slideshow-offers__content');
if (slideshowOffersContent) {
  const slideshowPictures = [...document.querySelectorAll('.slideshow-offers__card')];

  const arrowLeft = document.querySelector('.slideshow-offers__arrow--container-left');
  const arrowRight = document.querySelector('.slideshow-offers__arrow--container-right');


  createRoomTypeSlideshow(slideshowOffersContent, slideshowPictures, arrowLeft, arrowRight, desktop, tab);
}
