const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){


}

var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var boxs1,boxs2,boxs3,boxs4,boxs5,boxs6,boxs7,boxs8,boxs9;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(400,375,800,50);
  ground2 = new Ground(350,300,300,10);
  ground3 = new Ground(650,200,250,10);
  box1 = new Box(230,270);
  box2 = new Box(290,270);
  box3 = new Box(350,270);
  box4 = new Box(410,270);
  box5 = new Box(470,270);
  box6 = new Box(255,220);
  box7 = new Box(315,220);
  box8 = new Box(375,220);
  box9 = new Box(435,220);
  box10 = new Box(280,170);
  box11 = new Box(340,170);
  box12 = new Box(400,170);
  box13 = new Box(305,120);
  box14 = new Box(365,120);
  box15 = new Box(330,70);
  boxs1 = new Box(560,170);
  boxs2 = new Box(620,170);
  boxs3 = new Box(680,170);
  boxs4 = new Box(740,170);
  boxs5 = new Box(585,120);
  boxs6 = new Box(645,120);
  boxs7 = new Box(705,120);
  boxs8 = new Box(610,70);
  boxs9 = new Box(670,70);
  ball = new Ball(20,200);
  sling = new Slingshot(ball.body,{x:90, y:200});
}

function draw() {
  background(218,165,32);
  ground1.display();  
  ground2.display();  
  ground3.display(); 
  ball.display();
  fill("red");
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  fill("green");
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill("blue");
  box10.display(); 
  box11.display(); 
  box12.display();
  fill("yellow"); 
  box13.display();
  box14.display();
  fill("black");
  box15.display();
  fill("red");
  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  fill("green");
  boxs5.display();
  boxs6.display();
  boxs7.display();
  fill("blue");
  boxs8.display();
  boxs9.display();
  fill("black");
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}