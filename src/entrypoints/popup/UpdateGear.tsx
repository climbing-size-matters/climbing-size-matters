import { useEffect, useState } from 'react';
import { database } from '@/cam-database/database';
import { inventoryItem } from '@/storage';

type UpdateGearProps = {
  navigateToInventory: () => void;
};

export default function UpdateGear({ navigateToInventory }: UpdateGearProps) {
  const [currentInventory, setCurrentInventory] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [formState, setFormState] = useState({
    brand: '',
    model: '',
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    // Reset dependent dropdowns when a higher-level dropdown changes
    if (id === 'brand') {
      setFormState((prevState) => ({
        ...prevState,
        model: '',
      }));
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    inventoryItem.setValue(currentInventory).then(navigateToInventory);
  };

  useEffect(() => {
    inventoryItem.getValue().then((camIds) => {
      setCurrentInventory(camIds);
      setLoaded(true);
    });
  }, []);

  // Don't show the form until the saved inventory has loaded, so edits and
  // Save can't be overwritten by (or overwrite) the load
  if (!loaded) return null;

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto p-2">
      <div className="text-lg">Update your rack!</div>
      {/* Brand Dropdown */}
      <div className="py-2">
        <label htmlFor="brand" className="block text-sm font-medium text-black">
          Brand
        </label>
        <select
          id="brand"
          value={formState.brand}
          onChange={handleFormChange}
          className="mt-1 p-1 w-full rounded-sm border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        >
          <option value="">--</option>
          {database.brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      {/* Model Dropdown */}
      {formState.brand && (
        <div className="py-2">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-black"
          >
            Model
          </label>
          <select
            id="model"
            value={formState.model}
            onChange={handleFormChange}
            className="mt-1 p-1 w-full rounded-sm border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">--</option>
            {(
              database.brands.find((brand) => brand.id === formState.brand)
                ?.models ?? []
            ).map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* Cam Checkboxes */}
      {formState.model && (
        <div className="py-2">
          <label htmlFor="cam" className="block text-sm font-medium text-black">
            Cams
          </label>
          {database.cams
            .filter((cam) => cam.model_id === formState.model)
            .map((cam) => (
              <div className="flex items-center" key={cam.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                  id={cam.id}
                  value={cam.id}
                  checked={currentInventory.includes(cam.id)}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    setCurrentInventory((prevInventory) =>
                      checked
                        ? [...prevInventory, value]
                        : prevInventory.filter((id) => id !== value)
                    );
                  }}
                />
                <label className="mr-1" htmlFor={cam.id}>
                  {cam.name}
                </label>
                <div
                  className="h-3 w-3 rounded-sm border border-black"
                  style={{ backgroundColor: cam.color }}
                ></div>
              </div>
            ))}
        </div>
      )}
      {/* Save and Back Buttons */}
      <div className="flex justify-around">
        <button
          className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-white border border-cyan-900 text-cyan-900 px-2 py-1 rounded-lg"
          onClick={navigateToInventory}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
