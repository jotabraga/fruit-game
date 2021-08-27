import AutonomousObject from "./AutonomousObject";

export default class Orange extends AutonomousObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 5;
    this.image.src = "./assets/orange.png";
  }
}