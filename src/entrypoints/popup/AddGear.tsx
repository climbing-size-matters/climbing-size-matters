import { useState } from 'react';
import { Database } from '@/cam-database/types';
import { database } from '@/cam-database/database';

type AddGearProps = {
    navigateToInventory: () => void;
};

export default function AddGear({ navigateToInventory }: AddGearProps) {
    const [formState, setFormState] = useState({
        brand: [],
        model: [],
        cam: '',
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;

        setFormState((prevState) => ({
            ...prevState,
            [id]: id === 'cam' ? value : value ? value.split('|') : [], // Only split for brand and model
        }));

        // Reset dependent fields when a higher-level field changes
        if (id === 'brand') {
            setFormState((prevState) => ({
                ...prevState,
                model: [],
                cam: '',
            }));
        } else if (id === 'model') {
            setFormState((prevState) => ({
                ...prevState,
                cam: '',
            }));
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Find the Cam object based on the selected ID
        const selectedCam = database.brands
            .find((brand) => brand.id === formState.brand[0])
            ?.models.find((model) => model.id === formState.model[0])
            ?.cams.find((cam) => cam.id === formState.cam);
        if (!selectedCam) {
            throw new Error(`Cam with ID ${formState.cam} not found`);
        }

        // Add cam to chrome.storage.local
        chrome.storage.local.get(['inventory'], (result) => {
            const currentInventory: Database = result.inventory || {};

            // If the inventory is empty, initialize it
            if (!currentInventory.brands) {
                currentInventory.brands = [];
            }

            // Find the brand in the inventory
            let brand = currentInventory.brands.find(
                (b) => b.id === formState.brand[0]
            );

            // If the brand doesn't exist, create it and add it to the inventory
            if (!brand) {
                brand = {
                    id: formState.brand[0],
                    name: formState.brand[1],
                    models: [],
                }; // Use brandName here
                currentInventory.brands.push(brand);
            }

            // Find the model within the brand
            let model = brand.models.find((m) => m.id === formState.model[0]);

            // If the model doesn't exist, create it and add it to the brand
            if (!model) {
                model = {
                    id: formState.model[0],
                    name: formState.model[1],
                    cams: [],
                }; // Use modelName here
                brand.models.push(model);
            }

            // Check if the cam already exists in the model's cams array
            const camExists = model.cams.some(
                (cam) => cam.id === selectedCam.id
            );

            if (!camExists) {
                // Find the correct position to insert the cam based on size.inches[0]
                const insertIndex = model.cams.findIndex(
                    (cam) => cam.size.inches[0] > selectedCam.size.inches[0]
                );
                // If no larger cam is found, push the cam to the end
                if (insertIndex === -1) {
                    model.cams.push(selectedCam);
                    // Insert the cam at the correct position
                } else {
                    model.cams.splice(insertIndex, 0, selectedCam);
                }
            }

            chrome.storage.local.set({ inventory: currentInventory }, () => {
                navigateToInventory();
            });
        });
    };

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="text-lg">Add gear to your rack!</div>
            {/* Brand Dropdown */}
            <div className="py-2">
                <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-black"
                >
                    Brand
                </label>
                <select
                    id="brand"
                    value={formState.brand.join('|')}
                    onChange={handleFormChange}
                    className="mt-1 p-1 w-full rounded-sm border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                >
                    <option value="">--</option>
                    {database.brands.map((brand) => (
                        <option
                            key={brand.id}
                            value={`${brand.id}|${brand.name}`}
                        >
                            {brand.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* Model Dropdown */}
            {formState.brand[0] && (
                <div className="py-2">
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium text-black"
                    >
                        Model
                    </label>
                    <select
                        id="model"
                        value={formState.model.join('|')} // Convert the array to a string
                        onChange={handleFormChange}
                        className="mt-1 p-1 w-full rounded-sm border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    >
                        <option value="">--</option>
                        {(
                            database.brands.find(
                                (brand) => brand.id === formState.brand[0]
                            )?.models ?? []
                        ).map((model) => (
                            <option
                                key={model.id}
                                value={`${model.id}|${model.name}`}
                            >
                                {model.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {/* Cam Dropdown */}
            {formState.model[0] && (
                <div className="py-2">
                    <label
                        htmlFor="cam"
                        className="block text-sm font-medium text-black"
                    >
                        Cam
                    </label>
                    <select
                        id="cam"
                        value={formState.cam}
                        onChange={handleFormChange}
                        className="mt-1 p-1 w-full rounded-sm border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    >
                        <option value="">--</option>
                        {(
                            database.brands
                                .find(
                                    (brand) => brand.id === formState.brand[0]
                                )
                                ?.models.find(
                                    (model) => model.id === formState.model[0]
                                )?.cams ?? []
                        ).map((cam) => (
                            <option key={cam.id} value={cam.id}>
                                {cam.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div className="flex justify-around">
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
                    onClick={handleSubmit}
                >
                    Add to Rack
                </button>
                <button
                    className="bg-white border border-cyan-900 text-cyan-900 px-2 py-1 rounded-lg"
                    onClick={navigateToInventory}
                >
                    Back to Inventory
                </button>
            </div>
        </div>
    );
}
