const CAMALOT_PATTERN = /[Cc]am(\-?a\-?lot)?s?\s/gi;
const GEAR_SIZE_PATTERN = /#[0-9](\.5|\.75)?\s/gi; // matches e.g. #0.75
const CRACK_SIZE_PATTERN = /(([0-9](\.5)?)\-)?[0-9](\.5)?("|cm|mm)\s/gi; // matches e.g. 3.5", 3-4"

const GEAR_COLOR = "#FF0000";
const GEAR_SIZE_COLOR = "#00FF00";
const CRACK_SIZE_COLOR = "#0000FF";

const replacements = [
  {pattern: CAMALOT_PATTERN, color: GEAR_COLOR},
  {pattern: GEAR_SIZE_PATTERN, color: GEAR_SIZE_COLOR},
  {pattern: CRACK_SIZE_PATTERN, color: CRACK_SIZE_COLOR}
];

// returns a string of text with HTML color spans around highlighted words
function highlightCrackAndGearMentions(text) {
  let textWithHTMLHighlights = text;
  for (const {pattern, color} of replacements) {
    if (pattern.test(textWithHTMLHighlights)) {
      textWithHTMLHighlights = textWithHTMLHighlights.replace(pattern, `<span style='color:${color};'>$&</span>`);
    }
  }
  return textWithHTMLHighlights;
}

// Function to recursively search and highlight the word "cam"
function highlightCamWords(element) {
  if (element.hasChildNodes()) {
      element.childNodes.forEach(highlightCamWords);
  } else if (element.nodeType === Text.TEXT_NODE) {
    const highlightedHTML = highlightCrackAndGearMentions(element.textContent);

    const highlightedNode = document.createElement("span");
    highlightedNode.innerHTML = highlightedHTML;

    element.replaceWith(highlightedNode);
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "highlight-gear") {
    // TODO: this will infinitely nest spans
    highlightCamWords(document.body);
  }
});
