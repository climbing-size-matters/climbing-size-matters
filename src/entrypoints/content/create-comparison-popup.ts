import Popup from './Popup';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { database } from '../../cam-database/database';

let popupContainer: HTMLElement | null = null;
let id: string = '';

function showComparisonPopup(targetElement: HTMLElement): void {
    // Get the cam ID corresponding to the HTML element
    for (const cam of database.cams) {
        if (new RegExp(cam.regex).test(targetElement.innerText)) {
            id = cam.id;
            break;
        }
    }
    // Get the position and dimensions of the target element
    const rect = targetElement.getBoundingClientRect();

    // Create a container for the React popup
    popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.zIndex = '1000';
    document.body.appendChild(popupContainer);

    // Render React popup component
    const root = createRoot(popupContainer);
    root.render(React.createElement(Popup, { id }));

    // Calculate the position for the popup
    const popupWidth = 400;
    const popupHeight = 150; // TODO: height should be dynamic based on content

    // Position the popup so its bottom center is just above the center of the highlightedNode
    const top = window.scrollY + rect.top - popupHeight - 10;
    const left = window.scrollX + rect.left + rect.width / 2 - popupWidth / 2;

    // Apply the calculated position
    popupContainer.style.top = `${top}px`;
    popupContainer.style.left = `${left}px`;
    popupContainer.style.height = `${popupHeight}px`;
    popupContainer.style.width = `${popupWidth}px`;
}

function hideComparisonPopup(): void {
    if (popupContainer) {
        popupContainer.remove();
        popupContainer = null;
    }
}

export { showComparisonPopup, hideComparisonPopup };
