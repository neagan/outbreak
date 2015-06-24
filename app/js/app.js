'use strict';

module.exports = App;

function App() {
  this.x = 0;
};

App.prototype.run = function() {
  var _this = this;

  requestAnimationFrame(function() {
    document.getElementById('log').innerHTML = _this.x;
    _this.x++;

    if (_this.x <= 100) {
      _this.run();
    }
  });
};
