import Ember from 'ember';

export function highestRated(params1) {
  var likes = params1[0];
  var dislikes = params1[1];
  var ratingCounter = likes - dislikes;
  if (ratingCounter > 0) {
    return "This Post is Liked!";
  } else if (ratingCounter === 0) {
    return "Neutral Post";
  } else return "This Post is Disliked!";
};

export default Ember.Helper.helper(highestRated);
