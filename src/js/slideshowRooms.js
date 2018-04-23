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

      const picMargin = parseFloat(window.getComputedStyle(slideshowPicture)['margin-right'].replace('px', ''));
      const picWidth = slideshowPicture.getBoundingClientRect().width;

      transitionDistance = picWidth + picMargin;

      divAroundCards.style.transform = `translateX(-${CURRENT_SLIDE * transitionDistance}px)`;

      if (desktopMedia.matches) {
        visibleSlides = 1;
      } else if (tabMedia.matches) {
        visibleSlides = 1;
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
  tabMedia.addListener(positionSlideshow);
  window.addEventListener('resize', positionSlideshow);

  divArrowLeft.addEventListener('click', handleStartSlideshow);
  divArrowRight.addEventListener('click', handleStartSlideshow);
}


/*------------------------------------*\
    ROOMS
\*------------------------------------*/

const slideshowRoomsContent = document.querySelector('#rooms-content');
if (slideshowRoomsContent) {
  const slideshowRoomsCards = [...slideshowRoomsContent.querySelectorAll('.slideshow-rooms__card')];
  slideshowRoomsCards.forEach(card => {
    slideshowRoomsCards.indexOf(card) % 2 !== 0 ? card.classList.add('grid-layout-rooms-right') : card.classList.add('grid-layout-rooms-left')
  })

  const arrowLeftRooms = document.querySelector('#rooms-arrow-left');
  const arrowRightRooms = document.querySelector('#rooms-arrow-right');

  createRoomTypeSlideshow(slideshowRoomsContent, slideshowRoomsCards, arrowLeftRooms, arrowRightRooms, desktop, tab);
}


/*------------------------------------*\
    SUITES
\*------------------------------------*/

const slideshowSuitesContent = document.querySelector('#suites-content');
if (slideshowSuitesContent) {
  const slideshowSuitesCards = [...slideshowSuitesContent.querySelectorAll('.slideshow-rooms__card')];
  slideshowSuitesCards.forEach(card => {
    slideshowSuitesCards.indexOf(card) % 2 !== 0 ? card.classList.add('grid-layout-rooms-right') : card.classList.add('grid-layout-rooms-left')
  })

  const arrowLeftSuites = document.querySelector('#suites-arrow-left');
  const arrowRightSuites = document.querySelector('#suites-arrow-right');

  createRoomTypeSlideshow(slideshowSuitesContent, slideshowSuitesCards, arrowLeftSuites, arrowRightSuites, desktop, tab);
}

/*------------------------------------*\
    SEMINARS
\*------------------------------------*/

const slideshowSeminarsContent = document.querySelector('#seminars-content');
if (slideshowSeminarsContent) {
  const slideshowSeminarsCards = [...slideshowSeminarsContent.querySelectorAll('.slideshow-rooms__card')];
  slideshowSeminarsCards.forEach(card => {
    slideshowSeminarsCards.indexOf(card) % 2 === 0 ? card.classList.add('grid-layout-rooms-right') : card.classList.add('grid-layout-rooms-left')
  })

  const arrowLeftSuites = document.querySelector('#seminars-arrow-left');
  const arrowRightSuites = document.querySelector('#seminars-arrow-right');

  createRoomTypeSlideshow(slideshowSeminarsContent, slideshowSeminarsCards, arrowLeftSuites, arrowRightSuites, desktop, tab);
}



/*------------------------------------*\
    EACH ROOM OR SUITE
\*------------------------------------*/

const slideshowPictures = document.querySelectorAll('.slideshow-rooms__card--picture');
if (slideshowPictures) {
  slideshowPictures.forEach(slideshow => {
    const container = slideshow.querySelector('.slideshow-rooms__card--picture-content')
    const pictures = [...slideshow.querySelectorAll('.slideshow-rooms__card--picture-pic')];
    const arrowLeft = slideshow.querySelector('.slideshow-rooms__card--picture-arrow--container-left');
    const arrowRight = slideshow.querySelector('.slideshow-rooms__card--picture-arrow--container-right');

    createRoomTypeSlideshow(container, pictures, arrowLeft, arrowRight, desktop, tab);

  })
}
