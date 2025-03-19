// import { useState } from 'react';

const App: React.FC = () => {
    // const [cam, setCam] = useState<string>('');

    // const fetchCams = async () => {

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
            {/* Dropdowns */}
            {/* <div className='w-full'>
                <select
                    className="form-select"
                    id="salesperson"
                    value={salespersonState}
                    onChange={handleSalespersonChange}>
                    <option value="">Select a Salesperson</option>
                    {salespeopleState.map((salesperson) => {
                        return (
                            <option key={salesperson.id} value={salesperson.id}>
                                {`${salesperson.first_name} ${salesperson.last_name}`}
                            </option>
                        )
                    })}
                </select>
                <label htmlFor="salesperson">Salesperson</label>
            </div> */}
        </div>
    );
};

export default App;
