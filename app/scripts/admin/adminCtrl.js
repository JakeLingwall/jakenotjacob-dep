'use strict';

angular.module('jakenotjacobApp').controller('adminCtrl', function ($scope, $location, $routeParams) {

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  $scope.newPost = "hi";

  //Will need to authenticate on this page. simple-login?

  $scope.leeroyJenkins = function(){
    debugger;
    var newpost = {title: $scope.postTitle, body: $scope.newPost, date: new Date().getTime(), comments: []};
    dataRef.child('posts').push(newpost);
  }
  // dataRef.child($routeParams.project).on('value', function(data){
  //   setScopeData(data.val());
  // })

  // function setScopeData (data){
  //   $scope.project = data;
  //   if(!$scope.$$phase){
  //     $scope.$apply();
  //   }
  // }

});
