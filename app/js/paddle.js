'use strict';

var Block = require('./block');
var Key = require('./key');

module.exports = Paddle;

function Paddle(canvas) {
  this.x = 329;
  this.y = 473;

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
  if (this.x >= 10) {
    this.x -= 10;
  } else {
    // Bring paddle to wall
    this.x = 0;
  }
}

Paddle.prototype.moveRight = function() {
  if (this.x <= (canvas.width - 110)) {
    this.x += 10;
  } else {
    this.x = (canvas.width - 100);
  }
}

Paddle.prototype.moveUp = function() {
  if (this.y >= 10) {
    this.y -= 10;
  } else {
    this.y = 0;
  }
}

Paddle.prototype.moveDown = function() {
  if (this.y <= (canvas.height - 35)) {
    this.y += 10;
  } else {
    this.y = (canvas.height - 25);
  }
}

Paddle.prototype.update = function() {
  if (Key.isDown(Key.LEFT)) {
    this.moveLeft();
  }

  if (Key.isDown(Key.RIGHT)) {
    this.moveRight();
  }

  if (Key.isDown(Key.UP)) {
    this.moveUp();
  }

  if (Key.isDown(Key.DOWN)) {
    this.moveDown();
  }
}

Paddle.prototype.clear = function() {
  // Adjust clear for outline
  this.ctx.clearRect(this.x - 1, this.y - 1, 102, 27);
}

