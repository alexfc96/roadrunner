class Player{
    constructor(){  // entiendo que mi player lo tendré que crear en otro archivo y pasarlo como parametro en el constructor
        this.myPlayer = this.myPlayer,
        this.width = this.width,
        this.height = this.height, //i am not sure if i will need it
        this.color = this.color
        //this.myInitialPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.block:nth-child(2)")
        //this.collectedStars = undefined
    }
    /*
    move(){  //entiendo que esto hará el movimiento de los bloques pero, no el de mi player
        let myPosition = this.myInitialPosition;
        switch (this.myPosition) {
          case "left":
            this.myPlayer.unshift({
              row: head.row,
              column: (head.column - 1 + this.maxColumns) % this.maxColumns
            });
            break;
          case "right":
            this.body.unshift({
              row: head.row,
              column: (head.column + 1) % this.maxColumns
            });
            break;
          /*
          case "up":
            this.body.unshift({
              row: (head.row - 1 + this.maxRows) % this.maxRows,
              column: head.column
            });
            break;
          case "down":
            this.body.unshift({
              row: (head.row + 1) % this.maxRows,
              column: head.column
            });
            break;
          //acordarse de cerrar comentario  
        }
        this.previousTail = this.body.pop();
    };
    */
    goRight(){
        console.log("Girar hacia la derecha")
        //let myPosition = this.myInitialPosition;
        let myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block"); //select the actual position of the player
        let rightPosition= document.querySelector("#game-screen>.rows-blocks:last-child>.block:nth-child(3)"); //the position where the player it will put
        rightPosition.innerHTML = `<div class="player-block"></div>`;
        myPosition.className = "block"; //clean the past block of the player
        return myPosition
    }
    goLeft(){
        console.log("Girar hacia la izquierda")
        //let myPosition = this.myInitialPosition;
        let myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block");
        let leftPosition= document.querySelector("#game-screen>.rows-blocks:last-child>.block:nth-child(1)");
        leftPosition.innerHTML = `<div class="player-block"></div>`;
        myPosition.className = "block";
        //myPosition.innerHTML = `<div class="block"></div>`
        return myPosition

    }
    starsCollector(){

    };
};
