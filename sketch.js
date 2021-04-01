const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var drops = [];
var drop; 
var maxDrops = 100;
function preload(){
    
}

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

   //creating drops
   if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

}
    //drop = new createDrop(random(0,400), random(0,60));




    

    
}

function draw(){
    background("black");
    Engine.update(engine);

   // drop.display();

   for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY()
    
}

}

