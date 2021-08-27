import AutonomousObject from "./AutonomousObject";
import FallingObject from "./fallingObject";

export default class Bomb extends AutonomousObject {
  theBomb: boolean = true;
  image: HTMLImageElement = new Image();
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    this.image.src = "./assets/bomb.png";
  }
}