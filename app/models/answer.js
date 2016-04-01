import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
