'use strict';

var Layout = require('./layout');

module.exports = App;

// Game app constructor
function App(dim) {

};

App.prototype.init = function() {
  var grid = new Layout({x: 0, y: 0}, {width: 100, height: 25}, {col: 5, row: 3}, 10);
  grid.create();
};

App.prototype.run = function() {
  var _this = this;

  requestAnimationFrame(function() {


  });
};
