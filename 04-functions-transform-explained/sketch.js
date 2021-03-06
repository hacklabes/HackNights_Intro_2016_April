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
	drawGrid(0,0,0,1,255);
	drawGrid(100,100, 45 , 0.5,255);

}


function drawGrid(posX, posY, angle, vScale, color){
	var size = 10; //grid size
	var stepX = width/size; //step for X
	var stepY = height/size;  //step for Y
	
	

	
	push(); //push save the syles and the coordinates state
		translate(posX,posY);
		rotate(radians(angle));
		scale(vScale);
		fill(255-color);
	rect(10, 0,55,145);
	fill(color);
	ellipse(0, 0, 100,50 );
		var x = 0;
		strokeWeight(2);
		while(x <= width){
			line(x,0,x, height);
			x = x + stepX;
		}
		var y = 0;
		while(y <= height){
			line(0,y, width, y);
			y = y + stepY;
		}		
	pop(); // brings back the syle and the coodinates state

}