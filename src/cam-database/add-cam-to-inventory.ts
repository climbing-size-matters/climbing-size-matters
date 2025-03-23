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
        // Find the correct position to insert the cam based on size.inches[0]
        const insertIndex = model.cams.findIndex(
            (cam) => cam.size.inches[0] > selectedCam.size.inches[0]
        );

        if (insertIndex === -1) {
            // If no larger cam is found, push the cam to the end
            model.cams.push(selectedCam);
        } else {
            // Insert the cam at the correct position
            model.cams.splice(insertIndex, 0, selectedCam);
        }
    }

    return inventory; // Return the updated inventory
}
