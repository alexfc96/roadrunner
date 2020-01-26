class Game{
    constructor(options){
        this.widthScreen = undefined,
        this.heightScreen = undefined,
        this.roadrunner = options.roadrunner  //creo las opciones en main creando el player
        //this.myInitialPosition = myInitialPosition.roadrunner
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
        console.log("Asignando controles")
        document.addEventListener('keydown', e => {
          switch (e.keyCode) {
            //case 38: // arrow up  //maybe the button up works for jump and also the space tab
              //this.snake.goUp();
              //break;
            case 37: // arrow left
              this.roadrunner.goLeft();
              break;
            case 39: // arrow right
              this.roadrunner.goRight();
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

