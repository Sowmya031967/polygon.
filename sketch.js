const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon1, slingshot1;

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,300,200,20);
    ground1 = new Ground(420,600,205,20);
    ground2 = new Ground(600,height,1200,20)

    block0 = new block(525,270,35,45);
    block2 = new block(665,270,35,45);
    block3 = new block(560,270,35,45);
    block4 = new block(595,270,35,45);
    block5 = new block(630,270,35,45);
    block6 = new block(335,568,35,45);
    block7 = new block(370,568,35,45);
    block8 = new block (410,568,35,45);
    block9 = new block(430,568,34,45);
    block10 = new block (473,568,35,45);
    block11 = new block (483,568,35,45);

    newBlock = new block1(560,227,35,45);
    newBlock1 = new block1(595,227,35,45);
    newBlock2 = new block1(630,227,35,45);
    Newblocks = new block1(470,520,35,45);
    Newblock4 = new block1(434,520,35,45);
    Newblock5 = new block1(400,520,35,45);
    Newblock6 = new block1(365,520,35,45);

    Newblock3 = new newblock(595,185,35,45)
    Newblock19 = new newblock(400,475,35,45)
    Newblock20 = new newblock(435,475,35,45)

    polygon1 = new polygon(100,350,50,50)

    slingshot1 = new slingshot(polygon1.body,{x:100, y:350});

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    ground1.display();
    ground2.display();

    block0.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();


    newBlock.display();
    newBlock1.display();
    newBlock2.display();
    Newblocks.display();
    Newblock4.display();
    Newblock5.display();
    Newblock6.display();

    Newblock3.display();
    Newblock19.display();
    Newblock20.display();

    polygon1.display();
    slingshot1.display();    
}


function mouseDragged(){
    
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    slingshot1.fly();
   

}
function keyPressed(){
    if(keyCode === 32){
    slingshot1.attach(polygon1.body)
    
    
    }

}


