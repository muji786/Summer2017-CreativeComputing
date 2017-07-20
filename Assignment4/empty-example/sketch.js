var HappyFace = function (_x, _y) {
    this.x = _x;
    this.y = _y;

    this.xdir = random(-1, 1);
    this.ydir = random(-1, 1);

    this.draw = function () { // draw a happy face
        ellipse(this.x, this.y, 50, 50);
        ellipse(this.x - 5, this.y - 5, 5, 5);
        ellipse(this.x + 5, this.y - 5, 5, 5);
        arc(this.x, this.y + 10, 20, 10, 0, PI, CHORD);
    };

    this.move = function () { // move the happy face
        this.x += this.xdir;
        this.y += this.ydir;

        if (this.x <= 25 || this.x >= width - 25) {
            this.xdir *= -1;
        }

        if (this.y <= 25 || this.y >= height - 25) {
            this.ydir *= -1;
        }

    };
};

var allFaces = [];

function setup() {
    createCanvas(1024, 700);
}

function draw() {
    background(255);
    smooth();
    stroke(0);
    strokeWeight(3);
    ellipseMode(CENTER);
    for (var i = 0; i < allFaces.length; i++) {
        allFaces[i].move();
        allFaces[i].draw();
    }

}

function mousePressed() {
    var aface = new HappyFace(mouseX, mouseY);
    allFaces.push(aface);
}
