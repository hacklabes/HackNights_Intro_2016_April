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
  var posx = random(catImg.width);
  var posy = random(catImg.height);

  var color = catImg.get(posx,posy);
  stroke(color);
  strokeWeight(10);
  point(posx,posy);

	
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}