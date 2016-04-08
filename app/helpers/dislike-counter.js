import Ember from 'ember';

export function dislikeCounter(params) {
  var answerDislikes = params[0];
  return Ember.String.htmlSafe('<i class="fa fa-thumbs-down"></i>' + answerDislikes);
}

export default Ember.Helper.helper(dislikeCounter);
