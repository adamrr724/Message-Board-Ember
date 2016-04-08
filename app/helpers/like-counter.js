import Ember from 'ember';

export function likeCounter(params) {
  var answerLikes = params[0];
  return Ember.String.htmlSafe('<i class="fa fa-thumbs-up"></i>' + answerLikes);
}

export default Ember.Helper.helper(likeCounter);
