var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,800);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
    car = createSprite(50,200,50,10);
    wall = createSprite(1200,200,thickness,height/2);
    car.shapeColor = "silver";
  }

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;
  deformation();
  
}


function deformation(){
  if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509;
  }
 if(deformation>180){
   wall.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   wall.shapeColor=color(230,230,0);
 }
 if(deformation<100){
   wall.shapeColor=color(0,255,0);
 }


}