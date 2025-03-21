import { useState } from 'react';
import { brands, models, cams } from '../../cam-database/cam-types';

export default function AddGear() {
    const [formState, setFormState] = useState({
        brand: '',
        model: '',
        cam: '',
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value,
        }));

        // Reset dependent fields when a higher-level field changes
        if (id === 'brand') {
            setFormState((prevState) => ({
                ...prevState,
                model: '',
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
        chrome.storage.local.set(formState)
        chrome.storage.local.get(['brand', 'model', 'cam']).then((result) => {
            console.log('Value is ' + result.brand + ' ' + result.model + ' ' + result.cam);
        });
    };

// chrome.storage.local.set({ name: 'Eric' }).then(() => {
//     console.log('Value is set');
// });

// chrome.storage.local.get(['name']).then((result) => {
//     console.log('Value is ' + result.name);
// });

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="text-lg">Add gear to your inventory!</div>
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
                    value={formState.brand}
                    onChange={handleFormChange}
                    className="mt-1 p-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                >
                    <option value="">--</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* Model Dropdown */}
            {formState.brand && (
                <div className="py-2">
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Model
                    </label>
                    <select
                        id="model"
                        value={formState.model}
                        onChange={handleFormChange}
                        className="mt-1 p-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    >
                        <option value="">--</option>
                        {models
                            .filter(
                                (model) => model.brand.id === formState.brand
                            )
                            .map((model) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                    </select>
                </div>
            )}
            {/* Model Dropdown */}
            {formState.model && (
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
                        {cams
                            .filter((cam) => cam.model.id === formState.model)
                            .map((cam) => (
                                <option key={cam.id} value={cam.id}>
                                    {cam.name}
                                </option>
                            ))}
                    </select>
                </div>
            )}
            <button
                className="bg-white text-black font-bold p-2 rounded border border-black"
                onClick={handleSubmit}
            >
                Add to Inventory
            </button>
        </div>
    );
}
