var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new Paper(100,570,70);
    ground= new Ground(600,600,1200,20);
    bottomObj= new Dustbin(600,580,220,18);
    leftObj= new Dustbin(500,530,18,80);
    rightObj= new Dustbin(700,530,18,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  bottomObj.display();
  leftObj.display();
  rightObj.display();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-55})
 }
}



