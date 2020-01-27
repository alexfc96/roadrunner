class Game{
    constructor(myPlayer){ //hace referencia al newPlayer que creo en la llamada a la creción del Game y el new Player
        this.myPlayer = myPlayer.myPlayer  //creo las opciones en main creando el player
        //this.myPosition = myPosition,
        //this.myPosition = myPlayer.myPosition,
        //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
        //this.widthScreen = undefined,
        //this.heightScreen = undefined

        //this.btnStartGameScreen = document.getElementById("btn-start-game"); no se si esto debería de cargarse aquí
    }
    setGameStartScreen(){
        //this.btnStartGameScreen.addEventListener('click',createGameScreen); // y ejecutarse desde este Game o desde el main(funcionando)
    }
    drawBoard(){
        //this.Main.createGameScreen();
    };
    drawPlayer(){};

    
    _assignControlsToKeys() {
        console.log("Asignando controles");
        this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
        document.addEventListener('keydown', e => {
          switch (e.keyCode) {
            //case 38: // arrow up  //maybe the button up works for jump and also the space tab
              //this.snake.goUp();
              //break;
            case 37: // arrow left
              this.myPosition =this.myPlayer.goLeft(this.myPosition);
              break;
            case 39: // arrow right
              this.myPosition = this.myPlayer.goRight(this.myPosition);
              break;
            //case 80: // p pause
              //this.snake.intervalId ? this.snake.stop() : this.snake.move();
              //break;
          }
        });
      }
    generateStars(){};
    generateObstacles(){};
    //generateEmptyBlocks(){};
    gameOver(){
        this.Main.createGameOverScreen();
    };
    start(){
        this._assignControlsToKeys();
    };
}

//game1 = new Game()

