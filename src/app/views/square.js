define(function(require) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  return Backbone.View.extend({

    render: function() {
      this.$el.html($('<div>').addClass('square')).focus();
      this.model.on('change', _.bind(this.update, this));
      this.update();
    },

    update: function() {
      this.$el.find('div').css({
          width: this.model.get('width') + 'px',
          height: this.model.get('height') + 'px',
          left: this.model.get('x') - this.model.get('width') / 2 + 'px',
          top: this.model.get('y') - this.model.get('height') / 2 + 'px'
      });
    },

    onKeyUp: function(jqEvent) {
      switch (jqEvent.keyCode) {
        case 37:
          if (this.model.get('x') - this.model.get('stepX') - this.model.get('width') / 2 >= 0) {
            this.model.set({ x: this.model.get('x') - this.model.get('stepX') });
          }
          break;
        case 38:
          if (this.model.get('y') - this.model.get('stepY') - this.model.get('height') / 2 >= 0) {
            this.model.set({ y: this.model.get('y') - this.model.get('stepY') });
          }
          break;
        case 39:
          if (this.model.get('x') + this.model.get('stepX') + this.model.get('width') / 2 <= this.$el.width()) {
            this.model.set({ x: this.model.get('x') + this.model.get('stepX') });
          }
          break;
        case 40:
          if (this.model.get('y') + this.model.get('stepY') + this.model.get('height') / 2 <= this.$el.height()) {
            this.model.set({ y: this.model.get('y') + this.model.get('stepY') });
          }
          break;
      }
    },

    events: {
      'keyup': 'onKeyUp'
    }

  });

});
