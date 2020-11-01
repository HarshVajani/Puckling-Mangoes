
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


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		laucherObject.attach(stoneObj.body)
	}
}
function detectcollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition/x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
