class Road {
  constructor(x, y) {
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.roadPosition = {
      x: x,
      y: y
    };
    this.intervalId = undefined;
    this.game = game;
  }

  moveRoad(x, y) { //movimiento de los bloques pero no el de mi player
    //console.log("Entro en moveRoad")
    y = y + 1
    this.roadPosition = {
      x: x,
      y: y
    }
  };



};