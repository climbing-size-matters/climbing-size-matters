// Types
enum Brand {
    BlackDiamond = 'Black Diamond',
    Metolius = 'Metolius',
}

type Cam = {
    name: string;
    brand: Brand;
    model: string;
    size: { inches: [number, number]; mm: [number, number] };
    color: string;
    regex: RegExp;
};

// Cam arrays for each model
const bdC4: Cam[] = [
    {
        name: '#0.3 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [0.54, 0.92], mm: [13.8, 23.4] },
        color: '#1177CC', // Blue
        regex: /blue\s(bd|c4|cam(alots?)?)|(#?0\.3)(\s(bd|c4|cam(alots?)?))?/gi,
    },
    {
        name: '#0.4 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [0.61, 1.05], mm: [15.5, 26.7] },
        color: '#9BA1B7', // Gray
        regex: /gr[ae]y\s(c4|cam(alots?)?)|(#?0\.4)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#0.5 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [0.77, 1.32], mm: [19.6, 33.5] },
        color: 'rgb(117, 102, 201)', // Purple
        regex: /purple\s(c4|cam(alots?)?)|(#?0\.5)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#0.75 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [0.94, 1.62], mm: [23.9, 41.2] },
        color: '#009E3A', // Green
        regex: /green\s(c4|cam(alots?)?)|(#?0\.75)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#1.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [1.19, 2.05], mm: [30.2, 52.1] },
        color: '#CB1B31', // Red
        regex: /red\s(c4|cam(alots?)?)|(#1(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#2.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [1.46, 2.55], mm: [37.2, 64.9] },
        color: '#C9AF19', // Yellow
        regex: /yellow\s(c4|cam(alots?)?)|(#2(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#3.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [2.0, 3.46], mm: [50.7, 87.9] },
        color: '#1177CC', // Blue
        regex: /(#3(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#4.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [2.6, 4.51], mm: [66.0, 114.7] },
        color: '#9BA1B7', // Gray
        regex: /(#4(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#5.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [3.36, 5.85], mm: [85.4, 148.5] },
        color: 'rgb(117, 102, 201)', // Purple
        regex: /(#5(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#6.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [4.5, 7.68], mm: [114.1, 195.0] },
        color: '#009E3A', // Green
        regex: /(#6(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#7.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [5.9, 9.98], mm: [150, 253.5] },
        color: '#CB1B31', // Red
        regex: /(#7(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
    {
        name: '#8.0 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [7.6, 12.6], mm: [193, 321] },
        color: '#C9AF19', // Yellow
        regex: /(#8(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    },
];

const bdC3: Cam[] = [
    {
        name: '#2 C3',
        brand: Brand.BlackDiamond,
        model: 'Camalot C3',
        size: { inches: [0.56, 0.89], mm: [14.2, 22.6] },
        color: '#C9AF19', // Yellow
        regex: /((#?2)|yellow|gold)\sc3/gi,
    },
];

const metoliusMC: Cam[] = [
    {
        name: '#4 MC',
        brand: Brand.Metolius,
        model: 'Ultralight Master Cam',
        size: { inches: [0.93, 1.32], mm: [23.5, 33.5] },
        color: 'rgb(117, 102, 201)', // Purple
        regex: /(red|4)\s(metolius|mc|mastercam)/gi,
    },
];

// Database of cam brands and models
const camDatabase: Record<Brand, Cam[][]> = {
    [Brand.BlackDiamond]: [bdC4, bdC3],
    [Brand.Metolius]: [metoliusMC],
};

export { Brand, camDatabase };
