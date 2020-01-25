class Game{
    constructor(){
        this.widthScreen = undefined,
        this.heightScreen = undefined
    }
    setGameStartScreen(){
        Main.createStartScreen()
    }
    drawBoard(){};
    drawPlayer(){};
    generateStars(){};
    generateObstacles(){};
    //generateEmptyBlocks(){};
    gameOver(){};
    start(){};
    }