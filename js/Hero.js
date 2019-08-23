class Hero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 3;
  }

  preload() {
    let heroUpSpriteSheet = loadSpriteSheet(
      "../assets/catSprite/pipo-nekonin001.png",
      heroFrames.slice(9)
    );

    let heroDownSpriteSheet = loadSpriteSheet(
      "../assets/catSprite/pipo-nekonin001.png",
      heroFrames.slice(0, 3)
    );

    let heroLeftSpriteSheet = loadSpriteSheet(
      "../assets/catSprite/pipo-nekonin001.png",
      heroFrames.slice(3, 6)
    );

    let heroRightSpriteSheet = loadSpriteSheet(
      "../assets/catSprite/pipo-nekonin001.png",
      heroFrames.slice(6, 9)
    );

    let heroStandSpriteSheet = loadSpriteSheet(
      "../assets/catSprite/pipo-nekonin001.png",
      heroFrames.slice(1, 2)
    );

    this.walkUp = loadAnimation(heroUpSpriteSheet);
    this.walkDown = loadAnimation(heroDownSpriteSheet);
    this.walkLeft = loadAnimation(heroLeftSpriteSheet);
    this.walkRight = loadAnimation(heroRightSpriteSheet);

    this.stand = loadAnimation(heroStandSpriteSheet);
  }

  setup() {
    this.sprite = createSprite(this.x, this.y, 32, 32);
    this.sprite.scale = 3;

    this.sprite.addAnimation("stand", this.stand);
    this.sprite.addAnimation("walkUp", this.walkUp);
    this.sprite.addAnimation("walkDown", this.walkDown);
    this.sprite.addAnimation("walkLeft", this.walkLeft);
    this.sprite.addAnimation("walkRight", this.walkRight);
  }

  draw() {
    this.sprite.changeAnimation("stand");
    if (keyIsDown(37)) {
      this.sprite.changeAnimation("walkLeft");
      this.sprite.position.x -= this.velocity;
    }
    if (keyIsDown(39)) {
      this.sprite.changeAnimation("walkRight");
      this.sprite.position.x += this.velocity;
    }
    if (keyIsDown(38)) {
      this.sprite.changeAnimation("walkUp");
      this.sprite.position.y -= this.velocity;
    }
    if (keyIsDown(40)) {
      this.sprite.changeAnimation("walkDown");
      this.sprite.position.y += this.velocity;
    }

    if (keyIsDown(32)) {
    }
  }

  keyPressed() {
    if (keyCode === 32) {
      let fireBall = new FireBall(
        this.sprite.position.x,
        this.sprite.position.y
      );

      fireBall.setup();

      newGame.fireBalls.push(fireBall);
    }
  }
}
