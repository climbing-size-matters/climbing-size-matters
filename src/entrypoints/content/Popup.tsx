import { useEffect, useState } from 'react';
import { database } from '../../cam-database/database';
import { Cam } from '../../cam-database/types';
import Chart from './Chart';

type PopupProps = {
    id: string;
};

export default function Popup({ id }: PopupProps) {
    console.log('Popup component rendered with ID:', id); // TODO: fix Popup so it doesn't render 3 times
    const [displayCam, setDisplayCam] = useState<Cam>();
    const [camsInRange, setCamsInRange] = useState<Cam[]>([]);
    const [ownsCam, setOwnsCam] = useState<boolean>(false);

    const fetchData = async (id: string): Promise<void> => {
        const cam = database.cams.find((cam) => cam.id === id);
        if (cam) {
            setDisplayCam(cam);
        }
    };

    const fetchCamsOfSimilarSize = async (): Promise<void> => {
        let userOwnsCam = false;

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
                        setCamsInRange((prev) => [...prev, cam]);
                    }
                    if (cam.id === displayCam.id) {
                        userOwnsCam = true;
                    }
                    setOwnsCam(userOwnsCam);
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
                border: '1px solid rgb(209, 213, 219)',
                height: 'auto',
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
                    {/* Title and Inventory Badge */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '0.5rem',
                            padding: '0.2rem',
                            position: 'relative',
                        }}
                    >
                        {/* Title */}
                        <div
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                textAlign: 'center',
                            }}
                        >
                            Cam Comparison
                        </div>

                        {/* Inventory Badge */}
                        <div
                            style={{
                                fontSize: '0.8rem',
                                color: 'gray',
                                position: 'absolute',
                                right: '1rem',
                                padding: '0 4px',
                            }}
                        >
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    verticalAlign: 'middle',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="white"
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        marginRight: '2px',
                                        border: '1px solid white',
                                        padding: '2px',
                                        borderRadius: '50%',
                                        backgroundColor: ownsCam
                                            ? 'rgb(63, 224, 0)'
                                            : 'rgb(224, 0, 0)',
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={
                                            ownsCam
                                                ? 'M4.5 12.75L10.5 18.75L19.5 5.25'
                                                : 'M6 18L18 6M6 6L18 18'
                                        }
                                    />
                                </svg>
                            </span>
                            In your rack
                        </div>
                    </div>
                    <Chart displayCam={displayCam} camsInRange={camsInRange} />
                </div>
            )}
        </div>
    );
}
