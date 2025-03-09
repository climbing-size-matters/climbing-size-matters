import { highlightCams, observeAdditionalContent } from "./highlight-gear";
import { createSizeComparisonPopups } from "./size-comparison-popup";

export default defineContentScript({
  matches: [
    "*://www.mountainproject.com/route/*",
    "*://www.mountainproject.com/forum/*",
    "*://www.mountainproject.com/area/*",
  ],
  main(): void {
    // Execute the highlight function on the document body
    highlightCams(document.body);
    observeAdditionalContent();
    createSizeComparisonPopups();
  },
});
