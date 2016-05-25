'use strict';


var catImg;


//pre loading image to the server
function preload() {  // preload() runs once
	catImg = loadImage("cat.png");
}

function setup() {
   var myCanvas = createCanvas(windowWidth, windowHeight);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
   frameRate(200);
  
}
function draw() {
  //image(catImg,0,0);
  noStroke();
  for(var posy = 0; posy < catImg.height; posy +=5){
  for(var posx = 0; posx < catImg.width; posx +=5){
	var color = catImg.get(posx,posy);
		//testing if the color matchs with the intervals, if so draws the pixel
		if(red(color) > 20 && blue(color) > 20 && green(color) > 20 ){
			fill(color);
		}else{
		 	fill(255,0,0); //red
		}
		rect(posx,posy,5,5);
  	}
  }
  noLoop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}