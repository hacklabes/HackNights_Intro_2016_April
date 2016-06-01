var canvas, text;
var sSlider;


function setup() {
  canvas = createCanvas(600, 400);
  img = createImg("https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
  sSlider = createSlider(0, 255, 100);
  text = createDiv('This is an HTML string!');
  img.position(0,0);
}

function draw() {
  var sliderValue = sSlider.value();
  fill(sliderValue);
  ellipse(mouseX,mouseY,100,100);
  img.size(sliderValue,-1);
  
}