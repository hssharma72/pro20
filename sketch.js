 var cat;
 var mouse;
 var bgImg;
function preload() {
    bgImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    mouseImg1=loadImage("images/mouse1.png"); 
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    cat= createSprite(800,650,20,20);
    cat.addImage(catImg1);
    cat.scale=0.2
 

    mouse=  createSprite(150,650,20,20)
    mouse.addImage(mouseImg1);
    mouse.scale=0.2
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
    } 

    drawSprites();
}


function keyPressed(){

    
	if (keyCode === RIGHT_ARROW) {
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay=25;
       }

       if (keyCode === LEFT_ARROW) {
       cat.addAnimation("catRunning",catImg2)
       cat.changeAnimation("catRunning")
       cat.velocityX=-4;
       }


       if (keyCode === UP_ARROW) {
        mouse.addAnimation("mouseTeasing",mouseImg1);
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay=25;
         }


       if (keyCode === DOWN_ARROW) {
        cat.addAnimation("catRunning",catImg1)
        cat.changeAnimation("catRunning")
        cat.velocityX=-0;
        }
  //For moving and changing animation write code here


}
