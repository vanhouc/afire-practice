'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'helloWorldCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
    }]);