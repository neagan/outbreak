'use strict';

module.exports = Ball;

function Ball(rad, color) {
  // Ball properties
  this.rad = rad;
  this.color = color || 'red';

  // Ball starting location
  this.x = 380;
  this.y = 461;

  this.x_speed = 0;
  this.y_speed = 0;

  // State of direction b

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Ball.prototype.render = function() {
  // Create ball
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
  this.ctx.stroke();
  this.ctx.fill();
}

Ball.prototype.update = function() {
  // Update ball
  // if (this.state === 'start') {
  //   this.x += 1;
  //   this.y -= 1;
  // }
  this.bounce();
  console.log(this.x_speed);
  // console.log(this.y_speed);

  this.x += this.x_speed;
  this.y -= this.y_speed
}

Ball.prototype.bounce = function() {
  // Left wall
  if (this.x <= this.rad + 1) {
    this.x_speed = -this.x_speed;
  // Right wall
  } else if (this.x >= canvas.width - (this.rad + 1)) {
    this.x_speed = -this.x_speed;
  // Top wall
  } else if (this.y <= this.rad + 1) {
    this.y_speed = -this.y_speed;
  // Bottom wall
  } else if (this.y >= canvas.height - (this.rad + 1)) {
    this.y_speed = -this.y_speed;
  }
}

Ball.prototype.start = function() {
  // Set initial ball speed
  this.x_speed = 5;
  this.y_speed = 5;
}

Ball.prototype.clear = function() {
  // Clear ball
  this.ctx.clearRect(this.x - 11, this.y - 11, 22, 22);
}
