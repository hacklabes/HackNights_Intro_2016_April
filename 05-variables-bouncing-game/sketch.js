'use strict';

//variables for the circle movement
var cirx; 
var ciry;
var ang = 0;

//variables for the bouncing movement 
var NUM = 5;//the number of elements you want,


var px = [];
var py = [];
var incx = [];
var incy = [];

var catImg = [];
var imgList = ['cat1.png','cat2.png','cat3.png','cat4.png','cat1.png','cat2.png','cat3.png','cat4.png','cat1.png','cat2.png','cat3.png','cat4.png','cat1.png','cat2.png','cat3.png','cat4.png'];
var padList = ['dog.png'];
var padImg;
var padX,lastPadX;
var padY,lastPadY;

//pre loading image to the server
function preload() {  // preload() runs once
//    catImg[0] = loadImage('cat1.png');
//    catImg[1] = loadImage('cat2.png');
//    catImg[2] = loadImage('cat3.png');
//    catImg[3] = loadImage('cat4.png');
  var count = 0;
  while(count < imgList.length){ //.length return the num elements in the list
	catImg[count] = loadImage(imgList[count]);
	count = count + 1; 
  }
  padImg = loadImage(padList[0]);
}

function setup() {
   var myCanvas = createCanvas(windowWidth, windowHeight);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
  

   //starting the bouncing movement in a random position
   var count = 0;
   // while true: do something inside {}
   while(count < imgList.length){
	 //px[0], px[1], px[2],... px[]
	 //label[INDEX], 
	 px[count] = random(0, width);
	 py[count] = random(0, height);
	 
	    //step amount    
     incx[count] = random(-5,5);
   	 incy[count] = random(-5,5);
	 
	 catImg[count].resize(100,100);
	 padImg.resize(140,140);
	 count = count + 1;
   }
   padX = 100;
   padY = height/2;
   lastPadX = 5;
   lastPadY = 5;
//  
//  	 px = random(0, width);
//	 py = random(0, height);
//	 
//	    //step amount    
//     incx = random(-5,5);
//   	 incy = random(-5,5);
//  
}
function draw() {
    
  background(255);
  //update for the liner movements
  var count = 0;
  image(padImg, padX,padY);
  while(count < imgList.length){
	
	  px[count] = px[count] + incx[count];    
 	  py[count] = py[count] + incy[count];

		//make it bounce 
		//checking the boundaries
 	  if(px[count] > width){
 		    incx[count] = -incx[count];
   			px[count] = width;
 	  }
	  if(px[count] < 0){
    	 incx[count] = -incx[count];
    	 px[count] = 0;
	  }
	  if(py[count] > height){
    	 incy[count] = -incy[count];
     	 py[count] = height;
 	  }
 	  if(py[count] < 0 ){
  		 incy[count] = -incy[count];
  		 py[count] = 0;
	  }
	  if(px[count] > padX && px[count] < padX+140){
		if(py[count] > padY && py[count] < padY + 140){
		  incx[count] = -incx[count];
		  incy[count] = -incy[count];
		  py[count] = py[count] + 1.5*(padY-lastPadY);
		  px[count] = px[count] + 1.5*(padX-lastPadX);

		}
	  }
	  //background(255,255,255,1);
	  push();
		translate(px[count] , py[count]); 
		imageMode(CENTER);
		image(catImg[count] ,0,0);
	  pop();

//	  noStroke();
//	  fill(255);
//	  rect(0,0, 80, 80);
//	  fill(0);
//	  text(int(px), 10,30);
//	  text(int(py), 10,50);
	  count = count + 1;
  	}
  
  
    
  if(keyIsPressed === true){
 	 if (keyCode === UP_ARROW) {
	   	lastPadY = padY;
   		padY -= 5;
		if(padY < -140){
	   		padY = height;
	 	}
  	 }else if (keyCode === DOWN_ARROW) {
	    lastPadY = padY;
   	 	padY += 5;
	 	if(padY >= height){
	   		padY = -140;
	 	}
  	}else if (keyCode === LEFT_ARROW) {
	  	lastPadX = padX;
   		padX -= 5;
		if(padX < -140){
	   		padX = width;
	 	}
  	 }else if(keyCode === RIGHT_ARROW) {
	   	lastPadX = padX;
   	 	padX += 5;
	 	if(padX >= width){
	   		padX = -140;
	 	}
  	}
  }
	
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}