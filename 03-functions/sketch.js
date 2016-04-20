'use strict';

//This is an empty template

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
	//drawFace(250, 250, mouseX/20, mouseY);
  	drawFace(250, 250, 1, 0);
}
function drawFace(posX, posY, scaleV, angleV){
	push(); //push save the syles and the coordinates state
	//head
  		translate(posX, posY);
  		scale(scaleV); //number between 0 -- infinity, 
  						//1 ,100% 0.5 50% smaller, 2, 200% bigger
  		rotate(radians(angleV)); //convert degrees to radians
  	
		ellipse(0, 0, 100,100);
	//eye1
		fill(0);
		ellipse(-12, -10, 10,10);
		//eye2
		ellipse(12, -10, 10,10);
  
		noFill();
	//arc needs
	//position, width, height, angle start, angle end
		arc(0, 0, 50, 50, radians(30), radians(150)); 	
	pop(); // brings back the syle and the coodinates state

}