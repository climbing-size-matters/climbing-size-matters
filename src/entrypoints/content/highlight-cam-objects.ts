import { database } from '../../cam-database/database';
import {
    showComparisonPopup,
    hideComparisonPopup,
} from './create-comparison-popup';

// Returns a string of text with HTML color spans around highlighted words
function highlightCams(text: string): string {
    for (const cam of database.cams) {
        const { regex } = cam;
        text = text.replace(
            regex,
            `<span data-cam='highlight' style='background-color: rgb(255, 245, 245); border: 1px solid rgb(255, 153, 153); border-radius: 0.25rem; padding: 1px 2px;'>$&</span>`
        );
    }
    return text;
}

// Function to recursively search and highlight the cam instances
function searchForCams(element: Node): void {
    if (element.hasChildNodes()) {
        if ((element as HTMLElement).dataset.cam === 'highlight') return;
        element.childNodes.forEach(searchForCams);
    } else if (element.nodeType === Node.TEXT_NODE) {
        const highlightedHTML = highlightCams(element.textContent ?? '');

        const highlightedNode = document.createElement('span');
        highlightedNode.innerHTML = highlightedHTML;

        (element as Text).replaceWith(highlightedNode);

        // Add event listeners to highlighted nodes for hover events
        highlightedNode
            .querySelectorAll('[data-cam="highlight"]')
            .forEach((node) => {
                const element = node as HTMLElement;

                element.addEventListener('mouseenter', () => {
                    showComparisonPopup(element);
                });

                element.addEventListener('mouseleave', () => {
                    hideComparisonPopup();
                });
            });
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
                    searchForCams(commentList);
                }
            });
        });

        observer.observe(commentList, config);
    }
}

export { highlightCams, searchForCams, observeAdditionalContent };
