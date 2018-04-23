import { touchEvent } from './handleClickAndTouch';
let inputRoom;
let inputAdults;
let inputChildren;
/*let selectors = [];*/
let inputs = [];


/*let selectRoom;*/
/*let selectAdults;*/
/*let selectChildren;*/

let initToogleRoomMobile;

if (document.querySelectorAll('.ui-container')) {

initToogleRoomMobile = (e) => {


  inputRoom = document.querySelector('.ui-container.fixed-out-of-wrapper').querySelector('.input__room.no-desktop');
  inputAdults = document.querySelector('.ui-container.fixed-out-of-wrapper').querySelector('.input__adults.no-desktop');
  inputChildren = document.querySelector('.ui-container.fixed-out-of-wrapper').querySelector('.input__children.no-desktop');

  inputs = [inputRoom, inputAdults, inputChildren];

  inputs.forEach(input => {
    /*console.log('input:', input);*/
    addOrRemoveItem(e, input, null);

    input.querySelector('.fa-minus').addEventListener(touchEvent, function(e) {
      addOrRemoveItem(e, input, this)
    });
    input.querySelector('.fa-plus').addEventListener(touchEvent, function(e) {
      addOrRemoveItem(e, input, this)
    });
    input.addEventListener(touchEvent, toggleSelect);
  });
}


function populateInputs(input) {
  /*console.log('input:', input);*/
  let number;
  /*GET THE VALUES FROM THE FORM*/
  input === inputRoom && (number = document.getElementById('rooms-input').value);
  input === inputAdults && (number = document.getElementById('adults-input').value);
  input === inputChildren && (number = document.getElementById('children-input').value);

  /*console.log('number:', number);*/
  
  /*SHOW THE NEW NUMBERS*/
  const spanNumber = input.querySelector('.select--number')
  const spanText = input.querySelector('.select--text')

  input === inputRoom && (input.querySelector('.input__content').value = `${number} chambre${number > 1 ? 's' : ''}`);
  input === inputAdults && (input.querySelector('.input__content').value = `${number} adulte${number > 1 ? 's' : ''}`);
  input === inputChildren && (input.querySelector('.input__content').value = `${number} enfant${number > 1 ? 's' : ''}`);

  input === inputRoom && (spanText.innerHTML = `chambre${number > 1 ? 's' : ''}`);
  input === inputAdults && (spanText.innerHTML = `adulte${number > 1 ? 's' : ''}`);
  input === inputChildren && (spanText.innerHTML = `enfant${number > 1 ? 's' : ''}`);

  input === inputRoom && (spanNumber.innerHTML = number);
  input === inputAdults && (spanNumber.innerHTML = number);
  input === inputChildren && (spanNumber.innerHTML = number);


}

function addOrRemoveItem(e, input, that) {
  // e.stopPropagation();

  /*console.log('input:', input);*/
  /*console.log('that:', that);*/

  let actualNumber;

  input === inputRoom && (actualNumber = parseInt(document.getElementById('rooms-input').value, 10));
  input === inputAdults && (actualNumber = parseInt(document.getElementById('adults-input').value, 10));
  input === inputChildren && (actualNumber = parseInt(document.getElementById('children-input').value, 10));


    if (that === input.querySelector('.fa-minus')) {
      /*console.log('minus');*/
      actualNumber === 0 ? (actualNumber = 0) : actualNumber--;
    } else if (that === input.querySelector('.fa-plus')) {
      /*console.log('plus');*/
      actualNumber === 10 ? (actualNumber = 10) : actualNumber++;
    } else {
      /*console.log('ta gueule');*/
      populateInputs(input);
      return;
    }

  /*console.log('actualNumber:', actualNumber);*/

  input === inputRoom && (document.getElementById('rooms-input').value = actualNumber);
  input === inputAdults && (document.getElementById('adults-input').value = actualNumber);
  input === inputChildren && (document.getElementById('children-input').value = actualNumber);

  /*console.log(document.getElementById('rooms-input'));*/
  /*console.log(document.getElementById('adults-input'));*/
  /*console.log(document.getElementById('children-input'));*/

  populateInputs(input);
  return;

}



/*------------------------------------*/
/*TOGGLE SELECT*/
/*------------------------------------*/ 



function toggleSelect(e) {
  e.stopPropagation();
  let currentInputContent;
  document.querySelectorAll('.input-select').forEach(inputSelect => {
    if (inputSelect === this) {
      currentInputContent = inputSelect.querySelector('.input__content');
    }
  });

  if (e.target && e.target.classList[0] && e.target.classList[0].includes('slideshow-grid__controls--arrow--container')) {
    return;
  }
  /*console.log('toggle select');*/
  const uiContainers = document.querySelectorAll('.ui-container');
  /*CLICK SOMEWHERE ELSE THAN SELECT GROUP = HIDE SELECT GROUP*/
  if (this === window) {
    console.log('window');
    document.querySelectorAll('.input-select').forEach(inputSelect => {
      /*HIDE ANY SELECT GROUPS*/
      inputSelect.querySelector('.select__group').classList.remove('active');
    });
    uiContainers.forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected'));
    /*TURN OFF EVENT LISTENER TO WINDOW WHEN SELECT GROUP IS HIDDEN*/
    window.removeEventListener(touchEvent, toggleSelect);

    /*IF CLICK ON CHECK-IN OR CHECK-OUT*/
  } else if (this.contains(e.target) && this !== e.target && e.target !== currentInputContent) {
    return;
  } else {
    console.log('else');
    /*TURN OFF EVENT LISTENER TO WINDOW TO ALLOW ACTIONING OF SELECT GROUP*/
    window.removeEventListener(touchEvent, toggleSelect);
    document.querySelectorAll('.input-select').forEach(inputSelect => {
      /*HIDE ANY ALREADY OPENED SELECT GROUP WHICH IS NOT THE ONE WE CLICKED ON*/
      (inputSelect !== this) && (inputSelect.querySelector('.select__group').classList.remove('active'));
    });

    this === inputRoom && uiContainers.forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'adults-selected', 'children-selected'));

    this === inputAdults && uiContainers.forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'children-selected'));

    this === inputChildren && uiContainers.forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected'));


    /*TOGGLE THE SELECT GROUP WE CLICKED FOR*/
    (this.querySelector('.select__group').classList.toggle('active'));

    /*ADD EVENT LISTENER TO WINDOW TO HIDE SELECT GROUP WHEN CLICK SOMEWHERE ON THE WINDOW*/
    window.setTimeout(() => {
      this === inputRoom && uiContainers.forEach(ui => ui.classList.toggle('room-selected'));
      this === inputAdults && uiContainers.forEach(ui => ui.classList.toggle('adults-selected'));
      this === inputChildren && uiContainers.forEach(ui => ui.classList.toggle('children-selected'));
      window.addEventListener(touchEvent, toggleSelect);
    }, 50) 
  }
}

} else {
  initToogleRoomMobile = () => {
    /*console.warn('there is no reservation container');*/
  }
}

export { initToogleRoomMobile }
