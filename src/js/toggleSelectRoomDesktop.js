
import { touchEvent } from './handleClickAndTouch';
let selectRoomAdultsChildrens;

function initToogleRoomDesktop(e) {
  selectRoomAdultsChildrens = document.querySelectorAll('.input__room-adults-children');
  selectRoomAdultsChildrens.forEach(select => {
    const selectRoom = select.querySelector('.select__room');
    const selectAdults = select.querySelector('.select__adults');
    const selectChildren = select.querySelector('.select__children');
    const selectors = [selectRoom, selectAdults, selectChildren];
    selectRoom.querySelector('.select--number').innerHTML = document.getElementById('rooms-input').value;
    selectAdults.querySelector('.select--number').innerHTML = document.getElementById('adults-input').value ;
    selectChildren.querySelector('.select--number').innerHTML = document.getElementById('children-input').value;

      
    selectors.forEach(selector => {



      selector.querySelector('.fa-minus').addEventListener(touchEvent, function(e) {
        addOrRemoveItem(e, select, selectors, this)
      });
      selector.querySelector('.fa-plus').addEventListener(touchEvent, function(e) {
        addOrRemoveItem(e, select, selectors, this)
      });
    })
    addOrRemoveItem(e, select, selectors);
    select.addEventListener(touchEvent, toggleSelect);
  })
}


function addOrRemoveItem(e, selectRoomAdultsChildren, selectors, that: null) {
  e.stopPropagation();

  selectors.forEach(selector => {
    const actualNumber = parseInt(selector.querySelector('.select--number').innerHTML, 10);
    if (that === selector.querySelector('.fa-minus')) {
      selector.querySelector('.select--number').innerHTML = `${actualNumber === 0 ? 0 : actualNumber - 1}`;
    } else if (that === selector.querySelector('.fa-plus')) {
      selector.querySelector('.select--number').innerHTML = `${actualNumber === 10 ? 10 : actualNumber + 1}`;
    }
  })

  /*SHOW THE NEW NUMBERS*/
  const spanNumberOfRooms = selectRoomAdultsChildren.querySelector('.select__room--number');
  const spanNumberOfAdults = selectRoomAdultsChildren.querySelector('.select__adults--number');
  const spanNumberOfChildren = selectRoomAdultsChildren.querySelector('.select__children--number');

  const spanRooms = selectRoomAdultsChildren.querySelector('.select__room--text');
  const spanAdults = selectRoomAdultsChildren.querySelector('.select__adults--text');
  const spanChildren = selectRoomAdultsChildren.querySelector('.select__children--text');

  let numberOfRooms = parseInt(spanNumberOfRooms.innerHTML, 10);
  let numberOfAdults = parseInt(spanNumberOfAdults.innerHTML, 10);
  let numberOfChildren = parseInt(spanNumberOfChildren.innerHTML, 10);

  selectRoomAdultsChildrens.forEach(select => {
    select.querySelector('.input__content').value = `${numberOfRooms} chambre${numberOfRooms > 1 ? 's' : ''} / ${numberOfAdults} adulte${numberOfAdults > 1 ? 's' : ''} / ${numberOfChildren} enfant${numberOfChildren > 1 ? 's' : ''}`;
  });

  spanRooms.innerHTML = `chambre${numberOfRooms > 1 ? 's' : ''}`;
  spanAdults.innerHTML = `adulte${numberOfAdults > 1 ? 's' : ''}`;
  spanChildren.innerHTML = `enfant${numberOfChildren > 1 ? 's' : ''}`;

  /*ADD THE VALUES TO THE FORM*/
  document.getElementById('rooms-input').value = numberOfRooms;
  document.getElementById('adults-input').value = numberOfAdults;
  document.getElementById('children-input').value = numberOfChildren;
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


  if (e.target && e.target.className && e.target.className.includes('slideshow-grid__controls--arrow--container')) {
    return;
  }
  
  if (this === window) {
    document.querySelectorAll('.input-select').forEach(inputSelect => {
      inputSelect.querySelector('.select__group').classList.remove('active');
    });

    document.querySelectorAll('.input__room-adults-children').forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'room-selected', 'adults-selected', 'children-selected'));

    window.removeEventListener(touchEvent, toggleSelect);

  } else if (this.contains(e.target) && this !== e.target && e.target !== currentInputContent) {
    return;
  } else {
    window.removeEventListener(touchEvent, toggleSelect);
    document.querySelectorAll('.input__check').forEach(picker => {
      (picker !== this) && (picker.querySelector('.datepicker__container').classList.remove('active'));
    });
    document.querySelectorAll('.input-select').forEach(inputSelect => {
      (inputSelect !== this) && (inputSelect.querySelector('.select__group').classList.remove('active'));
    });

    if (this.classList.contains('input__room-adults-children')) {
      document.querySelectorAll('.input__room-adults-children').forEach(ui => ui.classList.remove('checkin-selected', 'checkout-selected', 'children-selected', 'adults-selected'));
    }

    (this.querySelector('.select__group').classList.toggle('active'));

    window.setTimeout(() => {
      if (this.classList.contains('input__room-adults-children')) {
        document.querySelectorAll('.input__room-adults-children').forEach(ui => ui.classList.toggle('room-selected'));
      }
      window.addEventListener(touchEvent, toggleSelect);
    }, 50) 
  }
}  
  



export { initToogleRoomDesktop }
