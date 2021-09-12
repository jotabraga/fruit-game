import Fruit from "../Fruit";
const orange = document.querySelector("#orange") as HTMLImageElement;

export default class Orange extends Fruit {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, orange, 61, 67);
  }
  increaseScore(points: number) {
    this.points = 5;
  }
}