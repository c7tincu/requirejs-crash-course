/* globals requirejs */

define(function() {
  'use strict';

  requirejs.config({

    paths: { main: 'dist/app.min' },

    deps: [ 'main' ]

  });

});
