class Player {
  constructor(x, y) { // entiendo que mi player lo tendré que crear en otro archivo y pasarlo como parametro en el constructor
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.position = {
      x: x,
      y: y
    };
    this.game = game; //no estoy seguro si esto es necesario
    this.collectedStars = 0;
    this.alive = true;
  }

  goRight() {
    //console.log("Girar hacia la derecha")
    if (this.position.x < 2) {
      return this.position.x += 1
    }
  }

  goLeft(position) {
    //console.log("Girar hacia la izquierda")
    if (this.position.x > 0) {
      return this.position.x -= 1
    }
  }

  jump(roadPosition) {
    return this.position.y + 2
  }
};