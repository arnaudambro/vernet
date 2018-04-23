import {desktop, nodesktop } from './mediaQueries';
const wrapper = document.querySelector('.wrapper__inner-container');
/*const wrapperOuter = document.querySelector('.wrapper__outer-container');*/

/*------------------------------------*\
    APPEAR ON SCROLL - MOBILE
\*------------------------------------*/
const desktopMenu = wrapper.querySelector('.header__menu');
let initParametersDesktopMenu;
let initParametersMobileMenu;


if (desktopMenu) {

let cloneMenu;

let mobileBg;
let mobileCalendar;
let slogan;

/*const body = document.body;*/


let sloganInitY;
let bgHeight;
let thresholdBgOpacity0;
let thresholdBgOpacity1;
let spaceToTransitColor;
let wrapperTop;




initParametersMobileMenu = (e) => {
  /*console.log('init mobile');*/
  mobileBg = cloneMenu.querySelector('.header__menu--mobile-background');
  mobileCalendar = cloneMenu.querySelector('.header__menu--calendar');
  slogan = wrapper.querySelector('.header__slogan .first-line');

  nodesktop.addListener(initParametersMobileMenu);
  wrapper.addEventListener('scroll', handleMobileBgOpacity);

  window.setTimeout(() => {

    sloganInitY = slogan ? slogan.getBoundingClientRect().top : 70;
    bgHeight = mobileBg ? mobileBg.getBoundingClientRect().height : 105;
    wrapperTop = wrapper ? wrapper.scrollTop : 0;

    /*console.log('sloganInitY:', sloganInitY);*/
    /*console.log('bgHeight:', bgHeight);*/
    /*console.log('wrapperTop:', wrapperTop);*/

    thresholdBgOpacity0 = sloganInitY - 1.5 * bgHeight + wrapperTop;
    thresholdBgOpacity1 = sloganInitY - 1 * bgHeight + wrapperTop;
    spaceToTransitColor = thresholdBgOpacity1 - thresholdBgOpacity0;

    /*console.log('thresholdBgOpacity0:', thresholdBgOpacity0);*/
    /*console.log('thresholdBgOpacity1:', thresholdBgOpacity1);*/
    /*console.log('spaceToTransitColor:', spaceToTransitColor);*/

    

    if (wrapper.scrollTop > thresholdBgOpacity1) {
      // console.log('bg menu on');
      mobileBg.style.opacity = 1;
      mobileCalendar.style.opacity = 1;
    } else if (wrapper.scrollTop < thresholdBgOpacity0) {
      // console.log('bg menu off');
      mobileBg.style.opacity = 0;
      mobileCalendar.style.opacity = 0;
    }


  }, 500)
}


function handleMobileBgOpacity(e) {

  const scroll = Math.abs(e.target.scrollTop);

  if (scroll < thresholdBgOpacity0) {
    mobileBg.style.opacity = 0;
    mobileCalendar.style.opacity = 0;
    return;
  } else if (scroll > thresholdBgOpacity1) {
    mobileBg.style.opacity = 1;
    mobileCalendar.style.opacity = 1;
    return;
  }

  mobileBg.style.opacity = (scroll - thresholdBgOpacity0) / spaceToTransitColor;
  mobileCalendar.style.opacity = (scroll - thresholdBgOpacity0) / spaceToTransitColor;
}



// document.addEventListener("DOMContentLoaded", initParametersMobileMenu);
// window.addEventListener("load", initParametersMobileMenu);



/*------------------------------------*\
    DESKTOP
\*------------------------------------*/



const headerBg = wrapper.querySelector('.header__back');

const reservationContainer = wrapper.querySelector('.header__reservation');
const menuDesktopBgInHeader = desktopMenu.querySelector('.header__menu--desktop-background-in-header');
let bookUiContainer;
if (reservationContainer) {
  bookUiContainer = reservationContainer.querySelector('.ui-container')
}

let headerHeight;
let thresholdDeskBgColor0;
let thresholdDeskBgColor1;
let uiHeight;
let menuHeight;
let thresholdFixedMenu;
let menuBgInHeader;
let menuBgInContent;

function changeColorsBeforeThreshold() {
  /*document.documentElement.style.setProperty(`--headerMenuHoverColor`, `var(--headerFontColor)`); //NO COMPATIBLE WITHOUT CSS VARIABLES */
  /*document.documentElement.style.setProperty(`--headerMenuHoverBgColor`, `var(--headerMenuBackupBg)`); //NO COMPATIBLE WITHOUT CSS VARIABLES */
  document.querySelectorAll('.header__menu--item').forEach(item => {
    item.classList.add('before');
    item.classList.remove('after');
  })
  menuBgInHeader.style.height = '100%';
  menuDesktopBgInHeader.style.height = '100%';
  menuBgInContent.style.height = '0';
}

function changeColorsAfterThreshold() {
  /*document.documentElement.style.setProperty(`--headerMenuHoverColor`, `var(--headerMenuBackupBg)`); //NO COMPATIBLE WITHOUT CSS VARIABLES */
  /*document.documentElement.style.setProperty(`--headerMenuHoverBgColor`, `var(--headerFontColor)`); //NO COMPATIBLE WITHOUT CSS VARIABLES */
  document.querySelectorAll('.header__menu--item').forEach(item => {
    item.classList.remove('before');
    item.classList.add('after');
  })
  menuBgInHeader.style.height = '0';
  menuDesktopBgInHeader.style.height = '0';
  menuBgInContent.style.height = '100%';
}

initParametersDesktopMenu = (e) => {
  /*console.log('initdesktop');*/

  cloneMenu = document.querySelector('.header__menu.fixed-out-of-wrapper');
  menuBgInHeader = cloneMenu.querySelector('.header__menu--desktop-background-in-header');
  menuBgInContent = cloneMenu.querySelector('.header__menu--desktop-background-in-content');

  
  desktop.addListener(initParametersDesktopMenu);
  wrapper.addEventListener('scroll', handleDesktopBgOpacity);

  window.setTimeout(() => {

    /*console.log('init desktop deep');*/

    /*thresholdFixedMenu = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--topHeight').replace('px', ''));*/
    if (desktop.matches) {
      thresholdFixedMenu = document.querySelector('.header__top--company').getBoundingClientRect().height;
    } else {
      thresholdFixedMenu = document.querySelector('.header__top--hotel-logo.hotel-logo-half').getBoundingClientRect().top;
    }

    headerHeight = parseFloat(window.getComputedStyle(headerBg)['height'].replace('px', ''));
    uiHeight = bookUiContainer ? bookUiContainer.getBoundingClientRect().height : 0;
    headerHeight = parseFloat(window.getComputedStyle(headerBg)['height'].replace('px', ''));

    /*menuHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue('--menuHeight').replace('px', ''), 10);*/
    if (desktop.matches) {
      menuHeight = parseFloat(window.getComputedStyle(desktopMenu)['height'].replace('px', ''));
    } else {
      menuHeight = parseFloat(window.getComputedStyle(cloneMenu)['height'].replace('px', ''));
    }


    thresholdDeskBgColor0 = headerHeight - menuHeight - uiHeight;
    thresholdDeskBgColor1 = headerHeight - uiHeight;

    menuBgInHeader.style.height = '100%';
    menuBgInContent.style.height = '0';

    /*------------------------------------*/
        /*POSITION*/
    /*------------------------------------*/

    if (wrapper.scrollTop < thresholdFixedMenu) {
      desktopMenu.classList.remove('fixed');
      cloneMenu.classList.remove('active');
    } else {
      desktopMenu.classList.add('fixed');
      cloneMenu.classList.add('active');
    }

    /*------------------------------------*/
        /*COLORS*/
    /*------------------------------------*/

    if (wrapper.scrollTop < thresholdDeskBgColor0) {
      changeColorsBeforeThreshold()
      return;
    } else if (wrapper.scrollTop > thresholdDeskBgColor1) {
      changeColorsAfterThreshold()
      return;
    }



  }, 500)
}

function handleDesktopBgOpacity(e) {

  const scroll = Math.abs(e.target.scrollTop);

  /*------------------------------------*/
      /*POSITION*/
  /*------------------------------------*/

  if (scroll < thresholdFixedMenu) {
    desktopMenu.classList.remove('fixed');
    cloneMenu.classList.remove('active');
  } else {
    desktopMenu.classList.add('fixed');
    cloneMenu.classList.add('active');
  }


  /*------------------------------------*/
  /*COLORS*/
  /*------------------------------------*/

  if (scroll < thresholdDeskBgColor0) {
    changeColorsBeforeThreshold();
    return;
  } else if (scroll > thresholdDeskBgColor1) {
    changeColorsAfterThreshold();
    return;
  }

  menuBgInContent.style.height = `${menuHeight * (scroll - thresholdDeskBgColor0) / (thresholdDeskBgColor1 - thresholdDeskBgColor0)}px`;
  menuBgInHeader.style.height = `${menuHeight * (1 - (scroll - thresholdDeskBgColor0) / (thresholdDeskBgColor1 - thresholdDeskBgColor0))}px`;

}

} else {
  initParametersDesktopMenu = () => { console.warn('there is no menu')};
  initParametersMobileMenu = () => { console.warn('there is no menu')};
}

export { initParametersDesktopMenu, initParametersMobileMenu };
