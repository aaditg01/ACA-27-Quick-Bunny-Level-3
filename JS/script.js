function preload() {
  bg= loadImage('./imgs/background.jpg');
  rabbit= loadImage('./imgs/bunny.png');
  carrt= loadImage('./imgs/carrot.png');
  wall= loadImage('./imgs/wall.jpg');
  snk= loadImage('./imgs/worm.png');
  
}
  
  function setup() {
    createCanvas(600,600);
    edges=createEdgeSprites();
    bckground= createSprite(350,350);
    bckground.addImage(bg);
    bunny= createSprite(40,550,30,30);
    bunny.addImage(rabbit);
    bunny.scale=0.1;
    carrot= createSprite(560,40,30,30);
    carrot.addImage(carrt);
    carrot.scale=0.03;
    obs1= createSprite(500,270,100,20);
    obs2= createSprite(300,270,100,20);
    obs3= createSprite(100,270,100,20);
    obs4= createSprite(200,350,100,20);
    obs5= createSprite(400,350,100,20);
    obs6= createSprite(600,350,100,20);
    obs7= createSprite(1,350,100,20);
    obs1.addImage(wall);
    obs2.addImage(wall);
    obs3.addImage(wall);
    obs4.addImage(wall);
    obs5.addImage(wall);
    obs6.addImage(wall);
    obs7.addImage(wall);
    obs1.scale=0.041;
    obs2.scale=0.041;
    obs3.scale=0.041;
    obs4.scale=0.041;
    obs5.scale=0.041;
    obs6.scale=0.041;
    obs7.scale=0.041;
    snakeGroup= new Group();
  }
  
  function draw() {
    background("black"); 
    bunny.bounceOff(edges[0]); 
    bunny.bounceOff(edges[1]); 
    bunny.bounceOff(edges[2]);   
    bunny.bounceOff(edges[3]);
    if (keyDown("up")){
      bunny.y=bunny.y-3
    }
    if (keyDown("down")){
      bunny.y=bunny.y+3
    }
    if (keyDown("left")){
      bunny.x=bunny.x-2
    }
    if (keyDown("right")){
      bunny.x=bunny.x+2
    } 
    if(bunny.isTouching(carrot)){
      text("YOU WIN!",200,200)
    }
    if(bunny.isTouching(obs1)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs2)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs3)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs4)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs5)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs6)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    bunny.shapeColor="white";
    carrot.shapeColor="pink";
    obs1.shapeColor="red";
    obs2.shapeColor="red";
    obs3.shapeColor="red";
    obs4.shapeColor="red";
    obs5.shapeColor="red";
    obs6.shapeColor="red";
    generateSnakes();
    for(var i = 0; i< (snakeGroup).length ;i++){
      var temp = (snakeGroup).get(i) ;
      if (bunny.isTouching(temp)) {
        bunny.x=40
        bunny.y=550
      }   
    }
    drawSprites();
  }
  function generateSnakes(){
    if(frameCount % 20===0){
      console.log(frameCount);
      var snake = createSprite (600,random(1,600),40,5);
      snake.addImage(snk);
      snake.scale=random(0.08,0.2);   
      snake.shapeColor="green"
      snake.velocityX=random(-8,0);
      snakeGroup.add(snake);
      }
    }
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
