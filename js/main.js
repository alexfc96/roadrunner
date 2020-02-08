let game; //with this creates the variable global and we can call the functions outside

document.addEventListener('DOMContentLoaded', (event) => { //when all the document is loaded{

    function createStartScreen() { //the first display showing the title of the game
        startScreen.style = "display";
        winScreen.style = "display: none";
        gameOverScreen.style = "display: none";
        gameScreen.style = "display: none"; //hiding the startScreen for put the gameScreen
        startScreen.innerHTML = `                       
        <h2> Welcome to RoadRunneR</h2> 
        <input id="btn-start-game" type="button" value="START GAME"> 
        <p>Use the arrow keys to move the player</p>
        <p>Game created by: Alex Fernández</p>` //adding the code
        const btnStartGameScreen = document.getElementById("btn-start-game"); //selecting the button
        btnStartGameScreen.addEventListener('click', function () {//clicking the main button starts the game
            createGameScreen();
            game.move();
        })
    }

    function createGameScreen() { //the screen where the user plays the game
        gameScreen.style = "display";
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
            <div class="block" data-x="0"></div>
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
            <div class="block" data-x="1"></div> <!--Initial position of the player-->
            <div class="block" data-x="2"></div>
        </div>`
    }

    function createWinScreen(stars) {
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
        /*
        const btnResumeGame = document.getElementById("btn-resume-game");
        document.addEventListener("keyup", function (event) {
            switch (event.keyCode) {
                case 13: // enter key
                    document.getElementById("btn-resume-game").click();
                    winScreen.style = "display: none";
                    gameScreen.style = "display";
                    game.move();
                    break;
            }
        });
        */

        const btnResumeGame = document.getElementById("btn-resume-game");
        btnResumeGame.addEventListener('click', function () {
            winScreen.style = "display: none";
            gameScreen.style = "display";
            game.move();
        });

        let btnRestartGame = document.getElementById("btn-restart-game");
        btnRestartGame.addEventListener('click', createStartScreen);
    }

    function createGameOverScreen(stars) { //the game over screen 
        gameOverScreen.style = "display";
        startScreen.style = "display: none";
        gameScreen.style = "display: none";
        winScreen.style = "display: none";
        gameOverScreen.innerHTML = `             
        <h2>GAME OVER!</h2>
        <p>You have taken ${stars} stars</p></hr>
        <p>Play again?</p>
        <input id="btn-restart-game-screen" type="button" value="RESTART GAME">`
        let btnRestartGame = document.getElementById("btn-restart-game-screen");
        btnRestartGame.addEventListener('click', createStartScreen);
    }

    function startMusic() {
        music.play();
    }

    // Start the classes Game and the new player and passing the functions that the game needs
    game = new Game(new Player(1, 0), new Road(0, 4), createWinScreen, createGameOverScreen, startMusic);

    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const winScreen = document.getElementById("win-screen");
    const gameOverScreen = document.getElementById("game-over-screen");
    const btnStartGameScreen = document.getElementById("btn-start-game");
    btnStartGameScreen.addEventListener('click', function () {//clicking the main button starts the game
        createGameScreen();
        game.start();
    })
    const music = document.getElementById("music");
})