var bananaimage,obstacleimage,backimage,score,obstaclegroup,bananagroup,monkey,monkeyimage

var gameState = 1;

function preload(){
  
  backimage = loadImage("jungle.png");
  
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  
  
  obstacleimage = loadImage("stone.png");
  
  bananaimage = loadImage("banana.png");  
  
}

function setup() {
  
  createCanvas(800, 400);
  
  score = 0;
  
  back = createSprite(400,150,400,200);
  back.addImage("B",backimage);
  back.scale = 2;
  back.x = back.width/2;
  back.velocityX = -1.5;
  
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("M",monkeyimage);
  monkey.scale = 0.11;
  
  Ground = createSprite(200,315,400,5);
  Ground.velocityX = -1.5;
  Ground.x = Ground.width/2;
  Ground.visible = false;
  
  bananagroup = new Group();
  group = new Group();
  
}

function draw() {
  
  background("white");

  monkey.collide(Ground);
  
  if(gameState === 1){

    Ban();
  
    Obs(); 

  camera.position.x = monkey.position.x + 350;
  camera.position.y = displayHeight/4;
  
  if (keyDown("space") && monkey.y >= 275) {
     monkey.velocityY = -14;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  if(back.x < 170){
  back.x = back.width/2;
  Ground.x = Ground.width/2;
  }
  
  if(bananagroup.isTouching(monkey)){
  bananagroup.destroyEach();  
  score = score + 1;
    
  }
  
  if(group.isTouching (monkey)){
  monkey.scale = 0.11;
  score = score - 1;
  group.destroyEach();
  gameState = 2;  
  }
  
  switch(score){
    case 10:monkey.scale = 0.12;
    break;
    case 20:monkey.scale = 0.13;
    break;
    case 30:monkey.scale = 0.14;
    break;
    case 40:monkey.scale = 0.15;
    break;
    case 50:monkey.scale = 0.16;
    break;
    case 60:monkey.scale = 0.17;
    break;
    case 70:monkey.scale = 0.18;
    break;
    case 80:monkey.scale = 0.19;
    break;
    case 90:monkey.scale = 0.20;
    break;
    case 100:monkey.scale = 0.21;
    break;
    default:break;
  }
  
}

drawSprites();

stroke("black");
  textSize(20);
  fill("white");
  text("Score:" + score,290,100);

if(gameState === 2){

  textSize(20);
    fill("red");
    text("GAME OVER",175,150);

    if(score === 100){
      textSize(20);
      text("YOU WIN",175,200);
      monkey.velocityX = 0;
      obstaclegroup.velocityXEach = 0;
      Bananagroup.velocityXEach = 0;
      }

  if(score <= -1){
    textSize(20);
    fill("red");
    text("YOU LOSE",175,200);
    monkey.scale = 0.11;
    if(Ground.x < 170){
    Ground.velocityX = -0.1;  
    Ground.x = Ground.width/2;
    }
    back.velocityX = 0;
    group.destroyEach();
    bananagroup.destroyEach();
  }

}

  }

function Ban(){
  if(frameCount % 95 === 0){
    banana = createSprite(805,200,10,10);
    banana.velocityX = -5;
    banana.addImage(bananaimage);
    banana.scale = 0.04;
    banana.y = random(125,200);
    banana.lifetime = 262;
    bananagroup.add(banana);
  }

}

function Obs(){
  if(frameCount % 83 === 0){
  stone = createSprite(805,295,10,10);
  group.add(stone);
  stone.velocityX = -5;
  stone.addImage(obstacleimage);
  stone.scale = 0.105;
  stone.lietime = 262;
  }
}