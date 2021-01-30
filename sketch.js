const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ball, rope, ground, box2;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(1000, 780, 500, 300);
    box2 = new Box(1000, 280, 500, 300);
    ball = new Ball(200, 200, 100, 100);
    rope = new Rope(ball.body, {x: 500, y: 50});
    ground = new Ground(1500, 780, 3000, 20);

}

function draw(){ 
    background("purple");
    Engine.update(engine);
    box1.display();   
    box2.display();
    ball.display();
    rope.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}