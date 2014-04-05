'use strict';

angular.module('jakenotjacobApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute', 
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/scripts/blog/blog.html',
        controller: 'blogCtrl'
      })
      .when('/:project', {
        templateUrl: '/scripts/project/project.html',
        controller: 'projectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
