
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var dustbin1 , dustbin2 ;


function preload()
{
	
}




function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,690,3000,20);


	paper = new Paper(200,200,20);
	dustbin  = new Dustbin(500,580,200,200);
   //dustbin1  = new Dustbin(410,630,20,100);
   //dustbin2  = new Dustbin(590,630,20,100);
	ground = new Ground(400,690,1000,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  



  //drawSprites();
 paper.display();
 ground.display();
 dustbin.display();
//dustbin1.display();
//dustbin2.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30, y:-50})
	}
//	if (keyCode === DOWN_ARROW){
	//	Matter.Body.applyForce(paper.body,paper.body.position,{x:-15, y:-10})
	//}

}

