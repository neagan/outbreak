'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on port ' + (process.env.PORT || 3000));
});
