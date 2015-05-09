'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'appControllers', 'appServices', 'appDirectives']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      otherwise({redirectTo: '/'});
}]);
