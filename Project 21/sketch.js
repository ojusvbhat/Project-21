const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var Ground;
var leftSide;
var	rightSide;

function preload(){}

function setup() {
createCanvas(1200,800);
engine = Engine.create();
world = engine.world;
    
var ball_options = {
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2,
	}

//Create the Bodies Here.
ball = Bodies.circle(200,200,20,ball_options);
World.add(world,ball);
    
Ground = new ground(width/2,790,width,20,20);
leftSide = new ground(1000,720,20,120);
rightSide = new ground(1150,720,20,120);
Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background(0);
ellipse(ball.position.x,ball.position.y,40,40);
Ground.show();
leftSide.show();
rightSide.show();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:40,y:-30});
}
}


