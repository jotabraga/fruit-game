import Player from "./Player";
import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: HTMLDivElement = document.querySelector("#app");

const screenWidth = app.clientWidth;
const screenHeight = app.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const alien = document.querySelector("#alien") as HTMLImageElement;
const player = new Player(canvas, alien);
const game = new Game(canvas, player);

function hideInitialInstructions() {
    const instructionToHide = document.querySelector(".instructions");
    instructionToHide.setAttribute("class", "instructions hide");
}

window.setTimeout(() => player.draw(), 100);
window.addEventListener('keydown', (e) => player.getCommandToMove(e));
canvas.addEventListener('touchmove', (e) => player.getCommandToMove(e));
canvas.addEventListener("click", () =>  
    {
    hideInitialInstructions();
    game.start();
    }
);
