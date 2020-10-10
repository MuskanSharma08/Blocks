const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;

function setup() {
 createCanvas(1000, 550);
engine = Engine.create();
world = engine.world;

floor1 = new Ground(800, 250, 280, 20);
floor2 = new Ground(400, 450, 280, 20);


polygon = new Polygon(100, 300, 70);

//upper roof lower most
box1 = new Block(700, 215, 30, 40, "blue");
box2 = new Block(760, 215, 30, 40, "blue");
box3 = new Block(820, 215, 30, 40, "blue");
box4 = new Block(880, 215, 30, 40, "blue");
//upper roof middle 
box5 = new Block(730, 165, 30, 40, "yellow");
box6 = new Block(790, 165, 30, 40, "yellow");
box7 = new Block(850, 165, 30, 40, "yellow");
//upper roof upper one
box8 = new Block(760, 115, 30, 40, "pink");
box9 = new Block(820, 115, 30, 40, "pink");
//upper roof top most
box10 = new Block(790, 65, 30, 40, "green");

//lower roof lower most
block1 = new Block(310, 415, 30, 40, "blue");
block2 = new Block(370, 415, 30, 40, "blue");
block3 = new Block(430, 415, 30, 40, "blue");
block4 = new Block(490, 415, 30, 40, "blue");
//lower roof middle 
block5 = new Block(340, 365, 30, 40, "yellow");
block6 = new Block(400, 365, 30, 40, "yellow");
block7 = new Block(460, 365, 30, 40, "yellow");
//lower roof upper one
block8 = new Block(370, 315, 30, 40, "pink");
block9 = new Block(430, 315, 30, 40, "pink");
//lower roof top most
block10 = new Block(400, 265, 30, 40, "green");

sling= new SlingShot(polygon.body,{x:50, y:250});

Engine.run(world, engine);
}
function draw() {
  background(0);  
  Engine.update(engine);
  floor1.display();
  floor2.display();
 
  polygon.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  sling.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}