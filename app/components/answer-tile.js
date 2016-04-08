import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['likes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    addLike(answer) {
      this.sendAction('addLike2', answer);
    },
    addDislike(answer) {
      this.sendAction('addDislike2', answer)
    }
  }
});
