'use strict';

angular.module('jakenotjacobApp').controller('blogCtrl', function ($scope) {

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  dataRef.child('posts').limit(5).on('value', function(data){
    setScopeData(data.val());
  });

  //give this page infinite scroll!

  function setScopeData (data){
    //some hack because firebase ordering is jacked and I hate their 'sort by priority filter'
    $scope.posts = _.sortBy(data, function(datum){
      return datum.date * -1;
    });
    if(!$scope.$$phase){
      $scope.$apply();
    }
  }

  $scope.saveNewComment = function(newComment){
    dataRef.child('posts').child(this.post.date).child('comments').push(newComment);
  }

});
