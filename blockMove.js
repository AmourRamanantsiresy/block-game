//the main class 
class BlockMove {
    //the constructor of the class BlockMove
    constructor() {
        //when the block goes up, the variable apositionBefore will store its value before
        this.positionBefore = []
        //the positionNow is the position of the block at each instant
        this.positionNow = [0, 380];
        //width id th width of the block
        this.width = 100;
    }
    //a function that will move the block from left to right and right to left
    move(context) {
        //variables for our future coditions
        let a = 0, b = 0;
        //draw the block
        context.fillRect(this.positionNow[0], this.positionNow[1], this.width, 20);
        //function that will listen all of event move the block from bottom to up
        this.up()
        //interval which recovers the positions of the block every 50ms
        setInterval(() => {
            //the conditions that tell us if the part of the block is above the previous one or not
            if (this.positionNow[1] > 20 && b == 0) {
                //clear the block
                context.clearRect(this.positionNow[0], this.positionNow[1], this.width, 20);
                if (a == 0) {
                    if (this.positionNow[0] + this.width == 400)
                        a = 1
                    this.positionNow[0] += 10;
                } else {
                    this.positionNow[0] -= 10;
                    if (this.positionNow[0] == 0)
                        a = 0
                }
                context.fillRect(this.positionNow[0], this.positionNow[1], this.width, 20);
            }
            //stop the game if the widht of the block equal 0
            if (this.width == 0 && b == 0) {
                alert("Game over")
                b = 1
            }
        }, 50);
    }
    //function that will listen all of event move the block from bottom to up
    up() {
        //listen if the player clicks the space button 
        document.addEventListener("keydown", (event) => {
            if (event.key == " ") {
                context.clearRect(this.positionNow[0], this.positionNow[1], this.width, 20);
                //while the position does not exceed the height of the canvas, if the player press de space button,
                //subtract 20 from the y position of the block
                if (this.positionNow[1] != 380) {
                    this.changeWidth()
                }
                context.fillRect(this.positionNow[0], this.positionNow[1], this.width, 20);
                this.positionBefore[0] = this.positionNow[0]
                this.positionBefore[1] = this.positionNow[0] + this.width
                this.positionNow[1] -= 20
            }
        })
    }
    //changes the width of the block by the ratio between a position before and now
    changeWidth() {
        //if the block is a little to the right of its position before
        if (this.positionBefore[0] < this.positionNow[0] + 2 && (this.positionBefore[1] + 2 > this.positionNow[0])) {
            this.width -= this.positionNow[0] - this.positionBefore[0]
            //if the block is a little to the left of its position before
        } else if (this.positionBefore[0] + 2 > this.positionNow[0] && this.positionBefore[0] < (this.positionNow[0] + this.width) + 2) {
            this.width -= this.positionBefore[0] - this.positionNow[0]
            this.positionNow[0] = this.positionBefore[0]
            // if the block is not above its old position
        } else if (this.positionBefore[1] < this.positionNow[0] || this.positionBefore[0] > this.positionNow[0] + this.width) {
            this.width = 0;
        }
    }
}
