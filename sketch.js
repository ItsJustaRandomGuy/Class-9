var box;
function setup() {
  createCanvas(900,600);
  box = createSprite(450,300,30,30);
}

function draw() 
{
  background(30);
  drawSprites();

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 2;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 2;
  }
}




