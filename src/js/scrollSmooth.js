// let lastPosition = -100;
const wrapper = document.querySelector('.wrapper__inner-container');
// const smooth = document.querySelector('.wrapper');


// const scroll = 
// window.requestAnimationFrame ||
// window.webkitRequestAnimationFrame ||
// window.mozRequestAnimationFrame ||
// window.msRequestAnimationFrame ||
// window.oRequestAnimationFrame ||
// /*IE Fallback, you can even fallback to onscroll*/
// function(callback) {
//   window.setTimeout(callback, 1000 / 60) //60 FPS
// };
// let i = 0;
// function loop() {
//   /* Avoid calculations if not needed*/
//   if (lastPosition == wrapper.scrollTop) {
//     scroll(loop);
//     return false;
//   } else lastPosition = wrapper.scrollTop;

//   const transform = `translate3d(0px, -${lastPosition / 1000}px, 0px)`;

//   smooth.style.webkitTransform = transform;
//   smooth.style.mozTransform = transform;
//   smooth.style.transform = transform;


//   scroll(loop)
// }

// /* Call the loop for the first time*/
// loop();

// const keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;  
// }

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
// disableScroll()

let scroll = 0;

function handleScroll(e) {
  e.preventDefault();
  const scrollingValue = e.wheelDeltaY || e.deltaY;
  scroll = Math.max(0, scroll - Math.max(-100, scrollingValue));
  wrapper.scrollTop = scroll / 5;

}


window.addEventListener('mousewheel', handleScroll, true)
window.addEventListener('wheel', handleScroll, true)
window.addEventListener('touchmove', handleScroll, true)
// window.addEventListener('keydown', handleScroll)
window.addEventListener('DOMMouseScroll', handleScroll, true)



