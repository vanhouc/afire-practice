var zf2 = project.importSVG(document.getElementById('svg'));
for (var i = 0; i < project.layers.length; i++)
{
    project.layers[i].fitBounds(view.bounds);
    project.layers[i].scale(0.8);
}
function onKeyDown(event) {
    if (event.key === 'w')
    {
        for (var i = 0; i < project.layers.length; i++)
        {
            project.layers[i].scale(0.8);
            return false;
        }
    }
    if (event.key === 's')
    {
        for (var i = 0; i < project.layers.length; i++)
        {
            project.layers[i].scale(0.8);
            return false;
        }
    }
    return true;
}
