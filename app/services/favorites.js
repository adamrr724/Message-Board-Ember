import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(question) {
    this.get('favorites').pushObject(question);
    console.log(this.get('favorites'));
  },
  remove(question) {
    this.get('favorites').removeObject(question);
  }
});
