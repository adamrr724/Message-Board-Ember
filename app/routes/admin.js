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
      if(confirm("Are you sure you would like to delete this question? It will also delete all of it's comments.")) {
        var answer_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    saveQuestion3(question) {
      question.save();
      this.transitionTo('admin');
    }
  }
});
