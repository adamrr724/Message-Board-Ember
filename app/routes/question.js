import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    addNewAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    addLike3(answer) {
      var currentValue = answer.get('likes');
      var total = currentValue += 1;
      answer.set('likes', total);
      answer.save();
    },
    addDislike3(answer) {
      var currentValue = answer.get('dislikes');
      var total = currentValue += 1;
      answer.set('dislikes', total);
      answer.save();
    }
  }
});
