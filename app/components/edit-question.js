import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
  editQuestion() {
    this.set('editQuestion', true);
  },
  saveQuestion(question) {
    this.sendAction('saveQuestion2', question);
    this.set('editQuestion', false);
  },
  hideQuestion() {
    this.set('editQuestion', false);
  }
}
});
