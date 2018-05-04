

const noJs = Array.prototype.slice.call(document.querySelectorAll('.no-js'));
const js = document.querySelectorAll('.js');
/*const fuckingArray = [js, noJs];*/


if (!NodeList.prototype.forEach) {
  /*console.log('ça ne marche pas');*/
  NodeList.prototype.forEach = function (fn, scope) {
    let i, len;
    for (i = 0, len = this.length; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };
} 

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}



noJs && noJs.forEach(element => element.style.display = 'none');
js && js.forEach(element => element.classList.remove('js'));
