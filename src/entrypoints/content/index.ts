import { searchForCams, observeAdditionalContent } from './highlight-cam-object';

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
