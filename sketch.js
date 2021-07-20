var bath;
var eat;
var gym;
var brush;
var drink;
var sleep;
var move;
var astronaut;
var bg;
function preload(){
  bg=loadImage("images/iss.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png");
  brush=loadAnimation("images/brush.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  sleep=loadAnimation("images/sleep.png");
  move=loadAnimation("images/move1","images/move2");
}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg); 
  drawSprites(); 
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}
  
}