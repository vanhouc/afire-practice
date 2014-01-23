var zf2 = project.importSVG(document.getElementById('svg'));
for (var i = 0; i < project.layers.length; i++)
{
    project.layers[i].fitBounds(view.bounds);
    project.layers[i].scale(0.8);
}