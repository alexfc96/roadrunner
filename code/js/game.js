class Game{
    constructor(){
        this.widthScreen = undefined,
        this.heightScreen = undefined
        //this.btnStartGameScreen = document.getElementById("btn-start-game"); no se si esto debería de cargarse aquí
    }
    setGameStartScreen(){
        //this.btnStartGameScreen.addEventListener('click',createGameScreen); // y ejecutarse desde este Game o desde el main(funcionando)
    }
    drawBoard(){
        //this.Main.createGameScreen();
    };
    drawPlayer(){};
    generateStars(){};
    generateObstacles(){};
    //generateEmptyBlocks(){};
    gameOver(){
        this.Main.createGameOverScreen();
    };
    start(){};
}

//game1 = new Game()

