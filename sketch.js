var wall,thickness
var bullet,speed,weight,damage
function setup() {
  createCanvas(1600,800);
   bullet= createSprite(20, 400, 50, 50);
   wall =createSprite(1570,400,50,300);
bullet.shapeColor="blue"
   speed=random(40,70);
   weight=random(100,300);
   thickness=random(22,83)
   wall.width=thickness
bullet.velocityX=speed;
}
 function draw() {
    background(255,255,255); 
  //  if(bullet.isTouching(wall)){
     // wall.velocityX=0;
     // bullet.velocityX=0;
      //bullet.shapeColor=("red");}




     
    
     
  
     // wall.velocityX=0;
      //bullet.velocityX=10;
   
     if(hasCollided(bullet,wall)){
      bullet.velocityX=0
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness)}
      console.log(damage);
    if (damage>7) { 
      bullet.velocityX=0
      wall.velocityX=0;    
      bullet.shapeColor=("red");
    }
    if (damage<10) {
      bullet.shapeColor=("green")
      bullet.velocityX=0
      wall.velocityX=0;
      
    }
    
    
    
    drawSprites();}

 function hasCollided(bullet,wall){
   var bulletRightEdge=bullet.x+25
   console.log(bullet.x+";"+wall.x)
   var wallLeftEdge=wall.x-thickness/2
   console.log(bulletRightEdge+";"+wallLeftEdge)
if(bulletRightEdge>=wallLeftEdge)
{
return true

 }
 return false  
}