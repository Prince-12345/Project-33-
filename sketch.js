const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var particles;
var score =0;
var turn = 5;
var gameState ="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //turn--;
   //}
 
 // for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("Score = " + score,60,50);
   
   // if(particles.y>40){
    
  //      if(particles.x<800){
    //  score = score+500;
      
      //  }
     // }
    

   textSize(25);
   text("500",340,550);
   text("400",420,550);
   text("300",500,550);
   text("300",260,550);
   text("450",180,550);
   text("450",580,550);
   text("200",660,550);
   text("500",740,550);
   text("200",100,550);
   text("500",20,550);
fill("yellow")
rect(width/2,450,width,5);

text("Turns remaining = " + turn,550,50);
text(mouseX+" , "+mouseY,mouseX,mouseY);




if(particles!=null){
  particles.display();
  if(particles.body.position.x<80 && particles.body.position.y>760 && particles.body.position.x>0){
      score = score + 500;
      particles = null;
      console.log(score);
      if(turn<=0){
      gameState = "end"
    }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>92 && particles.body.position.x<164 && particles.body.position.y>760){
      score = score + 200;
      particles = null;
      if(turn<=0){ 
      gameState = "end"
  }
}
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>172 && particles.body.position.x<245 && particles.body.position.y>760){
      score = score + 450;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
}
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>250 && particles.body.position.y>760 && particles.body.position.x<326){
      score = score + 300;
      particles = null;
      console.log(score);
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>326 && particles.body.position.x<408 && particles.body.position.y>760){
      score = score + 500;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>416 && particles.body.position.x<480 && particles.body.position.y>760){
      score = score + 400;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>490 && particles.body.position.y>760 && particles.body.position.x<564){
      score = score + 300;
      particles = null;
      console.log(score);
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>570 && particles.body.position.x<640 && particles.body.position.y>760){
      score = score + 450;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x> 650 && particles.body.position.x<720 && particles.body.position.y>760){
      score = score + 200;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
  }
}

if(particles!=null){
  particles.display();
  if(particles.body.position.x>730 && particles.body.position.x<790 && particles.body.position.y>760){
      score = score + 500;
      particles = null;
      if(turn<=0){ 
        gameState = "end";
  }
  }
}
if(gameState==="end"){
  textSize(45);
text("Game Over!", 270,230);
particles = null;

}


}

function mousePressed(){
  if(gameState === "play"){
  particles=new Particle(mouseX,26,10);
turn=turn-1;
}}