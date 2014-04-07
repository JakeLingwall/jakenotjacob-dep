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

  $scope.notHovered = true;

  //this is bad and lazy
  $scope.toFacebook = function(){
    window.location = 'https://www.facebook.com/jake.lingwall';
  }
  $scope.toTwitter = function(){
    window.location = 'https://twitter.com/JakeLingwall';
  }  
  $scope.toGithub = function(){
    window.location = 'https://github.com/JakeLingwall';
  }  
  $scope.toLinkedin = function(){
    window.location = 'http://www.linkedin.com/pub/jake-lingwall/28/b52/b71/';
  }

});
