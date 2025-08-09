/**
 * @desc take an array of Promises and execute them synchronously.
 * @param {Promise} acc - a Promise
 * @param {Promise} val - a Promise to be run after the first Promise resolves.
 */
function chainPromises(acc, val) {
    return acc.then(val);
}

/**
 * @desc A basic class for timing animations.
 */
export class Animation {
    /**
     * @desc intakes an animation function and a duration (the same here as a delay).
     * @param {Number} duration - how long the animation will take, in ms.
     */
    constructor(duration, animationFunction) {
        this.duration = duration;
        this.animationFunction = animationFunction;
        this.runAnimation = this.runAnimation.bind(this);
    }

    /**
     * @desc Returns a Promise that executes the animation function,
     * and resolves a set time later.
     */
    runAnimation() {
        return new Promise((resolve) => {
            this.animationFunction();
            setTimeout(() => {
                resolve();
            }, this.duration);
        })
    }
}

/**
 * AnimationQueue takes in an array of Animations and executes them in order.
 */
export class AnimationQueue {
    /**
     * @desc intakes an Array of animations.
     * @param {Array<Animation>} animations - an ordered list of animations to execute.
     */
    constructor(animations) {
        this.animations = animations;
        this.startAnimation = this.startAnimation.bind(this);
    }

    /**
     * @desc Executes all animations.
     */
    startAnimation() {
        const fns = this.animations.map((anim) => {
            return anim.runAnimation;
        });

        fns.reduce(chainPromises, Promise.resolve());
    }
}