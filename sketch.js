var box;
function setup() {
  createCanvas(900,600);
  box = createSprite(450,300,30,30);
}

function draw() 
{
  background(30);
  
  if (keyIsDown(UP_ARROW)) {
    background("red");
  }
  if (keyIsDown(RIGHT_ARROW)) {
      background("yellow");
    }
    if (keyIsDown(LEFT_ARROW)) {
      background("green");
    }
    if (keyIsDown(DOWN_ARROW)) {
      background("blue");
    }
    drawSprites();
  }





