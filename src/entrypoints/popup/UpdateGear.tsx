import { useEffect, useState } from 'react';
import { Cam } from '@/cam-database/types';
import { database } from '@/cam-database/database';

type UpdateGearProps = {
    navigateToInventory: () => void;
};

export default function UpdateGear({ navigateToInventory }: UpdateGearProps) {
    const [currentInventory, setCurrentInventory] = useState<Cam[]>([]);
    const [formState, setFormState] = useState({
        brand: [],
        model: [],
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;

        setFormState((prevState) => ({
            ...prevState,
            [id]: id === 'cam' ? value : value ? value.split('|') : [],
        }));

        // Reset dependent fields when a higher-level field changes
        if (id === 'brand') {
            setFormState((prevState) => ({
                ...prevState,
                model: [],
            }));
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Save the updated inventory back to Chrome storage
        chrome.storage.local.set({ inventory: currentInventory }, () => {
            navigateToInventory(); // Navigate back to the inventory page
        });
    };

    useEffect(() => {
        // Get inventory from Chrome storage
        chrome.storage.local.get(['inventory'], (result) => {
            setCurrentInventory(result.inventory || []); // Initialize with an empty array if undefined
        });
    }, []);

    return (
        <div className="flex flex-col justify-center p-2">
            <div className="text-lg">Update your rack!</div>
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
            {/* Cam Checkboxes */}
            {formState.model[0] && (
                <div className="py-2">
                    <label
                        htmlFor="cam"
                        className="block text-sm font-medium text-black"
                    >
                        Cams
                    </label>
                    {database.cams
                        .filter((cam) => cam.model_id === formState.model[0])
                        .map((cam) => (
                            <div className="flex items-center" key={cam.id}>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    id={cam.id}
                                    value={cam.id}
                                    checked={currentInventory.some(
                                        (camInInventory) =>
                                            camInInventory.id === cam.id
                                    )}
                                    onChange={(e) => {
                                        const { checked, value } = e.target;
                                        const selectedCam = database.cams.find(
                                            (cam) => cam.id === value
                                        );

                                        if (!selectedCam) return;

                                        setCurrentInventory(
                                            (prevInventory) =>
                                                checked
                                                    ? [
                                                          ...prevInventory,
                                                          selectedCam,
                                                      ] // Add cam if checked
                                                    : prevInventory.filter(
                                                          (cam) =>
                                                              cam.id !== value
                                                      ) // Remove cam if unchecked
                                        );
                                    }}
                                />
                                <label className="mr-1" htmlFor={cam.id}>
                                    {cam.name}
                                </label>
                                <div
                                    className="h-3 w-3 rounded-sm border border-black"
                                    style={{ backgroundColor: cam.color }}
                                ></div>
                            </div>
                        ))}
                </div>
            )}
            {/* Submit and Back Buttons */}
            <div className="flex justify-around">
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
                    onClick={handleSubmit}
                >
                    Save
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
