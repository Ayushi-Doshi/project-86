var canvas = new fabric.Canvas('mycanvas');
biw = 30;
bih = 30;
px = 20;
py = 20;
var po = "";
var bio = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) 
    {
        po = Img;

        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
        top:py,
        left:px
        });
    canvas.add(po);   
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL("get_image", function(Img) 
    {
        bio = Img;

        bio.scaleToWidth(biw);
        bio.scaleToHeight(bih);
        bio.set({
        top:py,
        left:px
        });
    canvas.add(bio);   
    });
}