'use strict';

var Block = require('./block');

module.exports = Paddle;

function Paddle() {
  // this.width = width || 100;
  // this.color = color || 'blue';
  // this.pos = pos;

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Paddle.prototype.render = function(paddleState) {
  // Paddle interior
  this.ctx.fillStyle = paddleState.color || 'blue';
  this.ctx.fillRect(paddleState.x || 220, paddleState.y || 513, paddleState.width || 100, 25);

  // Paddle outline
  this.ctx.strokeStyle = 'black';
  this.ctx.lineWidth = 3;
  this.ctx.strokeRect(paddleState.x || 220, paddleState.y || 513, paddleState.width || 100, 25);
};
