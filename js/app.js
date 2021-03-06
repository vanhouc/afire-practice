'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'helloWorldCtrl', controllerAs: 'hello' });
    $routeProvider.when('/ev', { templateUrl: 'partials/EV.html', controller: 'evCtrl', controllerAs: 'ev' });
    $routeProvider.otherwise({ redirectTo: '/home' });
} ]);