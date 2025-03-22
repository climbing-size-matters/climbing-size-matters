// TODO
// - revise function so it doesn't mutate the original inventory object

import { Database, Cam } from './types';

/**
 * Adds a new Cam to the inventory, organizing it by brand and model.
 * @param inventory - The current inventory object.
 * @param selectedCam - The Cam object to add.
 * @param brandId - The name of the brand associated with the Cam.
 * @param modelId - The name of the model associated with the Cam.
 * @returns The updated inventory object.
 */
export function addCamToInventory(
    inventory: Database,
    selectedCam: Cam,
    brandId: string,
    modelId: string
): Database {
    if (!inventory.brands) {
        inventory.brands = [];
    }
    // Find the brand in the inventory
    let brand = inventory.brands.find((b) => b.name === brandId);

    // If the brand doesn't exist, create it and add it to the inventory
    if (!brand) {
        brand = { id: brandId, name: brandId, models: [] };
        inventory.brands.push(brand);
    }

    // Find the model within the brand
    let model = brand.models.find((m) => m.name === modelId);

    // If the model doesn't exist, create it and add it to the brand
    if (!model) {
        model = { id: modelId, name: modelId, cams: [] };
        brand.models.push(model);
    }

    // Check if the cam already exists in the model's cams array
    const camExists = model.cams.some((cam) => cam.id === selectedCam.id);

    if (!camExists) {
        // Add the new cam to the model's cams array
        model.cams.push(selectedCam);
    }

    return inventory; // Return the updated inventory
}
