'use strict';

angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', [function () {
        this.helloText = 'Hello from helloWorldCtrl';
    } ]).
    controller('evCtrl', [function () {
        init();
        var path = new paper.Path.Circle(new Point(80, 50), 30);
        path.strokeColor = 'black';
        var zf2 = paper.project.importSVG('y11');
        function init() {
            paper.setup(document.getElementById('evCanvas'));
        }
    } ]);