import { highlightCams, observeAdditionalContent } from './highlight-cam-object';
// import { highlightCams, observeAdditionalContent } from './highlight-cam-regex';
// import { createSizeComparisonPopup } from './size-comparison-popup';

export default defineContentScript({
    matches: [
        '*://www.mountainproject.com/route/*',
        '*://www.mountainproject.com/forum/*',
        '*://www.mountainproject.com/area/*',
    ],
    main(): void {
        // Execute the highlight function on the document body
        highlightCams(document.body);
        observeAdditionalContent();
        // createSizeComparisonPopup();
    },
});
