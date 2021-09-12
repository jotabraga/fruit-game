import Fruit from "../Fruit";
const banana = document.querySelector("#banana") as HTMLImageElement;

export default class Banana extends Fruit {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, banana, 61, 67);
  }
  increaseScore(points: number) {
    return points*2;
  }
}
