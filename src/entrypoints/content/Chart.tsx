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

    // Round down smallest size and round up largest size to the nearest 0.1
    const smallestRange = Math.floor(smallestSize * 10) / 10;
    const largestRange = Math.ceil(largestSize * 10) / 10;

    // Generate an array of values at 0.1-inch intervals
    const sizeRange = [];
    for (let size = smallestRange; size <= largestRange; size += 0.1) {
        sizeRange.push(size.toFixed(1)); // Keep one decimal place
    }

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
            {/* Display the range */}
            <div
                style={{
                    position: 'absolute',
                    top: `${verticalLineHeight + 2}px`,
                    width: 'calc(100% - 2px)',
                    left: '3px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                }}
            >
                {sizeRange.map((size, index) => {
                    // Calculate the translateX value dynamically
                    const translateX =
                        index === 0
                            ? -50 + 2
                            : index === sizeRange.length - 1
                              ? 50 - 2
                              : ((index - (sizeRange.length - 1) / 2) /
                                    ((sizeRange.length - 1) / 2)) *
                                50;

                    return (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transform: `translateX(calc(${translateX}% - 2px))`,
                            }}
                        >
                            {/* Tick */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0px',
                                    height: '4px',
                                    width: '2px',
                                    backgroundColor: 'black',
                                }}
                            ></div>
                            {/* Label */}
                            <span
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                {size}
                            </span>
                        </div>
                    );
                })}
            </div>
            {/* Displayed cam */}
            <div
                style={{
                    position: 'absolute',
                    left: `calc(${
                        ((displayCam.size.inches.min - smallestRange) /
                            (largestRange - smallestRange)) *
                        100
                    }% + 2px)`,
                    top: 0,
                    width: `calc(${
                        ((displayCam.size.inches.max -
                            displayCam.size.inches.min) /
                            (largestRange - smallestRange)) *
                        100
                    }% - 2px)`,
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
                            ((cam.size.inches.min - smallestRange) /
                                (largestRange - smallestRange)) *
                            100
                        }% + 2px)`,
                        top: `${(index + 1) * 25}px`,
                        width: `calc(${
                            ((cam.size.inches.max - cam.size.inches.min) /
                                (largestRange - smallestRange)) *
                            100
                        }% - 2px)`,
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
