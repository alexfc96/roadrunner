let game; //hace falta porque si no no es una variable global

document.addEventListener('DOMContentLoaded', (event) => { //when all the document is loaded{

    function createStartScreen() { //the first display showing the title of the game
        //gameScreen.style = "display: none";
        //gameOverScreen.style = "display: none";
        console.log("createStartScreen")
        const startScreen = document.getElementById("start-screen"); //selecting the div that will contain the structure of the display
        startScreen.innerHTML = `                       
        <h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Use the arrow keys for move the player</p>
        <p>Game created by: Alex Fernández</p>` //adding the code

    }

    function createGameScreen() { //the screen where the user plays the game
        console.log("createGameScreen")
        //startScreen.innerHTML = ``
        startScreen.style = "display: none"; //hiding the startScreen for put the gameScreen
        gameScreen.innerHTML = `            
        <div class="rows-blocks" data-y="0">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="1">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="2">
            <div class="block data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>
        <div class="rows-blocks" data-y="3">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div>
            <div class="block" data-x="2"></div>
        </div>          
        <div class="rows-blocks" data-y="4">
            <div class="block" data-x="0"></div>
            <div class="block" data-x="1"></div> <!--Initial position of the player and we need to change the class to the siblings-->
            <div class="block" data-x="2"></div>
        </div>`
    }

    function createGameOverScreen() { //the game over screen 
        console.log("createGameOverScreen");
        gameScreen.style = "display: none"; //hidding the gameScreen
        gameOverScreen.innerHTML = `             
        <p>Bien jugado.</p>
        Play again?<br>
        <button id="btn-replay-game" value="RESTART GAME">RESTART GAME</button>`
    }

    //Esto creo que debería de ir en game.js(las llamadas a las funciones)

    const startScreen = document.getElementById("start-screen");
    const btnStartGameScreen = document.getElementById("btn-start-game"); //agregado pero comentado en el constructor de game.js
    const gameScreen = document.getElementById("game-screen");
    btnStartGameScreen.addEventListener('click', createGameScreen); //agregado pero comentado en el metodo setGameStartScreen() de game.js
    const gameOverScreen = document.getElementById("game-over-screen");

    // Start the classes Game and the new player
    game = new Game(new Player(1, 4));

    //game.start()

})