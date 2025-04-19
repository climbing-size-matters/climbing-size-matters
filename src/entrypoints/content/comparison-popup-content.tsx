import { useEffect, useState } from 'react';
import { database } from '../../cam-database/database';
import { Cam } from '../../cam-database/types';

type ComparisonPopupProps = {
    id: string;
};

export default function ComparisonPopup({ id }: ComparisonPopupProps) {
    const [displayCam, setDisplayCam] = useState<Cam | null>(null);
    const [camsInRange, setCamsInRange] = useState<Cam[]>([]);
    const [ownsCam, setOwnsCam] = useState<boolean>(false);

    const fetchData = async (id: string): Promise<void> => {
        const cam = cams.find((cam) => cam.id === id);
        if (cam) {
            setDisplayCam(cam);
        }
    };

    const fetchInventory = async () => {
        setOwnsCam(false);

        chrome.storage.local.get(['inventory'], (result) => {
            const currentInventory: Cam[] = result.inventory || {};

            if (displayCam) {
                for (const cam of currentInventory) {
                    console.log(cam);
                    if (
                        cam.model_id !== displayCam.model_id &&
                        Math.abs(
                            cam.size.inches.min - displayCam.size.inches.min
                        ) <=
                            displayCam.size.inches.min * 0.25 &&
                        Math.abs(
                            cam.size.inches.max - displayCam.size.inches.max
                        ) <=
                            displayCam.size.inches.max * 0.25 &&
                        Math.abs(
                            cam.size.inches.min - displayCam.size.inches.min
                        ) <=
                            cam.size.inches.min * 0.25 &&
                        Math.abs(
                            cam.size.inches.max - displayCam.size.inches.max
                        ) <=
                            cam.size.inches.max * 0.25
                    ) {
                        console.log(cam);
                        setCamsInRange((prev) => [...prev, cam]);
                    }
                    if (cam.id === displayCam.id) {
                        setOwnsCam(true);
                    }
                }
            }
        });
    };

    useEffect(() => {
        fetchData(id); // Fetch the cam data when `id` changes
    }, [id]);

    useEffect(() => {
        if (displayCam) {
            fetchInventory(); // Fetch inventory only when `displayCam` is updated
        }
    }, [displayCam]);

    return (
        <div
            style={{
                position: 'absolute',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 50,
                border: '1px solid #d1d5db',
                height: '100%',
                width: '100%',
            }}
        >
            {displayCam && (
                <div>
                    {/* Displayed Cam Info */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <div style={{ fontWeight: 'bold' }}>Displayed:</div>
                            {ownsCam && '(Got it!)'}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <div
                                style={{
                                    height: '12px',
                                    width: '12px',
                                    borderRadius: '2px',
                                    border: '1px solid black',
                                    backgroundColor: displayCam.color,
                                }}
                            ></div>
                            <div>{displayCam.name}</div>
                            <div>
                                {
                                    database.brands.find(
                                        (brand) =>
                                            brand.id === displayCam?.brand_id
                                    )?.name
                                }
                            </div>
                            <div>
                                {
                                    database.models.find(
                                        (model) =>
                                            model.id === displayCam?.model_id
                                    )?.name
                                }
                            </div>
                        </div>

                        {/* User Cam Info */}
                        <div style={{ fontWeight: 'bold' }}>
                            My comparable gear:
                        </div>
                        {camsInRange.map((cam) => (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}
                            >
                                <div
                                    style={{
                                        height: '12px',
                                        width: '12px',
                                        borderRadius: '2px',
                                        border: '1px solid black',
                                        backgroundColor: cam.color,
                                    }}
                                ></div>
                                <div>{cam.name}</div>
                                <div>
                                    {
                                        database.brands.find(
                                            (brand) =>
                                                brand.id ===
                                                displayCam?.brand_id
                                        )?.name
                                    }
                                </div>
                                <div>
                                    {
                                        database.models.find(
                                            (model) =>
                                                model.id ===
                                                displayCam?.model_id
                                        )?.name
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
