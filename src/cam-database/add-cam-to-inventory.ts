// TODO
// - revise function so it doesn't mutate the original inventory object

import { Database, Cam } from './types';

export function addCamToInventory(
    inventory: Database,
    selectedCam: Cam,
    brandId: string,
    brandName: string,
    modelId: string,
    modelName: string
): Database {
    if (!inventory.brands) {
        inventory.brands = [];
    }

    // Find the brand in the inventory
    let brand = inventory.brands.find((b) => b.id === brandId);

    // If the brand doesn't exist, create it and add it to the inventory
    if (!brand) {
        brand = { id: brandId, name: brandName, models: [] }; // Use brandName here
        inventory.brands.push(brand);
    }

    // Find the model within the brand
    let model = brand.models.find((m) => m.id === modelId);

    // If the model doesn't exist, create it and add it to the brand
    if (!model) {
        model = { id: modelId, name: modelName, cams: [] }; // Use modelName here
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
