// import {desktop, tab, mobile } from './mediaQueries';
const wrapper = document.querySelector('.wrapper__inner-container');
/*const wrapperChild = document.querySelector('.wrapper');*/
const floatingDivs = [...document.querySelectorAll('.floating_div')];
let thresholds = {};
//MOVING BY X%
const translationAmplitudeInPercent = 15;
const coefInitTranslate = 1;
/*document.documentElement.style.setProperty('--translationAmplitude', `${translationAmplitudeInPercent}%`); //NOT COMPATIBLE WITH CSS VARIABLES */
/*document.documentElement.style.setProperty('--initTranslate', `${- translationAmplitudeInPercent * coefInitTranslate}px`); //NOT COMPATIBLE WITH CSS VARIABLES */

/*const transInterval = 2 * translationAmplitudeInPercent; // positive and negative */



if (floatingDivs) {
  function initFloatingDivs(e) {
    const windowHeight = Math.floor(window.innerHeight);
    /*const stickyHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue('--reservationUIContainerHeight').replace('px', ''), 10) + parseInt(window.getComputedStyle(document.body).getPropertyValue('--menuHeight').replace('px', ''), 10); //NOT COMPATIBLE WITH CSS VARIABLES*/
    const stickyHeight = 
      document.querySelector('.header__reservation__inner-container').getBoundingClientRect().height //108px
      + wrapper.querySelector('.header__menu').getBoundingClientRect().height //menuHeight -> 35px en mobile, 64px en desktop
    /*const slideshowFactor = window.getComputedStyle(document.body).getPropertyValue('--slideshowFactor');*/

    floatingDivs.forEach((floatingDiv, index) => {
      const initTop = Math.floor(floatingDiv.parentNode.getBoundingClientRect().top);
      const divHeight = Math.floor(floatingDiv.parentNode.getBoundingClientRect().height);
      const transAmplitudeInPx = divHeight * translationAmplitudeInPercent / 100;
      const thresholdEnter = initTop - (windowHeight);
      const thresholdLeave = initTop + divHeight - stickyHeight;
      const interval = thresholdLeave - thresholdEnter;
      thresholds[`${index}`] = {
        /*initTop,*/
        transAmplitudeInPx,
        thresholdEnter,
        thresholdLeave,
        interval
      }
      /*console.log({initTop, thresholdEnter, windowHeight, stickyHeight, thresholdLeave});*/
    })
    
    wrapper.addEventListener('scroll', handleFloatingDiv)

  }

  function handleFloatingDiv(e) {

    floatingDivs.forEach((floatingDiv, index) => {
        const { /*initTop,*/ transAmplitudeInPx, thresholdEnter, thresholdLeave, interval } = thresholds[`${index}`];
        if (wrapper.scrollTop < thresholdEnter) {

          // (floatingDiv === document.getElementById('test-floating-div')) ? (wrapperChild.style.background = 'yellow') : '';
          return;
        } else if (wrapper.scrollTop > thresholdLeave) {
          // (floatingDiv === document.getElementById('test-floating-div')) ? (wrapperChild.style.background = 'green') : '';
          return;
        } else {
          /*(floatingDiv === document.getElementById('test-floating-div')) ? (wrapperChild.style.background = 'red') : '';*/
          const percent = (wrapper.scrollTop - thresholdEnter) / interval;
          const translateY = transAmplitudeInPx * (2 * percent - coefInitTranslate);
          /*console.log('translateY:', translateY);*/
          floatingDiv.style.transform = `translate3d(0, ${translateY}px, 0)`;
          /*document.documentElement.style.setProperty('--translateY', `${translateY}px`);*/
        }
      })

  }


  window.addEventListener('load', initFloatingDivs);
  window.addEventListener('resize', initFloatingDivs);
}

