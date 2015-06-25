'use strict';

module.exports = Block;

// Individual block constructor
function Block(size, position, color, level) {
  // Block size
  this.width = size.width;
  this.height = size.height;

  // Block position
  this.x = position.x;
  this.y = position.y;

  // Block color, deafults to black
  this.color = color || 'black';

  // Number of hits to destroy block, defaults to 1
  this.level = level || 1;

  // Save canvas state
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
};

// Render individual block
Block.prototype.render = function() {

  // Create block
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
