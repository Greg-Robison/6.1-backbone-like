var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  defaults: {
    'number': 0
  },

  showCount: function(){
    this.set('number', this.get('number') + 1);
  }
});
module.exports = {
  'Like': Like
};
