function setup() {
  createCanvas(400, 400);
}

function draw() {
  try {
    background(220);
    ellipse(200, 200, 50, 50);
  } catch (e) {
    console.error("[P5/DEBUG] draw():", e);
  }
}