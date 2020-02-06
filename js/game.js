class Game {
  constructor(player, road, star, win, lose, music) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
    this.player = player; //creo las opciones en main creando el player
    this.road = road;
    this.star = star;
    this.interval = undefined;
    this.blocks = document.querySelectorAll(".block");
    this.playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block"); //all the blocks in list
    this.win = win;
    this.lose = lose;
    this.isPaused = true;
    this.music = music;
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
    //creo que lo conveniente sería controlar el row en función de la y. Para la pos la x pero nth(${y})not working...
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[x].classList.add("player-block");
    this.playerCatchAStar()  //with this the player can catch stars horizontally
    this.checkIfPlayerCollidesObstacle() //check if the player collides horizontally
  };

  drawPlayerJumping() {
    let x = this.player.position.x; //para sacar el contenido de la x
    let y = this.player.position.y; //para sacar el contenido de la y

    // let row = document.querySelectorAll('.rows-blocks:nth-child(${y})');
    let row = document.querySelectorAll("#game-screen>.rows-blocks:nth-child(3)>.block");
    row[x].classList.add("player-block");

  };

  removePlayer() {  //acordarse de revisar esto una vez consiga que el player salta
    //console.log("Borrando player")
    let x = this.player.position.x; //para sacar el contenido de la x
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[0].classList.remove("player-block");
    row[1].classList.remove("player-block");
    row[2].classList.remove("player-block");

    let row4 = document.querySelectorAll("#game-screen>.rows-blocks:nth-child(4)>.block");
    row4[0].classList.remove("player-block");
    row4[1].classList.remove("player-block");
    row4[2].classList.remove("player-block");

    let y = this.player.position.y; //para sacar el contenido de la y
    let row3 = document.querySelectorAll("#game-screen>.rows-blocks:nth-child(3)>.block");
    row3[0].classList.remove("player-block");
    row3[1].classList.remove("player-block");
    row3[2].classList.remove("player-block");
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
      this.checkIfPlayerWin()
      this.removeStars();
    }
  }

  checkIfPlayerWin() {
    if (this.player.collectedStars == 5) {
      console.log("Victorioso");
      this.win(this.player.collectedStars);
      this.pause();
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
      if (this.player.alive) {
        console.log("Obstaculo");
        this.lose(this.player.collectedStars);  //crea el código html de la pantalla(es una función del main.js)
        this.stop();
        this.player.alive = false;
        this.gameOver();
      }
    }
  }

  _update() {
    this.removeLastChildOfRoad();  // this first time remove the first road
    let xOfRoad = this.road.roadPosition["x"];
    let yOfRoad = this.road.roadPosition["y"];
    this.road.moveRoad(xOfRoad, yOfRoad);
    this.removeLastChildOfRoad();
    this.addNewRowToTheRoad();
    this.drawRoad();
    this.drawPlayer();
    this.playerCatchAStar();
    this.generateStars();
    this.generateObstacles();
    this.checkIfPlayerCollidesObstacle();
  }

  _assignControlsToKeys() {
    //console.log("Asignando controles");
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 38: // arrow up  //maybe the button up works for jump and also the space tab
          this.removePlayer();
          //let y = this.road.roadPosition.y - 4;
          this.player.jump();
          this.drawPlayerJumping();
          break;
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
        case 80: // p pause
          if (this.interval) {
            this.stop()
          } else {
            this.move()
          }
          break;
      }
    });
  }

  start() {
    this._assignControlsToKeys();
    this.music();
    this.player.alive = true;
    this.move();
  };

  move() {
    if (!this.interval) {
      this.interval = setInterval(this._update.bind(this), 550);
    }
  }
  pause() {
    if (this.interval) {
      this.stop()
    } else {
      this.move()
    }
  }

  stop() {
    if (this.interval) {
      console.log("Fin");
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
  gameOver() {
    this.player.position.x = 1;
    this.player.position.y = 0;
    this.player.collectedStars = 0;
    this.road.roadPosition.x = 0;
    this.road.roadPosition.y = 4;
  }
}