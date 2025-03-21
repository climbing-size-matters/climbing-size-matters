// Type Definitions
type Brand = {
    id: string;
    name: string;
};

type Model = {
    id: string;
    name: string;
    brand: Brand;
};

type Cam = {
    id: string;
    name: string;
    size: { inches: [number, number]; mm: [number, number] };
    color: string;
    regex: RegExp;
    model: Model;
};

// Brand Instances
const bd: Brand = {
    id: 'bd',
    name: 'Black Diamond',
};
const mt: Brand = {
    id: 'mt',
    name: 'Metolius',
};

// Model Instances
const c4: Model = {
    id: 'c4',
    name: 'Camalot C4 (2019)',
    brand: bd,
};
const c3: Model = {
    id: 'c3',
    name: 'Camalot C3',
    brand: bd,
};
const mc: Model = {
    id: 'mc',
    name: 'Ultralight Master Cam',
    brand: mt,
};

// Cam Instances
const zero_three_c4: Cam = {
    id: '0.3-c4',
    name: '#0.3 C4',
    size: { inches: [0.54, 0.92], mm: [13.8, 23.4] },
    color: '#1177CC', // Blue
    regex: /blue\s(bd|c4|cam(alots?)?)|(#?0\.3)(\s(bd|c4|cam(alots?)?))?/gi,
    model: c4,
};
const zero_four_c4: Cam = {
    id: '0.4-c4',
    name: '#0.4 C4',
    size: { inches: [0.61, 1.05], mm: [15.5, 26.7] },
    color: '#9BA1B7', // Gray
    regex: /gray\s(c4|cam(alots?)?)|(#?0\.4)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const zero_five_c4: Cam = {
    id: '0.5-c4',
    name: '#0.5 C4',
    size: { inches: [0.77, 1.32], mm: [19.6, 33.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /purple\s(c4|cam(alots?)?)|(#?0\.5)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const zero_seven_five_c4: Cam = {
    id: '0.75-c4',
    name: '#0.75 C4',
    size: { inches: [0.94, 1.62], mm: [23.9, 41.2] },
    color: '#009E3A', // Green
    regex: /green\s(c4|cam(alots?)?)|(#?0\.75)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const one_c4: Cam = {
    id: '1-c4',
    name: '#1 C4',
    size: { inches: [1.19, 2.05], mm: [30.2, 52.1] },
    color: '#CB1B31', // Red
    regex: /red\s(c4|cam(alots?)?)|(#1(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const two_c4: Cam = {
    id: '2-c4',
    name: '#2 C4',
    size: { inches: [1.46, 2.55], mm: [37.2, 64.9] },
    color: '#C9AF19', // Yellow
    regex: /yellow\s(c4|cam(alots?)?)|(#2(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const three_c4: Cam = {
    id: '3-c4',
    name: '#3 C4',
    size: { inches: [2.0, 3.46], mm: [50.7, 87.9] },
    color: '#1177CC', // Blue
    regex: /(#3(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const four_c4: Cam = {
    id: '4-c4',
    name: '#4 C4',
    size: { inches: [2.6, 4.51], mm: [66.0, 114.7] },
    color: '#9BA1B7', // Gray
    regex: /(#4(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const five_c4: Cam = {
    id: '5-c4',
    name: '#5 C4',
    size: { inches: [3.36, 5.85], mm: [85.4, 148.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(#5(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const six_c4: Cam = {
    id: '6-c4',
    name: '#6 C4',
    size: { inches: [4.5, 7.68], mm: [114.1, 195.0] },
    color: '#009E3A', // Green
    regex: /(#6(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const seven_c4: Cam = {
    id: '7-c4',
    name: '#7 C4',
    size: { inches: [5.9, 9.98], mm: [150, 253.5] },
    color: '#CB1B31', // Red
    regex: /(#7(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const eight_c4: Cam = {
    id: '8-c4',
    name: '#8 C4',
    size: { inches: [7.6, 12.6], mm: [193, 321] },
    color: '#C9AF19', // Yellow
    regex: /(#8(\.0)?)(\s(c4|cam(alots?)?))?/gi,
    model: c4,
};
const two_c3: Cam = {
    id: '2-c3',
    name: '#2 C3',
    size: { inches: [0.56, 0.89], mm: [14.2, 22.6] },
    color: '#C9AF19', // Yellow
    regex: /((#?2)|yellow|gold)\sc3/gi,
    model: c3,
};
const four_mc: Cam = {
    id: '4-mc',
    name: '#4 MC',
    size: { inches: [0.93, 1.32], mm: [23.5, 33.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(red|4)\s(metolius|mc|mastercam)/gi,
    model: mc,
};

// Database
const brands: Brand[] = [bd, mt];

const models: Model[] = [c4, c3, mc];

const cams: Cam[] = [
    zero_three_c4,
    zero_four_c4,
    zero_five_c4,
    zero_seven_five_c4,
    one_c4,
    two_c4,
    three_c4,
    four_c4,
    five_c4,
    six_c4,
    seven_c4,
    eight_c4,
    two_c3,
    four_mc,
];

export { Cam, brands, models, cams };
