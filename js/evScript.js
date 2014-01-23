var zf2 = project.importSVG(document.getElementById('svg'));
var testPath = new Path.Circle(new Point(80, 50), 30);
var testLayer = new Layer({
    children: [path, path2],
    strokeColor: 'black',
    position: view.center
});