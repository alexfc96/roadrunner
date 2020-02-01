class Game {
<<<<<<< HEAD:js/game.js
  constructor(player, road, star, win, lose) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
=======
  constructor(player, road, star) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
>>>>>>> fe310453134000cc74a88e0583813a0028b3331d:code/js/game.js
    this.player = player; //creo las opciones en main creando el player
    this.road = road;
    this.star = star;
    this.interval = undefined;
    this.blocks = document.querySelectorAll(".block");
    this.playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block"); //all the blocks in list
    this.win = win;
    this.lose = lose;
    this.isPaused = true;
    //this.start() //si pongo esto, se asignan los controles pero, no se ve reflejado en la pantalla.
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    //this.btnStartGameScreen = document.getElementById("btn-start-game"); no se si esto debería de cargarse aquí
  }

  setGameStartScreen() {
    //this.btnStartGameScreen.addEventListener('click',createGameScreen); // y ejecutarse desde este Game o desde el main(funcionando)
  }

  drawRoad() {
    //console.log("pintar drawboard")

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
    //console.log("Añadiendo una nueva row al road")

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
    //console.log("Eliminando ultima row(donde se encuentra el player)")
    let gameScreenRows = document.getElementById("game-screen")
    gameScreenRows.removeChild(gameScreenRows.lastChild)

  }

  drawPlayer() {
    //console.log("Pintamos al player")
    let x = this.player.position.x; //para sacar el contenido de la x
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.add("player-block");
  };

  removePlayer() {
    //console.log("Borrando player")
    let x = this.player.position.x; //para sacar el contenido de la x
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.remove("player-block");
  };

  generateStars() {
    //let firstRow = document.querySelector("#game-screen>.rows-blocks:first-child>.block");
    let firstRow = document.querySelector(".rows-blocks:first-child");
    let num = Math.floor(Math.random() * 5);
    if (num < 3) {
      firstRow.children[num].classList.add("star-block");
    }
  };

  playerCatchAStar() {
    let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    if (playerPosition.classList.contains("star-block")) {
      console.log("Estrella");
      this.player.collectedStars += 1;
<<<<<<< HEAD:js/game.js
      this.removeStars();
    }
  }

  checkIfPlayerWin() {
    if (this.player.collectedStars === 5) {
      console.log("Victorioso");
      this.win(this.player.collectedStars)
      //main.createWinScreen();
    }
  }

  removeStars() {
    let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    playerPosition.classList.remove("star-block");
  }

  generateObstacles() {
    let firstRow = document.querySelector(".rows-blocks:first-child");
    let num = Math.floor(Math.random() * 5);
    if (num < 3) {
      firstRow.children[num].classList.add("obstacle-block");
    }
  };

  checkIfPlayerCollidesObstacle() {
    let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    if (playerPosition.classList.contains("obstacle-block")) {
      console.log("Obstaculo");
      this.isPaused = false;  //tenemos que vinvuñar el metodo stop()
      this.lose();  //crea el código html de la pantalla(es una función del main.js)
=======
      //this.removeStars()
>>>>>>> fe310453134000cc74a88e0583813a0028b3331d:code/js/game.js
    }
  }

  removeStars() {
    let x = this.player.position.x;  //necesito saber donde está la estrella
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.remove("star-block");
  }

  _assignControlsToKeys() {
    //console.log("Asignando controles");
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        //case 38: // arrow up  //maybe the button up works for jump and also the space tab
        //this.snake.goUp();
        //break;
        case 37: // arrow left
          this.removePlayer();
          this.player.goLeft();
          this.drawPlayer();
          break;
        case 39: // arrow right
          this.removePlayer();
          this.player.goRight();
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
    let x = this.player.position["x"];
    let y = this.player.position["y"];
    let xOfRoad = this.road.roadPosition["x"];
    let yOfRoad = this.road.roadPosition["y"];
    this.road.moveRoad(xOfRoad, yOfRoad);
    this.removeLastChildOfRoad();
    this.addNewRowToTheRoad();
    this.drawRoad();
    this.drawPlayer();
    this.playerCatchAStar();
    this.checkIfPlayerCollidesObstacle();
    this.checkIfPlayerWin();
    this.generateStars();
    this.generateObstacles();
  }

  gameOver() {
    //this.Main.createGameOverScreen();
  };

  start() { //how to automatize this function when the play starts?
    this._assignControlsToKeys();
    const interval = setInterval(this._update.bind(this), 600); //my time refresh
    if (!this.interval) { //undefined
      interval
      if (!this.isPaused) {
        clearInterval(interval);
      }
    }
  };

  stop() {
    this.interval = true;
    clearInterval(interval);
  }

  //this.start(); why is not working?
}

//game1 = new Game()