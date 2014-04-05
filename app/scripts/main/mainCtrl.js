'use strict';

angular.module('jakenotjacobApp').controller('mainCtrl', function ($scope, $location) {

  $scope.toBlog = function(){
    $location.path("/");
  }
  $scope.toFirstProject = function(){
    $location.path("/tpg");
  }
  $scope.toSecondProject = function(){
    $location.path("/onserve");
  }
  $scope.toThirdProject = function(){
    $location.path("/goldwatch");
  }
  $scope.toFourthProject = function(){
    $location.path("/writings");
  }
});
