'use strict';

var directives = angular.module('appDirectives', []).
    directive('myTitle', function(){
       return {
           strict: 'E',
           templateUrl: 'templates/title.html'
       }
    }).
    directive('mySelector', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/selector.html'
        }
    });