'use strict';

angular.module('jakenotjacobApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/scripts/blog/blog.html',
        controller: 'blogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
