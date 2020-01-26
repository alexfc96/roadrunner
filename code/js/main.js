class Main {
    constructor(){
        this.gameSpace = document.getElementById("space-game")
    }

    createStartScreen(){
        //console.log("createStartScreen")
        const startScreen = document.getElementById("start-screen");
        startScreen.innerHTML = `
        <h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Game created by: Alex Fernández</p>`

        //return startScreen
    }
    createGameScreen(){
        //console.log("createGameScreen")
        const gameScreen = document.getElementById("game-screen");
        gameScreen.innerHTML = `            
        <div class="rows-blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>
        <div class="rows-blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>
        <div class="rows-blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>
        <div class="rows-blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>          
        <div class="rows-blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>`
    }
    createGameOverScreen(){
        //console.log("createGameOverScreen")
        const gameOverScreen = document.getElementById("game-over-screen");
        gameOverScreen.innerHTML = `             
        <p>Bien jugado.</p>
        Play again?<br>
        <button id="btn-replay-game" value="RESTART GAME">RESTART GAME</button>`
    }

}

//createStartScreen(spaceGame);
//createGameScreen(id);