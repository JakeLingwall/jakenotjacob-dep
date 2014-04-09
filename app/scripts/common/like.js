angular.module('jakenotjacobApp').directive('like', function ($location, $routeParams) {
  return{
    restrict: 'A',
    scope: {count: "=", callback: "&"},
    templateUrl: '/scripts/common/like.html',
    link: function(scope, elem, attrs) {
      scope.likeThis = function(){
        scope.liked = true;
        scope.callback();
      }
    }
  }
});
