
import { touchEvent } from './handleClickAndTouch';
const divLanguage = document.querySelector('.header__top--infos-language');

if (divLanguage) {

  const buttonLanguage = divLanguage.querySelector('.angle-down-div');
  const listLanguages = divLanguage.querySelector('.languages');


  function toggleLanguage (e) {


    window.removeEventListener(touchEvent, toggleLanguage);
    if (this === window) {
      console.log('window');
      listLanguages.classList.remove('active');
      buttonLanguage.classList.remove('active');

    } else if (listLanguages.classList.contains('active')) {
      console.log('no active');
      listLanguages.classList.remove('active');
      buttonLanguage.classList.remove('active');
      
    } else {
      console.log('active');
      listLanguages.classList.add('active');
      buttonLanguage.classList.add('active');
      window.setTimeout(() => {
        window.addEventListener(touchEvent, toggleLanguage);
      }, 50);
    }
  }



  buttonLanguage.addEventListener(touchEvent, toggleLanguage);
  
}
