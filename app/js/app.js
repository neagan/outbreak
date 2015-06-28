'use strict';

var Layout = require('./layout');
var Paddle = require('./paddle');
var Key = require('./key');

module.exports = App;

// Game app constructor
function App(dim) {

};

App.prototype.init = function() {
  var layout = new Layout({x: 0, y: 0}, {width: 100, height: 25}, {col: 5, row: 3}, 10);
  layout.create();

  this.player = new Paddle();
  this.player.render();

  window.addEventListener('keyup', function(event) {
    Key.onKeyup(event);
  }, false);

  window.addEventListener('keydown', function(event) {
    Key.onKeydown(event);
  }, false);

  this.run();
};

App.prototype.update = function() {
  this.player.clear();
  this.player.update();
  this.player.render();
};

App.prototype.run = function() {
  var _this = this;

  requestAnimationFrame(function() {

    _this.update();

    _this.run();
  });
};


