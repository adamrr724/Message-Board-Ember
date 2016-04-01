import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewQuestion(){
        var params = {
          name: this.get('name'),
          content: this.get('content'),
          image: this.get('image')
        };
        this.sendAction('addNewQuestion2', params);
      }
    }
});
