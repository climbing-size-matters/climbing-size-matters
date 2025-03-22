import { useEffect, useState } from 'react';
import { Cam } from '../../cam-database/cam-types';

type InventoryProps = {
    navigateToAddGear: () => void;
};

export default function Inventory({ navigateToAddGear }: InventoryProps) {
    const [inventory, setInventory] = useState<Cam[]>([]);

    const handleDelete = (id: string) => {
        chrome.storage.local.get(['inventory'], (result) => {
            if (result.inventory) {
                const updatedInventory = result.inventory.filter(
                    (cam: Cam) => cam.id !== id
                );
                chrome.storage.local.set({ inventory: updatedInventory });
                setInventory(updatedInventory);
            }
        });
    };

    useEffect(() => {
        chrome.storage.local.get(['inventory'], (result) => {
            setInventory(result.inventory);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="flex justify-between align-center">
                <div className="text-lg">Inventory</div>
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
                    onClick={navigateToAddGear}
                >
                    Add Gear
                </button>
            </div>
            {inventory.map((cam, index) => (
                <div className="flex justify-start group">
                    <div className="pr-2" key={index}>
                        {cam.name} {cam.model.name}
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
                            className="size-4 text-red-500"
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
    );
}
