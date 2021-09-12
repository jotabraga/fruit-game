import Player from "./player";
import FallingObject from "./FallingObject";
import Fruit from "./Fruit";
import FruitsList from "./Fruits/FruitsList";
import Bomb from "./Bomb";

export default class Game {
  player: Player;
  gameIntervalId: number;
  bombIntervalId: number;
  fruitIntervalId: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  screenWidth: number;
  screenHeight: number;
  lives: number = 4;
  score: number = 0;
  gameOverText: HTMLElement = document.querySelector(".gameOver");
  fallingObjects: FallingObject[] = [];

  constructor(canvas: HTMLCanvasElement, player: Player) {
    this.canvas = canvas;
    this.player = player;
    this.context = canvas.getContext("2d");
    this.screenHeight = canvas.height;
    this.screenWidth = canvas.width;
  }

  start() {
    this.gameIntervalId = window.setInterval(() => this.loop(), 1000 / 60);
    this.fruitIntervalId = window.setInterval(() => this.dropFruit(), 700);
  }

  loop() {
    this.render();
    if (this.lives <= 0) this.end();
  }

  render() {
    this.clearScreen();
    this.player.draw();
  }

  dropFruit() {
    const randomFruit = this.getAleatoryFruit();
  }

  getAleatoryFruit() {
    let fruit;
    const aleatoryNumber = this.drawnNumber();
    if (aleatoryNumber > 70) fruit = new FruitsList.Orange(this.canvas);
    if (aleatoryNumber > 40 && aleatoryNumber <= 70)
      fruit = new FruitsList.Apple(this.canvas);
    if (aleatoryNumber > 20 && aleatoryNumber <= 40)
      fruit = new FruitsList.Watermelon(this.canvas);
    if (aleatoryNumber > 5 && aleatoryNumber <= 20)
      fruit = new FruitsList.Strawberry(this.canvas);
    if (aleatoryNumber <= 5) fruit = new FruitsList.Banana(this.canvas);
    this.fallingObjects.push(fruit);
  }

  drawnNumber() {
    return Math.random() * 100;
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // updateScore(newScore){
  //   const divScore = document.querySelector(".score") as HTMLElement;

  //   if (newScore === 2*this.score){
  //     divScore.classList.add("highlight");
  //     setTimeout(() => divScore.classList.remove("highlight"), 200);
  //   }
  //   this.score = newScore;
  //   divScore.innerHTML = "Score: " + this.score.toFixed(1);
  // }

  end() {
    this.clearIntervals();
    this.gameOverText.setAttribute("class", "gameOver");
  }

  clearIntervals() {
    clearInterval(this.gameIntervalId);
  }
}
