/*import {desktop } from './mediaQueries';*/

/*const wrapper = document.querySelector('.wrapper__inner-container');*/
/*const reservationContainer = wrapper.querySelector('.header__reservation');*/
let reservationModule;
let menuMobile;

let toggleReservationButton;
let toggleReservationCalendar;
let closeReservationButton;
let bookButton;
let initToggleReservationMobile;

if (document.querySelector('.wrapper').querySelector('.header__reservation') && document.querySelector('.wrapper').querySelector('.header__menu') && document.querySelector('.button.button__book--module.no-desktop')) {


initToggleReservationMobile = (e) => {
  reservationModule = document.querySelector('.header__reservation__outer-container.fixed-out-of-wrapper');
  menuMobile = document.querySelector('.header__menu.fixed-out-of-wrapper');

  if (reservationModule) {

    toggleReservationButton = document.querySelector('.button.button__book--module.no-desktop');
    menuMobile && (toggleReservationCalendar = menuMobile.querySelector('.header__menu--calendar.calendar-for-menu.no-desktop'));
    closeReservationButton = reservationModule.querySelector('.menu-hamburger.active');
    bookButton = reservationModule.querySelector('.button.button__book');

    toggleReservationButton.addEventListener('click', toggleReservation)
    toggleReservationCalendar.addEventListener('click', toggleReservation)
    closeReservationButton.addEventListener('click', toggleReservation)
    bookButton.addEventListener('click', toggleReservation)
    
  }
}


function toggleReservation(e) {
  if (reservationModule.classList.contains('active')) {
    reservationModule.classList.remove('active');
    document.querySelector('.wrapper__inner-container').classList.remove('modal-open');
  } else {
    reservationModule.classList.add('active');
    document.querySelector('.wrapper__inner-container').classList.add('modal-open');
  }
}

} else {
  initToggleReservationMobile = (e) => { console.warn('there is no reservation module') };
}


export { initToggleReservationMobile };
