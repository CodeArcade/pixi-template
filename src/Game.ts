import { Application } from "pixi.js"

export class Game {
  private constructor() {
    /* This class is static. This constructor doesn't exist */
  }

  public static init(backgroundColor = 0x000000) {
    const app = new Application({
      resizeTo: window,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor
    })

    document.body.appendChild(app.view as HTMLCanvasElement)
    
  }
}