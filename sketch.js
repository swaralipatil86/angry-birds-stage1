const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1,bird1,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    box2 = new Box(920,360,70,70);
    ground = new Ground(600,height,width,20);
    pig1 = new Pig(810,360);
    log1 = new Log(810,340,300,PI);
    box3 = new Box(700,300,70,70);
    box4 = new Box(920,300,70,70);
    log2 = new Log(810,280,300,PI);
    pig2 = new Pig(810,300);
    bird1 = new Bird(200,200); 
    box5 = new Box(810,260,70,70);
    log3=new Log(760,120,120,-PI/7)
    log4=new Log(760,120,120,PI/7)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    bird1.display();
    
    log3.display();
    log4.display();
    box5.display();
    
}