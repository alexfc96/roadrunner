class Road {
  constructor(x, y) {
    this.roadPosition = {
      x: x,
      y: y
    };
    this.intervalId = undefined;
    this.game = game;
  }

  moveRoad(x, y) { //movement of the road but not the player*
    y = y + 1
    this.roadPosition = {
      x: x,
      y: y
    }
  };



};