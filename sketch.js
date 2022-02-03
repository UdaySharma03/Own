var bg,car,car2,car3,car4,ground;
var gamestate="play";
function preload(){
  bgimg=loadImage("Background.png")
  car1img=loadImage("Car1.png")
  car2img=loadImage("Car2.png")
  car3img=loadImage("Car3.png")
  car4img=loadImage("Car4.png")
  groundimg=loadImage("Land.png")
}
function setup(){
  createCanvas(400,400)
bg = createSprite(200, 100,1,1);
bg.addImage(bgimg);
bg.velocityX=-4;
bg.scale=2;
car2 = createSprite(20, 100,10,10);
car2.addImage(car2img);
car2.velocityX=3;
car2.scale=0.3;
car2.velocityY=10;
car3 = createSprite(20, 100,10,10);
car3.addImage(car3img);
car3.velocityX=6;
car3.scale=0.3;
car3.velocityY=10;
car4 = createSprite(20, 100,10,10);
car4.addImage(car4img);
car4.velocityX=8;
car4.scale=0.3;
car4.velocityY=10;
car = createSprite(5, 100,10,10);
car.addImage(car1img);
car.scale=0.3;
car.velocityY=10;
ground = createSprite(200, 615,400,10);
ground.x=ground.width/2;
ground.addImage(groundimg);
ground.scale=5;
ground.velocityX=-4;
}
function draw() {
background("blue");
car.collide(ground);
car2.collide(ground);
car3.collide(ground);
car4.collide(ground);
if (bg.x<0){
  bg.x=bg.width/2;
}
if (ground.x<100){
  ground.x=300;
}
if (keyWentDown(RIGHT_ARROW)) {
car.velocityX=10;
}
if (keyWentUp(RIGHT_ARROW)){
  car.velocityX=0;
}
if (keyWentDown(LEFT_ARROW)) {
car.velocityX=-10;
}
if (keyWentUp(LEFT_ARROW)){
  car.velocityX=0;
}
createEdgeSprites();
drawSprites();
}