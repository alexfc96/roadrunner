class Road {
  constructor(x, y) {
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.roadPosition = {
      x: x,
      y: y
    };
    this.intervalId = undefined;
    this.game = game //no estoy seguro si esto es necesario
  }

  moveRoad(x, y) { //entiendo que esto hará el movimiento de los bloques pero, no el de mi player
    //console.log("Entro en moveRoad")
    y = y + 1
    this.roadPosition = {
      x: x,
      y: y
    }
  };

  generateStars() {
    const firstRow = document.querySelector("#game-screen>.rows-blocks:first-child")
    let num = Math.floor(Math.random() * 3)
  };

  //generateObstacles() {};
  //generateEmptyBlocks(){};

};