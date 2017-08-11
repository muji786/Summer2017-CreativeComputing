var serial;
var portName = '/dev/cu.usbmodem1421'; // your serial port goes here
var range = 0;
var click = 0;

var size = 0;
var video;
//var myFace;

var facetracker;

function setup() {

    createCanvas(800, 600);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(800, 600);
    video.hide();

    facetracker = new clm.tracker();
    facetracker.init(pModel);
    facetracker.start(video.elt);

    serial = new p5.SerialPort();
    serial.on('list', printList);
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    serial.open(portName);
}

function draw() {
    if (click == 0) {
        background(255);
        noStroke();
        fill(128);
        textSize(50);
        text("Click the switch to commence..", 20, height / 2);
    } else if (click == 1) {
        clear();
        fill(0, 5);
        rect(0, 0, width, height);
        fill(255, 5);
        var positions = facetracker.getCurrentPosition();
        if (positions != null) {
            for (var i = 0; i < positions.length; i++) {
                size = 1.5 * (positions[7][1] - positions[20][1]);
                noStroke();
                fill(random(255), random(255), random(255));
                ellipse(positions[i][0], positions[i][1], range);
            }
        }
    }
}

function mousePressed() {
    noLoop();
}

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
    serial.write("Hi");
    incomingString = serial.readStringUntil('\r\n');
    if (incomingString.length > 0) {
        if (incomingString != "hello") {
            incomingString = incomingString.trim();
            var sensors = split(incomingString, ',');
            if (sensors.length >= 1) {
                if (sensors[1] == 1)
                    click = 1;
                range = Number(sensors[0]);
            }
        }
        serial.write("Hi");
    }
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}
