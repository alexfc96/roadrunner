const spaceGame = document.getElementById("space-game");
class Main {
    constructor(){
        this.gameSpace = document.getElementById("space-game")
    }

    createStartScreen(spaceGame){
        //console.log("createStartScreen")
        const startScreen = document.getElementById("start-screen");
        startScreen.innerHTML = "<h2>Welcome to my game<h2> <h1>RoadRunneR</h1>    "
    }
    createGameScreen(spaceGame){

    }

}

//createStartScreen(spaceGame);
//createGameScreen(id);