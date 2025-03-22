import { Cam } from './types';

const zero_three_c4: Cam = {
    id: 'zero_three_c4',
    name: '#0.3',
    size: { inches: [0.54, 0.92], mm: [13.8, 23.4] },
    color: '#1177CC', // Blue
    regex: /blue\s(bd|c4|cam(alots?)?)|(#?0\.3)(\s(bd|c4|cam(alots?)?))?/gi,
};
const zero_four_c4: Cam = {
    id: 'zero_four_c4',
    name: '#0.4',
    size: { inches: [0.61, 1.05], mm: [15.5, 26.7] },
    color: '#9BA1B7', // Gray
    regex: /gray\s(c4|cam(alots?)?)|(#?0\.4)(\s(c4|cam(alots?)?))?/gi,
};
const zero_five_c4: Cam = {
    id: 'zero_five_c4',
    name: '#0.5',
    size: { inches: [0.77, 1.32], mm: [19.6, 33.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /purple\s(c4|cam(alots?)?)|(#?0\.5)(\s(c4|cam(alots?)?))?/gi,
};
const zero_seven_five_c4: Cam = {
    id: 'zero_seven_five_c4',
    name: '#0.75',
    size: { inches: [0.94, 1.62], mm: [23.9, 41.2] },
    color: '#009E3A', // Green
    regex: /green\s(c4|cam(alots?)?)|(#?0\.75)(\s(c4|cam(alots?)?))?/gi,
};
const one_c4: Cam = {
    id: 'one_c4',
    name: '#1',
    size: { inches: [1.19, 2.05], mm: [30.2, 52.1] },
    color: '#CB1B31', // Red
    regex: /red\s(c4|cam(alots?)?)|(#1(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const two_c4: Cam = {
    id: 'two_c4',
    name: '#2',
    size: { inches: [1.46, 2.55], mm: [37.2, 64.9] },
    color: '#C9AF19', // Yellow
    regex: /yellow\s(c4|cam(alots?)?)|(#2(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const three_c4: Cam = {
    id: 'three_c4',
    name: '#3',
    size: { inches: [2.0, 3.46], mm: [50.7, 87.9] },
    color: '#1177CC', // Blue
    regex: /(#3(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const four_c4: Cam = {
    id: 'four_c4',
    name: '#4',
    size: { inches: [2.6, 4.51], mm: [66.0, 114.7] },
    color: '#9BA1B7', // Gray
    regex: /(#4(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const five_c4: Cam = {
    id: 'five_c4',
    name: '#5',
    size: { inches: [3.36, 5.85], mm: [85.4, 148.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(#5(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const six_c4: Cam = {
    id: 'six_c4',
    name: '#6',
    size: { inches: [4.5, 7.68], mm: [114.1, 195.0] },
    color: '#009E3A', // Green
    regex: /(#6(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const seven_c4: Cam = {
    id: 'seven_c4',
    name: '#7',
    size: { inches: [5.9, 9.98], mm: [150, 253.5] },
    color: '#CB1B31', // Red
    regex: /(#7(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const eight_c4: Cam = {
    id: 'eight_c4',
    name: '#8',
    size: { inches: [7.6, 12.6], mm: [193, 321] },
    color: '#C9AF19', // Yellow
    regex: /(#8(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const two_c3: Cam = {
    id: 'two_c3',
    name: '#2',
    size: { inches: [0.56, 0.89], mm: [14.2, 22.6] },
    color: '#C9AF19', // Yellow
    regex: /((#?2)|yellow|gold)\sc3/gi,
};
const four_mc: Cam = {
    id: 'four_mc',
    name: '#4',
    size: { inches: [0.93, 1.32], mm: [23.5, 33.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(red|4)\s(metolius|mc|mastercam)/gi,
};

export {
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
};
