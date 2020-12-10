const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var engine, world;
var sling,polygon;
var box1,box2,box3,box4,box5,box6,box7;
var score=0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20,{isStatic : false});
  World.add(world, polygon);
  ground1 = new Ground(width/2,390,800,20);
  ground2 = new Ground(650,250,200,20);
  sling = new SlingShot(polygon,{x:100,y:200});  
  box1 = new Box(580,240);
  box2 = new Box(610,240);
  box3 = new Box(640,240);
  box4 = new Box(670,240);
  box5 = new Box(700,240);
  box6 = new Box(730,240);
  box7 = new Box(595,210);

  textSize(20);
  fill('green');
  text('Score :'+ score,100,70);
  Engine.run(engine);
}

function draw() {
  getBackground();
  drawSprites();

  ground1.display();
  ground2.display();
  sling.display();
  fill("green")
  box1.display();
  box2.display();
  box3.display();
  fill("red")
  box4.display();
  box5.display();
  box6.display();
  fill("blue")
  box7.display();

  ellipse(polygon.position.x,polygon.position.y,20,20);
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

}

 function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();

  var dateTime = responsejson.datetime;
  var hour = dateTime.slice(11,13);
  console.log(responsejson);
  console.log(dateTime);
  console.log(hour);

  if(hour>06&&hour<18){
    background(0,200,255);
  }
  else{
    background(200,91,91);
  }
}