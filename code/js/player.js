class Player {
  constructor(x, y) { // entiendo que mi player lo tendré que crear en otro archivo y pasarlo como parametro en el constructor
    //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
    this.position = {
        x: x,
        y: y
      },
      this.game = game //no estoy seguro si esto es necesario
    //this.collectedStars = undefined,
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
  goRight(position) {
    console.log("Girar hacia la derecha")

    if (position.dataset.x === "0") {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").nextElementSibling;
      this.position = {
        x: 1,
        y: 4
      }
      //position.dataset.x = '1';
    } else if (position.dataset.x === '1') {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").nextElementSibling;
      this.position = {
        x: 2,
        y: 4
      }
      //position.dataset.x = '2';
    }
    return position //es this.position? //solo sacamos el objeto de las propiedades del player
  }

  goLeft(position) {
    console.log("Girar hacia la izquierda")

    if (position.dataset.x === "1") {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").previousElementSibling;
      this.position = {
        x: 0,
        y: 4
      }
      //position.dataset.x = '0';
    } else if (position.dataset.x === '2') {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").previousElementSibling;
      this.position = {
        x: 1,
        y: 4
      }
      //position.dataset.x = '1';
    }
    return position //o position??  //sacamos el div



    let row = document.querySelector("#game-screen>.rows-blocks:last-child");
    //let checkPosition = row.firstElementChild
    let checkPosition1 = row.children[1];
    let checkPosition2 = row.children[2];

    let leftPosition = undefined;

    if (position == checkPosition1) { //chech if the player is in the middle block. In this case:
      leftPosition = row.children[0]; //the position where the player it will put (right side of the blocks)
      leftPosition.className = "player-block"; //assign the new class to the block where my player will be situated
      position.className = "block"; //clean the past block of the player
    } else if (position == checkPosition2) { //check if the position is the first (left) block.
      leftPosition = row.children[1];
      leftPosition.className = "player-block";
      position.className = "block";
    } else {
      leftPosition = position; //in case that the player is in the right side(limit)= my actual position it will be the same position
    }

    return leftPosition
  }
  starsCollector() {

  };
};