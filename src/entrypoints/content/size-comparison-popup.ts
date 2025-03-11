import { bdCams, Cam } from './gear-reg-ex';

function createPopupContent(bdCams: Cam[]): string {
    return `
        <h1 style="margin: 0; font-size: 16px;">Size Comparison</h1>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 5px;">
            <div>Model: ${bdCams[0].model}, Size: ${bdCams[0].size.inches[0]} - ${bdCams[0].size.inches[1]} in</div>
            <div>Model: ${bdCams[1].model}, Size: ${bdCams[1].size.inches[0]} - ${bdCams[1].size.inches[1]} in</div>
        </div>
    `;
}

function createSizeComparisonPopup() {
    const h1Element = document.querySelector('h1');

    if (h1Element) {
        // Create a popup div
        const popup = document.createElement('div');
        popup.innerHTML = createPopupContent(bdCams);
        popup.style.position = 'absolute';
        popup.style.backgroundColor = 'white';
        popup.style.color = 'black';
        popup.style.padding = '8px';
        popup.style.border = '1px solid';
        popup.style.borderRadius = '5px';
        popup.style.fontSize = '14px';
        popup.style.display = 'none';
        popup.style.zIndex = '1000';
        popup.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';

        document.body.appendChild(popup);

        // Show the popup on hover
        h1Element.addEventListener('mouseenter', (event) => {
            popup.style.display = 'block';
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;
        });

        // Move the popup as the cursor moves
        h1Element.addEventListener('mousemove', (event) => {
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;
        });

        // Hide the popup when no longer hovering
        h1Element.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    }
}

export { createSizeComparisonPopup };
