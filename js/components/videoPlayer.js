import {
    GLOBAL_CONSTANTS,
    isMobile
} from '../utils/constants.js'

/** Class representing a video player for self-hosted videos **/
export default class VideoPlayer {

    /**
     * @desc Set up Video Player. Extract source, make ReducedMotion check, initialize preload
     * @param {HTMLElement} el - Element that contains an HTML5 video player
     *
     */
    constructor(el, moduleClass, reducedMotion) {
        this.el = el;
        this.moduleClass = moduleClass;
        this.reducedMotion = reducedMotion;
        this.webmFormat = 'webm';
        this.mp4Format = 'mp4';
        this.webmFile = this.el.dataset.srcwebm;
        this.mp4File = this.el.dataset.srcmp4;
        this.webmFileMobile = this.el.dataset.srcwebmmobile;
        this.mp4FileMobile = this.el.dataset.srcmp4mobile;
        this.playerControls = this.el.parentElement.querySelector('.video-wrap__btn');
        this.videoPaused = false;
        this.playSrc = '/company-assets/images/videoControls/play.png';
        this.pauseSrc = '/company-assets/images/videoControls/pause.png';
        this.isMobile = isMobile();
        this.init();
    }

    /**
     * @desc Run main functions of class
     *   Act on result of ReducedMotion
     *   Load appropriate file source
     *   Create new `<source>` tag and play video
     */
    init() {
        // Add active class for video display logic with & without JS
        this.el.parentElement.classList.add(GLOBAL_CONSTANTS.CLASSES.ACTIVE);
        this.applyEventListeners();
        this.watchPrefersReducedMotion();
        this.determineVideoType(this.webmFile, this.mp4File)
            .then((videoType) => this.createVideo(videoType))
            .catch(err => {
                throw new Error(err);
            });
    }

    /**
     * @desc If player has controls, listen to click events on it
     */
    applyEventListeners() {
        if (this.playerControls) {
            this.playerControls.addEventListener('click', this.handleClick.bind(this, this.playerControls));
            this.el.addEventListener('click', this.handleClick.bind(this, this.playerControls));
        }
    }

    /**
     * @desc Handle click on play/pause button
     * @param control control button element
     *   Play/pause video as appropriate.  Set new image source, toggle class & property
     */
    handleClick(control) {
        if (this.videoPaused) {
            this.el.play();
            control.setAttribute('aria-pressed', false);
            control.setAttribute('aria-label', 'Pause');
        } else {
            this.el.pause();
            control.setAttribute('aria-pressed', true);
            control.setAttribute('aria-label', 'Play');
        }
        control.classList.toggle('--paused');
        this.videoPaused = !this.videoPaused;
    }

    /**
     * @desc Determine whether to serve mobile-optimized file or not
     * @param {string} supportedType video type to serve, as figured from determineVideoType()
     * @returns {string} Path to file we've determined to serve to user
     */
    chooseFile(supportedType) {
        if (this.isMobile && this.webmFileMobile && this.mp4FileMobile) {
            return supportedType === this.webmFormat ? this.webmFileMobile : this.mp4FileMobile;
        } else {
            return supportedType === this.webmFormat ? this.webmFile : this.mp4File;
        }
    }

    /**
     * @desc Create video source from type and make player
     * @param {string} videoType filetype of supported video file 
     */
    createVideo(videoType) {
        const source = document.createElement('source');
        source.type = `video/${videoType}`;
        const target = this.chooseFile(videoType);
        this.preloadVideo(target)
            .then((dataURI) => {
                source.src = dataURI;
                this.el.appendChild(source);
            }).catch(err => {
                throw new Error(err);
            });
    }

    /**
     * @promise Check if browser supports webm, then mp4 file formats.  
     *    If one file is not present, resolve with the other even if not optimal
     * @param {string} webmFile path to webm video file
     * @param {string} mp4File path to mp4 video file
     * @returns {Promise}
     */
    determineVideoType(webmFile, mp4File) {
        return new Promise((resolve, reject) => {
            if (!webmFile) resolve(this.mp4Format);
            if (!mp4File) resolve(this.webmFormat);
            if (this.el.canPlayType(`video/${this.webmFormat}`)) {
                resolve(this.webmFormat);
            } else if (this.el.canPlayType(`video/${this.mp4Format}`)) {
                resolve(this.mp4Format);
            } else reject();
        });
    }

    /**
     * @desc Make request to load video source
     *   Returns URL of binary blob of video
     * @param {string} videoSrc - String of path to video source
     * @returns {Promise} 
     */
    preloadVideo(videoSrc) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', videoSrc, true);
            req.withCredentials = false;
            req.responseType = 'blob';

            req.onload = (res) => {
                const {
                    target
                } = res;
                const {
                    status,
                    response
                } = target;
                if (status === 200) {
                    resolve(URL.createObjectURL(response));
                }
            };

            req.onerror = reject;
            req.send();
        })
    }

    /**
     * @desc Check if user has enabled 'Prefers Reduced Motion'
     *   If so, don't autoplay the video
     */
    watchPrefersReducedMotion() {
        if (this.reducedMotion) {
            this.el.removeAttribute('autoplay');
            this.videoPaused = true;
            this.playerControls && this.playerControls.classList.toggle('--paused');
        } else {
            this.el.setAttribute('autoplay', '');
        }
    }

    /**
     * @desc If player has controls, remove event listener when script is torn down
     */
    tearDown() {
        if (this.playerControls) {
            this.playerControls.removeEventListener('click', this.handleClick.bind(this, this.playerControls));
            this.el.removeEventListener('click', this.handleClick.bind(this, this.playerControls));
        }
    }
}