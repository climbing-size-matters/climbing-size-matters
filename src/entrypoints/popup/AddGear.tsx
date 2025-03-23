// To-do: The inventory component does not refresh after adding a cam to the inventory.

import { useState } from 'react';
import { Database } from '@/cam-database/types';
import { database } from '@/cam-database/database';
import { addCamToInventory } from '../../cam-database/add-cam-to-inventory';

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

        // Get the current inventory from chrome.storage.local
        chrome.storage.local.get(['inventory'], (result) => {
            const currentInventory: Database = result.inventory || {};

            // Add the selected cam to the inventory
            const updatedInventory = addCamToInventory(
                currentInventory,
                selectedCam,
                formState.brand[0],
                formState.brand[1],
                formState.model[0],
                formState.model[1]
            );

            // Save the updated inventory back to chrome.storage.local
            chrome.storage.local.set({ inventory: updatedInventory });
        });
        navigateToInventory();
    };

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="text-lg">Add gear to your rack!</div>
            {/* Brand Dropdown */}
            <div className="py-2">
                <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700"
                >
                    Brand
                </label>
                <select
                    id="brand"
                    value={formState.brand.join('|')}
                    onChange={handleFormChange}
                    className="mt-1 p-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                    >
                        Model
                    </label>
                    <select
                        id="model"
                        value={formState.model.join('|')} // Convert the array to a string
                        onChange={handleFormChange}
                        className="mt-1 p-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
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
                        className="block text-sm font-medium text-gray-700"
                    >
                        Cam
                    </label>
                    <select
                        id="cam"
                        value={formState.cam}
                        onChange={handleFormChange}
                        className="mt-1 p-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
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
