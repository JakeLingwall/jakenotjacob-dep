'use strict';

angular.module('jakenotjacobApp').controller('blogCtrl', function ($scope) {

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  dataRef.child('posts').on('value', function(data){
    setScopeData(data.val());
  })

  function setScopeData (data){
    $scope.posts = data;
    if(!$scope.$$phase){
      $scope.$apply();
    }
  }

  $scope.saveNewComment = function(newComment){
    //save the new comment to the database here.
  }

});
