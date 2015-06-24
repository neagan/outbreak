'use strict';

module.exports = function Block(position, level) {
  this.x = position.x;
  this.y = position.y;

  this.level = level || 1;
};
