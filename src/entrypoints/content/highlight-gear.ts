import { replacements } from "./gear-reg-ex";

// Returns a string of text with HTML color spans around highlighted words
function highlightCrackAndGearMentions(text: string): string {
  let textWithHTMLHighlights = text;
  for (const { pattern, color } of replacements) {
    textWithHTMLHighlights = textWithHTMLHighlights.replace(
      pattern,
      `<span style='background-color:${color}; border-radius: 10%; padding: 2px;'>$&</span>`,
    );
  }
  return textWithHTMLHighlights;
}

// Function to recursively search and highlight the word "cam"
function highlightCamWords(element: Node): void {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(highlightCamWords);
  } else if (element.nodeType === Node.TEXT_NODE) {
    const highlightedHTML = highlightCrackAndGearMentions(
      element.textContent ?? "",
    );

    const highlightedNode = document.createElement("span");
    highlightedNode.innerHTML = highlightedHTML;

    (element as ChildNode).replaceWith(highlightedNode);
  }
}

export { highlightCrackAndGearMentions, highlightCamWords };
