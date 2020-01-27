class Player{
    constructor(){  // entiendo que mi player lo tendré que crear en otro archivo y pasarlo como parametro en el constructor
        //this.myPlayer = this.myPlayer,   //aunque lo descomente no afecta al funcionamiento
        //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
        //this.collectedStars = undefined,
        //this.width = this.width,
        //this.height = this.height, //i am not sure if i will need it
        //this.color = this.color,
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
    goRight(myPosition){
        console.log("Girar hacia la derecha")
        let row = document.querySelector("#game-screen>.rows-blocks:last-child");
        //let checkPosition = row.firstElementChild
        let checkPosition0 = row.children[0];
        let checkPosition1 = row.children[1];

        let rightPosition = undefined;
        if(myPosition == checkPosition1){ //chech if the player is in the middle block. In this case:
            rightPosition= row.children[2]; //the position where the player it will put (right side of the blocks)
            rightPosition.className = "player-block"; //assign the new class to the block where my player will be situated
            myPosition.className = "block"; //clean the past block of the player
        } else if(myPosition == checkPosition0){ //check if the position is the first (left) block.
            rightPosition= row.children[1]; 
            rightPosition.className = "player-block"; 
            myPosition.className = "block"; 
        } else{
            rightPosition = myPosition; //in case that the player is in the right side(limit)= my actual position it will be the same position
        }

        return rightPosition //return the actual position of the player
    }
    
    goLeft(myPosition){
        console.log("Girar hacia la izquierda")

        let row = document.querySelector("#game-screen>.rows-blocks:last-child");
        //let checkPosition = row.firstElementChild
        let checkPosition1 = row.children[1];
        let checkPosition2 = row.children[2];

        let leftPosition = undefined;

        if(myPosition == checkPosition1){ //chech if the player is in the middle block. In this case:
            leftPosition= row.children[0]; //the position where the player it will put (right side of the blocks)
            leftPosition.className = "player-block"; //assign the new class to the block where my player will be situated
            myPosition.className = "block"; //clean the past block of the player
        } else if(myPosition == checkPosition2){ //check if the position is the first (left) block.
            leftPosition= row.children[1]; 
            leftPosition.className = "player-block"; 
            myPosition.className = "block"; 
        } else{
            leftPosition = myPosition; //in case that the player is in the right side(limit)= my actual position it will be the same position
        }

        return leftPosition
    }
    starsCollector(){

    };
};
