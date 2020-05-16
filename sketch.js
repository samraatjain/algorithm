var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(350, 300, 150, 150);
  movingrect=createSprite(450, 200, 120, 200);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
  {
    fixedrect.shapeColor="yellow";
    movingrect.shapeColor="yellow";
  }
  else{
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }

  
  drawSprites();
}