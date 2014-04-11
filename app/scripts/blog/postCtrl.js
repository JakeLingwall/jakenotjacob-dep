'use strict';

angular.module('jakenotjacobApp').controller('postCtrl', function ($scope, $routeParams, $location) {

  $scope.singlePost = true;

  var dataRef = new Firebase("https://jakenotjacob.firebaseio.com");
  dataRef.child('posts').child($routeParams.id).once('value', function(data){
    setScopeData(data.val());
  });

  function setScopeData (data){
    if(!data){
      $location.path("/");
    }
    $scope.posts = [data];
    if(!$scope.$$phase){
      $scope.$apply();
    }
  }

  $scope.saveNewComment = function(newComment){
    if(!this.post.comments){
      this.post.comments = [];
    }
    this.post.comments.push(newComment);
    dataRef.child('posts').child(this.post.date).child('comments').push(newComment);
  }

  $scope.likePost = function(){
    this.post.likes = this.post.likes + 1;
    dataRef.child('posts').child(this.post.date).child('likes').set(this.post.likes);
  }

});
