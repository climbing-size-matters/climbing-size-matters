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

        // Add/remove comparison popups on hover
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

let popupContainer: HTMLElement | null = null;

function showComparisonPopup(targetElement: HTMLElement): void {
    // Remove any existing popup
    hideComparisonPopup();

    // Get the position and dimensions of the target element
    const rect = targetElement.getBoundingClientRect();
    console.log(rect);
    // Create a container for the React popup
    popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.zIndex = '1000';
    document.body.appendChild(popupContainer);

    // Render React popup component
    const root = createRoot(popupContainer);
    root.render(React.createElement(ComparisonPopup));

    // Calculate the position for the popup
    const popupWidth = 300; // Approximate width of the popup (adjust as needed)
    const popupHeight = 100; // Approximate height of the popup (adjust as needed)

    // Position the popup so its bottom center is just above the center of the highlightedNode
    const top = window.scrollY + rect.top - popupHeight - 10; // 10px gap above the node
    const left = window.scrollX + rect.left + rect.width / 2 - popupWidth / 2; // Center horizontally

    // Apply the calculated position
    popupContainer.style.top = `${top}px`;
    popupContainer.style.left = `${left}px`;
    popupContainer.style.height = `${popupHeight}px`;
    popupContainer.style.width = `${popupWidth}px`; // Optional: Set a fixed width for consistency
}

function hideComparisonPopup(): void {
    if (popupContainer) {
        popupContainer.remove(); // Remove the popup from the DOM
        popupContainer = null; // Reset the reference
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
