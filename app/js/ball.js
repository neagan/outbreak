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

Ball.prototype.update = function(player) {
  // Update ball
  // if (this.state === 'start') {
  //   this.x += 1;
  //   this.y -= 1;
  // }
  this.collision(player);

  this.x += this.x_speed;
  this.y -= this.y_speed
}

// Primitive ball bounce
// Glitch occurs when it directly impacts a corner
Ball.prototype.collision = function(player) {

  // TODO: Refactor this and make it look reasonable

  // Collision with wall

  // Upper right corner
  if (this.x >= canvas.width - (this.rad + 1) && this.y <= this.rad + 1) {
    this.x_speed = -this.x_speed;
    this.y_speed = -this.y_speed;
  // Upper left corner
  } else if (this.x <= this.rad + 1 && this.y <= this.rad + 1) {
    this.x_speed = -this.x_speed;
    this.y_speed = -this.y_speed;
  // Bottom left corner
  } else if (this.x <= this.rad + 1 && this.y >= canvas.height - (this.rad + 1)) {
    this.x_speed = -this.x_speed;
    this.y_speed = -this.y_speed;
  // Bottom right corner
  } else if (this.x >= canvas.width - (this.rad + 1) && this.y >= canvas.height - (this.rad + 1)) {
    this.x_speed = -this.x_speed;
    this.y_speed = -this.y_speed;
  // Left wall
  } else if (this.x <= this.rad + 1) {
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

  // Collision with paddle

  // Top of paddle
  if (this.y + (this.rad + 1) >= player.y && this.y + (this.rad + 1) <= player.y + 25
      && this.x >= player.x && this.x <= (player.x + 100)) {
    this.y_speed = -this.y_speed;
  // Bottom of paddle
  } else if (this.y - (this.rad + 1) <= player.y + 25 && this.y - (this.rad + 1) >= player.y
              && this.x >= player.x && this.x <= (player.x + 100)) {
    this.y_speed = -this.y_speed;
  }

  // Left side of paddle
  if (this.x + (this.rad + 1) >= player.x && this.x + (this.rad + 1) <= player.x + 100
      && this.y >= player.y && this.y <= (player.y + 25)) {
    this.x_speed = -this.x_speed;
  // Right side of paddle
  } else if (this.x - (this.rad + 1) <= player.x + 100 && this.x - (this.rad + 1) >= player.x
              && this.y >= player.y && this.y <= (player.y + 25)) {
    this.x_speed = -this.x_speed;
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
