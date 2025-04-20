import { useEffect, useState } from 'react';
import { database } from '../../cam-database/database';
import { Cam } from '../../cam-database/types';
import Chart from './Chart';

type PopupProps = {
    id: string;
};

export default function Popup({ id }: PopupProps) {
    const [displayCam, setDisplayCam] = useState<Cam>();
    const [camsInRange, setCamsInRange] = useState<Cam[]>([]);
    // const [ownsCam, setOwnsCam] = useState<boolean>(false);  // TODO: add an inventory check badge in Chart and uncomment ownsCam and userOwnsCam in this file

    const fetchData = async (id: string): Promise<void> => {
        const cam = database.cams.find((cam) => cam.id === id);
        if (cam) {
            setDisplayCam(cam);
        }
    };

    const fetchCamsOfSimilarSize = async (): Promise<void> => {
        // let userOwnsCam = false;

        chrome.storage.local.get(['inventory'], (result) => {
            const currentInventory: Cam[] = result.inventory || {};

            if (displayCam) {
                for (const cam of currentInventory) {
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
                        console.log('Cams in range:', cam);
                        setCamsInRange((prev) => [...prev, cam]);
                    }
                    // if (cam.id === displayCam.id) {
                    //     userOwnsCam = true;
                    // }
                    // setOwnsCam(userOwnsCam);
                }
            }
        });
    };

    useEffect(() => {
        fetchData(id);
    }, [id]);

    useEffect(() => {
        if (displayCam) {
            fetchCamsOfSimilarSize();
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Title */}
                    <div
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            marginBottom: '0.5rem',
                            textAlign: 'center',
                            padding: '0.2rem',
                        }}
                    >
                        Cam Comparison
                    </div>
                    {/* Comparison Chart */}
                    <Chart displayCam={displayCam} camsInRange={camsInRange} />
                </div>
            )}
        </div>
    );
}
