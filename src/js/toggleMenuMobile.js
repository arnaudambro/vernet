// const wrapper = document.querySelector('.wrapper__inner-container');
let divMenu;
let hamburgerMenu;
let initToggleMenu;

if (document.querySelector('.header__menu')) {


initToggleMenu = (e) => {
  divMenu = document.querySelector('.header__menu.fixed-out-of-wrapper');
  hamburgerMenu = divMenu.querySelector('.header__menu--hamburger');
  hamburgerMenu.addEventListener('click', handleToggleMenu)
}

function handleToggleMenu(e) {
  hamburgerMenu.classList.toggle('active');
  divMenu.classList.toggle('active-mobile');
}

} else {
  initToggleMenu = () => { console.warn('there is no menu')}
}

export { initToggleMenu };



