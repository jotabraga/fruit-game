import AutonomousObject from "./AutonomousObject";

export default class Watermelon extends AutonomousObject {
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.points = 20;
    this.image.src = "./assets/watermelon.png";
  }
}