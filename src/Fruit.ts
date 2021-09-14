import FallingObject from "./FallingObject";

export default abstract class Fruit extends FallingObject {
  constructor(
    canvas: HTMLCanvasElement,
    imagePath: HTMLImageElement,
    sizeX: number,
    sizeY: number
  ) {
    super(canvas, imagePath, sizeX, sizeY);
  }
}
