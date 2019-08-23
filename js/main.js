let fireBallSprite;
let fireBallAnimation;
let newGame = new Game();

function preload() {
  newGame.preload();
  fireBallSprite = loadSpriteSheet(
    "../assets/Fires/Fireball_68x9.png",
    fireFrames
  );
  fireBallAnimation = loadAnimation(fireBallSprite);
}

function setup() {
  createCanvas(1000, 800);
  newGame.setup();
}

function draw() {
  background(0);
  drawSprites();
  newGame.draw();
}

function keyPressed() {
  newGame.keyPressed();
}
