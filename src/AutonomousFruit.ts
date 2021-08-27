export default class AutonomousFruit {
    
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    speedY: number = 1.01;
    image: HTMLImageElement;
    points: number;
    theBomb: boolean = false;
    theBanana: boolean = false;
  
    constructor(context: CanvasRenderingContext2D) {
      this.context = context;
      this.x = Math.floor(Math.random() * 325);
      this.y = 10;
    }    
  
    move() {
      if(this.y < 200){
        this.y *= 1.015;
      }else{
        this.y *= 1.025
      }
    }

    isOutOfScreen() {
      return this.positionY > this.screenHeight;
  }
  
    draw() {
      this.context.beginPath();
      this.context.drawImage(this.image, this.x, this.y, 50, 50);
      this.context.fill();
    }
  }