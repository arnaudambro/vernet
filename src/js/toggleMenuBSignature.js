const hamburgerBSignature = document.querySelector('.header__top--company-menu');
const divBSignature = document.querySelector('.b-signature');
const buttonClosBSignature = document.querySelector('.b-signature__close-button');


if (hamburgerBSignature && divBSignature && buttonClosBSignature) {

  function handleToggleMenu(e) {

    hamburgerBSignature.classList.toggle('active');
    divBSignature.classList.toggle('active');
  }

  hamburgerBSignature.addEventListener('click', handleToggleMenu)
  buttonClosBSignature.addEventListener('click', handleToggleMenu)
}
