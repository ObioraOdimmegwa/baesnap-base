import VideoPlayer from './components/videoPlayer.js';
import Browse from './components/browse.js';
import AnimatedHeadline from './components/animatedHeadline.js';
import Header from './components/header.js';
import ParallaxElement from './components/parallax.js';
import TextLockup from './components/textLockup.js';
import CheatCodeListener from './components/cheatCodeListener.js';
/**
 * @desc This is a simple way to pair
 * all useable modules with a DOM class and a
 * human-readible name (just in case we need to access instances later).
 * This file is imported into app.js in order to automatically instantiate
 * all of these modules on page load for each instance of the provided class.
 * Your module will ONLY be loaded if you put it in here OR explicitly instantiate
 * it in app.js (only for special cases).
 */
const modules = [{
        name: 'VideoPlayer',
        class: '.js-video-player',
        source: VideoPlayer,
    },
    {
        name: 'Browse',
        class: '.js-browse',
        source: Browse,
    },
    {
        name: "AnimatedHeadline",
        class: '.js-animated-headline',
        source: AnimatedHeadline,
    },
    {
        name: 'Header',
        class: '.js-header',
        source: Header,
    },
    {
        name: 'ParallaxElement',
        class: '.js-parallax',
        source: ParallaxElement,
    },
    {
        name: 'TextLockup',
        class: '.js-text-lockup',
        source: TextLockup,
    },
    {
        name: 'CheatCodeListener',
        class: '.js',
        source: CheatCodeListener,
    },
];

export default modules;