#RoadRunneR (correcaminos)

The purpose of the game is to avoid obstacles and reach the highest possible score.

The game screen is a road of blocks with obstacles.

The player is represented by a circle or white block.
This player can move to the right or left side and also jump obstacles with the key arrows.

The game is over when a collition is detected (Extra: or the player fall in empty block).

Extra: When the game advance, at certain moment the road moves faster(and the music) and the backgroundcolor change.

***
###Techinique

HTML, Vanilla Javasript ___DOM___ and CSS
### Game states
* __Start Screen__
    *Title
    *PlayButton
* __Game Screen__
    *DOM
* __Game Over Screen__
    *Play again button
    *Go to start screen button

### Game
*Create the road(3 blocks in horizontal in front of the player)

*Create player on the first and middle block

*Move player (righ, left, jump)

*In this two last cases -> Game Over -> Show game Over Screen


## Back log

*Create obstacles

*Check if colision

*Create empty blocks

*Check if fall in a empty block

### Music
*Speed up the velocity of the game(every 20 or 30seconds)
* Add background music to game
* Add music on and off button to Start screen.
* Speed up the velocity of the music(every 20 or 30seconds)

### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen

## Data structure
__main.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
let game = new Game({
    this.rows, //see 5 or 6 rows on the road?
    this.blocks,  //three blocks per rows
    backgroundcolor = ["xxx","xxx","xxx"],
    //this.obstacles,
    //this.generateStars,
    //this.emptyBlocks,
    this.player
});  
game.start();
`````

__game.js__
````
class Game(options){
drawBoard(){};
drawPlayer();
generateStars(){};
generateObstacles();
//generateEmptyBlocks();
gameOver();
start(){};
}
````

__player.js__
````
class Player(){
    this.width;
    this.height; //i am not sure if i will need it
    this.color;
    this.collectedStars
};
move();
starsCollector()
````

__obstacle.js__
````
class Obstacle(){
    this.width;
    this.height;
    extra :this.form; // differents objects? 
};
createObstacles();
````

## Links
[Snake Game](https://)


https://github.com/alexfc96/roadrunner