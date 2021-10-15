import Player from "./player";
import FallingObject from "./FallingObject";
import FruitsList from "./Fruits/FruitsList";

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
    this.updateState();
    this.render();
    if (this.lives <= 0) this.end();
  }

  updateState() {
    this.fallingObjects.forEach((object) => object.move());
    this.fallingObjects.forEach((object) => {
      if (object.isOutOfScreen()) {
        this.fallingObjects = this.fallingObjects.filter(
          (obj) => obj !== object
        );
      }
    });
  }

  render() {
    this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.player.draw();
    this.fallingObjects.forEach((object) => object.draw());
  }

  dropFruit() {
    const randomFruit = this.getAleatoryFruit();
    this.fallingObjects.push(randomFruit);
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
    return fruit;
  }

  drawnNumber() {
    return Math.random() * 100;
  }

  checkCollisions() {
    this.fallingObjects.forEach((object) => {
      if (this.player.checkCollision(object)) {
        const updatedScore = object.attPoints(this.score)
        this.updateScore(updatedScore);
        this.fallingObjects = this.fallingObjects.filter(
          (obj) => obj !== object
        );
      }
    });
  }

  updateScore(points: number) {
    this.score = points;
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
    clearInterval(this.fruitIntervalId);
  }
}
