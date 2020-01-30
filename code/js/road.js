class Road {
  constructor(x, y) { // entiendo que mi player lo tendré que crear en otro archivo y pasarlo como parametro en el constructor
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.roadPosition = {
      x: x,
      y: y
    },
      this.intervalId = undefined,
      this.game = game //no estoy seguro si esto es necesario
    //this.stars = undefined,
  }

  moveRoad(x, y) { //entiendo que esto hará el movimiento de los bloques pero, no el de mi player
    //console.log("Entro en moveRoad")
    y = y + 1
    this.roadPosition = {
      x: x,
      y: y
    }
  };

  generateStars() { };
  removeStars() {
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.remove("star-block");
  }
  //generateObstacles() {};
  //generateEmptyBlocks(){};

};