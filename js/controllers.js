'use strict';

angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', [function () {
        this.helloText = 'Hello from helloWorldCtrl';
    } ]).
    controller('evCtrl', [function () {
        this.helloText = 'Hello from evCtrl';
    } ]);