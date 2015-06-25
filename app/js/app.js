'use strict';

var Layout = require('./layout');

module.exports = App;

function App() {
  this.x = 1;
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
};

App.prototype.init = function() {

};

App.prototype.run = function() {
  var _this = this;

  requestAnimationFrame(function() {

    if (_this.x % 2 === 0) {
      _this.ctx.fillStyle = 'green';
    } else {
      _this.ctx.fillStyle = 'blue';
    }

    _this.ctx.fillRect(10, 10, _this.x, 100);

    if (_this.x <= 100) {
      console.log(_this.x);
      _this.x++;
      _this.run();
    }
  });
};
