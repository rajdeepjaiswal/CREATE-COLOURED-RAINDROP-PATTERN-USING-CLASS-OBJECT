var drops = []
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-=[]\{}|:'<>?,./*-'";
function setup()
{   
    createCanvas(1535,720);
    frameRate(100);
    
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].draw();
        drops[i].update();
    }
}
