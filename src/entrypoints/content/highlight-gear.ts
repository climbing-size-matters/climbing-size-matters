const CAMALOT_PATTERN = /(?<!\w)[Cc]am(-?a-?lot)?s?(?!\w)/gi; // # matches e.g. cam, Cam-a-lot
const GEAR_SIZE_PATTERN =
  /(?<!\w)(#(0(0|\.([12345]|(75)))?)|#[1-8])(?![\w.])/gi; // matches #00, #0, #0.1-0.75, #1-#8
const CRACK_SIZE_PATTERN =
  /(?<!\w)(([0-9](\.5)?)-)?[0-9](\.5)?("|cm|mm)(?!\w)/gi; // matches e.g. 3.5", 3-4"

const GEAR_COLOR = "#FF0000";
const GEAR_SIZE_COLOR = "#00FF00";
const CRACK_SIZE_COLOR = "#0000FF";

interface GearHighlight {
  pattern: RegExp;
  color: string;
}

const gearToHighlight: GearHighlight[] = [
  { pattern: CAMALOT_PATTERN, color: GEAR_COLOR },
  { pattern: GEAR_SIZE_PATTERN, color: GEAR_SIZE_COLOR },
  { pattern: CRACK_SIZE_PATTERN, color: CRACK_SIZE_COLOR },
];

// returns a string of text with HTML color spans around highlighted words
function highlightCrackAndGearMentions(text: string): string {
  let textWithHTMLHighlights = text;
  for (const { pattern, color } of gearToHighlight) {
    textWithHTMLHighlights = textWithHTMLHighlights.replace(
      pattern,
      `<span style='background-color:${color}; border-radius: 30% 10%; padding: 2px;'>$&</span>`,
    );
  }
  return textWithHTMLHighlights;
}

// Function to recursively search and highlight the word "cam"
function highlightCamWords(element: Node): void {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(highlightCamWords);
  } else if (
    element.nodeType === Node.TEXT_NODE &&
    element.textContent !== null
  ) {
    const highlightedHTML = highlightCrackAndGearMentions(element.textContent);

    const highlightedNode = document.createElement("span");
    highlightedNode.innerHTML = highlightedHTML;

    (element as Text).replaceWith(highlightedNode);
  }
}

export { highlightCrackAndGearMentions, highlightCamWords };
