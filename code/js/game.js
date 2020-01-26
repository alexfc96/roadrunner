class Game{
    constructor(){
        this.widthScreen = undefined,
        this.heightScreen = undefined
    }
    setGameStartScreen(){
        this.Main.createStartScreen();
    }
    drawBoard(){
        this.Main.createGameScreen();
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

