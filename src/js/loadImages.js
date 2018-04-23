import {desktop, tab } from './mediaQueries';

const imgs = [...document.querySelectorAll('.img__img')];

function loadImages(e) {

  imgs.forEach(img => {
    const url = img.src;
    img.style.visibility = 'collapse';
    img.style.height = '0';
    img.style.width = '0';
    img.parentElement.style.backgroundImage = `url(${url})`;
  })

}


document.addEventListener('DOMContentLoaded', loadImages);
desktop.addListener(loadImages);
tab.addListener(loadImages);



