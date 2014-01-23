var testPath = new Path.Circle(new Point(80, 50), 30);
var testLayer = new Layer({
    children: [path, path2],
    strokeColor: 'black',
    position: view.center
});