'use strict';

module.exports = Paddle;

function Paddle(width) {
  this.width = width;

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Paddle.prototype.render = function() {

}
