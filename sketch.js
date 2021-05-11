const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree, ground, rightEdge, leftEdge, topEdge;
var gameState = 'onSling';

function preload()
{
	boy = loadImage("images/boy.png");
    tree = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1475, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stoneObj = new Stone(600, 300, 50);
	 mango1 = new Mango(950, 180, 20);
	 mango2 = new Mango(1050, 180, 20);
	 mango3 = new Mango(1100, 180, 20);
	 mango4 = new Mango(1000, 180, 20);
	 mango5 = new Mango(975, 230, 20);
	 mango6 = new Mango(1025, 230, 20);
	 mango7 = new Mango(1075, 230, 20);
	 mango8 = new Mango(1175, 230, 20);
	 //mango9 = new Mango(1225, 30, 40);
	 mango0 = new Mango(1125, 230, 20);
	 mango10 = new Mango(925, 230, 20);
	// mango11 = new Mango(1070, 30, 40);
	// mango12 = new Mango(1100, 30, 40);
	// mango13 = new Mango(1130, 30, 40);
	// mango14 = new Mango(1160, 30, 40);
	// mango15 = new Mango(1190, 30, 40);
	// mango16 = new Mango(1020, 280, 40);
	// mango17 = new Mango(990, 280, 40);
	// mango18 = new Mango(960, 280, 40);
	// mango19 = new Mango(1050, 280, 40);
    mango20 = new Mango(900, 280, 20);
	mango21 = new Mango(950, 280, 20);
	mango22 = new Mango(1050, 280, 20);
	mango23 = new Mango(1000, 280, 20);
	mango24 = new Mango(1200, 280, 20);
	mango25 = new Mango(1100, 280, 20);
	mango26 = new Mango(1150, 280, 20);
	mango27 = new Mango(1250, 280, 20);
	mango28 = new Mango(850, 280, 20);
	mango29 = new Mango(875, 330, 20);
	// mango30 = new Mango(905, 330, 40);
	mango31 = new Mango(925, 330, 20);
	mango32 = new Mango(965, 330, 20);
	mango33 = new Mango(1225, 325, 20);
	mango34 = new Mango(1090, 325, 20);
	mango35 = new Mango(1180, 320, 20);

    Launcher1 = new Launcher(stoneObj.body, {x:180, y:495})
	Engine.run(engine);
	ground = new Ground(width/2, 640, width, 10);
	topEdge = new Ground(width/2, 0, width, 10);
	rightEdge = new Ground(1470, height/2, 10, height);
	leftEdge = new Ground(5, height/2, 10, height);
}


function draw() {
  rectMode(CENTER);
  background('yellow');

  detectCollision(stoneObj, mango0);
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
 // detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
//   detectCollision(stoneObj, mango11);
//   detectCollision(stoneObj, mango12);
//   detectCollision(stoneObj, mango13);
//   detectCollision(stoneObj, mango14);
//   detectCollision(stoneObj, mango15);
//   detectCollision(stoneObj, mango16);
//   detectCollision(stoneObj, mango17);
//   detectCollision(stoneObj, mango18);
//   detectCollision(stoneObj, mango19);
  detectCollision(stoneObj, mango20);
  detectCollision(stoneObj, mango21);
  detectCollision(stoneObj, mango22);
  detectCollision(stoneObj, mango23);
  detectCollision(stoneObj, mango24);
  detectCollision(stoneObj, mango25);
  detectCollision(stoneObj, mango26);
  detectCollision(stoneObj, mango27);
  detectCollision(stoneObj, mango28);
  detectCollision(stoneObj, mango29);
//   detectCollision(stoneObj, mango30);
  detectCollision(stoneObj, mango31);
  detectCollision(stoneObj, mango32);
  detectCollision(stoneObj, mango33);
  detectCollision(stoneObj, mango34);
  detectCollision(stoneObj, mango35);

 	image(boy, 150, 450, 200, 200)
	image(tree, 770, 110, 500, 500)
	mango0.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	//mango9.display();
	mango10.display();
	// mango11.display();
	// mango12.display();
	// mango13.display();
	// mango14.display();
	// mango15.display();
	// mango16.display();
	// mango17.display();
	// mango18.display();
	// mango19.display();
	mango20.display();
	mango21.display();
	mango22.display();
	mango23.display();
	mango24.display();
	mango25.display();
	mango26.display();
	mango27.display();
	mango28.display();
	mango29.display();
	//mango30.display();
	mango31.display();
	mango32.display();
	mango33.display();
	mango34.display();
	mango35.display();

	topEdge.display();
	leftEdge.display();
	rightEdge.display();
	stoneObj.display();  
drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    Launcher1.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(stoneObj.body, {x : 235, y : 420});
	   Launcher1.attach(stoneObj.body);
	   gameState = "onSling";
	   }
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= (lmango.r) + (lstone.r))
	{
		console.log('inIf');
		Matter.Body.setStatic(lmango.body, false);
	}
}
