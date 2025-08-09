import {
    GLOBAL_CONSTANTS
} from '../utils/constants.js';
import {
    Animation,
    AnimationQueue
} from '../utils/AnimationQueue.js';

const animationStaggerDelay = 50;
const {
    NO_SCROLL,
    ACTIVE,
    VISIBLE
} = GLOBAL_CONSTANTS.CLASSES;


/** Class governing the header and logic pertaining to mobile navigation visibility **/
export default class Header {
    /**
     * @desc Initializes the Header to listen for mobile nav menu events.
     */

    constructor(_, __, reducedMotion) {
        this.setInitialState = this.setInitialState.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeOnEsc = this.closeOnEsc.bind(this);
        this.openButton = document.getElementById('menu-button-open');
        this.closeButton = document.getElementById('menu-button-close');
        this.scrim = Array.from(document.getElementsByClassName('header__nav__mobile-scrim'))[0];
        this.links = Array.from(document.getElementsByClassName('header__nav__link'));
        this.reducedMotion = reducedMotion;
        this.init();
    }

    /**
     * @desc Adds event listeners to the appropriate page elements to handle showing and hiding the mobile nav.
     */
    init() {
        this.openAnimations = this.buildOpenAnimations();
        this.closeAnimations = this.buildCloseAnimations();
        this.openButton.addEventListener('click', this.openMenu);
        this.closeButton.addEventListener('click', this.closeMenu);
        this.setInitialState();
    }

    /**
     * @desc On page load, check whether the menu should be open or closed.
     */
    setInitialState() {
        this.animating = false;

        if (window.location.hash === '#menu-open') {
            this.openMenu();
            return;
        }

        this.resetAllClasses();
    }

    /**
     * @desc Opens the menu. Sets event listener for Close key and starts Open animations.
     * @param {KeyboardEvent|MouseEvent} e - Either a click or a mouse event that acts on the link.
     */
    openMenu(e) {
        if (this.animating) {
            if (e) {
                e.preventDefault();
            }
            return;
        }
        this.animating = true;
        document.addEventListener('keyup', this.closeOnEsc);
        this.openAnimations.startAnimation();
    }

    /**
     * @desc Closes the menu. Removes Close key event listener and starts Close animations.
     * @param {KeyboardEvent|MouseEvent} e - Either a click or a mouse event that acts on the link.
     */
    closeMenu(e) {
        if (e) {
            e.preventDefault();
        }
        if (this.animating) {
            return;
        }
        this.animating = true;
        document.removeEventListener('keyup', this.closeOnEsc);
        this.closeAnimations.startAnimation();
    }

    /**
     * @desc Closes the menu when Esc key is pressed.
     * @param {KeyboardEvent} e - A keyup event.
     */
    closeOnEsc(e) {
        if (e.key !== "Escape") {
            return;
        }
        this.closeMenu();
    }

    /**
     * @desc Creates an AnimationQueue of events to run sequentially
     * when the menu is opened.
     */
    buildOpenAnimations() {
        const anims = [];
        anims.push(new Animation(0, () => {
            document.body.classList.add(NO_SCROLL);
        }));
        anims.push(new Animation(0, () => {
            this.closeButton.focus();
        }));
        anims.push(new Animation(0, () => {
            this.closeButton.classList.add(ACTIVE);
        }));
        anims.push(new Animation(300, () => {
            this.scrim.classList.add(ACTIVE);
        }));
        this.links.forEach((link) => {
            anims.push(new Animation(this.reducedMotion ? 0 : animationStaggerDelay, () => {
                link.classList.add(VISIBLE);
            }));
        });
        anims.push(new Animation(0, () => {
            this.openButton.classList.add(ACTIVE);
        }));
        anims.push(new Animation(0, () => {
            this.animating = false;
        }))
        return new AnimationQueue(anims);
    }

    /**
     * @desc Creates an AnimationQueue of events to run sequentially
     * when the menu is closed.
     */
    buildCloseAnimations() {
        const anims = [];
        this.links.forEach((link) => {
            anims.push(new Animation(0, () => {
                link.classList.remove(VISIBLE);
            }));
        });
        anims.push(new Animation(0, () => {
            this.openButton.classList.remove(ACTIVE);
        }));
        anims.push(new Animation(0, () => {
            this.closeButton.classList.remove(ACTIVE);
        }));
        anims.push(new Animation(300, () => {
            this.scrim.classList.remove(ACTIVE);
        }));
        anims.push(new Animation(0, () => {
            window.location.hash = "#";
        }));
        anims.push(new Animation(0, () => {
            document.body.classList.remove(NO_SCROLL);
        }));
        anims.push(new Animation(0, () => {
            this.openButton.focus();
        }));
        anims.push(new Animation(0, () => {
            this.animating = false;
        }))
        return new AnimationQueue(anims);
    }

    /**
     * @desc When the page is loaded with a closed menu,
     * set everything back to its "resting" state.
     */
    resetAllClasses() {
        this.closeButton.classList.remove(ACTIVE);
        this.scrim.classList.remove(ACTIVE);
        this.links.forEach((link) => link.classList.remove(VISIBLE));
    }

    /**
     * @desc Remove event listeners
     */
    tearDown() {
        this.openButton.removeEventListener('click', this.openMenu);
        this.closeButton.removeEventListener('click', this.closeMenu);
        document.removeEventListener('keyup', this.closeOnEsc);
    }
}