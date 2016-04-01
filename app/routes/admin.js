import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    addNewQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('admin');
    },
    delete(question) {
      if(confirm("Are you sure you would like to delete this question?")) {
        question.destroyRecord();
        this.transitionTo('admin');
      }
    },
    saveQuestion3(question) { 
      question.save();
      this.transitionTo('admin');
    }
  }
});
