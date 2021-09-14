import FallingObject from "./FallingObject";

const bomb = document.querySelector("#bomb") as HTMLImageElement;
export default class Bomb extends FallingObject {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas, bomb, 55, 55);
    this.points = 0;
    this.speedY = 4;
  }
}
