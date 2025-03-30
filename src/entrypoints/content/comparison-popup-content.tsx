import { cams } from '../../cam-database/cams';

type ComparisonPopupProps = {
    id: string;
};

export default function ComparisonPopup({ id }: ComparisonPopupProps) {
    const fetchData = (id: string) => {
        const cam = cams.find((cam) => cam.id === id);
        if (cam) {
            return cam;
        }
        return null;
    };

    const cam = fetchData(id);

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
                        alignItems: 'center',
                    }}
                >
                    Cam:
                    <span style={{ fontWeight: 'bold', marginLeft: '4px' }}>
                        {cam.name}
                    </span>
                    <div
                        style={{
                            height: '12px',
                            width: '12px',
                            marginLeft: '4px',
                            borderRadius: '2px',
                            border: '1px solid black',
                            backgroundColor: cam.color,
                        }}
                    ></div>
                </div>
            )}
            <div>My Cams: </div>
        </div>
    );
}
