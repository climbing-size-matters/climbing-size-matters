import {
    searchForCams,
    observeAdditionalContent,
} from './highlight-cam-object';

function injectCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('styles.css');
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
        searchForCams(document.body);
        observeAdditionalContent();
    },
});
