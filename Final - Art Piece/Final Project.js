// Player variables
let player = { x: 50, y: 50, size: 30, speed: 5 };

// Exit variables
let exit = { x: 700, y: 500, size: 50 };

// Arrays for moving obstacles
let obsX = [];
let obsY = [];
let obsSize = [];
let obsXSpeed = [];
let obsYSpeed = [];
let obsOuterColor = [];
let obsInnerColor = [];

// Arrays for mouse-added obstacles (stationary)
let mouseObsX = [];
let mouseObsY = [];
let mouseObsSize = [];
let mouseObsOuterColor = [];
let mouseObsInnerColor = [];

function setup() {
  createCanvas(800, 600);

  // Create at least 5 moving obstacles
  for (let i = 0; i < 5; i++) {
    obsX[i] = random(width);
    obsY[i] = random(height);
    obsSize[i] = random(20, 50);
    obsXSpeed[i] = random(-2, 2);
    obsYSpeed[i] = random(-2, 2);
    obsOuterColor[i] = color(random(255), random(255), random(255));
    obsInnerColor[i] = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(0);

  // Draw exit
  fill(0, 255, 0);
  rect(exit.x, exit.y, exit.size, exit.size);

  // Draw and move obstacles
  for (let i = 0; i < obsX.length; i++) {
    drawConcentric(obsX[i], obsY[i], obsSize[i], obsOuterColor[i], obsInnerColor[i]);

    // Move obstacles
    obsX[i] += obsXSpeed[i];
    obsY[i] += obsYSpeed[i];

    // Wrap around screen
    if (obsX[i] > width) obsX[i] = 0;
    if (obsX[i] < 0) obsX[i] = width;
    if (obsY[i] > height) obsY[i] = 0;
    if (obsY[i] < 0) obsY[i] = height;
  }

  // Draw mouse-added obstacles (stationary)
  for (let i = 0; i < mouseObsX.length; i++) {
    drawConcentric(mouseObsX[i], mouseObsY[i], mouseObsSize[i], mouseObsOuterColor[i], mouseObsInnerColor[i]);
  }

  // Draw player
  fill(0, 0, 255);
  ellipse(player.x, player.y, player.size);

  // Control player
  controlPlayer();

  // Check if player reached exit
  if (
    player.x + player.size / 2 > exit.x &&
    player.x - player.size / 2 < exit.x + exit.size &&
    player.y + player.size / 2 > exit.y &&
    player.y - player.size / 2 < exit.y + exit.size
  ) {
    textSize(32);
    fill(255);
    text("You Win!", width / 2 - 80, height / 2);
    noLoop();
  }
}

// Player movement with arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) player.x -= player.speed;
  if (keyCode === RIGHT_ARROW) player.x += player.speed;
  if (keyCode === UP_ARROW) player.y -= player.speed;
  if (keyCode === DOWN_ARROW) player.y += player.speed;
}

// Add stationary obstacle on mouse click
function mousePressed() {
  mouseObsX.push(mouseX);
  mouseObsY.push(mouseY);
  let size = random(20, 50);
  mouseObsSize.push(size);
  mouseObsOuterColor.push(color(random(255), random(255), random(255)));
  mouseObsInnerColor.push(color(random(255), random(255), random(255)));
}

// Function to control player movement
function controlPlayer() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;
}

// Draw concentric circles for obstacles
function drawConcentric(x, y, diameter, outerColor, innerColor) {
  fill(outerColor);
  circle(x, y, diameter);
  fill(innerColor);
  circle(x, y, diameter / 2);
}
