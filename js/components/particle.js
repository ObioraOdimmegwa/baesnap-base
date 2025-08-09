import {
    randomizeNumber
} from './random.js'

const {
    PI,
    sin,
    cos
} = Math;
const RANDOM_THETA = randomizeNumber(PI, PI * 2);
const RANDOM_FIFTY = randomizeNumber(-0.5, 0.5);

/** Single Particle class to be used within Particle System **/
export default class Particle {
    constructor(position, velocity, acceleration, canvasW, canvasH, itemSize) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.theta = RANDOM_THETA;
        this.canvasWidth = canvasW;
        this.canvasHeight = canvasH;
        this.age = 0;
        this.isDead = false;
        this.size = itemSize;
        const maxAge = randomizeNumber(10, 15);
        this.maxAge = maxAge();
    }

    /**
     * @desc Set particles to dead if their age > maxAge
     */
    kill() {
        this.isDead = true;
    }

    /**
     * @desc Reverse particle velocity if they're at the window bounds
     */
    checkBounds() {
        if (this.position.x < 0 || this.position.x > this.canvasWidth - this.size) {
            this.velocity.x = this.velocity.x * -1;
        }

        if (this.position.y < 0 || this.position.y > this.canvasHeight - this.size) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    /**
     * @desc Run every frame.  Update all attributes of particle
     * @param {number} delta Difference in time between frames
     */
    tick(delta) {
        if (this.age > this.maxAge) {
            this.kill();
        }
        this.checkBounds();

        this.age = this.age + delta;

        this.position.x = this.position.x + this.velocity.x * delta;
        this.position.y = this.position.y + this.velocity.y * delta;

        this.velocity.x + this.acceleration.x * delta;
        this.velocity.y + this.acceleration.y * delta;

        this.theta + RANDOM_FIFTY * this.wander;
        this.velocity.x + sin(this.theta) * 0.1;
        this.velocity.y + cos(this.theta) * 0.1;
    }
}