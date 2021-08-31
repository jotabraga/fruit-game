import Drawable from "./Drawable";

export default class Player extends Drawable {

  speed: number = 15;
  width: number = 80;
  height: number = 100;

  constructor(canvas: HTMLCanvasElement, image: HTMLImageElement) {
    super(canvas, image, canvas.width / 2, canvas.height - 97, 80, 100);
  }

  getCommandToMove(command: any) {
    console.log("entrou");
    if (command.key) {
      const keyPressed = command.keyPressed;
      const acceptedMoves: any = { ArrowLeft: true, ArrowRight: true };
      if (acceptedMoves[keyPressed]) return this.moveByArrowKey(command.key);
    }

    if (command.touches) {
      return this.moveByTouch(command.touches[0].clientX);
    }
  }

  moveByArrowKey(keyPressed: string) {
    if(keyPressed === 'ArrowLeft' && this.positionX > 0) {
      this.positionX -= this.speed;
    }

    if(keyPressed === 'ArrowRight' && this.positionX < this.screenWidth) {
      this.positionX += this.speed;
    }
  }

  moveByTouch (position: number) {
    this.positionX = position;
  }
}
