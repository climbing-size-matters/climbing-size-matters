import { useEffect, useState } from 'react';
import { Database } from '../../cam-database/types';

type InventoryProps = {
    navigateToAddGear: () => void;
};

export default function Inventory({ navigateToAddGear }: InventoryProps) {
    const [inventory, setInventory] = useState<Database>();

    const handleDelete = (id: string) => {
        chrome.storage.local.get(['inventory'], (result) => {
            if (result.inventory) {
                const updatedInventory: Database = { ...result.inventory };

                // Iterate through brands and models, removing the cam and cleaning up empty models and brands
                updatedInventory.brands = updatedInventory.brands
                    .map((brand) => {
                        const updatedModels = brand.models
                            .map((model) => {
                                const updatedCams = model.cams.filter(
                                    (cam) => cam.id !== id
                                ); // Remove the cam with the matching id

                                // Only keep the model if it has cams left
                                if (updatedCams.length > 0) {
                                    return { ...model, cams: updatedCams };
                                }
                                return null; // Mark the model for removal
                            })
                            .filter(
                                (model) => model !== null
                            ) as typeof brand.models; // Remove null models

                        // Only keep the brand if it has models left
                        if (updatedModels.length > 0) {
                            return { ...brand, models: updatedModels };
                        }
                        return null; // Mark the brand for removal
                    })
                    .filter(
                        (brand) => brand !== null
                    ) as typeof updatedInventory.brands; // Remove null brands

                // Save the updated inventory back to storage
                chrome.storage.local.set({ inventory: updatedInventory });
                setInventory(updatedInventory); // Update the state with the new inventory
            }
        });
    };

    useEffect(() => {
        chrome.storage.local.get(['inventory'], (result) => {
            setInventory(result.inventory || {});
        });
    }, []);

    return (
        <div className="justify-center h-80 pt-2 overflow-y-auto scrollbar-hidden">
            <div className="flex justify-between align-center">
                <div className="text-lg">Inventory</div>
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
                    onClick={navigateToAddGear}
                >
                    Add Gear
                </button>
            </div>
            {inventory?.brands?.map((brand) => (
                <div className="text-2xl" key={brand.id}>
                    {brand.name}
                    {brand.models?.map((model) => (
                        <div className="text-lg" key={model.id}>
                            {model.name}
                            {model.cams?.map((cam) => (
                                <div className="flex items-center group">
                                    <div
                                        className="h-3 w-3 mr-1 rounded-sm border border-black"
                                        style={{ backgroundColor: cam.color }}
                                    ></div>
                                    <div className="text-sm mr-2" key={cam.id}>
                                        {cam.name}
                                    </div>
                                    <button
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => handleDelete(cam.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="size-4 text-gray-400"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
