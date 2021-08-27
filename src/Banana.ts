import FallingObject from "./fallingObject";

export default class Banana extends FallingObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.theBanana = true;
    this.image.src = "./assets/banana.png";
  }
}