var hunter,hunterImg,background,backgroundImg,tiger,tigerImg,bullet,bulletIMG,bursting,burstingIMG;
var bulletGroup,lyingTiger,lyingTigerIMG
function preload(){
  hunterImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png")
  backgroundImg=loadImage("Background.jpg")
  tigerImg=loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png","tiger7.png","tiger8.png")
  bulletIMG=loadImage("Bullet(1).png","Bullet(2).png","Bullet(3).png","Bullet(4).png")
  burstingIMG=loadImage("burstingImage1.png","burstingImage2.png","burstingImage3.png","burstingImage4.png")
  lyingTigerIMG=loadImage("tigerLying.png") 

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  hunter=createSprite(450, 800, 50, 50);
  hunter.addAnimation("shooting",hunterImg)
  tiger=createSprite(550,640,50,50)
 
  tiger.addAnimation("running",tigerImg)
  tiger.velocityX=5
tiger.velocityY=random(5,-5)
  edges=createEdgeSprites()
  bulletGroup=new Group()
}

function draw() {
  background(backgroundImg)
  fill("white")
  textSize(20)
  
  Bullet()
  hunter.velocityX=0
  hunter.velocityY=0

  if(bulletGroup.isTouching(tiger)){

    tiger.changeImage("lying",lyingTigerIMG)

  }




if(keyDown("RIGHT_ARROW")){
  hunter.velocityX=5
  hunter.velocityY=0

}
if(keyDown("LEFT_ARROW")){
  hunter.velocityX=-5
  hunter.velocityY=0

}

hunter.collide(edges[3])
hunter.collide(edges[1])
hunter.collide(edges[0])

tiger.velocityX=5
tiger.velocityY=random(5,-5)
tiger.bounceOff(edges)

  drawSprites();
}
function Bullet(){
  if(keyDown("space")){
    bullet=createSprite(hunter.x+80,hunter.y-80,55,55)
    bullet.addAnimation("missile",bulletIMG)
    bullet.scale=0.5
    bullet.velocityX=5
    bulletGroup.add(bullet)
     
  
  }
 

}
