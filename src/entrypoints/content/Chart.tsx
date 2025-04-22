import { Cam } from '../../cam-database/types';
import { database } from '../../cam-database/database';

type ChartProps = {
    displayCam: Cam;
    camsInRange: Cam[];
};

export default function Chart({ displayCam, camsInRange }: ChartProps) {
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

    const verticalLineHeight = 25 * (camsInRange.length + 1);

    // Helper function to get brand name
    const getBrandName = (brandId: string) =>
        database.brands.find((brand) => brand.id === brandId)?.name;

    // Helper function to get model name
    const getModelName = (modelId: string) =>
        database.models.find((model) => model.id === modelId)?.name;

    return (
        <div
            style={{
                position: 'relative',
                width: '90%',
                margin: '0.1rem auto',
                height: `${verticalLineHeight + 32}px`,
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
                    top: `${verticalLineHeight + 5}px`,
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
                    top: `${verticalLineHeight + 5}px`,
                    transform: 'translateX(50%)',
                    fontSize: '0.8rem',
                }}
            >
                {largestSize.toFixed(2)}"
            </div>
            {/* Displayed cam */}
            <div
                style={{
                    position: 'absolute',
                    left: `calc(${
                        ((displayCam.size.inches.min - smallestSize) /
                            (largestSize - smallestSize)) *
                        100
                    }% + 2px)`, // Move 2px to the right
                    top: 0,
                    width: `calc(${
                        ((displayCam.size.inches.max -
                            displayCam.size.inches.min) /
                            (largestSize - smallestSize)) *
                        100
                    }% - 2px)`, // Subtract 2px from the width
                    height: '25px',
                    backgroundColor: displayCam.color,
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    fontSize: '0.8rem',
                    color: 'white',
                    paddingLeft: '2px',
                }}
            >
                {`${displayCam.name} ${getBrandName(
                    displayCam.brand_id
                )} ${getModelName(displayCam.model_id)}`}
            </div>
            {/* Comparable cams */}
            {camsInRange.map((cam, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `calc(${
                            ((cam.size.inches.min - smallestSize) /
                                (largestSize - smallestSize)) *
                            100
                        }% + 2px)`, // Move 2px to the right
                        top: `${(index + 1) * 25}px`,
                        width: `calc(${
                            ((cam.size.inches.max - cam.size.inches.min) /
                                (largestSize - smallestSize)) *
                            100
                        }% - 2px)`, // Subtract 2px from the width
                        height: '25px',
                        backgroundColor: cam.color,
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'left',
                        fontSize: '0.8rem',
                        color: 'white',
                        paddingLeft: '2px',
                    }}
                >
                    {`${cam.name} ${getBrandName(cam.brand_id)} ${getModelName(
                        cam.model_id
                    )}`}
                </div>
            ))}
        </div>
    );
}
