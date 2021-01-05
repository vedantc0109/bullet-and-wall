var bullet,wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(70, 100, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color("white");

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {
  background("black"); 
  
  bullet.velocityX=speed;

  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor= color(225,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,225,0);
    }
  }


  drawSprites();
}

function hasCollided(1bullet,1wall)
{
  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}