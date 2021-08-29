import Drawable from "./Drawable";

export default class Player {

  speed: number = 15;
  positionX: number = canvas.width / 2;
  positionY: number = canvas.height - 96;
  
    
  constructor(canvas: HTMLCanvasElement, image: HTMLImageElement){
    super(canvas, image, this.positionX, this.positionY)
  } 
  }