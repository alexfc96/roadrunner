class Game {
  constructor(player, road, star, win, lose, music) { //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
    this.player = player; //vinculating the methods and properties of my player
    this.road = road;
    this.star = star;
    this.interval = undefined; //start like undef for enter in the condition
    this.playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block"); //the position of the player
    this.win = win;  //options created in main.js
    this.lose = lose;
    this.isPaused = true;
    this.music = music;
  }

  drawRoad() {  //painting the road
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
    let gameScreenRows = document.getElementById("game-screen")
    gameScreenRows.removeChild(gameScreenRows.lastChild)

  }

  drawPlayer() {

    let x = this.player.position.x; //content of x position
    let y = this.player.position.y; //cpntent of y position
    if (y == 2) {
      let row = document.querySelector("#game-screen>.rows-blocks:nth-child(3)")
      row.children[x].classList.add("player-block");
    } else if (y == 1) {
      let row = document.querySelector("#game-screen>.rows-blocks:nth-child(4)")
      row.children[x].classList.add("player-block");
    } else {
      let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
      row[x].classList.add("player-block");
    }
    this.playerCatchAStar()  //with this the player can catch stars horizontally
    this.checkIfPlayerCollidesObstacle() //check if the player collides horizontally
  };

  removePlayer() {

    let x = this.player.position.x;
    let row = document.querySelectorAll("#game-screen>.rows-blocks:last-child>.block");
    row[0].classList.remove("player-block");
    row[1].classList.remove("player-block");
    row[2].classList.remove("player-block");

    let row4 = document.querySelectorAll("#game-screen>.rows-blocks:nth-child(4)>.block");
    row4[0].classList.remove("player-block");
    row4[1].classList.remove("player-block");
    row4[2].classList.remove("player-block");

    let y = this.player.position.y;
    let row3 = document.querySelectorAll("#game-screen>.rows-blocks:nth-child(3)>.block");
    row3[0].classList.remove("player-block");
    row3[1].classList.remove("player-block");
    row3[2].classList.remove("player-block");
  };

  generateStars() {
    let firstRow = document.querySelector(".rows-blocks:first-child");
    let num = Math.floor(Math.random() * 5);
    if (num < 3) {
      firstRow.children[num].classList.add("star-block");
    }
  };

  playerCatchAStar() {
    let y = this.player.position.y;
    if (y > 0) {

      if (y == 2) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(3)")
        let playerPosition = row.querySelector(".player-block");
        if (playerPosition.classList.contains("star-block")) {
          this.player.collectedStars += 1;
          this.checkIfPlayerWin()
          this.removeStars();
        }
      } else if (y == 1) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(4)")
        let playerPosition = row.querySelector(".player-block");
        if (playerPosition.classList.contains("star-block")) {
          this.player.collectedStars += 1;
          this.checkIfPlayerWin()
          this.removeStars();
        }
      }
    } else {
      let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
      if (playerPosition.classList.contains("star-block")) {
        this.player.collectedStars += 1;
        this.checkIfPlayerWin()
        this.removeStars();
      }
    }

  }

  checkIfPlayerWin() {
    if (this.player.collectedStars == 5) {
      this.win(this.player.collectedStars);
      this.pause();
    }
  }

  removeStars() {

    let y = this.player.position.y;
    if (y > 0) {

      if (y == 2) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(3)")
        let playerPosition = row.querySelector(".player-block");
        playerPosition.classList.remove("star-block");
      }
      else if (y == 1) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(4)")
        let playerPosition = row.querySelector(".player-block");
        playerPosition.classList.remove("star-block");
      }
    } else {
      let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
      playerPosition.classList.remove("star-block");
    }
  }

  generateObstacles() {
    let firstRow = document.querySelector(".rows-blocks:first-child");
    let row = document.querySelector("#game-screen>.rows-blocks:nth-child(2)")
    let num = Math.floor(Math.random() * 4);

    if (num < 3) {
      if (row.children[1].classList.contains("obstacle-block")) {
      } else {
        firstRow.children[num].classList.add("obstacle-block");
      }
    }
  };

  checkIfPlayerCollidesObstacle() {

    let y = this.player.position.y;
    if (y > 0) {

      if (y == 2) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(3)")
        let playerPosition = row.querySelector(".player-block");
        if (playerPosition.classList.contains("obstacle-block")) {
          if (this.player.alive) {
            this.lose(this.player.collectedStars);  //creates the gameoverscreen
            this.stop();
            this.player.alive = false;
            this.gameOver();
          }
        }
      }
      else if (y == 1) {
        let row = document.querySelector("#game-screen>.rows-blocks:nth-child(4)")
        let playerPosition = row.querySelector(".player-block");
        if (playerPosition.classList.contains("obstacle-block")) {
          if (this.player.alive) {
            this.lose(this.player.collectedStars);
            this.stop();
            this.player.alive = false;
            this.gameOver();
          }
        }
      }
    } else {
      let playerPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block");
      if (playerPosition.classList.contains("obstacle-block")) {
        if (this.player.alive) {
          this.lose(this.player.collectedStars);
          this.stop();
          this.player.alive = false;
          this.gameOver();
        }
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
    if (this.player.position.y === 0) { //checking if the player jumps and the y>0
      this.drawPlayer();
    } else {
      this.player.position.y = this.player.position.y - 1;
    }
    this.generateStars();
    this.generateObstacles();
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 38: // arrow up 
          if (this.player.position.y === 0) {
            this.removePlayer();
            this.player.jump();
            this.drawPlayer();
          }
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
      this.player.alive = true;
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