'use strict';

var Block = require('./block');

module.exports = Paddle;

function Paddle(pos, width, color) {
  this.width = width || 100;
  this.color = color || 'blue';
  this.pos = pos;

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Paddle.prototype.render = function() {
  // Paddle interior
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.pos.x, this.pos.y, this.width, 25);

  // Paddle outline
  this.ctx.strokeStyle = 'black';
  this.ctx.lineWidth = 3;
  this.ctx.strokeRect(this.pos.x, this.pos.y, this.width, 25);
};
