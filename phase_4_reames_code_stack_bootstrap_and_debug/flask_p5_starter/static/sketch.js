function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("canvas-container");
    background(220);
}

function draw() {
    ellipse(mouseX, mouseY, 20, 20);
}
