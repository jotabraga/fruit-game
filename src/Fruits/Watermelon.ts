import Fruit from "../Fruit";
const watermelon = document.querySelector("#watermelon") as HTMLImageElement;

export default class Watermelon extends Fruit {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, watermelon, 61, 67);
  }
  increaseScore(points: number) {
    this.points = 10;
  }
}