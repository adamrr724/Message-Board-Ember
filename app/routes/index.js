import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return  Ember.RSVP.hash({
      question: this.store.findAll('question'),
      answer: this.store.findAll('answer')
    });
  }
});
