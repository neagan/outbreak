'use strict';

module.exports = Block;

function Block(size, position, level) {
  this.width = size.width;
  this.height = size.height;

  // add width || height + 10(?) for position
  this.x = position.x;
  this.y = position.y;

  this.level = level || 1;
};
