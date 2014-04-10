'use strict';

angular.module('jakenotjacobApp').controller('projectCtrl', function ($scope, $location, $routeParams) {

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  dataRef.child($routeParams.project).on('value', function(data){
    setScopeData(data.val());
  });

  function setScopeData (data){
    $scope.project = data;
    $scope.updates = _.sortBy(data.updates, function(update){return -1 * update.date});;

    if(!$scope.$$phase){
      $scope.$apply();
    }
  };

  $scope.openFile = function(){
    window.location = this.file.link;
  }

});
