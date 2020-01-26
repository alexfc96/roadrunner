document.addEventListener('DOMContentLoaded', (event) => {

    function createStartScreen(){ //the first display showing the title of the game
        console.log("createStartScreen")
        const startScreen = document.getElementById("start-screen"); //selecting the div that will contain the structure of the display
        startScreen.innerHTML = `                       
        <h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Game created by: Alex Fernández</p>`  //adding the code

    }
    function createGameScreen(){
        console.log("createGameScreen")
        //startScreen.innerHTML = ``
        startScreen.style = "display: none";   //hiding the startScreen for put the gameScreen
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
    function createGameOverScreen(){
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
    btnStartGameScreen.addEventListener('click',createGameScreen); //agregado pero comentado en el metodo setGameStartScreen() de game.js
    const gameOverScreen = document.getElementById("game-over-screen");

})

//main = new Main()



//createStartScreen(spaceGame);
//createGameScreen(id);