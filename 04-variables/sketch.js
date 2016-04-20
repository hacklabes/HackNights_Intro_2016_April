'use strict';
//This is an empty template


var posx;
var posy;

function setup() {
   var myCanvas = createCanvas(500, 500);
   myCanvas.parent('myCanvas');
  
   //cleaning the background
   background(255,255,255);
  
   posx = 100;
   posy = 100;
  
  //frameRate(1);
}

function draw() {
   //!= different
   // > bigger than
   // >= bigger or equal
   // < smaller than
   // <= smaller or equal
  
   //1 - try to make a square/rectangle movement.
   //2 - try to make a back forth  movement.
   //3 - add new variables and new interactive elements
   posx = posx + 5
   posy = posy + 1;

   
   if(posx > 400){
	 posx = 100;
   }
  
   if(posy > 400){
	 posy = 100;
   }
  
  
        //backgroud(RED,GREEN,BLUE)
          //background('#FF00FF'); //background //color WHITE
    background(255,255,255,150);
//    noStroke();
//  	if(posx > 250){
//          fill(255,0,0,100);
//          rect(0,0, 250, 500);
//        }
//    if(posx < 250){
//          fill(0,0,255,100);
//          rect(250,0, 250, 500);
//        }
    stroke(255,10,255,100);
    strokeWeight(10);
    point(posx, posy); 
  
    fill(0,0,255);
    ellipse(posx, posy, 250-abs(posx-250),250-abs(posx-250));

    noFill();
    stroke(255,0,0);
  	ellipse(250,250, posx, posx);
    stroke(0,255,0);
    ellipse(250,250, abs(posx-250), abs(posx-250));

    stroke(200,0,0);
  	ellipse(250,250, posx/2, posx/2);
    stroke(0,200,0);
    ellipse(250,250, abs(posx-250)/2, abs(posx-250)/2);
  
    stroke(200,0,0);
  	ellipse(250,250, posx/3, posx/3);
    stroke(0,200,0);
    ellipse(250,250, abs(posx-250)/3, abs(posx-250)/3);
  
    stroke(200,0,0);
  	ellipse(250,250, posx/4, posx/4);
    stroke(0,200,0);
    ellipse(250,250, abs(posx-250)/4, abs(posx-250)/4);
  
    stroke(0,0,255);
 	ellipse(250,250, posy, posy);
    stroke(0,128,128);
    ellipse(250,250, abs(posy-250), abs(posy-250));
  
    stroke(0,0,255);
 	ellipse(250,250, posy, posy);
    stroke(0,128,128);
    ellipse(250,250, abs(posy-250)/2, abs(posy-250)/2);
  
    stroke(0,0,255);
 	ellipse(250,250, posy, posy);
    stroke(0,128,128);
    ellipse(250,250, abs(posy-250)/3, abs(posy-250)/3);
  
    stroke(0,0,255);
 	ellipse(250,250, posy, posy);
    stroke(0,128,128);
    ellipse(250,250, abs(posy-250)/3, abs(posy-250)/3);
  
    noStroke();
    fill(0);
	text(posx, 10,  height);
	text(posy, 100,  height);
  	fill(0,80);
    triangle( abs(posy-250),250, 250, abs(posy-250), 500-abs(posy-250), 250);
  
   	fill(0,100);
    triangle( abs(posy-250)/2,250, 250, abs(posy-250)/2, 500-abs(posy-250)/2, 250);

    fill(0,130);
    triangle( abs(posy-250)/3,250, 250, abs(posy-250)/3, 500-abs(posy-250)/3, 250);
  
  
  
   	fill(255,0,0,10);
    triangle( abs(posx-250),250, 250, 500-abs(posx-250), 500-abs(posx-250), 250);
   
  	fill(255,0,0,20);
    triangle( abs(posx-250)/2,250, 250, 500-abs(posx-250)/2, 500-abs(posx-250)/3, 250);
   	fill(255,0,0,80);
    triangle( abs(posx-250)/3,250, 250, 500-abs(posx-250)/3, 500-abs(posx-250)/3, 250);
  
  

}