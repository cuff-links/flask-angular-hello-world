'use strict';

var app = angular.module('controllers', []);

app.controller('HomeController', ['$scope', function($scope){
    $scope.message = 'Hello from HomeController';
}]);

app.controller('AboutController', ['$scope', function($scope){
    $scope.message = 'Hello from AboutController';
}]);
