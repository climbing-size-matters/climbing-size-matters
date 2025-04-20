import { Cam } from '../../cam-database/types'; // Adjust the path based on your project structure

type ChartProps = {
    displayCam: Cam;
    camsInRange: Cam[];
};

export default function Chart({ displayCam, camsInRange }: ChartProps) {
    if (!displayCam || camsInRange.length === 0) {
        return null;
    }

    // Create an array of all size values
    const allSizes = [
        displayCam.size.inches.min,
        displayCam.size.inches.max,
        ...camsInRange.flatMap((cam) => [
            cam.size.inches.min,
            cam.size.inches.max,
        ]),
    ];

    const smallestSize = Math.min(...allSizes);
    const largestSize = Math.max(...allSizes);

    const verticalLineHeight = 20 * (camsInRange.length + 1);

    return (
        <div
            style={{
                position: 'relative',
                width: '90%',
                margin: '0.1rem auto',
                height: `${verticalLineHeight + 30}px`,
            }}
        >
            {/* Y-axis */}
            <div
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '2px',
                    height: `${verticalLineHeight}px`,
                    backgroundColor: 'black',
                }}
            ></div>

            {/* X-axis */}
            <div
                style={{
                    position: 'absolute',
                    top: `${verticalLineHeight}px`,
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'black',
                }}
            ></div>

            {/* Left marker for smallest size */}
            <div
                style={{
                    position: 'absolute',
                    left: '0',
                    top: `${verticalLineHeight + 10}px`,
                    transform: 'translateX(-50%)',
                    fontSize: '0.8rem',
                }}
            >
                {smallestSize.toFixed(2)}"
            </div>

            {/* Right marker for largest size */}
            <div
                style={{
                    position: 'absolute',
                    right: '0',
                    top: `${verticalLineHeight + 10}px`,
                    transform: 'translateX(50%)',
                    fontSize: '0.8rem',
                }}
            >
                {largestSize.toFixed(2)}"
            </div>
        </div>
    );
}
