var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
 if (keyIsDown (RIGHT_ARROW)){
box.position.x = box.position.x+3
background("blue") 
}
if (keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x-3
  background("yellow") }
if (keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y+3
  background("pink") }
if (keyIsDown(UP_ARROW)){
  box.position.y = box.position.y-3
  background("red") }
  drawSprites();
}