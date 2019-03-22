// sketch.js

function setup() {
	var w = windowWidth;
	var h = windowHeight;
  	var canvas = createCanvas(w * 0.792, h - 500);
  	// Move the canvas so it's inside our <div id="sketch-holder">.
  	canvas.parent('sketch-holder');

  	background(200);
}


function draw() {
  stroke(155);
  strokeWeight(4); // Thicker
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}