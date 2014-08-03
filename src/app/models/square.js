define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  return Backbone.Model.extend({

    defaults: {
      x: 400,
      y: 300,
      width: 100,
      height: 100,
      stepX: 50,
      stepY: 50
    }

  });

});
