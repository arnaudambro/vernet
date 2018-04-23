import {desktop, tab, mobile } from './mediaQueries';

const loadingBackground = document.querySelector('.loading__background');
const wrapper = document.querySelector('.wrapper__outer-container');
const headerBack = document.querySelector('.header__back');

function handleLoad(e) {
  /*console.log('hand load');*/
  if (!loadingBackground) {
    /*console.log('no loading background');*/
    wrapper.style.display = '';
    return;
  }

  if (e.type === 'DOMContentLoaded') {
    /*console.log(e.type);*/
    wrapper.style.display = '';
  } else if (e.type === 'load' || e.type ===  'loadeddata' || e.type ===  'playing') {
    /*console.log(e.type);*/
    if (headerBack.querySelector('.cinemagraph')) {
      /*console.log('cinemagraph');*/
      headerBack.querySelector('.cinemagraph').removeEventListener('loadeddata', handleLoad);
      headerBack.querySelector('.cinemagraph').removeEventListener('playing', handleLoad);
    }


    loadingBackground.style.opacity = 0;
    window.setTimeout(() => {
      loadingBackground.style.display = 'none';
      loadingBackground.style.opacity = 1;
    }, 2500)

  } else if (e.type === 'change') {
    loadingBackground.style.display = '';
    window.setTimeout(() => {
      loadingBackground.style.opacity = 0;
    }, 500)
    window.setTimeout(() => {
      loadingBackground.style.display = 'none';
      loadingBackground.style.opacity = 1;
    }, 2000)
  }
}

if (headerBack.querySelector('.cinemagraph')) {
  headerBack.querySelector('.cinemagraph').addEventListener('loadeddata', handleLoad);
  headerBack.querySelector('.cinemagraph').addEventListener('playing', handleLoad);
} else if (headerBack.querySelector('.img__img')) {
  /*console.log('img only');*/
  const img = new Image();
  img.src = headerBack.querySelector('.img__img').src
  img.addEventListener('load', handleLoad)
} else {
}

if (loadingBackground) {
  /*console.log('possible to handl load');*/
  window.addEventListener("DOMContentLoaded", handleLoad);
  desktop.addListener(handleLoad)
  tab.addListener(handleLoad)
  mobile.addListener(handleLoad)
} else {
  /*console.log('not possible to handl load');*/
}
