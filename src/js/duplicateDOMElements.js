import { initDatePickers } from './toggleAndInitDatePickers';
import { initToggleReservationMobile } from './toggleMobileReservationModule';
import { initParametersDesktopBooking } from './appearOnScrollBookingModule';
import { initParametersDesktopMenu, initParametersMobileMenu } from './appearOnScrollMenuBg';
import { initToggleMenu } from './toggleMenuMobile';
import { initToogleRoomDesktop } from './toggleSelectRoomDesktop';
import { initToogleRoomMobile } from './toggleSelectRoomMobile';

const wrapper = document.querySelector('.wrapper__inner-container');
const wrapperOuter = document.querySelector('.wrapper__outer-container');

const reservationModule = wrapper.querySelector('.header__reservation__outer-container');

const desktopMenu = document.querySelector('.header__menu');


window.addEventListener('DOMContentLoaded', function(e) {

  if (reservationModule) {
    const newReservationModule = reservationModule.cloneNode(true);
    newReservationModule.classList.add('fixed-out-of-wrapper');
    newReservationModule.querySelector('.ui-container').classList.add('fixed-out-of-wrapper');
    newReservationModule.querySelector('.ui-container__background-on-scroll').classList.add('fixed-out-of-wrapper');
    wrapperOuter.insertBefore(newReservationModule, wrapper);
  } else {
    console.warn('there is no reservation container');
  }

  if (desktopMenu) {
    const cloneMenu = desktopMenu.cloneNode(true);
    cloneMenu.classList.add('fixed-out-of-wrapper');
    desktopMenu.classList.add('no-mobile', 'no-tab');
    wrapperOuter.insertBefore(cloneMenu, wrapper);    
  } else {
    console.warn('there is no menu');
  }

  window.setTimeout(() => {

    initDatePickers();
    initToggleReservationMobile();
    initParametersDesktopBooking();
    initParametersDesktopMenu();
    initParametersMobileMenu();
    initToggleMenu();
    initToogleRoomDesktop(e);
    initToogleRoomMobile(e);

  }, 100)

});




