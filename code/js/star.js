class Star {
    constructor() {
        //this.myPosition = document.querySelector("#game-screen>.rows-blocks:last-child>.player-block")
        this.starPosition = {
            x: undefined,
            y: undefined
        };
        this.game = game //no estoy seguro si esto es necesario
        //this.stars = undefined,
    }

    generateStars() {
        const firstRow = document.querySelector("#game-screen>.rows-blocks:first-child");
        let num = Math.floor(Math.random() * 3);
        firstRow[num].classList.add("star-block");
    };
};