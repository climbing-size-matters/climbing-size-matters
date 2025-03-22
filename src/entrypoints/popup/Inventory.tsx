import { useEffect, useState } from 'react';
import { Cam } from '../../cam-database/cam-types';

type InventoryProps = {
    navigateToAddGear: () => void;
};

export default function Inventory({ navigateToAddGear }: InventoryProps) {
    const [inventory, setInventory] = useState<Cam[]>([]);

    useEffect(() => {
        chrome.storage.local.get(['inventory'], (result) => {
            setInventory(result.inventory);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="flex flex-row justify-between">
                <div className="text-lg">User's Inventory</div>
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 text-cyan-100 px-2 py-1 rounded-lg transition duration-200"
                    onClick={navigateToAddGear}
                >
                    Add Gear
                </button>
            </div>
            {inventory.map((cam, index) => (
                <div key={index}>
                    {cam.name} {cam.model.name}
                </div>
            ))}
        </div>
    );
}
