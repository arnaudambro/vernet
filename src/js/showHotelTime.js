const moment = require('moment-timezone');



function startTime() {
  if (!document.querySelector('.header__top--infos-local-time')) { return }
  document.querySelector('.header__top--infos-local-time').style.display = '';
  document.querySelector('.local-time').innerHTML = moment().tz('Europe/Paris').format('H:mm');
  window.setTimeout(function () {
    startTime()
  }, 60000);
}

startTime();

