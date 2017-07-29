var allBalls = [];
var maxBalls = 5;
var gameOver = 0;

const LINE_HEIGHT = 250;
const LINE_WIDTH = 250;
const LINE_THICKNESS = 10;

var topLine, bottomLine, leftLine, rightLine;

var Balls = function (_x, _y, _rad, _r, _g, _b) {
    this.x = _x;
    this.y = _y;

    this.rad = _rad;

    this.r = _r;
    this.g = _g;
    this.b = _b;

    this.xdir = random(-3, 3);
    this.ydir = random(-3, 3);

    this.draw = function () { // draw a happy face
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
    };

    this.move = function () { // move the happy face
        this.x += this.xdir;
        this.y += this.ydir;

        if (this.x <= this.rad || this.x >= width || this.y <= this.rad || this.y >= height) {
            gameOver = 1;
        }

        if (this.x <= this.rad + LINE_THICKNESS || this.x >= width - (this.rad + LINE_THICKNESS)) {
            this.xdir *= -1;
        }
        if (this.y <= this.rad + LINE_THICKNESS || this.y >= height - (this.rad + LINE_THICKNESS)) {
            this.ydir *= -1;
        }

    };

    this.collideswith = function (secondface) {
        var distance = dist(this.x, this.y, secondface.x, secondface.y)
        if (distance < this.rad + secondface.rad) {
            return true;
        } else return false;
    };
};

function setup() {
    createCanvas(1000, 600);

    leftLine = height / 2 - LINE_HEIGHT / 2;
    rightLine = height / 2 - LINE_HEIGHT / 2;

    topLine = width / 2 - LINE_WIDTH / 2;
    bottomLine = width / 2 - LINE_WIDTH / 2;
}

function draw() {
    background(255, 255, 255);
    setupCanvas();
    playGame();

    for (var i = 0; i < allBalls.length; i++) {
        allBalls[i].move();
        allBalls[i].draw();
        for (var j = 0; j < allBalls.length; j++) {
            if (i != j && allBalls[i].collideswith(allBalls[j])) {
                allBalls[j].xdir *= -1;
                allBalls[j].ydir *= -1;
            }
        }
    }
}

function setupCanvas() {
    fill(0);
    rect(0, leftLine, LINE_THICKNESS, LINE_HEIGHT);
    rect(width - LINE_THICKNESS, rightLine, LINE_THICKNESS, LINE_HEIGHT);
    rect(topLine, 0, LINE_WIDTH, LINE_THICKNESS);
    rect(bottomLine, height - LINE_THICKNESS, LINE_WIDTH, LINE_THICKNESS);
}

function playGame() {
    leftLine = mouseY - LINE_HEIGHT / 2;
    rightLine = mouseY - LINE_HEIGHT / 2;
    topLine = mouseX - LINE_HEIGHT / 2;
    bottomLine = mouseX - LINE_HEIGHT / 2;
}

function mousePressed() {
    if (allBalls.length < maxBalls) {
        var ball = new Balls(mouseX, mouseY, random(15, 75), random(127, 255), random(127, 255), random(127, 255));
        allBalls.push(ball);
    }
}
