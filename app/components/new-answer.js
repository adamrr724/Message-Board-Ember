import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewAnswer() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        question: this.get('question')
      };
      console.log(params);
      this.sendAction('addNewAnswer2', params);
      this.set('name', '');
      this.set('content', '');
    }
  }
});
