var video;
var w = 200;
var h = 200;

function setup() {
    createCanvas(w, h);
    background(220);

    pixelDensity(1); //older displays
    video = createCapture(VIDEO); // creates a video dom element that connects to the camera
    video.hide(); //hides the actual video dom element and only shows canvas
}

function draw() {
    if (mouseIsPressed) {
        image(video, 0, 0, w, h);
        loadPixels();
        for (var y = 0; y < video.height; y++) {
            for (var x = 0; x < video.width; x++) {
                var index = (x + y * video.width * 4);
                var red = video.pixels[index + 0];
                var green = video.pixels[index + 1];
                var blue = video.pixels[index + 2];
                var bright = (red + green + blue) / 3;
                pixels[index] = blue;
                pixels[index + 1] = red;
                pixels[index + 2] = green;
                pixels[index + 3] = bright;
            }
        }
        updatePixels();
    }
}
