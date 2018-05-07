import {desktop, tab } from './mediaQueries';
const wrapper = document.querySelector('.wrapper__inner-container');
/*const wrapperOuter = document.querySelector('.wrapper__outer-container');*/
/*const wrapperOuterContainer = document.querySelector('.wrapper__outer-container');*/
const reservationModule = wrapper.querySelector('.header__reservation__outer-container');
const noRestaurant = reservationModule && !reservationModule.classList.contains('bar-restaurant__header--reservation-hotel');
const noSeminars = reservationModule && !reservationModule.classList.contains('seminars__header--reservation-hotel');

let initParametersDesktopBooking;

/*------------------------------------*/
/*DESKTOP*/
/*------------------------------------*/

if (reservationModule) {




const reservationContainer = wrapper.querySelector('.header__reservation');
const bookUiContainer = reservationContainer.querySelector('.ui-container');


let bookUiBg;
let zIndexMenuBgOnScroll;
/*let bookUiContainerInBookUiBg;*/
let uiTop;
let uiTopMargin;
let reservationTop;
let thresholdBookOnTop;
let wrapperTop;
let status;

function getParameters() {

  uiTop = bookUiContainer.getBoundingClientRect().top;
  reservationTop = reservationContainer.getBoundingClientRect().top;
  uiTopMargin = uiTop - reservationTop;

  wrapperTop = wrapper.scrollTop;

  /*console.log('uiTop:', uiTop);*/
  /*console.log('reservationTop:', reservationTop);*/
  /*console.log('uiTopMargin:', uiTopMargin);*/



  thresholdBookOnTop = reservationTop + uiTopMargin + wrapperTop;
  /*console.log('thresholdBookOnTop:', thresholdBookOnTop);*/
}
/*function appendUIContainerToBg() {
  bookUiContainer.classList.remove('fixed');
  bookUiBg.appendChild(bookUiContainer.cloneNode(true));
  bookUiBg.classList.add('fixed-out-of-wrapper');
  bookUiContainerInBookUiBg = bookUiBg.querySelector('.ui-container');
  wrapperOuter.insertBefore(bookUiBg, wrapperOuter.firstChild);
}*/
function positionBeforeThreshold() {
    status = 'before';
    /*console.log('before');*/
    /***********ABOUT BG**********/
    /*document.documentElement.style.setProperty('--zReservation', `calc(var(--zMenu) - 1)`); //NOT COMPATIBLE WITHOUT CSS VARIABLES*/
    /*document.documentElement.style.setProperty('--stickyMenuDesktopTop', `0px`); //NOT COMPATIBLE WITHOUT CSS VARIABLES*/
    wrapper.querySelector('.header__reservation').style.zIndex = zIndexMenuBgOnScroll - 1;
    if (document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container')) {
      document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').style.zIndex = zIndexMenuBgOnScroll - 1;
    } 
    if (document.querySelector('.header__menu.fixed-out-of-wrapper')) {
      document.querySelector('.header__menu.fixed-out-of-wrapper').classList.remove('translated');
    }
    if (document.querySelector('.ui-container__background-on-scroll.fixed-out-of-wrapper')) {
      document.querySelector('.ui-container__background-on-scroll.fixed-out-of-wrapper').classList.remove('translated');
    }
    if (document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').classList) {
      document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').classList.remove('translated');
    }

}
function positionAfterThreshold() {
    status = 'after';
    /*console.log('after');*/
    /***********ABOUT BG**********/
    /*document.documentElement.style.setProperty('--zReservation', `calc(var(--zMenu) + 1)`); //NOT COMPATIBLE WITHOUT CSS VARIABLES*/
    wrapper.querySelector('.header__reservation').style.zIndex = zIndexMenuBgOnScroll + 1;
    /*document.documentElement.style.setProperty('--stickyMenuDesktopTop', `${(noRestaurant && noSeminars) ? 'var(--reservationUIContainerHeight)' : '0px'}`); //NOT COMPATIBLE WITHOUT CSS VARIABLES*/
    document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').style.zIndex = zIndexMenuBgOnScroll + 1;
    if (noRestaurant && noSeminars) {
      if (document.querySelector('.header__menu.fixed-out-of-wrapper').classList) {
        document.querySelector('.header__menu.fixed-out-of-wrapper').classList.add('translated');
      }
      if (document.querySelector('.ui-container__background-on-scroll.fixed-out-of-wrapper').classList) {
        document.querySelector('.ui-container__background-on-scroll.fixed-out-of-wrapper').classList.add('translated');
      }
      if (document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').classList) {
        document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper .header__reservation__inner-container').classList.add('translated');
      }
    } 
    bookUiBg.style.visibility = 'visible';
}


initParametersDesktopBooking = (e) => {
  /*bookUiContainerInBookUiBg = document.querySelector('.ui-container.fixed-out-of-wrapper');*/
  bookUiBg = document.querySelector('.ui-container__background-on-scroll.fixed-out-of-wrapper');
  bookUiBg.classList.add('fixed-out-of-wrapper');
  bookUiBg.style.visibility = 'hidden';
  zIndexMenuBgOnScroll = parseInt(window.getComputedStyle(bookUiBg)['z-index'], 10);

  if (!desktop.matches) {
    return;
  }


  /*appendUIContainerToBg(); */


  window.setTimeout(() => {

    getParameters();

    if (wrapper.scrollTop < thresholdBookOnTop) {
      positionBeforeThreshold();
    } else  {
      positionAfterThreshold();
    }
    wrapper.addEventListener('scroll', handleStickyBook);

  }, 500)
}



function handleStickyBook(e) {
  const scroll = Math.abs(e.target.scrollTop);
  if (scroll < thresholdBookOnTop) {
    if (status === 'before') {
      return
    } else {
      positionBeforeThreshold();
      return;
    }
  } else {
    if (status === 'after') {
      return
    } else {
      positionAfterThreshold();
      return;
    }
  }
}

window.addEventListener("resize", initParametersDesktopBooking);
desktop.addListener(initParametersDesktopBooking);
tab.addListener(initParametersDesktopBooking);

} else {
  initParametersDesktopBooking = () => {
    console.warn('there is on reservation module');
  }
}

export { initParametersDesktopBooking };
