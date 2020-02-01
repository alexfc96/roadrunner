let game; //hace falta porque si no no es una variable global
let main;
main = document.addEventListener('DOMContentLoaded', (event) => { //when all the document is loaded{

    function createStartScreen() { //the first display showing the title of the game
        startScreen.style = "display: block";
        winScreen.style = "display: none";
        gameOverScreen.style = "display: none";
        gameScreen.style = "display: none"; //hiding the startScreen for put the gameScreen
        console.log("createStartScreen")
        //const startScreen = document.getElementById("start-screen"); //selecting the div that will contain the structure of the display
        startScreen.innerHTML = `                       
        <h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Use the arrow keys for move the player</p>
        <p>Game created by: Alex Fernández</p>` //adding the code

    }

    function createGameScreen() { //the screen where the user plays the game
        console.log("createGameScreen")
        gameScreen.style = "display: block";
        winScreen.style = "display: none";
        gameOverScreen.style = "display: none";
        startScreen.style = "display: none"; //hiding the startScreen for put the gameScreen
        gameScreen.innerHTML = `            
        <div class="rows-blocks" data-y="4">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="3">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="2">
            <div class="block data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="1">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>          
        <div class="rows-blocks" data-y="0">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div> <!--Initial position of the player and we need to change the class to the siblings-->
            <div class="block" data-x="2"></div>
        </div>`
    }

    function createWinScreen(stars) {
        console.log("creating winScreen");
        winScreen.style = "display";
        startScreen.style = "display: none";
        gameOverScreen.style = "display: none";
        gameScreen.style = "display: none"; //hidding the gameScreen
        winScreen.innerHTML = `             
        <h2>Well played!</h2>
        <p>You have taken ${stars} stars</p></hr>
        <p>Continue playing?</p>
        <input id="btn-resume-game" type="button" value="RESUME GAME"> 
        <p>You want to return to the main page?</p>
        <input id="btn-restart-game" type="button" value="RESTART GAME">        
        `
    }

    function createGameOverScreen() { //the game over screen 
        console.log("createGameOverScreen");
        gameOverScreen.style = "display";
        startScreen.style = "display: none";
        gameScreen.style = "display: none"; //hidding the gameScreen
        winScreen.style = "display: none";
        gameOverScreen.innerHTML = `             
        <h2>Fracaaaaso!</h2>
        <p>Play again?</p><br>
        <input id="btn-restart-game" type="button" value="RESTART GAME">` //he probado también con onmousedown="createGameScreen" y dice que no existe la func
    }

    //Esto creo que debería de ir en game.js(las llamadas a las funciones)

    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const winScreen = document.getElementById("win-screen");
    const gameOverScreen = document.getElementById("game-over-screen");
    const btnStartGameScreen = document.getElementById("btn-start-game"); //agregado pero comentado en el constructor de game.js
    const btnResumeGame = document.getElementById("btn-resume-game");
    const btnRestartGame = document.getElementById("btn-restart-game");
    btnStartGameScreen.addEventListener('click', createGameScreen);
    //btnResumeGame.addEventListener('click', createGameScreen);
    //btnRestartGame.addEventListener('click', createGameScreen); //agregado pero comentado en el metodo setGameStartScreen() de game.js


    // Start the classes Game and the new player
<<<<<<< HEAD:js/main.js
    game = new Game(new Player(1, 0), new Road(0, 4), new Star(), createWinScreen, createGameOverScreen);
=======
    game = new Game(new Player(1, 0), new Road(0, 4), new Star());
>>>>>>> fe310453134000cc74a88e0583813a0028b3331d:code/js/main.js

    //game.start()

})