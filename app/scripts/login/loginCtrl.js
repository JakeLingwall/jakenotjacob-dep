'use strict';

angular.module('jakenotjacobApp').controller('loginCtrl', function ($scope, $location, $routeParams, $cookies) {
  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  var auth = new FirebaseSimpleLogin(dataRef, function(error, user) {
    if (error) {
      alert("error message Jake!")
      console.log(error);
    } else if (user) {
      $location.path("jakelingwall/admin")
      // user authenticated with Firebase
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } 
  });

  $scope.login = function(){
    auth.login('password', {
      email: $scope.email,
      password: $scope.password
    })
  }
});