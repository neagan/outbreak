'use strict';

;(function() {
  var x = 1;
  function main() {
    //new GameManager(InputManager); // main loop contents here

    document.getElementById('log').innerHTML(x);
    x++;
    if (x < 60) {
      window.requestAnimationFrame(main);
    }
  }

  main();
})();
