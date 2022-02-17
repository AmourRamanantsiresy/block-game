//We take the id of the canvas
const canvas = document.getElementById("canvas");
//get it 2d contexte 
const context = canvas.getContext('2d');
//we defind the canva's size
canvas.width = 400;
canvas.height = 400;
//we call the class BlockMove
let me = new BlockMove();
//the ues de methode move by the class Block move that we've got before
me.move(context)