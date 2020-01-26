class Main {
    constructor(){
        this.gameSpace = document.getElementById("space-game")
    }

    createStartScreen(){
        //console.log("createStartScreen")
        const startScreen = document.getElementById("start-screen");
        startScreen.innerHTML = `<h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Game created by: Alex Fernández</p>`

        //return startScreen
    }
    createGameScreen(spaceGame){

    }

}

//createStartScreen(spaceGame);
//createGameScreen(id);