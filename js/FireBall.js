class FireBall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y, 68, 9);
    this.sprite.addAnimation("shoot", fireBallAnimation);
  }

  draw() {
    this.sprite.scale = 3;
    this.sprite.position.x -= 5;
  }
}
