import Player from "./Player";
import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: HTMLDivElement = document.querySelector("#app");
const startButton = document.querySelector("#startButton");
const loseText = document.querySelector("#lose");

const screenWidth = app.clientWidth;
const screenHeight = app.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const alien = document.querySelector("#alien") as HTMLImageElement;
const player = new Player(canvas, alien);
const game = new Game(canvas, player, loseText);

window.setTimeout(() => player.draw(), 100);
window.addEventListener('keydown', (e) => player.getCommandToMove(e));
canvas.addEventListener('touchmove', (e) => player.getCommandToMove(e));

startButton.addEventListener("click", () => game.start());