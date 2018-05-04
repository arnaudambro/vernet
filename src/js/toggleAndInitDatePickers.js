
import { touchEvent } from './handleClickAndTouch';
import Pikaday from 'pikaday';
import { lang } from './language';
import * as moment from 'moment';
import 'moment/locale/fr';

const wrapper = document.querySelector('.wrapper__inner-container');
const reservationContainer = wrapper.querySelector('.header__reservation');
let initDatePickers;

if (reservationContainer) { 


  const uiContainerMobile = reservationContainer.querySelector('.ui-container');
  let uiContainerFixed;

  let mobileCheckinField;
  let fixedCheckinField;
  let mobileCheckoutField;
  let fixedCheckoutField;

  // let mobileCheckinDatepicker;
  // let fixedCheckinDatepicker;
  let mobileCheckoutDatepicker;
  let fixedCheckoutDatepicker;

  // let checkinDatePickers;
  let checkoutDatePickers;

  let checkinRenderContainers;
  let checkoutRenderContainers;


  /*------------------------------------*/
  /*CHECK-IN SETUP*/
  /*------------------------------------*/

  const now = moment();
  const lastDate = moment().add(3, 'y');

  function createDatePicker(field, container, renderContainers, type, position) {

    return new Pikaday({
      field: field.querySelector('.input__content'),
      bound: false,
      container: container,
      // minDate: type === 'checkin' ? moment().add(1, 'd') : now.toDate(),
      minDate: moment().add(1, 'd').toDate(),
      maxDate: lastDate.toDate(),
      yearRange: [now.year(), lastDate.year()],
      firstDay: 1,
      defaultDate: moment().toDate(),
      format: 'D MMMM YYYY',
      i18n: {
        previousMonth : '',
        nextMonth     : '',
        months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        weekdays      : ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        weekdaysShort : ['D','L','M','M','J','V','S']
      },
      onSelect(date) {
        moment.locale(`${lang}`);
        const clickedDate = this.getMoment();
        if (type === 'checkin') {
          // const otherPosition = (position === 'fixed' ? 'mobile' : 'fixed');
          renderContainers.forEach(container => container.querySelector('.weekday').innerText = clickedDate.format('ddd').replace('.', ''));
          renderContainers.forEach(container => container.querySelector('.day-month').innerText = clickedDate.format('D MMM').replace('.', ''));
          renderContainers.forEach(container => container.querySelector('.year').innerText = clickedDate.format('YYYY').replace('.', ''));
          const checkoutMinDate = clickedDate.add(1, 'd').toDate();
          const proposedCheckoutDate = clickedDate.add(6, 'd');
          checkoutDatePickers[`${position}`].setMinDate(checkoutMinDate);
          checkoutDatePickers[`${position}`].setMoment(proposedCheckoutDate);
          checkinRenderContainers.forEach((picker, index) => {
              if (picker.classList.contains('active')) {
                picker.classList.remove('active');
                picker.classList.add('just-checked-in');
                // checkinDatePickers[`${otherPosition}`].setMoment(this.getMoment()); //NOT WORKING PROPERLY
              } else {
                // return;
              }
          });
        } else {
          renderContainers.forEach(container => container.querySelector('.weekday').innerText = clickedDate.format('ddd').replace('.', ''));
          renderContainers.forEach(container => container.querySelector('.day-month').innerText = clickedDate.format('D MMM').replace('.', ''));
          renderContainers.forEach(container => container.querySelector('.year').innerText = clickedDate.format('YYYY').replace('.', ''));
          window.setTimeout(() => {
            checkinRenderContainers.forEach((picker, index) => {
                if (picker.classList.contains('just-checked-in')) {
                  picker.classList.remove('just-checked-in');
                  checkoutRenderContainers[index].classList.add('active');
                } else {
                  checkoutRenderContainers[index].classList.remove('active');
                }
            });
          }, 50)
        }
      },
      onOpen() {
        moment.locale(`${lang}`);
        if (type === 'checkin') {
          window.setTimeout(() => { this.setMoment(moment().add(1, 'd')) }, 50); 
        } else {
          return;
        }
      }
    });
  }

  initDatePickers = () => {
  // window.setTimeout(() => {


    uiContainerFixed = document.querySelector('.ui-container.fixed-out-of-wrapper');

    /*------------------------------------*/
    /*CHECKIN DATEPICKERS*/
    /*------------------------------------*/

    checkinRenderContainers = [...document.querySelectorAll('.checkin-datepicker__container')];

    mobileCheckinField = uiContainerMobile.querySelector('.input__checkin');
    const mobileCheckinContainer = uiContainerMobile.querySelector('.checkin-datepicker');
    createDatePicker(mobileCheckinField, mobileCheckinContainer, checkinRenderContainers, 'checkin', 'mobile');


    fixedCheckinField = uiContainerFixed.querySelector('.input__checkin');
    const fixedCheckinContainer = uiContainerFixed.querySelector('.checkin-datepicker');
    createDatePicker(fixedCheckinField, fixedCheckinContainer, checkinRenderContainers, 'checkin', 'fixed');


    // checkinDatePickers = {
    //   mobile: mobileCheckinDatepicker,
    //   fixed: fixedCheckinDatepicker
    // }

    /*------------------------------------*/
    /*CHECKOUT DATEPICKERS*/
    /*------------------------------------*/

    checkoutRenderContainers = [...document.querySelectorAll('.checkout-datepicker__container')];

    mobileCheckoutField = uiContainerMobile.querySelector('.input__checkout');
    const mobileCheckoutContainer = uiContainerMobile.querySelector('.checkout-datepicker');
    mobileCheckoutDatepicker = createDatePicker(mobileCheckoutField, mobileCheckoutContainer, checkoutRenderContainers, 'checkout', 'mobile');


    fixedCheckoutField = uiContainerFixed.querySelector('.input__checkout');
    const fixedCheckoutContainer = uiContainerFixed.querySelector('.checkout-datepicker');
    fixedCheckoutDatepicker = createDatePicker(fixedCheckoutField, fixedCheckoutContainer, checkoutRenderContainers, 'checkout', 'fixed');

    checkoutDatePickers = {
      mobile: mobileCheckoutDatepicker,
      fixed: fixedCheckoutDatepicker
    }

    mobileCheckinField.addEventListener(touchEvent, toggleDatePicker);
    fixedCheckinField.addEventListener(touchEvent, toggleDatePicker);
    mobileCheckoutField.addEventListener(touchEvent, toggleDatePicker);
    fixedCheckoutField.addEventListener(touchEvent, toggleDatePicker);
    document.querySelectorAll('.datepicker__button--close').forEach(btn => btn.addEventListener(touchEvent, toggleDatePicker));
    document.querySelectorAll('.datepicker__button--validate').forEach(btn => btn.addEventListener(touchEvent, toggleDatePicker));

  // }, 50);
}




/*------------------------------------*/
/*TOGGLE DATEPICKER*/
/*------------------------------------*/
// let lastTarget;
// let counter = 0;
function toggleDatePicker(e) {
  e.stopPropagation();

  if (e.target.className && (e.target.className.includes('slideshow-grid__controls--arrow--container') || e.target.classList[0].includes('slideshow-grid__controls--arrow--container'))) {
    return;
  }

  if (this === window) {
    document.querySelectorAll('.input__check').forEach(picker => {
      picker.querySelector('.datepicker__container').classList.remove('active');
    });

    uiContainerMobile.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected');
    uiContainerFixed.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected');


    window.removeEventListener(touchEvent, toggleDatePicker);

    /*------------------------------------*/
    /*FERMER OR OK BUTTONS - CLOSE DATEPICKERS*/
    /*------------------------------------*/
  } else if (this.classList.contains('datepicker__button')) {
    window.removeEventListener(touchEvent, toggleDatePicker);
    document.querySelectorAll('.input__check').forEach(picker => {
      picker.querySelector('.datepicker__container').classList.remove('active');
    });
    uiContainerMobile.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected');
    uiContainerFixed.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected');
    return;
    /*------------------------------------*/
    /*TOGGLE FOR REAL*/
    /*------------------------------------*/
  } else {

    window.removeEventListener(touchEvent, toggleDatePicker);
    document.querySelectorAll('.input__check').forEach(picker => {
      (picker !== this) && (picker.querySelector('.datepicker__container').classList.remove('active'));
    });
    document.querySelectorAll('.input-select').forEach(inputSelect => {
      (inputSelect !== this) && (inputSelect.querySelector('.select__group').classList.remove('active'));
    });
    (this.querySelector('.datepicker__container').classList.toggle('active'));

    if (this.classList.contains('input__checkin')) {
      uiContainerMobile.classList.remove('checkout-selected', 'room-selected', 'adults-selected', 'children-selected');
      uiContainerFixed.classList.remove('checkout-selected', 'room-selected', 'adults-selected', 'children-selected');
    } else if (this.classList.contains('input__checkout')) {
      uiContainerMobile.classList.remove('checkin-selected', 'room-selected', 'adults-selected', 'children-selected');
      uiContainerFixed.classList.remove('checkin-selected', 'room-selected', 'adults-selected', 'children-selected');
    }

    window.setTimeout(() => {
      if (this.classList.contains('input__checkin')) {
        uiContainerMobile.classList.toggle('checkin-selected');
        uiContainerFixed.classList.toggle('checkin-selected');
      } else if (this.classList.contains('input__checkout')) {
        uiContainerMobile.classList.toggle('checkout-selected');
        uiContainerFixed.classList.toggle('checkout-selected');
      } 
      window.addEventListener(touchEvent, toggleDatePicker);
    }, 50) 
  }
}


} else {
  initDatePickers = () => {
    console.warn('there is no reservation container');
  }
}

export { initDatePickers };
