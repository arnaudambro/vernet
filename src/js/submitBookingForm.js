import { touchEvent } from './handleClickAndTouch';

function connectSubmitButtons(e) {
  document.querySelector('#only-valid-submit-booking-button').click();
}

document.querySelectorAll('.button.button__book').forEach(button => {
  button.addEventListener(touchEvent, connectSubmitButtons)
})
