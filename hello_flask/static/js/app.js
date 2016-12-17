'use strict';

var app = angular.module('hello_flask', [
    'ngRoute',
    'controllers',
]);

app.config(['$routeProvider','$locationProvider', '$interpolateProvider',
    function($routeProvider, $locationProvider, $interpolateProvider){
        $routeProvider
        .when('/', {
            templateUrl : 'static/partials/home.html',
            controller  : 'HomeController'
        })

        .when('/about', {
            templateUrl : 'static/partials/about.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});

        $interpolateProvider.startSymbol('{a');
        $interpolateProvider.endSymbol('a}');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
}]);
