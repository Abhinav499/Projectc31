const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];

var divisions = [];
var divisionHeight=200;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,800,800,10);
  for(var k =0;k <=width; k = k+80){
    fill ("white");
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

for(var j =10;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75,10));
}
for(var j =25;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175,10));
}
for(var j =10;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,275,10));
}
for(var j =25;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375,10));
}
for(var j =10;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,475,10));
}
}


function draw() {
  background(0); 
  Engine.update(engine);
  fill("white");
  for (var j = 0; j <particles.length;j++){
    particles[j].display();
  }
  for (var k = 0; k <particles.length;k++){
    particles[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(0,800),10,10));

  }
  for(var i =0;i<divisions.length;i++){
    divisions[i].display();
  }
  for(var i =0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  ground.display();
}