angular.module('jakenotjacobApp').directive('comments', function ($location, $routeParams) {
  return{
    restrict: 'A',
    scope: {comments: "=", newComment: "&"},
    templateUrl: '/scripts/common/comments.html',
    link: function(scope, elem, attrs) {

      //Nested comments... to come soon right?


      //callback to the parent to save a new comment. 
      scope.makeAComment = function(){
        scope.newComment({newComment: "hi"});
      }
    }
  }
});
