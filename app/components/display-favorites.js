import Ember from 'ember';

export default Ember.Component.extend({
   favorites: Ember.inject.service(),
   actions: {
    remove(question) {
      this.get('favorites').remove(question);
    }
  }
});
