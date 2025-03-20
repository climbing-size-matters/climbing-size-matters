import { cams } from '../cam-database/cam-types';

// Returns a string of text with HTML color spans around highlighted words
function highlightCrackAndGearMentions(text: string): string {
    let textWithHTMLHighlights = text;

    for (const cam of cams) {
        const { regex, color } = cam;
        textWithHTMLHighlights = textWithHTMLHighlights.replace(
            regex,
            `<span id='highlight' style='background-color:${color}; border-radius: 10%; padding: 2px;'>$&</span>`
        );
    }

    return textWithHTMLHighlights;
}

// Function to recursively search and highlight the cam instances
function highlightCams(element: Node): void {
    if (element.hasChildNodes()) {
        if ((element as HTMLElement).id === 'highlight') return;
        element.childNodes.forEach(highlightCams);
    } else if (element.nodeType === Node.TEXT_NODE) {
        const highlightedHTML = highlightCrackAndGearMentions(
            element.textContent ?? ''
        );

        const highlightedNode = document.createElement('span');
        highlightedNode.innerHTML = highlightedHTML;

        (element as ChildNode).replaceWith(highlightedNode);
    }
}

// Recursively search and highlight cam instances once comments load on a page
function observeAdditionalContent(): void {
    const commentList = document.querySelector('.comment-list');
    if (commentList) {
        const config = { childList: true };

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (
                    mutation.type === 'childList' &&
                    mutation.addedNodes.length > 0
                ) {
                    highlightCams(commentList);
                }
            });
        });

        observer.observe(commentList, config);
    }
}

export {
    highlightCrackAndGearMentions,
    highlightCams,
    observeAdditionalContent,
};
