import Player from "./player";

export default class Game {
  player: Player;
  gameIntervalId: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  screenWidth: number;
  screenHeight: number;
  lives: number = 4;
  score: number = 0;
  gameOverText: HTMLElement = document.querySelector(".gameOver");

  constructor(canvas: HTMLCanvasElement, player: Player) {
    this.canvas = canvas;
    this.player = player;
    this.context = canvas.getContext("2d");
    this.screenHeight = canvas.height;
    this.screenWidth = canvas.width;
  }

  start() {
    this.gameIntervalId = window.setInterval(() => this.loop(), 1000 / 60);
  }

  loop() {
    this.render();
    if (this.lives <= 0) this.end();
  }

  render() {
    this.clearScreen();
    this.player.draw();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  end() {
    this.clearIntervals();
    this.gameOverText.setAttribute("class", "gameOver");
  }

  clearIntervals() {
    clearInterval(this.gameIntervalId);
  }
}
