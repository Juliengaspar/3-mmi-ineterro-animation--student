import {FallingObstacle} from "../FallingObstacle";
export class Animation {
    //creation d'une animation
    //on est obliger d'avoir c'est 2 elements
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private fallingObstacles: FallingObstacle[];


    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, fallingObstacles: FallingObstacle[] = []) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.fallingObstacles = fallingObstacles;
    }
    star(){
        this.animate();
    }
    registerFallingObstacle(obstacle: FallingObstacle) {
        this.fallingObstacles.push(obstacle);
    }
   private animate() {
        //pour crée un rect qui enleve le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //obligatoire d'avoir u requestAnimationFrame
        requestAnimationFrame(this.animate.bind(this));
       //parcourir le tableaux
       for (const fallingObstacle of this.fallingObstacles) {
           fallingObstacle.animate()
       }
       requestAnimationFrame(this.animate.bind(this));
    }
}