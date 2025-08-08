const TRUTHY_VALUES = [1, "1", true, "true"];

/** Applies parallax effects to an element.**/
export default class ParallaxElement {

    /**
     * @desc Set up Parallax Element. Check for reduced motion, read in parallax settings.
     * @param {HTMLElement} el - Element that should parallax.
     * @param {String} _ - HTML class name that identifies elements used to create instances of this JS class. Unused here.
     * @param {Boolean} reducedMotion - Whether `prefers-reduced-motion` media query is matched.
     */
    constructor(el, _, reducedMotion) {
        this.el = el;
        this.reducedMotion = reducedMotion;
        this.handleIntersect = this.handleIntersect.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSafeScroll = this.handleSafeScroll.bind(this);
        this.animateElement = this.animateElement.bind(this);
        this.animateSafeElement = this.animateSafeElement.bind(this);
        this.startParallax = this.startParallax.bind(this);
        this.endParallax = this.endParallax.bind(this);
        this.startSafeParallax = this.startSafeParallax.bind(this);
        this.endSafeParallax = this.endSafeParallax.bind(this);
        this.options = {
            root: null,
            rootMargin: '100% 0px 100% 0px',
            threshold: 0,
        };
        this.speed = parseInt(this.el.dataset.parallaxspeed || 1, 10)
        this.lockBy = Math.min(parseInt(this.el.dataset.parallaxlockby || 100, 10), 100) / 100;
        this.init();
    }

    /**
     * @desc Set up functionality of class.
     * If 'prefers reduced motion' is turned on, do nothing.
     */
    init() {
        if (this.reducedMotion) {
            return;
        }
        this.inner = this.el.firstElementChild;
        if (!this.inner) {
            return;
        }
        if (TRUTHY_VALUES.includes(this.el.dataset.parallaxhidden)) {
            this.startSafeParallax();
        } else {
            this.observer = new IntersectionObserver(this.handleIntersect, this.options);
            this.observer.observe(this.inner);
        }
    }

    /**
     * @desc Framework hook. Remove all event listeners.
     */
    teardown() {
        this.endParallax();
        this.endSafeParallax();
    }

    /**
     * @desc Called when the intersection observer value changes.
     * @param {Array<IntersectionObserverEntry>} entries - describes whether the observed object is intersecting the viewport.
     */
    handleIntersect(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.startParallax();
                return;
            }
            this.endParallax();
        })
    }

    /**
     * @desc Adds parallax behavior to an element
     */
    startParallax() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    /**
     * @desc Adds parallax behavior to an element
     * that may be occluded or animated outside of the document area.
     */
    startSafeParallax() {
        window.addEventListener('scroll', this.handleSafeScroll);
        this.handleSafeScroll();
    }

    /**
     * @desc Removes parallax behavior from an element
     */
    endParallax() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /**
     * @desc Removes parallax behavior to an element
     * that may be occluded or animated outside of the document area.
     */
    endSafeParallax() {
        window.removeEventListener('scroll', this.handleSafeScroll);
    }

    /**
     * @desc Siphons animations into RAF cycle
     */
    handleScroll() {
        requestAnimationFrame(this.animateElement);
    }

    /**
     * @desc Siphons safe-scroll animations into RAF cycle.
     */
    handleSafeScroll() {
        requestAnimationFrame(this.animateSafeElement);
    }

    /**
     * @desc Calculates the displacement of an element
     * @param {Number} windowHeight - the height of the viewport
     * @param {Number} elementTop - the distance from the top of the element to the top of the viewport
     */
    findPosition(windowHeight, elementTop) {
        const min = 0;
        const max = 30;
        const range = max - min;
        const apparentHeight = windowHeight / this.speed * this.lockBy;
        const pct = (1 - ((windowHeight - elementTop) / apparentHeight));
        const pctInRange = range * pct - min;
        return pctInRange;
    }

    /**
     * @desc Applies parallax styles to an element
     */
    animateElement() {
        const {
            top
        } = this.el.getBoundingClientRect();
        const position = this.findPosition(window.innerHeight, top);
        this.inner.style.transform = `translateY(${position}%)`;
    }

    /**
     * @desc checks if an element is in the viewport before animating it.
     */
    animateSafeElement() {
        const {
            top,
            bottom
        } = this.el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (top > viewportHeight * 2 || bottom < viewportHeight * -1) {
            return;
        }
        this.animateElement();
    }
}