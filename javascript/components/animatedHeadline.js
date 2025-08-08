import {
    Animation,
    AnimationQueue
} from '../utils/AnimationQueue.js';
import {
    GLOBAL_CONSTANTS
} from '../utils/constants.js';
import ObservedElement from '../utils/ObservedElement.js';

const COMPLETE_NODES = ["IMG", "svg", "A", "SMALL"];
const WRAPPER_NODES = ["DIV"];

/**
 * @desc a class that takes an element, splits apart its children,
 * and animates them individually when in view.
 */
export default class AnimatedHeadline extends ObservedElement {
    /**
     * @desc set class properties.
     * @param {HTMLElement} el - the element that will be aimated.
     * @param {String} _ - the class name of the element. Not used here.
     * @param {Boolean} reducedMotion - if visitor has "Reduce Motion" turned on
     */
    constructor(el, _, reducedMotion = false) {
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
        if (this.reducedMotion) {
            this.showElement(this.el);
            return;
        }

        super.init(this.onIntersect);
        this.queue = this.setUpElementsAndAnimations(this.el);
    }

    /**
     * @desc break apart element into child elements,
     * create a new Animation for each element,
     * and put them in an AnimationQueue.
     */
    setUpElementsAndAnimations(element) {
        if (WRAPPER_NODES.includes(element.nodeName)) {
            const childArr = Array.from(element.childNodes);
            const anims = childArr.map((child) => this.setUpElementsAndAnimations(child));
            const animsFlat = [];
            anims.forEach((queue) => {
                queue.animations.forEach((anim) => {
                    animsFlat.push(anim);
                });
            });
            return new AnimationQueue(animsFlat);
        }
        const tokens = this.createAllTokens(element);
        const formattedTokens = tokens.map((token) => {
            return this.formatToken(token);
        });
        element.innerText = '';
        for (const i in formattedTokens) {
            element.append(formattedTokens[i]);
        }
        const animations = formattedTokens.map((formattedToken) => {
            return this.createAnimationForToken(formattedToken);
        });
        return new AnimationQueue(animations);
    }

    /**
     * @desc recursively create all tokens to animate.
     * returns a flat list of all tokens.
     * @param {HTMLElement} element - an element to split apart.
     */
    createAllTokens(element) {
        return this.splitContents(element).flat(2);
    }

    /**
     * @desc Takes in a node and wraps/mutates it as specified.
     * @param {HTMLElement} token - an element or text node.
     */
    formatToken(token) {
        const wrap = this.getOrCreateAnimatedToken(token);
        wrap.classList.add('js-token');
        return wrap;
    }

    /**
     * @desc creates an Animation referring to a specific node.
     * @param {HTMLElement} token - a formatted token
     */
    createAnimationForToken(token) {
        return new Animation(GLOBAL_CONSTANTS.ANIMATION_TIMING.SHORT, () => {
            token.classList.add('--jump');
        });
    }

    /**
     * 
     * @param {String|HTMLElement} token - A child element to animate.
     * May or may not be a text node.
     */
    getOrCreateAnimatedToken(token) {
        if (token.nodeName) {
            token.classList.add(`js-token-${token.nodeName.toLowerCase()}`);
            return token;
        }
        const wrap = document.createElement('span');
        wrap.innerHTML = token;
        return wrap;
    }

    /**
     * Splits element into component nodes.
     */
    splitContents(element) {
        return this.splitNodes(element);
    }

    /**
     * 
     * @param {HTMLElement} parentElement - Returns an atomic unit to animate
     * depending on the element passed in.
     */
    splitNodes(parentElement) {
        return Array.from(parentElement.childNodes).map((childNode) => {
            if (childNode.nodeName === "#text") {
                return this.splitNodeContents(childNode);
            }
            if (COMPLETE_NODES.includes(childNode.nodeName)) {
                return childNode;
            }
            if (childNode.dataset.animationskip === "true") {
                return childNode;
            }
            return this.splitNodes(childNode);
        });
    }

    /**
     * 
     * @param {HTMLTextElement} textNode - Intake text, strip out whitespace,
     * and send back tokens as an array.
     */
    splitNodeContents(textNode) {
        return textNode.wholeText.replace(/\n/gm, '').replace(String.fromCharCode(160), '').split(' ').filter((word) => word.length);
    }

    /**
     * Set opacity of element to 1.
     */
    showElement(element) {
        if (WRAPPER_NODES.includes(element.nodeName)) {
            const childArr = Array.from(element.children);
            childArr.forEach((child) => this.showElement(child));
        }
        element.style.opacity = 1;
    }

    /**
     * Called when element is scrolled into view.
     * Show headline and kick off animation sequence.
     */
    onIntersect() {
        this.showElement(this.el);
        this.queue.startAnimation();
    }

    /**
     * Overrides ObservedElement's default.
     * Calls callback class method.
     * @param {Array<IntersectionObserverEntry>} entries
     * @param {IntersectionObserver} observer
     */
    handleIntersect(entries, observer) {
        super.handleIntersect(entries, observer, () => {
            this.onIntersect();
        });
    }
}