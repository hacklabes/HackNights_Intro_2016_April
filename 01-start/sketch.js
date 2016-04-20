'use strict';
//This is an empty template

function setup() {
   var myCanvas = createCanvas(500, 500);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
        
}

function draw() {
        //backgroud(RED,GREEN,BLUE)
          //background('#FF00FF'); //background //color WHITE
    background(255,255,255);
    noStroke();
  	if(mouseX > 250){
          fill(255,0,0,100);
          rect(0,0, 250, 500);
        }
    if(mouseX < 250){
          fill(0,0,255,100);
          rect(250,0, 250, 500);
        }
    stroke(255,10,255,100);
    strokeWeight(10);
        point(mouseX, mouseY); 
  
    fill(0,0,255);
    ellipse(mouseX, mouseY, 100,100);
          //line(x1,y1, x2,y2)
          stroke(20,20,100);
          line(0,0, mouseX, mouseY);
  
          stroke(0,50,100);
           line(500,0, mouseX, mouseY);
  
        stroke(50,100,100);
           line(500,500, mouseX, mouseY);
  
          stroke(200,100,100);
           line(0,500, mouseX, mouseY);

           //ellipse(x,y, width, hight);
    noFill();
    stroke(255,0,0);
  	ellipse(250,250, mouseX, mouseX);
    stroke(0,255,0);
    ellipse(250,250, abs(mouseX-250), abs(mouseX-250));

    stroke(0,0,255);
 	ellipse(250,250, mouseY, mouseY);
    stroke(0,128,128);
    ellipse(250,250, abs(mouseY-250), abs(mouseY-250));
  
    noStroke();
    fill(0);
	text(mouseX, 10,  height);
	text(mouseY, 100,  height);

}