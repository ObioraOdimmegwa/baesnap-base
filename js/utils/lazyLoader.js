import {
    GLOBAL_CONSTANTS
} from './constants.js';

/** Class representing a video player for self-hosted videos **/
export default class LazyLoader {

    /**
     * @desc Set up Intersection Observer, run init
     * @param {string} selector - String of class name of elements to observe
     *
     */
    constructor(selector) {
        this.allEntries = Array.from(document.getElementsByClassName(selector));
        this.options = {
            root: null,
            rootMargin: '100%',
            threshold: 0.1,
        };
        this.init();
    }

    /**
     * @desc Create new Observer, observe all entries
     */
    init() {
        // Add active class for image display logic with & without JS
        this.allEntries.forEach((el) => el.parentElement.classList.add(GLOBAL_CONSTANTS.CLASSES.ACTIVE));
        if (!('IntersectionObserver' in window)) {
            this.loadImmediately(this.allEntries);
        } else {
            const observer = new IntersectionObserver(this.handleIntersect, this.options);
            this.allEntries.forEach((entry) => observer.observe(entry));
        }
    }

    /**
     * @desc Just load images if Lazy Loader isn't availabe
     * @param {Array<Image>} entries - Array of all images that are being observed
     */
    loadImmediately(entries) {
        entries.forEach((entry) => {
            const url = entry.dataset.src;
            entry.classList.add(GLOBAL_CONSTANTS.CLASSES.LAZY_LOADED);
            entry.src = url;
        });
    }

    /**
     * @desc Handle when entries is intersecting with viewport
     * @param {Array<IntersectionObserverEntry>} entries - Array of all images that are being observed
     * @param {object} observer - The Intersection Observer object
     */
    handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                const image = entry.target;
                const url = image.dataset.src;
                image.classList.add(GLOBAL_CONSTANTS.CLASSES.LAZY_LOADED)
                image.src = url;
            }
        });
    }
}