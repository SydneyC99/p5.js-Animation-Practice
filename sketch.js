let x = 200;
let speed = 2;
let rectSpeed =2;
let diameter = 40;
let value = 0;
let rectMove = true; //This boolean stuff is hard.
let a = 0;
let fadeIn = 5;

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
  if (rectMove === true){
  rect(x, height/3, 40);
  x += rectSpeed;
  if (x >= width - diameter/2 || x <= 0 + diameter/2) {
    rectSpeed = rectSpeed * -1
  }
  }
  fill(10, 80, 255, a);
  rect(20, 20, 30, 30,);
  if (a<=255) {
    a += fadeIn;
  }
}
//haven't figured out how to separate the movement.
//Everything I try breaks or seems to be ignored.
function mouseClicked() {
  if (speed = isLooping()) {
    noLoop();
  } else {
    loop();
  }
  if (mouseClicked) {
    value = random(0, 255); 
  }
  
}

//not sure how to get this working, it runs without error though.
// function color(){

// let millisecond = millis();
// if (millisecond = 10000) {
//   background(225, 0, 0);
// }
// redraw();
// }