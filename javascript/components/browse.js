import {
    GLOBAL_CONSTANTS,
    isMobile
} from '../utils/constants.js';

/** Class representing a video player for self-hosted videos **/
export default class Browse {

    /**
     * @desc Set up Browse. 
     * @param {HTMLElement} el - Element that contains the category list markup
     *
     */
    constructor(el, _, reducedMotion) {
        this.el = el;
        this.reducedMotion = reducedMotion;
        this.listItems = Array.from(this.el.children);
        // Extract nested <a> tags from each <li> tag
        this.listLinks = this.listItems.map((item) => Array.from(item.childNodes).filter((childItem) => childItem.nodeName === "A")[0]);
        this.listImageWrap = document.getElementsByClassName('browse__img')[0];
        this.listImage = this.listImageWrap.firstElementChild;
        this.listVideo = this.listImageWrap.children[1].firstElementChild.firstElementChild;
        this.listImageCaption = this.listImageWrap.lastElementChild;
        this.listVideo.autoplay;
        this.listVideo.controls = false;
        this.isMobile = isMobile();
        this.init();
    }

    /**
     * @desc Run main functions of class
     */
    init() {
        this.applyEventListeners();
        this.introAnimation();
    }

    /**
     * @desc 
     */
    introAnimation() {
        if (this.isMobile) return;

        const firstEl = this.listLinks[0];
        const FIRST_EL_CLASS = '-first';
        firstEl.classList.add(FIRST_EL_CLASS);
        if (this.el.classList.contains(GLOBAL_CONSTANTS.CLASSES.ACTIVE)) {
            this.showImage(firstEl);
            firstEl.classList.add(GLOBAL_CONSTANTS.CLASSES.ACTIVE);
            this.listImageWrap.classList.add(GLOBAL_CONSTANTS.CLASSES.ACTIVE);
        } else {
            setTimeout(() => this.introAnimation(), 700);
        }

    }

    /**
     * @desc Add event listener for each item, add an event listener for the listVideo source to be populated
     */
    applyEventListeners() {
        this.listLinks.forEach((item) => {
            item.addEventListener('mouseover', this.showImage.bind(this, item));
            item.addEventListener('mouseleave', this.hideImage.bind(this));
            item.addEventListener('focus', this.showImage.bind(this, item));
            item.addEventListener('blur', this.hideImage.bind(this));
        });
    }
    /**
     * @desc Load image data before showing image/video
     * * @param {HTMLElement} item - <a> element containing data
     * which we will use to set the image or video properties.
     */
    loadImage(item) {
        this.listImageCaption.innerHTML = item.dataset.caption;
        if (this.reducedMotion || !item.dataset.srcwebm) {
            this.setImagePaths(item);
        } else {
            this.setVideoPaths(item);
        }
    }

    /**
     * @desc Reset classes on image & wrapper
     */
    hideImage() {
        this.listImageWrap.classList.remove(GLOBAL_CONSTANTS.CLASSES.ACTIVE);
        this.listImageCaption.innerHTML = '';
        this.resetImagePaths();
        this.resetVideoPaths();
        this.clearActive();
    }

    /**
     * @desc Populate caption and either image or video with current data.
     * @param {HTMLElement} item - <a> element containing data
     * which we will use to set the image or video properties.
     */
    showImage(item) {
        this.clearActive();
        this.loadImage(item);
        this.listImageWrap.classList.add(GLOBAL_CONSTANTS.CLASSES.ACTIVE);
    }
    /**
     * @desc Remove any active elements to enable proper mouse interaction
     */
    clearActive() {
        this.listLinks.forEach(item => item.classList.remove(GLOBAL_CONSTANTS.CLASSES.ACTIVE));
    }

    /**
     * @desc Set image element source.
     * @param {HTMLElement} item - <a> element containing data src which we use to set the <img> src
     */
    setImagePaths(item) {
        this.listImage.src = item.dataset.src;
    }

    /**
     * @desc Remove image src.
     */
    resetImagePaths() {
        this.listImage.src = '';
    }

    /**
     * @desc Set video sources and poster images; play video.
     * @param {HTMLElement} item - <a> element containing data
     * used to populate video attributes.
     */
    setVideoPaths(item) {
        const videoSource = this.listVideo.firstElementChild;
        if (videoSource.type === "video/webm") {
            videoSource.src = item.dataset.srcwebm;
        } else {
            videoSource.src = item.dataset.srcmp4;
        }
        this.listVideo.src = videoSource.src;
        this.listVideo.poster = item.dataset.src;
        this.listVideo.load();
    }

    /**
     * @desc Remove video paths.
     */
    resetVideoPaths() {
        const videoSource = this.listVideo.firstElementChild;
        videoSource.src = '';
    }


    /**
     * @desc Remove event listeners
     */
    tearDown() {
        this.listItems.forEach((item) => {
            item.removeEventListener('mouseover', this.showImage.bind(this, item));
            item.removeEventListener('mouseleave', this.hideImage.bind(this));
            item.removeEventListener('focus', this.showImage.bind(this, item));
            item.removeEventListener('blur', this.hideImage.bind(this));
        });
    }
}