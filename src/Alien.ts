import AutonomousObject from "./AutonomousObject";

export default class Player {
    x: number;
    y: number;
    context: CanvasRenderingContext2D;
    speedX: number = 20;
    direction: number;
    screenWidth: number;
    constructor(
      context: CanvasRenderingContext2D,
      screenWidth: number,
      screenHeight: number
    ) {
      this.context = context;
      this.screenWidth = screenWidth;
      this.x = screenWidth / 2;
      this.y = screenHeight - 100;
    }
  
    move() {
      this.x += this.speedX * this.direction;
    }
    mouseMove(clientX: number) {
      this.x = clientX;
    }
  
    setDirection(direction: number) {
      this.direction = direction;
    }
  
    checkCollision(autonomousObject: AutonomousObject) {
      if (
        this.x < autonomousObject.x + 50 &&
        this.x + 40 > autonomousObject.x &&
        this.y < autonomousObject.y + 50 &&
        this.y + 80 > autonomousObject.y
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    draw() {
      const image = new Image();
      image.src = "./assets/alien.png";
      this.context.beginPath();
      this.context.drawImage(image, this.x - 20, this.y, 40, 80);
      this.context.fill();
    }
  }