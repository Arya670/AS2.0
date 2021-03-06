var bg,bgImg;
var player, shooterImg, shooter_shooting;
var astroidImg;
var bullet,bulletImg;

function preload(){
  
  shooterImg = loadImage("assets/ship2.png")
  shooter_shooting = loadImage("assets/ship1.png")

  bgImg = loadImage("assets/bgg.jpg")
  astroidImg = loadImage("assets/astroid.png")
  bulletImg = loadImage("assets/bullet.png")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1
bg.velocityX = -3


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.2
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 
if(bg.x < 0){
  bg.x = width/2
}

 
 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  console.log("key went down is working")
  bullet=createSprite(player.x,player.y,120,10)
  bullet.addImage(bulletImg)
  bullet.scale=0.3;
  bullet.velocityX=20


  player.depth = bullet.depth
  player.depth = player.depth+2
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg);
}

spawnAstroids();
drawSprites();

}


function spawnAstroids(){
  if(frameCount % 100===0){
    var astroid=createSprite(windowWidth+50,200,50,50);
    astroid.y=Math.round(random(50,height-50))
    astroid.addImage(astroidImg);
    astroid.velocityX=-5
    astroid.scale=0.05
    astroid.lifetime=width/2

  }


}
