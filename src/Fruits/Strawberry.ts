import Fruit from "../Fruit";
const strawberry = document.querySelector("#strawberry") as HTMLImageElement;

export default class Strawberry extends Fruit {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, strawberry, 61, 67);
  }
  increaseScore(points: number) {
    this.points = 10;
  }
}
