import { useEffect, useState } from 'react';
import { cams } from '../../cam-database/cams';
import { Cam } from '../../cam-database/types';

type ComparisonPopupProps = {
    id: string;
};

export default function ComparisonPopup({ id }: ComparisonPopupProps) {
    const [cam, setCam] = useState<Cam | null>(null);

    const fetchData = (id: string) => {
        const cam = cams.find((cam) => cam.id === id);
        if (cam) {
            setCam(cam);
        }
    };

    useEffect(() => {
        fetchData(id);
    });

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
            {cam && (
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '4px',
                    }}
                >
                    <div style={{ fontWeight: 'bold' }}>Displayed:</div>
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
                    <div>{cam.brand}</div>
                    <div>{cam.model}</div>
                </div>
            )}
            <div>My Cams: </div>
        </div>
    );
}
