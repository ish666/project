var p1;
var edg1 ;
var bg;
var obs;
var ob1;
var ob2;
var obstacleGroup;
var score = 0;
var Play = 1;
var End = 0;
var GameState = 0;

var background1;
    
    function preload() {
      bg = loadImage("background1.jpg");
      ob1 = loadImage("Bully_frontcover.png");
      ob2 = loadImage("tra.png");







    }
    function setup() {
  createCanvas(800,400);
 
 edg1 = createEdgeSprites();
 background1 = createSprite(400,200,50,50);
 background1.addImage(bg);
background1.scale = 3.5;
background1.velocityY = 3;
p1= createSprite(400, 200, 25, 25);
obstacleGroup = new Group();
}



function draw() {
  background(255,255,255); 
  textSize(30);
  fill("red");
  
if(GameState === Play){
  if(background1.y > 400) {
    background1.y = background1.height/2 ;
    
    
      }
       
      if(keyDown(UP_ARROW)){
    p1.velocityY = -4;
    
    
      }
      if(keyDown(LEFT_ARROW)){
        p1.velocityX=- 6;
      }
      if(keyDown(RIGHT_ARROW)){
        p1.velocityX = 6;
      }
      p1.velocityY = p1.velocityY + 0.5;
      if(obstacleGroup.isTouching(p1)){
        obstacleGroup[0].destroy();
        score++;

      }
if(score === 5){
GameState = End;

}


}
 else if(GameState === End){
textSize(50);
fill("black");
text("YOU HAVE WON THE GAME" , 400,200);
background1.velocityY = 0;
p1.velocityY = 0;
p1.velocityX = 0;
obstacleGroup.setVelocityEach(0);
obstacleGroup.setLifetimeEach(-1);



 }
  
  
  p1.collide(edg1[3]);
  p1.collide(edg1[0]);
  p1.collide(edg1[1]);
  spawnObstacles();
  drawSprites();
  text("SCORE:" + score,500,100);
}
function spawnObstacles()
{
if(frameCount%50 === 0)
{
obs = createSprite(random(100,700),0,20,20);
obs.velocityY = 6;
var rand = Math.round(random(1,2));
switch(rand)
{
case 1: obs.addImage(ob1);
break;
case 2: obs.addImage(ob2);
break;

}
obs.scale = 0.5;
obs.lifetime = height / 6;
obstacleGroup.add(obs);




}






}