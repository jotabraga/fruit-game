import Game from "./Game";

const screenHeight = window.innerHeight;
const canvas: HTMLCanvasElement = document.querySelector("#canvas");
canvas.width = 375;
canvas.height = screenHeight;
canvas.style.backgroundColor = "#181820";
const game = new Game(screenHeight, canvas);

const mouseButton: HTMLElement = document.querySelector(".mouseButton");
mouseButton.addEventListener("click", () => {
  selectMouse();
});

const keyboardButton: HTMLElement = document.querySelector(".keyboardButton");
keyboardButton.addEventListener("click", () => {
  selectKeyboard();
});

function hideInstructions() {
  const hide = document.querySelector(".selectController");
  hide.setAttribute("class", "selectController hide");
}

function selectMouse() {
  hideInstructions();
  game.start();
  canvas.addEventListener("mousemove", (e) => {
    game.player.mouseMove(e.offsetX);
  });
}

function selectKeyboard() {
  hideInstructions();
  game.start();
  canvas.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      game.player.setDirection(1);
      game.player.move();
    } else if (e.key === "ArrowLeft") {
      game.player.setDirection(-1);
      game.player.move();
    }
  });
}

canvas.addEventListener("click", () => {
  game.start();
});