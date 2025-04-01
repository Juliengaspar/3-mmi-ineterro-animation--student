import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {Hsl} from "./framework25/colors/Hsl";
import {settings} from "./settings";

export class FallingObstacle extends Circle{
    private canvas: HTMLCanvasElement;
    private hue: number;
    private speed: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, hue: number) {
        super(ctx, {
            x: 0,
            y: 0,
        }, new Hsl(hue, randomInt(1, 100), randomInt(1, 100)), randomInt(settings.minRadius, settings.maxRadius));
        this.canvas = canvas;
        this.hue = hue
        this.initValues();

    }

    private initValues() {
        this.radius = randomInt(settings.minRadius, settings.maxRadius);
        this.color = new Hsl(this.hue, randomInt(1, 100), randomInt(1, 100))
        this.speed = randomInt(settings.minSpeed, settings.maxSpeed);
        this.position.x = -this.radius;
        this.position.y = randomInt(this.radius, this.canvas.height - this.radius);
    }

    update(): void {
        //pour la vitesse des cercles qui descent
        this.position.x += this.speed;
    }
    animate(): void {
        this.update();
        this.draw();
    }
}