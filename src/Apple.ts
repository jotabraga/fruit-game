import AutonomousFruit from "./AutonomousFruit";

export default class Apple extends AutonomousFruit {
    image: HTMLImageElement = new Image();
    constructor(context: CanvasRenderingContext2D) {
      super(context);
      this.points = 10;
      this.image.src = "./assets/red-apple.png";
    }
  }