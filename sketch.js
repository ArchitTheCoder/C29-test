
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40
	bobpositionx = width/2
	bobpositiony = (height / 4) + 500
	//Create the Bodies Here.
	bob1 = new Bob(bobpositionx - bobDiameter * 4, bobpositiony, bobDiameter)
	bob2 = new Bob(bobpositionx - bobDiameter*2, bobpositiony, bobDiameter)
	bob3 = new Bob(bobpositionx, bobpositiony, bobDiameter)
	bob4 = new Bob(bobpositionx + bobDiameter*2, bobpositiony, bobDiameter)
	bob5 = new Bob(bobpositionx + bobDiameter * 4, bobpositiony, bobDiameter)


	roof = new Roof(width/2, height/4,500, 30)

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter * 4, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bob3.body, roof.body, 0, 0)
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*2, 0)
	rope5 = new Rope(bob5.body, roof.body, bobDiameter * 4, 0)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");


	
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();



}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -50, y: -45 });
	}
}

function drawLine(constraint) {
	bobbodyposition = constraint.bodyA.position
	roofbodyposition = constraint.bodyB.position

	roofbodyOffset = constraint.pointB
	roofBodyX = roofbodyposition.x + roofbodyOffset.x
	roofBodyY = roofbodyposition.y + roofbodyOffset.y

	line(bobbodyposition.x, bobbodyposition.y, roofBodyX, roofBodyY)

}
