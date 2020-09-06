const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, matter;
var slingshot;
var box;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  //level 1, group 1
  block = new Box(260,355,30,40);
  block2 = new Box(290,355,30,40);
  block3 = new Box(320,355,30,40);
  block4 = new Box(350,355,30,40);
  block5 = new Box(380,355,30,40);
  block6 = new Box(410,355,30,40);
  block7 = new Box(440,355,30,40);
  //level 2, group 1
  block8 = new Box(290,315,30,40);
  block9 = new Box(320,315,30,40);
  block10 = new Box(350,315,30,40);
  block11 = new Box(380,315,30,40);
  block12 = new Box(410,315,30,40);
  //level 3, group 1
  block13 = new Box(320,275,30,40);
  block14 = new Box(350,275,30,40);
  block15 = new Box(380,275,30,40);
  //level 4, group 1
  block16 = new Box(350,235,30,40);
  
  stand = new Ground(350,380,250,10);
  stand2 = new Ground(650,270,200,10);

  //level 1, group 2
  block17 = new Box(590,245,30,40);
  block18 = new Box(620,245,30,40);
  block19 = new Box(650,245,30,40);
  block20 = new Box(680,245,30,40);
  block21 = new Box(710,245,30,40);
  //level 2, group 2
  block22 = new Box(620,205,30,40);
  block23 = new Box(650,205,30,40);
  block24 = new Box(680,205,30,40);
  //level 1, group 2
  block25 = new Box(650,165,30,40);

  polyGon = new Polygon(70,300,25);
  slingshot = new SlingShot(polyGon.polygon,{x:70,y:300});
}

function draw() {
  //background(59, 56, 56);  
  background(254, 254, 254);
  Engine.update(engine);

  //group 1
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();
  
  //group 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  block22.display();
  block23.display();
  block24.display();
  
  block25.display();

  stand.display();
  stand2.display();
  slingshot.display();
  polyGon.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polyGon.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polyGon.polygon);
  }
}