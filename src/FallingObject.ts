import Drawable from "./Drawable";

export default abstract class FallingObject extends Drawable {
  speedY: number = 4;
  points: number;

  constructor(
    canvas: HTMLCanvasElement,
    imagePath: HTMLImageElement,
    sizeX: number,
    sizeY: number
  ) {
    super(
      canvas,
      imagePath,
      Math.random() * (canvas.width),
      -70,
      sizeX,
      sizeY
    );
  }
  move() {
    this.positionY += this.speedY;
  }
  outOfScreen() {
    return this.positionY > this.screenHeight;
  }
  attPoints(points: number) {
    return points + this.points;
  }
}
