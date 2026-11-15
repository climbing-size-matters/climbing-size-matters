import { useEffect, useState } from 'react';
import { Cam } from '../../cam-database/types';
import { database } from '../../cam-database/database';
import { inventoryItem } from '@/storage';

type InventoryProps = {
  navigateToUpdateGear: () => void;
};

export default function Inventory({ navigateToUpdateGear }: InventoryProps) {
  const [organizedInventory, setOrganizedInventory] = useState<Cam[][]>([]);
  const [loaded, setLoaded] = useState(false);
  const [accordionState, setAccordionState] = useState<Record<number, boolean>>(
    {}
  );

  function organizeInventoryByBrandAndModel(camIds: string[]): void {
    const inventory = database.cams.filter((cam) => camIds.includes(cam.id));

    // Group cams by model_id
    const groupedByModel: Record<string, Cam[]> = inventory.reduce(
      (acc, cam) => {
        if (!acc[cam.model_id]) {
          acc[cam.model_id] = [];
        }
        acc[cam.model_id].push(cam);
        return acc;
      },
      {} as Record<string, Cam[]>
    );

    // Sort each group by the smaller end of their size range
    const sortedGroups = Object.values(groupedByModel).map((group) =>
      group.sort((a, b) => a.size.inches.min - b.size.inches.min)
    );

    setOrganizedInventory(sortedGroups);
  }

  const toggleAccordion = (index: number) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    inventoryItem.getValue().then((camIds) => {
      organizeInventoryByBrandAndModel(camIds);
      setLoaded(true);
    });
  }, []);

  return (
    <div className="justify-center h-96 pt-2 overflow-y-auto scrollbar-hidden">
      {/* Title and Add Gear Button */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg">Inventory</div>
        <button
          className="bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-500 text-white px-2 py-1 rounded-lg transition duration-200"
          onClick={navigateToUpdateGear}
        >
          Update Gear
        </button>
      </div>
      {loaded && organizedInventory.length === 0 && (
        <div className="text-sm text-gray-500">No gear saved yet</div>
      )}
      {/* Accordion */}
      <div>
        {organizedInventory.map((modelGroup, index) => (
          <div className="flex flex-col w-full py-4" key={index}>
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center text-sm px-2 border rounded-sm border-red-700 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start">
                <span className="mr-1">
                  {
                    database.brands.find(
                      (brand) => brand.id === modelGroup[0].brand_id
                    )?.name
                  }
                </span>
                <span>
                  {
                    database.models.find(
                      (model) => model.id === modelGroup[0].model_id
                    )?.name
                  }
                </span>
              </div>
              {accordionState[index] ? <span>-</span> : <span>+</span>}
            </div>
            {/* Accordion Content */}
            {accordionState[index] && (
              <div className="overflow-hidden">
                {modelGroup.map((cam, camIndex) => (
                  <div
                    className="flex justify-start items-center ml-2"
                    key={camIndex}
                  >
                    <div
                      className="h-3 w-3 rounded-sm border border-black mr-1"
                      style={{
                        backgroundColor: cam.color,
                      }}
                    ></div>
                    <div>{cam.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
