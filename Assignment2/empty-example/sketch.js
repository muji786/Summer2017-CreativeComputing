//https://alpha.editor.p5js.org/muji786/sketches/ryWXvSHrW
var video;

function setup() {
 createCanvas(windowWidth, windowHeight); // creates a canvas in the browser window
  pixelDensity(1); //older displays
	background(0);
 video = createCapture(VIDEO); // creates a video dom element that connects to the camera
 video.hide(); //hides the actual video dom element and only shows canvas
 image(video, 0,0, width,length);
}

function takeSnapShot()
{
  //image(video, 0,0, width,length);
	//video.get();
}

function updateSnapShot()
{
	// inspired by Dan Shiffman
  video.loadPixels();
	loadPixels();
	for (var y = 0; y < video.height; y++) {
		for (var x =0; x < video.width; x++) {
			var index = (x + y * video.width * 4);
			var red = video.pixels[index+0];
			var green = video.pixels[index+1];
			var blue = video.pixels[index+2];
			var bright = (red+green+blue)/3;
			 pixels[index] = red;
			 pixels[index+1] = green;
			 pixels[index+2] = blue;
			 pixels[index+3] = 255;
		 }
	}
	updatePixels();
}

function draw() {

	if (mouseIsPressed) {
	//	takeSnapShot();
	}
 updateSnapShot();
}
