var assetURL = '/company-assets/emotes/';
if (window.location.href.indexOf('/p/') != -1) {
    assetURL = ('/p/company-assets/emotes/');
}

import Particle from './particle.js';
import {
    randomizeVector,
    randomizeNumber
} from './random.js';

const {
    floor
} = Math;

/** Class to create system of Particle components using emotes **/
export default class ParticleSystem {
    constructor() {
        this.keyCodes = [];
        this.particles = [];
        this.particleData = [];
        this.body = document.body;
        this.numParticles = 100;
        this.canvas;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.canvasID = 'canvas';
        this.onFrame = this.onFrame.bind(this);
        this.lastTimestamp;
        this.allImgs = [
            assetURL + 'coolcat.png',
            assetURL + 'coolcat2.png',
            assetURL + 'kappa.png',
            assetURL + 'giveplz.png',
            assetURL + 'hi.png',
            assetURL + 'lul.png',
            assetURL + 'komodohype.png',
            assetURL + 'poooound.png',
            assetURL + 'thumbsup.png',
            assetURL + 'vohiyo.png',
        ];
    }

    /**
     * @desc Method to start the particle system
     */
    init() {
        this.lastTimestamp = performance.now();
        this.createCanvas()
            .then(this.emit())
            .then(this.onFrame(this.lastTimestamp))
    }

    /**
     * @desc Create a canvas 100% of screen width and height
     * Only do this if no canvas already exists
     */
    createCanvas() {
        return new Promise((resolve) => {
            this.canvas = document.createElement('canvas');

            this.canvas.id = this.canvasID;
            this.canvas.width = this.canvasWidth;
            this.canvas.height = this.canvasHeight;

            Object.assign(this.canvas.style, {
                position: 'fixed',
                top: 0,
                left: 0,
            });

            const canvasCheck = document.getElementById(this.canvasID);
            canvasCheck === null && this.body.appendChild(this.canvas);
            resolve();
        })
    }

    /**
     * @desc Update animation every frame
     * @param {number} timestamp Return from performance.now() to calculate our timer offset
     */
    onFrame(timestamp) {
        return new Promise(() => {
            if (this.canvas) {
                this.emit();
                const delta = (timestamp - this.lastTimestamp) / 1000;
                const ctx = this.canvas.getContext('2d');
                ctx.save();
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                // Update every particle in our array
                for (const k in this.particles) {
                    const p = this.particles[k];
                    p.tick(delta);

                    if (p.isDead) {
                        delete this.particles[k];
                        continue;
                    }

                    // Translate to center of particle, rotate, update position, then restore transform
                    ctx.translate(p.position.x, p.position.y);
                    ctx.rotate(this.particleData[k].angle / 90);
                    ctx.beginPath();
                    ctx.drawImage(this.particleData[k].src, 0, 0, this.particleData[k].size, this.particleData[k].size);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    k % 2 === 0 ? this.particleData[k].angle += 1 : this.particleData[k].angle -= 1;
                }
                ctx.restore();

                this.lastTimestamp = timestamp;
                requestAnimationFrame(this.onFrame);
                // Delete the canvas when all particles have been deleted from array
                if (this.particles.every(() => {})) {
                    const canvasCheck = document.getElementById(this.canvasID);
                    canvasCheck !== null && this.canvas.remove();
                    this.particles = [];
                    this.particleData = [];
                    this.canvas = null;
                }
                return Promise.resolve();
            }
        })
    }

    /**
     * @desc Set initial position of particles
     */
    initialPosition() {
        return {
            x: this.canvasWidth / 2,
            y: this.canvasHeight / 2
        }
    }

    /**
     * @desc Set initial accelerationg of particles
     */
    initialAcceleration() {
        return {
            x: 0,
            y: 0
        }
    }

    /**
     * @desc Set initial velocity of particles
     */
    initialVelocity() {
        const num = 125;
        return randomizeVector([-num, num], [-num, num])
    }

    /**
     * @desc Create new Particle instances
     * Save image, angle, and size data per particle
     */
    emit() {
        return new Promise(() => {
            while (this.particles.length < this.numParticles) {
                for (let i = 0; i < this.numParticles; i++) {
                    // Random size, image source and angle
                    const randImg = randomizeNumber(0, this.allImgs.length);
                    const index = floor(randImg());
                    const baseImg = new Image();
                    baseImg.src = this.allImgs[index];
                    const randSize = randomizeNumber(50, 150);
                    const size = floor(randSize());

                    this.particles[i] = new Particle(
                        this.initialPosition(),
                        this.initialVelocity(),
                        this.initialAcceleration(),
                        this.canvasWidth,
                        this.canvasHeight,
                        this.itemSize = size,
                    )

                    this.particleData[i] = {
                        src: baseImg,
                        size: size,
                        angle: size,
                    }
                }
            }
            return Promise.resolve();
        })
    }

}