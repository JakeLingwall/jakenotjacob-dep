angular.module('jakenotjacobApp').directive('comments', function ($location, $routeParams) {
  return{
    restrict: 'A',
    scope: {comments: "=", newComment: "&"},
    templateUrl: '/scripts/common/comments.html',
    link: function(scope, elem, attrs) {

      //Nested comments... to come soon right?
      scope.authorComment = false;

      //callback to the parent to save a new comment. 
      scope.makeAComment = function(){
        var postComment = {poster: scope.poster, date: new Date().getTime(), comment: scope.commentText}
        scope.newComment({newComment: postComment});
        scope.poster = null;
        scope.commentText = null;
        scope.authorComment = false;
      }
    }
  }
});
