import React from 'react';

const App: React.FC = () => {
    return (
        <div className="p-2 bg-gray-50 h-96 w-64">
            <div className="flex justify-start items-center">
                <img src="/icon/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
                <p className="text-lg font-bold">CSM</p>
            </div>
            <div className="border-b-2 border-black mx-auto my-2"></div>
            <div className="flex justify-center">
                <div className="text-lg">Inventory content here</div>
            </div>
        </div>
    );
};

export default App;
