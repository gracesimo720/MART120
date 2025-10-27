function setup() {
  createCanvas(400, 500);
  noLoop();
}

function draw() {
  background(200, 230, 255); // light blue background

  // Hair (blonde)
  fill(255, 230, 100);
  ellipse(200, 230, 160, 200); // main hair
  rect(140, 230, 120, 120); // bottom hair

  // Head
  fill(255, 224, 189);
  ellipse(200, 250, 120, 150);

  // Eyes
  fill(255);
  ellipse(175, 240, 25, 15);
  ellipse(225, 240, 25, 15);
  fill(0);
  circle(175, 240, 8);
  circle(225, 240, 8);

  // Nose
  fill(255, 210, 180);
  triangle(200, 250, 190, 275, 210, 275);

  // Mouth
  fill(255, 100, 120);
  ellipse(200, 305, 35, 15);

  // Neck
  fill(255, 224, 189);
  rect(185, 325, 30, 40);

  // Shirt
  fill(150, 180, 255);
  rect(140, 365, 120, 80);

  // Title
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Self Portrait", width / 2, 40);

  // Signature
  textSize(14);
  textAlign(RIGHT);
  text("by Grace Simonich", width - 20, height - 20);

  // For rubric shapes
  stroke(0);
  strokeWeight(2);
  point(200, 250); // center point
  line(140, 410, 260, 410); // shirt line
}
