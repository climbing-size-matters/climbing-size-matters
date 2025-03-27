import {
    highlightCams,
    observeAdditionalContent,
} from './highlight-cam-object';
// import { createSizeComparisonPopup } from './size-comparison-popup';

function injectCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('styles.css'); // Path to the CSS file in the `dist` directory
    document.head.appendChild(link);
}

export default defineContentScript({
    // Only matches paths where user will discuss climbing gear
    matches: [
        '*://www.mountainproject.com/route/*',
        '*://www.mountainproject.com/forum/*',
        '*://www.mountainproject.com/area/*',
    ],
    main(): void {
        // Inject Tailwind CSS into the webpage
        injectCSS();
        // Execute the highlight function on the document body
        highlightCams(document.body);
        observeAdditionalContent();
        // createSizeComparisonPopup();
    },
});
