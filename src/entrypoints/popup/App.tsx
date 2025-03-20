import { useState } from 'react';

import Inventory from './Inventory';
import AddGear from './AddGear';

export default function App() {
    const [isInventoryTab, setIsInventoryTab] = useState<boolean>(true);
    // const [cam, setCam] = useState<string>('');

    return (
        <div className="p-2 bg-white h-96 w-64">
            <div className="flex justify-start items-center">
                <img src="/icon/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
                <p className="text-lg font-bold">Climbing Size Matters</p>
            </div>
            <div className="border-b-2 border-gray-200 mx-auto my-2"></div>
            <div className="flex justify-evenly">
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 text-cyan-100 px-2 py-1 rounded-lg transition duration-200"
                    onClick={() => setIsInventoryTab(true)}
                >
                    Inventory
                </button>
                <button
                    className="bg-cyan-900 hover:bg-cyan-700 text-cyan-100 px-2 py-1 rounded-lg transition duration-200"
                    onClick={() => setIsInventoryTab(false)}
                >
                    Add Gear
                </button>
            </div>
            {isInventoryTab ? <Inventory /> : <AddGear />}
        </div>
    );
}
