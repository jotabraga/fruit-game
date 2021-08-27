import AutonomousObject from "./AutonomousObject";

export default class Strawberry extends AutonomousObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 30;
    this.image.src = "./assets/strawberry.png";
  }
}