define(function(require) {
  'use strict';

  var SquareModel = require('models/square');
  var SquareView = require('views/square');

  var squareModel = new SquareModel();

  new SquareView({
    el: document.getElementById('js-app'),
    model: squareModel
  }).render();

});
