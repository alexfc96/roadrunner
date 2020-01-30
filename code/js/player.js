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

  goRight(position) {
    console.log("Girar hacia la derecha")

    if (position.dataset.x === "0") {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").nextElementSibling;
      this.position = {
        x: 1,
        y: 0
      }
      //position.dataset.x = '1';
    } else if (position.dataset.x === '1') {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").nextElementSibling;
      this.position = {
        x: 2,
        y: 0
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
        y: 0
      }
      //position.dataset.x = '0';
    } else if (position.dataset.x === '2') {
      //position = document.querySelector("#game-screen>.rows-blocks:last-child>.block").previousElementSibling;
      this.position = {
        x: 1,
        y: 0
      }
      //position.dataset.x = '1';
    }
    return position //con position sacamos el div completo

  }
  starsCollector() {

  };
};