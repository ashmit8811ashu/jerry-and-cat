var bgImage;
var cat1,cat2,cat3,cat4;
var m1,m2,m3,m4;
var cat,mouse
function preload() {
    bgImage=loadImage("images/garden.png")
    cat1=loadImage("images/cat1.png")
    cat2=loadImage("images/cat2.png")
    cat3=loadImage("images/cat3.png")
    cat4=loadImage("images/cat4.png")
    m1=loadImage("images/mouse1.png")
    m2=loadImage("images/mouse2.png")
    m3=loadImage("images/mouse3.png")
    m4=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    
cat=createSprite(850,600);
cat.addAnimation("catSleeping",cat1)
cat.scale=0.2;
mouse=createSprite(400,600);
mouse.addAnimation("mouseRunning",m1)
mouse.scale=0.2;  
cat.debug=true
mouse.debug=true
}

function draw() {

    background(bgImage);
    if(cat.x-mouse.x<cat.width/2 + mouse.width/2){
     cat.velocityX=0
     mouse.velocityX=0 
     cat.addAnimation("catstop",cat4)
     cat.changeAnimation("catstop")
     mouse.addAnimation("mousest",m4)  
     mouse.changeAnimation("mousest")
    }

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
cat.velocityX=-5;
   cat.addAnimation("cattease",cat2,cat3) 
cat.changeAnimation("cattease")
mouse.addAnimation("mousego",m2,m3)
mouse.changeAnimation("mousego")

  }
  


}
