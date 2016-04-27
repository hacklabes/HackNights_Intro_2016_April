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
    
  ang = ang + 10; 

    
  var R = 50; // radius of the rotation
  cirx = px + R*cos(radians(ang));
  ciry = py + R*sin(radians(ang));
 
    
  //update for the liner movements
  px = px + incx;    
  py = py + incy;

//make it bounce 
//checking the boundaries
 if(px > width){
     incx = -incx;
 }
 if(px < 0){
     incx = -incx;
 }
 
 if(py > height){
     incy = -incy;
 }
 if(py < 0 ){
    incy = -incy; 
 }
    
  //background(255,255,255,1);
  push();
    translate(cirx, ciry); 
    rotate(radians(ang/10)); //rotate in relation to the center of the image
    scale(19*tan(radians(ang/10)));
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