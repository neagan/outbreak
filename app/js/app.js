'use strict';

;(function() {
  var x = 0;
  function main() {
    //new GameManager(InputManager); // main loop contents here

    document.getElementById('log').innerHTML = x.toString();
    x++;
    if (x < 60) {
      window.requestAnimationFrame(main);
    }
  }

  main();
})();
