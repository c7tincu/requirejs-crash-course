/* globals requirejs */

define(function() {
  'use strict';

  var LIB = '../lib';

  requirejs.config({

    baseUrl: 'src/app',

    paths: {
      jquery: LIB + '/jquery',
      underscore: LIB + '/underscore',
      backbone: LIB + '/backbone'
    },

    deps: [ 'main' ]

  });

});
