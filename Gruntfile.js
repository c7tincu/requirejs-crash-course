/* globals module */

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  var LIB = '../lib';

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {

          baseUrl: 'src/app',

          paths: {
            jquery: LIB + '/jquery',
            underscore: LIB + '/underscore',
            backbone: LIB + '/backbone'
          },

          exclude: [ 'jquery' ],

          name: 'main',
          out: 'dist/app.min.js'

        }
      }
    }

  });

  grunt.registerTask('default', [ 'requirejs' ]);

};
