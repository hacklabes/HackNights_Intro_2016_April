'use strict';

//variables for the circle movement
var cirx; 
var ciry;
var ang = 0;

//variables for the bouncing movement 
var px; 
var py;
var incx;
var incy; 

var catImg;


//pre loading image to the server
function preload() {  // preload() runs once
    catImg = loadImage('cat.png');
}

function setup() {
   var myCanvas = createCanvas(windowWidth, windowHeight);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
  


   catImg.resize(100,100);

   //starting the bouncing movement in a random position
   px = random(0, width);
   py = random(0, height);
    
   //step amount    
   incx = 5;
   incy = 5;
}
function draw() {
    
  background(255);
  //update for the liner movements
  px = px + incx;    
  py = py + incy;

//make it bounce 
//checking the boundaries
 if(px > width){
     incx = -incx;
   	 px = width;
 }
 if(px < 0){
     incx = -incx;
     px = 0;
 }
 
 if(py > height){
     incy = -incy;
     py = height;
 }
 if(py < 0 ){
    incy = -incy;
    py = 0;
 }
    
  //background(255,255,255,1);
  push();
    translate(px, py); 
    imageMode(CENTER);
    image(catImg,0,0);
  pop();
   
  noStroke();
  fill(255);
  rect(0,0, 80, 80);
  fill(0);
  text(int(px), 10,30);
  text(int(py), 10,50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}