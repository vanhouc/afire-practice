'use strict';

angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', [function () {
        this.helloText = 'Hello from helloWorldCtrl';
    } ]).
    controller('evCtrl', [function () {
        init();
        var path = new Path.Circle(new Point(80,50), 30);
        path.strokeColor = 'black';
        function init() {
            paper.install(window);
            paper.setup(document.getElementById('evCanvas'));
        }
    } ]);