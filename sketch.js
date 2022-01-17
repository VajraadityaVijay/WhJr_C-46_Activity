let ground;
let lander, landerImg;
let bgImg;
let obstacle;

var yVelocity = 0;
var xVelocity = 0;
var gravity = 0.05;

var thrust, crash, land, rcs_left, rcs_right, normal, obstacleImg, lzImg;

function preload() {
  landerImg = loadImage("assets/lunar.png");
  bgImg = loadImage("assets/bg.png");

  thrust = loadAnimation("assets/b_thrust_1.png", "assets/b_thrust_2.png", "assets/b_thrust_3.png");
  crash = loadAnimation("assets/crash1.png", "assets/crash2.png", "assets/crash3.png");
  land = loadAnimation("assets/landing1.png", "assets/landing2.png", "assets/landing_3.png");
  rcs_left = loadAnimation("assets/left_thruster_1.png", "assets/left_thruster_2.png");
  rcs_right = loadAnimation("assets/right_thruster_1.png", "assets/right_thruster_2.png")
  normal = loadAnimation("assets/normal.png");

  obstacleImg = loadImage("assets/obstacle.png");
  lzImg = loadImage("assets/lz.png");
}

function setup() {
  createCanvas(1000, 600);
  lander = createSprite(100, 80, 30, 30);
  lander.addImage(landerImg);
  lander.scale = 0.15;

  lander.addAnimation("thrusting", thrust);
  lander.addAnimation("crashing", crash);
  lander.addAnimation("landing", land);
  lander.addAnimation("left", rcs_left);
  lander.addAnimation("right", rcs_right);
  lander.addAnimation("normal", normal);

  rectMode(CENTER);
  textSize(20)
}

function draw() {
  background(0);
  image(bgImg, 0, 0, 1000, 600);

  push();
  fill("white");
  text("Vertical Velocity: " + yVelocity, 600, 80)
  text("Horizontal Velocity: " + xVelocity, 600, 40)
  pop();

  yVelocity += gravity;
  lander.position.y += yVelocity;
  lander.position.x += xVelocity;

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    upwardThrust();
    lander.changeAnimation("thrusting");
  }

  if (keyCode === RIGHT_ARROW) {
    rightThrust();
    lander.changeAnimation("right");
  }

  if (keyCode === LEFT_ARROW) {
    leftThrust();
    lander.changeAnimation("left");
  }
}

function upwardThrust() {
  yVelocity = -1;
}

function rightThrust() {
  xVelocity += 0.2;
}

function leftThrust() {
  xVelocity -= 0.2;
}