const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ghost1, bear1;
var backgroundImg;

function preload() {

  backgroundImg = loadImage("sprites/bgblack.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // to create objects
    ground = new Ground(600,height,1200,20)
    road1 = new road(600, 350);
    build1 = new BUILD(50, 220);
    build01 = new BUILD1(150, 220);

    build2 = new BUILD(600, 220);
    build02 = new BUILD1(450, 220);
    build3 = new BUILD(950, 220);
    build4 = new BUILD(300, 220);
    build03 = new BUILD1(850, 220);
    build04 = new BUILD1(750, 220);
    build05 = new BUILD1(1050, 220);

    car1 = new CAR(1050, 350);
    car2 = new CAR(450, 350);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

  //to display objects

    ground.display();
    road1.display();
    build1.display();
    build01.display();
    build2.display();
    build02.display();
    build3.display();
    build4.display();
    build03.display();
    build04.display();
    build05.display();
    car1.display();
    car2.display();
}