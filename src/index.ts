import Player from "./player";
import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const gamePlay: HTMLDivElement = document.querySelector("#gamePlay");
const screenWidth = gamePlay.clientWidth;
const screenHeight = gamePlay.clientHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;
const alien = document.querySelector("#alien") as HTMLImageElement;
const player = new Player(canvas, alien);
const game = new Game(canvas, player);
const instructionToHide = document.querySelector(".instructions");

function hideInitialInstructions() {
  instructionToHide.setAttribute("class", "instructions hide");
}

instructionToHide.addEventListener("click", () => {
  hideInitialInstructions();
  game.start();
});
window.setTimeout(() => player.draw(), 100);
window.addEventListener("keydown", (e) => player.getCommandToMove(e));
canvas.addEventListener("touchmove", (e) => player.getCommandToMove(e));
