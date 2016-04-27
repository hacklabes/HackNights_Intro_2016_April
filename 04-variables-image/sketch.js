'use strict';
//This is an empty template


var posx;
var posy;
var incx;
var incy; 

var catImg;

function preload() {  // preload() runs once
    catImg = loadImage('cat.png');
}

function setup() {
   var myCanvas = createCanvas(500, 500);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
  
   posx = 100;
   posy = 100;
   incx = 1;
   incy = 0;

   catImg.resize(100,100);

  //frameRate(1);
}

function draw() {
    //make it bounce 

	posx = posx + incx;
	posy = posy + incy;

	if(posx > 400){
	  incx = 0;
	  incy = 1;
	  posx = 400;
	}
	if(posy < 100){
	  incx = 1;
	  incy = 0;
	  posy = 100;
	}
	if(posx < 100){
	  incx = 0;
	  incy = -1;
	  posx = 100;
	}

	if(posy > 400){
	  incx = -1;
	  incy = 0;
	  posy = 400;
	}

	
	background(255,255,255,150);
	imageMode(CENTER);
    image(catImg, posx, posy);
  
  

}