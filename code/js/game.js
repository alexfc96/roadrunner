class Game {
  constructor(player, road) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
    this.player = player, //creo las opciones en main creando el player
      this.road = road,
      this.interval = undefined,
      this.blocks = document.querySelectorAll(".block") //all the blocks in list
    //this.start() //si pongo esto, se asignan los controles pero, no se ve reflejado en la pantalla.
    //this.myPosition = myPosition,
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    //this.btnStartGameScreen = document.getElementById("btn-start-game"); no se si esto debería de cargarse aquí
  }
  setGameStartScreen() {
    //this.btnStartGameScreen.addEventListener('click',createGameScreen); // y ejecutarse desde este Game o desde el main(funcionando)
  }
  drawRoad() {
    console.log("pintar drawboard")

    this.rows = document.querySelectorAll(".rows-blocks");
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].dataset.y % 2 == 0) {
        this.rows[i].classList.add("pair");
      } else {
        this.rows[i].classList.remove("pair");
      }
    }

  };

  addNewRowToTheRoad() {
    console.log("Añadiendo una nueva row al road")

    let y = this.road.roadPosition["y"];
    let gameScreen = document.getElementById("game-screen").innerHTML;
    gameScreen = `            
    <div class="rows-blocks" data-y="${y}">
        <div class="block" data-x="0"></div>
        <div class="block" data-x="1"></div>
        <div class="block" data-x="2"></div>
    </div> ` + gameScreen;

    document.getElementById("game-screen").innerHTML = gameScreen;

  }

  removeLastChildOfRoad() {
    console.log("Eliminando ultima row(donde se encuentra el player)")
    let gameScreenRows = document.getElementById("game-screen")
    gameScreenRows.removeChild(gameScreenRows.lastChild)

  }

  drawPlayer() {
    let x = this.player.position["x"]; //para sacar el contenido de la x
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.add("player-block");
    //return this.position
  };

  removePlayer() {
    console.log("Borrando player")
    if (this.position.classList.contains("player-block")) {
      this.position.classList.remove("player-block");
      //this.position.classList.add("block");
    };
    return this.position
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

  _update() {
    //this.rowPosition = document.querySelector("#game-screen>.rows-blocks:last-child");
    //this.playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.removeLastChildOfRoad();
    this.road.move()
    let x = this.player.position["x"];
    let y = this.player.position["y"];
    let xOfRoad = this.road.roadPosition["x"];
    let yOfRoad = this.road.roadPosition["y"];
    this.road.moveRoad(xOfRoad, yOfRoad);
    this.removeLastChildOfRoad();
    this.addNewRowToTheRoad();
    this.drawRoad();
    this.drawPlayer();

    if (!!this.interval) {
      //setInterval(window.requestAnimationFrame(this._update.bind(this), 1000));
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  gameOver() {
    //this.Main.createGameOverScreen();
  };
  start() { //how to automatize this function when the play starts?
    this.drawRoad(),
      this.drawPlayer();
    this._assignControlsToKeys();
    //this._update()
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };

  //this.start(); why is not working?
}

//game1 = new Game()