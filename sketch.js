
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gr,bottom,right,left;

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

  op= new Paper(40,400,5,8);
  
 right=createSprite(1200,460,20,200);
 right.shapeColor=("red");
 righ=Bodies.rectangle(1200,460,20,200,{isStatic:true});
 World.add(world,righ);

 left=createSprite(1000,460,20,200);
 left.shapeColor=("red");
 lef=Bodies.rectangle(1200,460,20,200,{isStatic:true});
 World.add(world,lef);

  bottom=createSprite(1100,560,200,20);
  bottom.shapeColor=("blue");
  bot=Bodies.rectangle(1100,560,200,20,{isStatic:true});
  World.add(world,bot)

  gr=createSprite(750,580,1500,10);
  gr.shapeColor=("red");
  go=Bodies.rectangle(750,580,1500,10,{isStatic:true});
  World.add(world,go)
   
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  op.display();
  drawSprites();
 }

 function keyPressed() {
if (keyCode=== UP_ARROW){
   Body.applyForce(op.body,op.body.position,{x:95,y:-85})
}
 }



