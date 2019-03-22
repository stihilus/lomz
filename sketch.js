// sketch.js

function setup() {
	var w = windowWidth;
	var h = windowHeight;
  	var canvas = createCanvas(w * 0.792, h - 400);
  	// Move the canvas so it's inside our <div id="sketch-holder">.
  	canvas.parent('sketch-holder');
  	frameRate(1); // Attempt to refresh at starting FPS

  	background(200);
}


function draw() {
	background(200);
	var c = mouseX * 0.22;
	noStroke();
	fill(c);

	// Draw 
	var cW = windowWidth * 0.35;
	var cH = windowHeight * 0.27;

	circle(cW, cH, random(5,50));
	circle(cW + random(100), cH, random(5,100));
	rect(cW + random(100), cH - random(100), random(200), random(100));
	rect(cW + random(100), cH - random(100), random(100), random(100));
	rect(cW + random(200), cH - random(300), random(500), random(100));
	rect(cW + random(200), cH - random(400), random(100), random(100));

}