import { highlightCamWords } from "./highlight-gear";

export default defineContentScript({
  matches: ["*://www.mountainproject.com/*"],
  main() {
    // Execute the highlight function on the document body
    highlightCamWords(document.body);
  },
});
