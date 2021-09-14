export default abstract class Drawable {
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  imageWidth: number;
  imageHeight: number;
  positionX: number;
  positionY: number;
  screenWidth: number;
  screenHeight: number;

  constructor(
    canvas: HTMLCanvasElement,
    image: HTMLImageElement,
    positionX: number,
    positionY: number,
    imageWidth: number,
    imageHeight: number
  ) {
    this.context = canvas.getContext("2d");
    this.image = image;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.positionX = positionX;
    this.positionY = positionY;
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;
  }
  draw() {
    this.context.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.imageWidth,
      this.imageHeight
    );
  }
}
