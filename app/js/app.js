'use strict';

var Layout = require('./layout');
var Paddle = require('./paddle');
var Key = require('./key');
var Ball = require('./ball');

module.exports = App;

// Game app constructor
function App(dim) {

};

App.prototype.init = function() {
  var layout = new Layout({x: 0, y: 0}, {width: 100, height: 25}, {col: 7, row: 3}, 10);
  // layout.create();

  // Paddle is the player in this case
  this.player = new Paddle();
  this.player.render();

  // Render ball in starting position
  this.ball = new Ball(10);
  this.ball.render();
  this.ball.start();

  window.addEventListener('keyup', function(event) {
    Key.onKeyup(event);
  }, false);

  window.addEventListener('keydown', function(event) {
    Key.onKeydown(event);
  }, false);

  this.run();
};

App.prototype.update = function() {
  // Re render location of ball and player
  this.player.clear();
  this.ball.clear();

  this.player.update();
  this.player.render();

  this.ball.update(this.player);
  this.ball.render();
};

App.prototype.run = function() {
  var _this = this;

  requestAnimationFrame(function() {

    _this.update();

    _this.run();
  });
};


