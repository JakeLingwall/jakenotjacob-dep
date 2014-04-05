'use strict';

angular.module('jakenotjacobApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute', 
  'firebase',
  'textAngular'
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
      .when('/jakelingwall/admin', {
        templateUrl: '/scripts/admin/admin.html',
        controller: 'adminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
