import Fruit from "../Fruit";
const apple = document.querySelector("#apple") as HTMLImageElement;

export default class Apple extends Fruit {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, apple, 61, 67);
  }
  increaseScore(points: number) {
    this.points = 10;
  }
}