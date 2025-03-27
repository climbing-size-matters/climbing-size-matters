import { database } from '../../cam-database/database';
import ComparisonPopup from './comparison-popup'; // Import your popup component
import React from 'react';
import { createRoot } from 'react-dom/client';

// Returns a string of text with HTML color spans around highlighted words
function highlightCams(text: string): string {
    let textWithHTMLHighlights = text;

    for (const brand of database.brands) {
        for (const model of brand.models) {
            for (const cam of model.cams) {
                const { regex, color } = cam;
                textWithHTMLHighlights = textWithHTMLHighlights.replace(
                    regex,
                    `<span data-cam='highlight' style='background-color:${color}; color:${color === '#000000' ? 'white' : 'inherit'}; border-radius: 10%; padding: 2px;'>$&</span>`
                );
            }
        }
    }

    return textWithHTMLHighlights;
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

        (element as ChildNode).replaceWith(highlightedNode);
        // Call the popup function for each highlighted node
        highlightedNode
            .querySelectorAll('[data-cam="highlight"]')
            .forEach((node) => {
                showComparisonPopup(node as HTMLElement);
            });
    }
}

// Create a popup component and inject React into it
function showComparisonPopup(targetElement: HTMLElement): void {
    // Get the position of the target element
    const rect = targetElement.getBoundingClientRect();

    // Create a container for the React popup
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = `${window.scrollY + rect.top - 50}px`; // Adjust position above the element
    popupContainer.style.left = `${window.scrollX + rect.left}px`; // Align with the element
    popupContainer.style.zIndex = '1000'; // Ensure it appears above other elements
    document.body.appendChild(popupContainer);

    // Render the React popup dynamically
    const root = createRoot(popupContainer);
    root.render(React.createElement(ComparisonPopup));
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
