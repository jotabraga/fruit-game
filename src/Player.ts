import Drawable from "./Drawable";

export default class Player {

  speed: number = 15;
  positionX: number = canvas.width / 2;
  positionY: number = canvas.height - 96;

    
  constructor(canvas: HTMLCanvasElement, image: HTMLImageElement){
    super(canvas, image, this.positionX, this.positionY)
  } 

  getCommandToMove (command: any){
    if (command.key){
      const keyPressed = command.keyPressed;
      const acceptedMoves: any = {ArrowLeft: true, ArrowRight: true};
      if (acceptedMoves[keyPressed]) return this.moveByArrowKey(command.key);
    }

    if(command.touches){
      return this.touchMove(e.touches[0].clientX);
    }

  }

  moveByArrowKey(keyPressed: string){

  }

  
  }