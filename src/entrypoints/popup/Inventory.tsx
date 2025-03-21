import { useEffect, useState } from "react";

export default function Inventory() {
    const [inventory, setInventory] = useState(['', '', '']);

    useEffect(() => {
        chrome.storage.local.get(['brand', 'model', 'cam']).then((result) => {
            setInventory([result.brand, result.model, result.cam]);
        });
    }, []);

    return (
        <div className="flex justify-center pt-2">
            <div className="text-lg">User's Inventory</div>
            {inventory.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
