// sketch.js

function setup() {
	var w = windowWidth;
	var h = windowHeight;
  	var canvas = createCanvas(w * 0.79, h - 400);
  	// Move the canvas so it's inside our <div id="sketch-holder">.
  	canvas.parent('sketch-holder');
  	frameRate(1); // Attempt to refresh at starting FPS

  	background(200);

  	// SETOVANJE
  	translate(width / 2, height / 2); // pozicioniranje slike na sredinu canvasa
  	imageMode(CENTER); // imageMode odredjuje da ce se rotiranje slike vrsiti iz njenog centra
  	background(230);

	// OKVIR GRAFIKE - PARSPARTU
	resetMatrix(); //  resetovanje svih podesavanja za canvas
	translate(width / 2, height / 2);
	imageMode(CENTER);

	//first graphic
// Layer 01 - povrsine
	reset();
	var images_skener = [img02, img03, img04, img05, img21];
	var slika_skener = random(images_skener); // select random image from images array
	rotate(random(380));
	translate(random(-500, 500), random(-500, 500));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - providne sare
	reset();
	var images_skener = [img06, img07, img08, img09, img10];
	var slika_skener = random(images_skener); // select random image from images array
	//translate(random(-500, 500), random(-500, 500));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - elektronika
	reset();
	var images_skener = [img11, img12, img13, img14, img15, img16, img17, img18];
	var slika_skener = random(images_skener); // select random image from images array
	translate(random(-300, 300), random(-300, 300));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - elektronika
	reset();
	var images_skener = [img11, img12, img13, img14, img15, img16, img17, img18];
	var slika_skener = random(images_skener); // select random image from images array
	translate(random(-300, 300), random(-300, 300));
	image(slika_skener, 0, 0); // stampanje slike
}


function draw() {
}

function mouseClicked() {
	// Set Background
	background(220);

	// Layer 01 - povrsine
	reset();
	var images_skener = [img02, img03, img04, img05, img21];
	var slika_skener = random(images_skener); // select random image from images array
	rotate(random(380));
	translate(random(-500, 500), random(-500, 500));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - providne sare
	reset();
	var images_skener = [img06, img07, img08, img09, img10];
	var slika_skener = random(images_skener); // select random image from images array
	//translate(random(-500, 500), random(-500, 500));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - elektronika
	reset();
	var images_skener = [img11, img12, img13, img14, img15, img16, img17, img18];
	var slika_skener = random(images_skener); // select random image from images array
	translate(random(-300, 300), random(-300, 300));
	image(slika_skener, 0, 0); // stampanje slike

	// Layer 02 - elektronika
	reset();
	var images_skener = [img11, img12, img13, img14, img15, img16, img17, img18];
	var slika_skener = random(images_skener); // select random image from images array
	translate(random(-300, 300), random(-300, 300));
	image(slika_skener, 0, 0); // stampanje slike
}