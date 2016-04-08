import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewAnswer() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        question: this.get('question'),
        likes: 0,
        dislikes: 0
      };
      this.sendAction('addNewAnswer2', params);
      this.set('name', '');
      this.set('content', '');
    }
  }
});
