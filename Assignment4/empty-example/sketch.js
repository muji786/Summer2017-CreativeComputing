var HappyFace = function (_x, _y, _rad, _r, _g, _b) {
    this.x = _x;
    this.y = _y;

    this.rad = _rad;

    this.r = _r;
    this.g = _g;
    this.b = _b;

    this.xdir = random(-3, 3);
    this.ydir = random(-3, 3);

    this.draw = function () { // draw a happy face
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
        fill(255);
        ellipse(this.x - this.rad / 3, this.y - this.rad / 3, this.rad / 3, this.rad / 3);
        ellipse(this.x + this.rad / 3, this.y - this.rad / 3, this.rad / 3, this.rad / 3);
        fill(255);
        arc(this.x, this.y + this.rad / 4, this.rad, this.rad - this.rad / 2, 0, PI, CHORD);
    };

    this.move = function () { // move the happy face
        this.x += this.xdir;
        this.y += this.ydir;

        if (this.x <= this.rad || this.x >= width - this.rad) {
            this.xdir *= -1;
        }

        if (this.y <= this.rad || this.y >= height - this.rad) {
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

var allFaces = [];

function setup() {
    createCanvas(1400, 700);
}

function draw() {
    background(255);
    smooth();
    stroke(0);
    strokeWeight(0);
    ellipseMode(CENTER);
    for (var i = 0; i < allFaces.length; i++) {
        allFaces[i].move();
        allFaces[i].draw();
        for (var j = 0; j < allFaces.length; j++) {
            if (i != j && allFaces[i].collideswith(allFaces[j])) {
                allFaces[j].xdir *= -1;
                allFaces[j].ydir *= -1;
            }
        }
    }
}

function mousePressed() {
    var aface = new HappyFace(mouseX, mouseY, random(15, 75), random(127, 255), random(127, 255), random(127, 255));
    allFaces.push(aface);
}
