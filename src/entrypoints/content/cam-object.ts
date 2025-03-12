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
        name: '#0.5 C4',
        brand: Brand.BlackDiamond,
        model: 'Camalot C4 (2019)',
        size: { inches: [0.77, 1.32], mm: [19.6, 33.5] },
        color: '#7566c9', // Purple
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
];

const bdC3: Cam[] = [
    {
        name: '#2 C4',
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
        color: '#7566c9', // Purple
        regex: /(red|4)\s(metolius|mc|mastercam)/gi,
    },
];

// Database of cam brands and models
const camDatabase: Record<Brand, Cam[][]> = {
    [Brand.BlackDiamond]: [bdC4, bdC3],
    [Brand.Metolius]: [metoliusMC],
};

export { Brand, Cam, bdC4, metoliusMC, camDatabase };
