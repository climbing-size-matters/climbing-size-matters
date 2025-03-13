import { gearToHighlight } from './gear-reg-ex';

// Returns a string of text with HTML color spans around highlighted words
function highlightCams(text: string): string {
    let textWithHTMLHighlights = text;
    for (const { pattern, color } of gearToHighlight) {
        textWithHTMLHighlights = textWithHTMLHighlights.replace(
            pattern,
            `<span data-cam='cam' style='background-color:${color}; border-radius: 10%; padding: 2px;'>$&</span>`
        );
    }
    return textWithHTMLHighlights;
}

// Function to recursively search and highlight the cam instances
function searchForCams(element: Node): void {
    if (element.hasChildNodes()) {
        if ((element as HTMLElement).dataset.cam === 'cam') return;
        element.childNodes.forEach(searchForCams);
    } else if (
        element.nodeType === Node.TEXT_NODE &&
        element.textContent !== null
    ) {
        const highlightedHTML = highlightCams(element.textContent);

        const highlightedNode = document.createElement('span');
        highlightedNode.innerHTML = highlightedHTML;

        (element as Text).replaceWith(highlightedNode);
    }
}

// Search and highlight cam instances within the comments once they load
function observeAdditionalContent(): void {
    const commentList = document.querySelector('.comment-list');
    if (commentList) {
        const config = { childList: true };

        const observer = new MutationObserver((mutationsList) => {
            // Loop through all mutations
            mutationsList.forEach((mutation) => {
                if (
                    mutation.type === 'childList' &&
                    mutation.addedNodes.length > 0
                ) {
                    // Run your function when new children are added
                    searchForCams(commentList);
                }
            });
        });

        observer.observe(commentList, config);
    }
}

export { highlightCams, searchForCams, observeAdditionalContent };
