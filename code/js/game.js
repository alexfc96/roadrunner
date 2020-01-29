class Game {
  constructor(player) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
    this.player = player, //creo las opciones en main creando el player
      this.blocks = document.querySelectorAll(".block") //all the blocks in list
    //this.start() //si pongo esto, se asignan los controles pero, no se ve reflejado en la pantalla.
    //this.myPosition = myPosition,
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    //this.btnStartGameScreen = document.getElementById("btn-start-game"); no se si esto debería de cargarse aquí
  }
  setGameStartScreen() {
    //this.btnStartGameScreen.addEventListener('click',createGameScreen); // y ejecutarse desde este Game o desde el main(funcionando)
  }
  drawBoard() {
    //this.Main.createGameScreen();
  };
  drawPlayer() {
    let x = this.player.position["x"]; //para sacar el contenido de la x
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.add("player-block");
    return this.position
  };

  removePlayer() {
    console.log("Borrando player")
    if (this.position.classList.contains("player-block")) {
      this.position.classList.remove("player-block");
      //this.position.classList.add("block");
    };
    return this.position
  };

  checkRightMove() {
    let row = document.querySelector("#game-screen>.rows-blocks:last-child");
    //let checkPosition = row.firstElementChild
    let checkPosition0 = row.children[0];
    let checkPosition1 = row.children[1];

    let rightPosition = undefined;
    if (position == checkPosition1) { //chech if the player is in the middle block. In this case:
      rightPosition = row.children[2]; //the position where the player it will put (right side of the blocks)
      rightPosition.className = "player-block"; //assign the new class to the block where my player will be situated
      position.className = "block"; //clean the past block of the player
    } else if (position == checkPosition0) { //check if the position is the first (left) block.
      rightPosition = row.children[1];
      rightPosition.className = "player-block";
      position.className = "block";
    } else {
      rightPosition = position; //in case that the player is in the right side(limit)= my actual position it will be the same position
    }
  };

  _assignControlsToKeys() {
    console.log("Asignando controles");
    document.addEventListener('keydown', e => {
      this.position = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
      switch (e.keyCode) {
        //case 38: // arrow up  //maybe the button up works for jump and also the space tab
        //this.snake.goUp();
        //break;
        case 37: // arrow left
          this.position = this.removePlayer();
          this.position = this.player.goLeft(this.position);
          this.drawPlayer();
          break;
        case 39: // arrow right
          this.position = this.removePlayer();
          this.position = this.player.goRight(this.position);
          this.drawPlayer();
          break;
          //case 80: // p pause
          //this.snake.intervalId ? this.snake.stop() : this.snake.move();
          //break;
      }
    });
  }
  generateStars() {};
  generateObstacles() {};
  //generateEmptyBlocks(){};
  gameOver() {
    //this.Main.createGameOverScreen();
  };
  start() { //how to automatize this function when the play starts?
    this.position = this.drawPlayer();
    this._assignControlsToKeys();
  };

  //this.start(); why is not working?
}

//game1 = new Game()