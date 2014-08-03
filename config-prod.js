/* globals requirejs */

define(function() {
  'use strict';

  requirejs.config({

    paths: {
      main: 'dist/app.min',
      jquery: [
        'https://code.jquery.com/jquery-2.1.1.min',
        'dist/jquery-2.1.1.min'
      ]
    },

    deps: [ 'main' ]

  });

});
