'use strict';


var catImg;

var listChars = ['.', '1', '!', '|', '[','||','#'];

//pre loading image to the server
function preload() {  // preload() runs once
	catImg = loadImage('catBW.png');
}

function setup() {
   var myCanvas = createCanvas(windowWidth, windowHeight);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(0);
   frameRate(200);
  
}
function draw() {
  //image(catImg,0,0);
  noStroke();
  for(var posy = 0; posy < catImg.height; posy +=5){
  for(var posx = 0; posx < catImg.width; posx +=5){
	var color = catImg.get(posx,posy);
		//testing if the color matchs with the intervals, if so draws the pixel
		//if(red(color) > 20 && blue(color) > 20 && green(color) > 20 ){
			fill(255);
			var charIndex = map(brightness(color), 0, 255, 0,  listChars.length);
			textSize(5);
			text(listChars[floor(charIndex)], posx, posy);
		    //ect(posx,posy,5,5);
		//}
  	}
  }
  image(catImg, 300,0);
  noLoop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}