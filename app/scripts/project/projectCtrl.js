'use strict';

angular.module('jakenotjacobApp').controller('projectCtrl', function ($scope, $location, $routeParams) {

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  dataRef.child($routeParams.project).on('value', function(data){
    setScopeData(data.val());
  })

  function setScopeData (data){
    $scope.project = data;
    if(!$scope.$$phase){
      $scope.$apply();
    }
  }

  //Title
  //Current goal title: status
  //list of last updates
  //project files
  //list of posts that have the tags for this project
  //project comments.

});
