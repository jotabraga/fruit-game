import AutonomousObject from "./AutonomousObject";
import Player from "./Player";

export default class Game {
  player: Player;
  gameIntervalId: number;
  spawnFruitIntervalId: number;
  spawnBombIntervalId: number;
  canvas: HTMLCanvasElement;
  objects: AutonomousObject[] = [];
  context: CanvasRenderingContext2D;
  screenWidth: number;
  screenHeight: number;
  runningGame: boolean = false;
  lifes: number = 4;
  score: number = 0;
  loseText: Element;

  constructor(canvas: HTMLCanvasElement, player: Player, lifes: Lifes, score: Score, loseText: Element) {
      this.canvas = canvas;
      this.player = player;
      this.context = canvas.getContext('2d');
      this.screenHeight = canvas.height;
      this.screenWidth = canvas.width;
      this.loseText = loseText;
  }

  start() {
      if (!this.runningGame) {
          this.gameIntervalId = window.setInterval(() => this.loop(), 1000 / 60);
          this.spawnFruitIntervalId = window.setInterval(() => this.spawnRandomFruit(), 800);
          this.spawnBombIntervalId = window.setInterval(() => this.spawnBomb(), 3000);
          this.runningGame = true;
      } else {
          this.restart();
      }
  }

  loop() {
      this.updateState();
      this.checkCollisions();
      this.render();

      if (this.lifes.lifesQuantity <= 0 || this.score.score < 0) this.end();
  }

  render() {
      this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
      this.player.draw();
      this.objects.forEach(object => object.draw());
      this.score.draw();
      this.lifes.draw();
  }

  checkCollisions() {
      this.objects.forEach(object => {
          if (this.player.checkCollision(object)) {
              this.score.changeScoreTo(object.attPoints(this.score.score));
              this.objects = this.objects.filter(obj => obj !== object);
          }
      });
  }

  updateState() {
      this.objects.forEach(object => object.move());
      this.objects.forEach(object => {
          if (object.outOfScreen()) {
              if (object.points > 0) this.lifes.decreaseOne();
              this.objects = this.objects.filter(obj => obj !== object);
          }
      });
  }

  restart() {
      this.loseText.textContent = "";
      this.clearIntervals();
      this.objects = [];
      this.runningGame = false;
      this.score.reset();
      this.lifes.reset();
      this.start();
  }

  spawnRandomFruit() {
      const random = Math.random() * 100;
      let fruit;

      if (random > 70) fruit = new AllFruits.Orange(this.canvas);
      if (random > 40 && random <= 70) fruit = new AllFruits.RedApple(this.canvas);
      if (random > 20 && random <= 40) fruit = new AllFruits.Watermelon(this.canvas);
      if (random > 5 && random <= 20) fruit = new AllFruits.StrawBerry(this.canvas);
      if (random <= 5) fruit = new AllFruits.Banana(this.canvas);

      this.objects.push(fruit);
  }

  spawnBomb() {
      this.objects.push(new Bomb(this.canvas));
  }

  end() {
      this.clearIntervals();
      this.loseText.textContent = "Você perdeu!";
  }

  clearIntervals() {
      clearInterval(this.gameIntervalId);
      clearInterval(this.spawnFruitIntervalId);
      clearInterval(this.spawnBombIntervalId);
  }

}