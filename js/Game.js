class Game {
  constructor() {
    this.player = new Hero(200, 200);
    this.fireBalls = [];
  }

  preload() {
    this.player.preload();
  }

  setup() {
    this.player.setup();
  }

  draw() {
    this.player.draw();
    this.fireBalls.forEach(fireBall => fireBall.draw());
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
