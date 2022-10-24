const bold = 100;

function setup() {
    createCanvas(400, 400);

    blendMode(ADD);
    strokeWeight(bold);
}

let ra = 0, ga = 0, ba = 0;
let rr = 100, gr = 100, br = 100;

let da = 0.01;

function drawLine(x, y, a, r) {
    let x1 = Math.cos(a) * r;
    let y1 = Math.sin(a) * r;

    line(x - x1, y - y1, x + x1, y + y1);
}

let ir = 0.1;

let rx = 0, ry = 0;
let gx = 0, gy = 0;
let bx = 0, by = 0;

function draw() {
    blendMode(BLEND);
    background(0);

    blendMode(ADD);

    // lines
    ra = lerp(ra, lerp(0, Math.PI * 2, (mouseX + mouseY) / (width + height)), ir);
    ga = lerp(ga, ra, ir);
    ba = lerp(ba, ga, ir);

    stroke(255, 0, 0);
    drawLine(width/2, height/2, ra, rr);
    stroke(0, 255, 0);
    drawLine(width/2, height/2, ga, gr);
    stroke(0, 0, 255);
    drawLine(width/2, height/2, ba, br);

    // circles
    rx = lerp(rx, mouseX, ir);
    ry = lerp(ry, mouseY, ir);
    gx = lerp(gx, rx, ir);
    gy = lerp(gy, ry, ir);
    bx = lerp(bx, gx, ir);
    by = lerp(by, gy, ir);

    noStroke();
    fill(255, 0, 0);
    circle(rx, ry, bold);
    fill(0, 255, 0);
    circle(gx, gy, bold);
    fill(0, 0, 255);
    circle(bx, by, bold);
}
