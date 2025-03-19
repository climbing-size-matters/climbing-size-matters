const AddGear = () => {
    return (
        <div className="flex justify-center pt-4">
            <div className="text-lg">Add gear to our inventory!</div>
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

export default AddGear;
