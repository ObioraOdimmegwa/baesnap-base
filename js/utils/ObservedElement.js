/**
 * Utility class that provides basic observation hooks for an arbitrary DOM node.
 * It cannot be used as-is, and should instead be subclassed.
 */

export default class ObservedElement {
    /**
     * @desc intake element to act on; bind class methods.
     * @param {HTMLElement} element - the element to be observed.
     */
    constructor(element) {
        this.element = element;
        this.threshold = parseFloat(this.element.dataset.animationthreshold || 0, 10);
        this.init = this.init.bind(this);
        this.handleIntersect = this.handleIntersect.bind(this);
    }

    /**
     * @desc Either tee up the intersection observer,
     * or execute fallback functionality immediately.
     * @param {function} noIntersectionObserverFallback - function to call
     * if IntersectionObserver isn't available.
     */
    init(noIntersectionObserverFallback) {
        if (!('IntersectionObserver' in window)) {
            noIntersectionObserverFallback();
            return;
        }
        this.startObserving();
    }

    /**
     * @desc create an IntersectionObserver and watch the element.
     */
    startObserving() {
        const observer = new IntersectionObserver(this.handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: this.threshold,
        });
        observer.observe(this.element);
    }

    /**
     * @desc respond to changes in IntersectionObserverEntries.
     * Override this class method when subclassing.
     * @param {Array<IntersectionObserverEntry>} entries 
     * @param {IntersectionObserver} observer 
     * @param {function} intersectingCallback - Function to execute when element is in view
     */
    handleIntersect(entries, observer, intersectingCallback) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.unobserve(this.element);
                if (intersectingCallback) {
                    intersectingCallback();
                }
            }
        });
    }
}