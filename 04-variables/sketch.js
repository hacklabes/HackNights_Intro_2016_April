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
    background(255,255,255,150);
//    noStroke();
//  	if(mouseX > 250){
//          fill(255,0,0,100);
//          rect(0,0, 250, 500);
//        }
//    if(mouseX < 250){
//          fill(0,0,255,100);
//          rect(250,0, 250, 500);
//        }
    stroke(255,10,255,100);
    strokeWeight(10);
        point(mouseX, mouseY); 
  
    fill(0,0,255);
    ellipse(mouseX, mouseY, 250-abs(mouseX-250),250-abs(mouseX-250));

    noFill();
    stroke(255,0,0);
  	ellipse(250,250, mouseX, mouseX);
    stroke(0,255,0);
    ellipse(250,250, abs(mouseX-250), abs(mouseX-250));

    stroke(200,0,0);
  	ellipse(250,250, mouseX/2, mouseX/2);
    stroke(0,200,0);
    ellipse(250,250, abs(mouseX-250)/2, abs(mouseX-250)/2);
  
    stroke(200,0,0);
  	ellipse(250,250, mouseX/3, mouseX/3);
    stroke(0,200,0);
    ellipse(250,250, abs(mouseX-250)/3, abs(mouseX-250)/3);
  
    stroke(200,0,0);
  	ellipse(250,250, mouseX/4, mouseX/4);
    stroke(0,200,0);
    ellipse(250,250, abs(mouseX-250)/4, abs(mouseX-250)/4);
  
    stroke(0,0,255);
 	ellipse(250,250, mouseY, mouseY);
    stroke(0,128,128);
    ellipse(250,250, abs(mouseY-250), abs(mouseY-250));
  
    stroke(0,0,255);
 	ellipse(250,250, mouseY, mouseY);
    stroke(0,128,128);
    ellipse(250,250, abs(mouseY-250)/2, abs(mouseY-250)/2);
  
    stroke(0,0,255);
 	ellipse(250,250, mouseY, mouseY);
    stroke(0,128,128);
    ellipse(250,250, abs(mouseY-250)/3, abs(mouseY-250)/3);
  
    stroke(0,0,255);
 	ellipse(250,250, mouseY, mouseY);
    stroke(0,128,128);
    ellipse(250,250, abs(mouseY-250)/3, abs(mouseY-250)/3);
  
    noStroke();
    fill(0);
	text(mouseX, 10,  height);
	text(mouseY, 100,  height);
  	fill(0,80);
    triangle( abs(mouseY-250),250, 250, abs(mouseY-250), 500-abs(mouseY-250), 250);
  
   	fill(0,100);
    triangle( abs(mouseY-250)/2,250, 250, abs(mouseY-250)/2, 500-abs(mouseY-250)/2, 250);

    fill(0,130);
    triangle( abs(mouseY-250)/3,250, 250, abs(mouseY-250)/3, 500-abs(mouseY-250)/3, 250);
  
  
  
   	fill(255,0,0,10);
    triangle( abs(mouseX-250),250, 250, 500-abs(mouseX-250), 500-abs(mouseX-250), 250);
   
  	fill(255,0,0,20);
    triangle( abs(mouseX-250)/2,250, 250, 500-abs(mouseX-250)/2, 500-abs(mouseX-250)/3, 250);
   	fill(255,0,0,80);
    triangle( abs(mouseX-250)/3,250, 250, 500-abs(mouseX-250)/3, 500-abs(mouseX-250)/3, 250);
  
  

}