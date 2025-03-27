import { searchForCams, observeAdditionalContent } from './highlight-gear';

export default defineContentScript({
    // Only matches paths where user will discuss climbing gear
    matches: [
        '*://www.mountainproject.com/route/*',
        '*://www.mountainproject.com/forum/*',
        '*://www.mountainproject.com/area/*',
    ],
    main(): void {
        // Execute the highlight function on the document body
        searchForCams(document.body);
        observeAdditionalContent();
    },
});
