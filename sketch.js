var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1;
var myEngine, myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1 = new Basket(400,620,200,20);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	myEngine= Engine.create();
	myWorld = myEngine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true}  );
	World.add(myWorld,packageBody);

	
	
	
	
		

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(myWorld,ground);



	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode   ===  DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
	
  }
  
  
}



