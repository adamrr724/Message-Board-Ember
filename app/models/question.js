import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  image: DS.attr(),
  answer: DS.hasMany('answer', {async: true})
});
