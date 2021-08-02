var issIMG,spacecraft1,spacecraft2,spacecraft3,spacecraft4,bg,spacecraft,iss,hasDoked = false;

function preload() {
  issIMG = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");


}
function setup() {
  createCanvas(600,350);
  spacecraft  = createSprite(285,240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.15
  iss = createSprite(330,130);
  iss.addImage(issIMG);
  iss.scale = 0.25

}

function draw() {
  background(bg);  
  if(!hasDoked){
    spacecraft.x = spacecraft.x+ random (-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4)
      spacecraft.x = spacecraft.x-1
      //for right sp3 down sp2. for right +1 for down nothing.
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3)
      spacecraft.x = spacecraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2)
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDoked = true;
    textSize(25);
    fill ("white");
    text("Docking Succesful",200,300)
  }
  drawSprites();
}
