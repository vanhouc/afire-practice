'use strict';

angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', [function () {
        this.helloText = 'Hello from helloWorldCtrl';
    } ]).
    controller('evCtrl', [function () {
 //       $scope.keyDown = function() {
 //         view.scrollBy(new Point(50,0));  
 //       };
        init();
        var path = new Path.Circle(new Point(80, 50), 30);
        path.strokeColor = 'black';
        var zf2 = project.importSVG('y11');
        function init() {
            paper.install(window);
            paper.setup(document.getElementById('evCanvas'));
        }
    } ]);