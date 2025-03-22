// import { useEffect, useState } from 'react';
// import { Cam } from '../../cam-database/cam-types';

export default function Inventory() {
    // const [inventory, setInventory] = useState<Cam[]>([]);

    // useEffect(() => {
    //     chrome.storage.local.get(['inventory'], (result) => {
    //         setInventory(result.inventory);
    //     });
    // }, []);

    return (
        <div className="flex flex-col justify-center pt-2">
            <div className="text-lg">User's Inventory</div>
            {/* {inventory.map((item, index) => (
                <div key={index}>{item}</div>
            ))} */}
        </div>
    );
}
