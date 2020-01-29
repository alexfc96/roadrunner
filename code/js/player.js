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

  moveRoad() { //entiendo que esto hará el movimiento de los bloques pero, no el de mi player




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
    return position //con this.position solo sacamos el objeto de las propiedades del player
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
    return position //con position sacamos el div completo

  }
  starsCollector() {

  };
};