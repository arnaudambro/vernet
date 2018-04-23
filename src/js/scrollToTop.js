import smoothscroll from 'smoothscroll-polyfill';
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

const wrapper = document.querySelector('.wrapper__inner-container');

const backToTop = document.querySelector('.back-to-top__button');

if (backToTop) {

  function handleScrollBackToTop(e) {
    console.log('try mt best connard');
    wrapper.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }


  backToTop.addEventListener('click', handleScrollBackToTop);
  
} else {
  console.warn('there is no back to top');
}
