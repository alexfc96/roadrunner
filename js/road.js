class Road {
  constructor(x, y) {
    this.roadPosition = {
      x: x,
      y: y
    };
    this.intervalId = undefined;
    this.game = game;
  }

  moveRoad(x, y) { //movimiento de los bloques pero no el de mi player
    y = y + 1
    this.roadPosition = {
      x: x,
      y: y
    }
  };



};