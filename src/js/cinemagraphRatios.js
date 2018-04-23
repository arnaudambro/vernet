

/*------------------------------------*/
/*BOOK*/
/*------------------------------------*/

const cinemagraphRoom = document.querySelector('.cinemagraph__room');



if (cinemagraphRoom) {

  function handleCinemagraphRoom(e) {
    /*console.log(e);*/
    const videoRatio = cinemagraphRoom.getBoundingClientRect().width / cinemagraphRoom.getBoundingClientRect().height;
    /*document.documentElement.style.setProperty('--videoRoomRatio', `${videoRatio}`);*/

    const cinemagraphRoomPortrait = window.matchMedia(`(max-aspect-ratio: ${videoRatio}`); 
    const cinemagraphRoomLandscape = window.matchMedia(`(min-aspect-ratio: ${videoRatio}`);

    if (cinemagraphRoomPortrait.matches || (window.innerHeight * videoRatio >= window.innerWidth)) {
      /*console.log('portrait');*/
      cinemagraphRoom.classList.add('portrait')
      cinemagraphRoom.classList.remove('landscape')
      cinemagraphRoom.style.height = '105vh';
      cinemagraphRoom.style.width = `calc(105vh * ${videoRatio})`
    }
    if (cinemagraphRoomLandscape.matches || (window.innerHeight * videoRatio < window.innerWidth)) {
      /*console.log('landscape');*/
      cinemagraphRoom.classList.remove('portrait')
      cinemagraphRoom.classList.add('landscape')
      cinemagraphRoom.style.height = `calc(115vw / ${videoRatio})`;
      cinemagraphRoom.style.width = `115vw`
    }


  }



  window.addEventListener('DOMContentLoaded', handleCinemagraphRoom)
  window.addEventListener('resize', handleCinemagraphRoom)
  window.addEventListener('orientationchange', handleCinemagraphRoom)
  window.addEventListener('load', handleCinemagraphRoom)

  
}


/*------------------------------------*/
/*CHAMPAGNE MOBILE*/
/*------------------------------------*/

const cinemagraphChampagneMobile = document.querySelector('.cinemagraph__champagne--mobile');


if (cinemagraphChampagneMobile) {

  function handleCinemagraphChampagneMobile(e) {
    const videoChampagneRatio = cinemagraphChampagneMobile.getBoundingClientRect().width / cinemagraphChampagneMobile.getBoundingClientRect().height;
    /*const videoChampagneRatio = 636/358;*/
    /*document.documentElement.style.setProperty('--videoChampagneMobileRatio', `${videoChampagneRatio}`);*/
    const containerRatio = cinemagraphChampagneMobile.parentElement.getBoundingClientRect().width / cinemagraphChampagneMobile.parentElement.getBoundingClientRect().height;

    if (containerRatio <= videoChampagneRatio) {
      cinemagraphChampagneMobile.classList.add('portrait')
      cinemagraphChampagneMobile.classList.remove('landscape')
    }
    if (containerRatio > videoChampagneRatio) {
      cinemagraphChampagneMobile.classList.remove('portrait')
      cinemagraphChampagneMobile.classList.add('landscape')
    }
  }



  document.addEventListener('DOMContentLoaded', handleCinemagraphChampagneMobile)
  window.addEventListener('resize', handleCinemagraphChampagneMobile)
  window.addEventListener('orientationchange', handleCinemagraphChampagneMobile)
  window.addEventListener('load', handleCinemagraphChampagneMobile)
  
}


/*------------------------------------*/
/*CHAMPAGNE DESKTOP*/
/*------------------------------------*/

const cinemagraphChampagneDesktop = document.querySelector('.cinemagraph__champagne--tab-desktop');


if (cinemagraphChampagneDesktop) {


  function handleCinemagraphChampagneDesktop(e) {
    const videoChampagneRatio = cinemagraphChampagneDesktop.getBoundingClientRect().width / cinemagraphChampagneDesktop.getBoundingClientRect().height;
    /*const videoChampagneRatio = 636/358;*/
    /*document.documentElement.style.setProperty('--videoChampagneDesktopRatio', `${videoChampagneRatio}`);*/
    const containerRatio = cinemagraphChampagneDesktop.parentElement.getBoundingClientRect().width / cinemagraphChampagneDesktop.parentElement.getBoundingClientRect().height;

    if (containerRatio <= videoChampagneRatio) {
      cinemagraphChampagneDesktop.classList.add('portrait')
      cinemagraphChampagneDesktop.classList.remove('landscape')
    }
    if (containerRatio > videoChampagneRatio) {
      cinemagraphChampagneDesktop.classList.remove('portrait')
      cinemagraphChampagneDesktop.classList.add('landscape')
    }
  }



  document.addEventListener('DOMContentLoaded', handleCinemagraphChampagneDesktop)
  window.addEventListener('resize', handleCinemagraphChampagneDesktop)
  window.addEventListener('orientationchange', handleCinemagraphChampagneDesktop)
  window.addEventListener('load', handleCinemagraphChampagneDesktop)



}


/*------------------------------------*/
/*CAFÉ DESKTOP*/
/*------------------------------------*/

const cinemagraphCafe = document.querySelector('.cinemagraph__cafe');


if (cinemagraphCafe) {

  function handleCinemagraphCafe(e) {
    const videoCafeRatio = cinemagraphCafe.getBoundingClientRect().width / cinemagraphCafe.getBoundingClientRect().height;
    /*const videoCafeRatio = 636/358;*/
    /*document.documentElement.style.setProperty('--videoCafeRatio', `${videoCafeRatio}`);*/
    const containerRatio = cinemagraphCafe.parentElement.getBoundingClientRect().width / cinemagraphCafe.parentElement.getBoundingClientRect().height;

    
    if (containerRatio <= videoCafeRatio) {
      cinemagraphCafe.classList.add('portrait')
      cinemagraphCafe.classList.remove('landscape')
    }
    if (containerRatio > videoCafeRatio) {
      cinemagraphCafe.classList.remove('portrait')
      cinemagraphCafe.classList.add('landscape')
    }
  }



  document.addEventListener('DOMContentLoaded', handleCinemagraphCafe)
  window.addEventListener('resize', handleCinemagraphCafe)
  window.addEventListener('orientationchange', handleCinemagraphCafe)
  window.addEventListener('load', handleCinemagraphCafe)



  
}
