var serial;
var portName = '/dev/cu.usbmodem1421'; // your serial port goes here
var mpos = 0;
var inByte;
var video;
var oldFrame = [];
var movement = 0;

function setup() {
    createCanvas(10, 10);
    pixelDensity(1); //older displays
    video = createCapture(VIDEO); // creates a video dom element that connects to the camera
    video.hide(); //hides the actual video dom element and only shows canvas

    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('list', printList); // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen); // callback for the port opening
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose); // callback for the port closing
    serial.open(portName); // open a serial port
}

function draw() {
    background(0);
    image(video, 0, 0, width, height);
    filter(THRESHOLD);
    loadPixels();
    arrayCopy(pixels, oldFrame);
    for (var i = 0; i < pixels.length; i++) {
        for (var j = 0; j < oldFrame.length; j++) {
            if (pixels[i] != oldFrame[j])
                movement++;
        }
    }
    if (movement > 40000) {
        serial.write(1);
        console.log('Movement Detected... ' + movement);
        movement = 0;
    } else
        serial.write(0);
}

//function draw() {
//    background(0);
//    fill(255);
//    ellipse(mouseX, height / 2, 20, 20);
//    textSize(36);
//    text("Outgoing number: " + mpos, 20, height - 60);
//}

function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
    console.log('The serial port closed.');
}

function printList(portList) {
    for (var i = 0; i < portList.length; i++) {
        console.log(i + " " + portList[i]);
    }
}

function serialEvent() {
    inByte = Number(serial.read()); // stores the data from the Arduino
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}
