let x = 200;
let speed = 2;
let diameter = 40;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(225, 125, 0);
  ellipse(x, height/2, 40);
  x += speed;
  if (x >= width - diameter/2 || x <= 0 + diameter/2) {
    speed = speed * -1
  }
}

function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
  redraw();
}
