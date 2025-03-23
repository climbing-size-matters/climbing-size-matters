import { useState } from 'react';

import Inventory from './Inventory';
import AddGear from './AddGear';

export default function App() {
    const [currentPage, setCurrentPage] = useState<'inventory' | 'add-gear'>(
        'inventory'
    );

    return (
        <div className="flex flex-col p-2 bg-white h-96 w-64">
            <div className="flex justify-start items-center pb-2 border-b-2 border-gray-200">
                <img src="/icon/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
                <p className="text-lg font-bold">Climbing Size Matters</p>
            </div>
            {currentPage === 'inventory' && (
                <Inventory
                    navigateToAddGear={() => setCurrentPage('add-gear')}
                />
            )}
            {currentPage === 'add-gear' && (
                <AddGear
                    navigateToInventory={() => setCurrentPage('inventory')}
                />
            )}
        </div>
    );
}
