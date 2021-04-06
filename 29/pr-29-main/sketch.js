const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var score = 0;

function preload() {
    bg = loadImage("images/GamingBackground.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,350,20);

   

    

    

 
    monster = new Monster(1100,550,300);
    box1 = new Box(692,240,70,70);

    box2 = new Box(640,240,70,70);

    box3 = new Box(470,240,70,70);

    

   

    
    

    ball = new Ball(320,150,100);
    slingshot = new SlingShot(ball.body,{x:200, y:150});
}

function draw(){
    background(bg);
    Engine.update(engine);
    strokeWeight(4);

    noStroke();
        textSize(25)
        fill("black")
        text("Score  " + score, width-300, 50)

    
    ground.display();

   

    



    box1.display();

    box2.display();

    box3.display();



 ;

    monster.display()

    
      
    

    

    ball.display();



    box1.score();

    box2.score();

    box3.score();

    

    

    

    
    //log6.display();
   slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body);
    }
}