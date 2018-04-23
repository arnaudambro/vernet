import {desktop, tab } from './mediaQueries';

const arrows = [...document.querySelectorAll('.slideshow-grid__controls--arrow--container')];
const counters = [...document.querySelectorAll('.slideshow-grid__controls--slide')];
const slidesContainers = [...document.querySelectorAll('.slideshow-grid__container:not(.no-slideshow)')];
// const slidesContainers = [...document.querySelectorAll('.slideshow-grid__container')];
const timer = 5000;
let transitionDuration;
let automaticSlideshow = {}

/*console.log('slidesContainers:', slidesContainers);*/


function initSlideshows(e) {

  if (document.querySelectorAll('.slideshow-grid__controls--arrow--container-right')) {

    [...document.querySelectorAll('.slideshow-grid__controls--arrow--container-right')].forEach((arrow, index) => {
      let timer;
      automaticSlideshow[`${index}`] = {
        arrow: arrow,
        timer,
      }
      automaticSlideshow[`${index}`].timer = setTimeout(() => automaticSlideshow[`${index}`].arrow.click(), timer);
    })
  }


  window.setTimeout(() => {
    /*const transitionBase = parseFloat(window.getComputedStyle(document.body).getPropertyValue('--transitionBase'));*/
    const transitionBase = 0.25;
    /*const slideshowFactor = window.getComputedStyle(document.body).getPropertyValue('--slideshowFactor');*/
    const slideshowFactor = 4;
    transitionDuration = transitionBase * slideshowFactor * 1000;
    /*GET AND STORE THE NUMBER OF SLIDES*/
    counters.forEach(counter => {
      let slides = document.querySelectorAll(`.slideshow-grid__container.${counter.dataset.slideshow}`);
      let numberOfSlides = 0;
      /*let arrowRight = document.querySelector(`.slideshow-grid__controls--arrow--container-right.${counter.dataset.slideshow}`)*/
      slides.forEach(slide => {
        numberOfSlides = Math.max(slide.querySelector(`.slideshow-grid__content`).children.length, numberOfSlides);
      })
      counter.querySelector('.total').dataset.numberOfSlides = numberOfSlides;
      counter.querySelector('.total').innerText = `${numberOfSlides}`;
      counter.querySelector('.current').dataset.currentSlide = 1;
      counter.querySelector('.current').innerText = '1';

    })

    /*ADJUST IMAGE SIZES*/
    slidesContainers.forEach(container => {
      /* get container width */
      const containerWidth = container.getBoundingClientRect().width;
      container.dataset.width = containerWidth;
      [...container.querySelector('.slideshow-grid__content').children].forEach((pic, i) => {
        /* setting the width of each pic (one shot) */
        pic.style.width = `${containerWidth}px`;
        /* flexbox ordering : the last in first in case we click on the left (to repeat each time) */
        const index = i + 1;
        index === (parseInt([...container.querySelector('.slideshow-grid__content').children].length, 10))
        ? pic.style.order = 1
        : pic.style.order = index + 1;
      })

      /*translation to the first */
      container.querySelector('.slideshow-grid__content').style.transform = `translateX(-${container.dataset.width}px)`;
    })
  }, transitionDuration)
};

function handleSlideshow(e, arrow) {
  const clicked = arrow || this;
  /*console.log(clicked.parentNode.parentNode);*/
  Object.keys(automaticSlideshow).forEach((key, index) => {
      /*console.log('clearing');*/
      // clearTimeout(automaticSlideshow[`${index}`].timer);
  })
  /*console.log('clicked:', clicked);*/
  const right = clicked.classList.contains('slideshow-grid__controls--arrow--container-right');
  const containers = document.querySelectorAll(`.slideshow-grid__container.${clicked.dataset.slideshow}:not(.no-slideshow)`);
  const counter = document.querySelector(`.slideshow-grid__controls--slide.${clicked.dataset.slideshow}`);
  const currentSlide = parseFloat(counter.querySelector('.current').dataset.currentSlide);
  const numberOfSlides = parseFloat(counter.querySelector('.total').dataset.numberOfSlides);

  let nextSlide;

  // } else if (right) {
   if (right) {
    /*console.log('right:', right);*/
    currentSlide + 1 <= numberOfSlides 
    ? nextSlide = currentSlide + 1
    : nextSlide = 1;
  } else if (!right) {
    /*console.log('!right:', !right);*/
    currentSlide - 1 > 0 
    ? nextSlide = currentSlide - 1
    : nextSlide = numberOfSlides;
  }

  counter.querySelector('.current').dataset.currentSlide = nextSlide;
  counter.querySelector('.current').innerText = nextSlide;

  containers.forEach(container => {

    container.querySelector('.slideshow-grid__content').style.transform = `translateX(-${right * 2 * container.dataset.width}px)`;
    container.querySelector('.slideshow-grid__content').classList.add('active');
    /* flexbox reordering and bring back the translation where it should be*/
    /*const first = 1;*/
    const last = (parseInt([...container.querySelector('.slideshow-grid__content').children].length, 10));
    const currentSlideOrder = 2;
    window.setTimeout(() => {
      container.querySelector('.slideshow-grid__content').classList.remove('active');
      [...container.querySelector('.slideshow-grid__content').children].forEach((pic, i) => {
        const index = i + 1;
        const indexForCalc = index + last;
        const nextCurrentForCalc = nextSlide + last;
        const orderForCalc = indexForCalc - nextCurrentForCalc + currentSlideOrder;
        const order = orderForCalc % last <= 0 ? (orderForCalc % last + last) : (orderForCalc % last);
        pic.style.order = order;
      })
      container.querySelector('.slideshow-grid__content').style.transform = `translateX(-${container.dataset.width}px)`;
      Object.keys(automaticSlideshow).forEach((key, index) => {
        if (clicked.parentNode === automaticSlideshow[`${index}`].arrow.parentNode) {
          clearTimeout(automaticSlideshow[`${index}`].timer);
          automaticSlideshow[`${index}`].timer = setTimeout(() => automaticSlideshow[`${index}`].arrow.click(), timer);
        } 
      })
    }, transitionDuration)
  })
}



document.addEventListener('DOMContentLoaded', initSlideshows);
desktop.addListener(initSlideshows);
tab.addListener(initSlideshows);

arrows.forEach(arrow => arrow.addEventListener('click', handleSlideshow));
