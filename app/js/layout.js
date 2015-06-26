'use strict';

var Block = require('./block');

module.exports = Layout;

// Layout grid constructor
function Layout(start, size, dim, offset) {
  // Start point
  this.startX = start.x;
  this.startY = start.y;

  // Size block
  this.width = size.width;
  this.height = size.height;
  this.size = size;

  // Grid dimensions
  this.columns = new Array(dim.col);
  this.rows = new Array(dim.row);

  // Distance between blocks
  this.offset = offset;
};

// Populate grid
Layout.prototype.create = function() {
  // Save this reference
  var _this = this;

  // Adjustable positions
  var x = this.startX;
  var y = this.startY;
  console.log(x);
  console.log(y);
  console.log(this.columns.length);
  console.log(this.rows.length);

  for (var i = 0; i < _this.rows.length; i++) {

    for (var j = 0; j < _this.columns.length; j++) {

      var block = new Block(_this.size, {x: x, y: y});
      block.render();
      x += (_this.width + _this.offset);
    }

    x = _this.startX;
    y += (_this.height + _this.offset);
  }

};
