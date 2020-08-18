var bullet,thickness,wall;
var weight,speed;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  weight = random(30,52);
  speed = random(223,321);
  

}

function hasCollided(bullet,wall)
{bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

function draw() {
  background(0,0,0); 
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor = color(255,0,0);} 
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }}
 drawSprites();
}
