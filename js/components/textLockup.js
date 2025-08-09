import {
    Animation
} from '../utils/AnimationQueue.js';
import AnimatedHeadline from "./animatedHeadline.js";
import ObservedElement from '../utils/ObservedElement.js';
import {
    GLOBAL_CONSTANTS
} from '../utils/constants.js'

class TextLockupHeadline extends AnimatedHeadline {
    onIntersect() {
        this.showElement(this.el);
    }
}

/**
 * @desc a class that takes an element, splits apart its children,
 * and animates them individually when in view.
 */
export default class TextLockup extends ObservedElement {
    /**
     * @desc set class properties.
     * @param {HTMLElement} el - the element that will be aimated.
     * @param {String} _ - the class name of the element. Not used here.
     * @param {Boolean} reducedMotion - if visitor has "Reduce Motion" turned on
     */
    constructor(el, _, reducedMotion) {
        super(el);
        this.el = el;
        this.reducedMotion = reducedMotion;
        this.init();
    }

    /**
     * Bail if Reduce Motion is turned on.
     * Otherwise, tee up animations.
     */
    init() {
        this.headline = this.el.getElementsByClassName('text-lockup__headline')[0];
        this.content = this.el.getElementsByClassName('text-lockup__content')[0];
        if (this.reducedMotion) {
            this.showAllElements();
            return;
        }

        super.init(this.onIntersect);
        this.queue = this.createAnimationQueue();
    }

    /**
     * @desc Concatenate animations from headline + content.
     */
    createAnimationQueue() {
        const animatedHeadline = new TextLockupHeadline(this.headline);
        const isInverted = Array.from(this.el.classList).includes('--invert');
        const contentResolveTime = isInverted ? GLOBAL_CONSTANTS.ANIMATION_TIMING.LONG : GLOBAL_CONSTANTS.ANIMATION_TIMING.MEDIUM;
        const contentAnimation = new Animation(contentResolveTime, () => {
            this.content.classList.add('--appear');
        });
        if (isInverted) {
            animatedHeadline.queue.animations.unshift(contentAnimation);
        } else {
            animatedHeadline.queue.animations.push(contentAnimation);
        }
        return animatedHeadline.queue;
    }

    /**
     * @desc Reveal both elements.
     */
    showAllElements() {
        this.showHeadline();
        this.content.style.opacity = 1;
    }

    /**
     * @desc Reveal the headline element.
     */
    showHeadline() {
        this.headline.style.opacity = 1;
    }

    /**
     * 
     * @param {Array<IntersectionObserverEntry>} entries 
     * @param {IntersectionObserver} observer 
     */
    handleIntersect(entries, observer) {
        super.handleIntersect(entries, observer, () => {
            this.onIntersect();
        });
    }

    /**
     * @desc Show headline and run animations
     * when scrolled into view.
     */
    onIntersect() {
        this.showHeadline();
        this.queue.startAnimation();
    }
}