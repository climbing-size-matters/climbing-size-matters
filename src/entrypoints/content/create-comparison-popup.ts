import ComparisonPopup from './comparison-popup-content';
import React from 'react';
import { createRoot } from 'react-dom/client';

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

export { showComparisonPopup, hideComparisonPopup };
