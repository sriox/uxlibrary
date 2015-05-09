'use strict';

var controllers = angular.module('appControllers', []).
    controller('HeaderController', ['$scope', function ($scope) {
        $scope.title = 'Experiencias de lectura';
    }]).
    controller('SelectorController', ['$scope', function ($scope) {
        $scope.segments = [{
            id: 1,
            name: 'Chicos'
        },{
            id: 2,
            name: 'Adultos'
        },{
            id: 3,
            name: 'Mayores'
        }];

        $scope.topics = [{
            id: 1,
            name: 'Romance'
        },{
            id: 2,
            name: 'Historia'
        },{
            id: 3,
            name: 'Cultura'
        }];
    }]).
    controller('HomeController', ['$scope', function($scope){

        $scope.ruta = 1;

        $scope.segments = [{
            id: 1,
            name: 'Chicos'
        },{
            id: 2,
            name: 'Adultos'
        }];

        $scope.topics = [{
            id: 1,
            name: 'Aventura'
        },{
            id: 2,
            name: 'Historia'
        },{
            id: 3,
            name: 'Cultura'
        }];
    }]);