class Player {
  constructor(x, y) {
    this.position = {
      x: x,
      y: y
    };
    this.collectedStars = 0;
    this.alive = true;
  }

  goRight() {
    if (this.position.x < 2) {
      return this.position.x += 1
    }
  }

  goLeft(position) {
    if (this.position.x > 0) {
      return this.position.x -= 1
    }
  }

  jump() {
    return this.position.y += 2
  }
};