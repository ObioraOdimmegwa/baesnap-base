import {
    GLOBAL_CONSTANTS
} from './utils/constants.js';
import modules from './modules.js';
import ElementsInView from './utils/ElementsInView.js';
import LazyLoader from './utils/lazyLoader.js';
import './polyfills/intersectionPolyfill.js';
import './polyfills/flat.js';
// import logAscii from './utils/ascii.js';

/** Class representing primary framework for each page **/
class Main {
    /** 
     * @desc Detect viewport, run setup methods
     **/
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.reducedMotion = matchMedia("(prefers-reduced-motion)").matches;
            this.moduleInstances = this.getInstances();
            this.elementsInView = new ElementsInView(GLOBAL_CONSTANTS.CLASSES.TO_OBSERVE);
            this.lazyLoader = new LazyLoader(GLOBAL_CONSTANTS.CLASSES.TO_LAZY_LOAD);
            // logAscii();
        });
    }

    refresh() {
        this.tearDown();
    }

    /**
     * @desc Create all instances of classes that are paired with
     * javascript components.
     * @returns {Array<IModuleInstance>} Array of all module instances.
     */
    getInstances() {
        return modules.map((module) => {
            const elements = Array.from(document.querySelectorAll(module.class));
            const references = elements.map((el) => {
                return new module.source(el, module.class, this.reducedMotion);
            });

            return {
                name: module.name,
                ref: references,
            };
        });
    }

    /**
     * @desc Remove all event listeners for
     * all existing components
     */
    tearDown() {
        this.moduleInstances.forEach((item) => {
            item.ref.forEach((ref) => {
                if (ref.tearDown) {
                    ref.tearDown();
                }
            });
        });
    }
}

window.__debugAppInstance = new Main;