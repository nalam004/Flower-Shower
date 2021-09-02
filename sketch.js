let bg;
let start = false;
let basket;
let flowers = [];
let hearts = [];
let heart0Y = 15;
let heart1Y = 15;
let heart2Y = 15;
let r0;
let Y = 0;
let X = 0;
let diameter = 20;
let speed = 0.5;
let score = 0;
let misses = 0;
let myFont;

function preload() {
  myFont = loadFont('Retro.ttf');
  sound = loadSound("pop.mp3");
}


function setup() {
  createCanvas(400, 400);
  noCursor();
  bg = loadImage('img/bg.png');
  basket = loadImage('img/basket.png');
  flower = loadImage("img/flower.png");
  for (var i = 0; i < 3; i++) {
    hearts[i] = loadImage("img/heart.png");
  }
}

function draw() {
  imageMode(CORNER);
  background(bg);
  imageMode(CENTER);
  heart1 = image(hearts[0], 15, heart0Y, 40, 40);
  heart2 = image(hearts[1], 35, heart1Y, 40, 40);
  heart3 = image(hearts[2], 55, heart2Y, 40, 40);
  noStroke();
  imageMode(CENTER);
  image(flower, X, Y, diameter, diameter);
  Y = Y + speed;
  fill(255, 255, 255, 100);
  image(basket, mouseX, mouseY, 80, 80);
  distance = dist(X, Y, mouseX, mouseY);

  if (distance < 15) {
    ++score;
    sound.play(); 
    Y = 0;
    X = random(width);
    speed = random(1, 4);
    diameter = random(10, 30);
  }
  
  if (Y > height) {
    ++misses;
    if (misses == 1) heart2Y = 500;
    if (misses == 2) heart1Y = 500;
    Y = 0;
    X = random(width);
    speed = random(1, 4);
    diameter = random(10, 30);
  }
  
  fill(0, 254, 202);
  textAlign(LEFT);
  textSize(15);
  textFont(myFont);
  text('Flowers Caught: ' + score, 5, 390);
  
  if (misses > 2) {
    heart0Y = 500
    Y = width + 10;
    X = height + 10;
    fill(0, 100, 0);
    textFont(myFont);
    textAlign(CENTER);
    textSize(20);
    text('Game Over :(', width/2, height/2);
    textSize(12);
    text('Click the mouse anywhere to restart.', width/2, height/2 + 30);
    if(mouseIsPressed) restart();
  }

}

function restart() {
  X = 100;
  Y = 0;
  speed = 0.5;
  score = 0;
  misses = 0;
  heart0Y = 15;
  heart1Y = 15;
  heart2Y = 15;
}

