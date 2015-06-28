'use strict';

var Block = require('./block');
var Key = require('./key');

module.exports = Paddle;

function Paddle() {
  // this.width = width || 100;
  // this.color = color || 'blue';
  // this.pos = pos;
  this.x = 220;
  this.y = 513;

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Paddle.prototype.render = function() {
  // Paddle interior
  this.ctx.fillStyle = 'blue';
  this.ctx.fillRect(this.x, this.y, 100, 25);


  // Paddle outline
  this.ctx.strokeStyle = 'black';
  this.ctx.lineWidth = 1;
  this.ctx.strokeRect(this.x, this.y, 100, 25);
};

Paddle.prototype.moveLeft = function() {
  this.x -= 3;
  console.log('left');
}

Paddle.prototype.moveRight = function() {
  this.x += 3;
  console.log('right');
}

Paddle.prototype.update = function() {
  if (Key.isDown(Key.LEFT)) {
    this.moveLeft();
    console.log('update left');
  }

  if (Key.isDown(Key.RIGHT)) {
    this.moveRight();
    console.log('update right');
  }
}

Paddle.prototype.clear = function() {
  // Adjust clear for outline
  this.ctx.clearRect(this.x - 1, this.y - 1, 102, 27);
}

