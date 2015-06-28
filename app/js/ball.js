'use strict';

module.exports = Ball;

function Ball(rad, color) {
  // Ball properties
  this.rad = rad;
  this.color = color || 'red';

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Ball.prototype.render = function() {

  // Create ball
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(380, 468, this.rad, 0, 2 * Math.PI);
  this.ctx.stroke();
  this.ctx.fill();
}
