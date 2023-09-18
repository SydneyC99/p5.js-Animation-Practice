let x = 200;
let speed = 2;
let rectSpeed =2;
let diameter = 40;
let value = 0

function setup() {
  createCanvas(400, 400);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(225, 125, 0);
  fill(value);
  ellipse(x, height/2, 40);
  x += speed;
  if (x >= width - diameter/2 || x <= 0 + diameter/2) {
    speed = speed * -1
  }
  rect(x, height/3, 40);
  x += rectSpeed;
  if (x >= width - diameter/2 || x <= 0 + diameter/2) {
    rectSpeed = rectSpeed * -1
  }
}

function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
  if (mouseClicked) {
    value = random(0, 255); 
  }
  redraw();
}
