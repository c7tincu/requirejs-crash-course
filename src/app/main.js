define([
  'models/square',
  'views/square'
], function(SquareModel, SquareView) {
  'use strict';

  var squareModel = new SquareModel();

  new SquareView({
    el: document.getElementById('js-app'),
    model: squareModel
  }).render();

});
