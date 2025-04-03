import { Cam } from './types';

const zero_three_c4: Cam = {
    id: 'zero_three_c4',
    name: '#0.3',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [0.54, 0.92], mm: [13.8, 23.4] },
    color: '#1177CC', // Blue
    regex: /blue\s(bd|c4|cam(alots?)?)|(#?0\.3)(\s(bd|c4|cam(alots?)?))?/gi,
};
const zero_four_c4: Cam = {
    id: 'zero_four_c4',
    name: '#0.4',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [0.61, 1.05], mm: [15.5, 26.7] },
    color: '#9BA1B7', // Gray
    regex: /gray\s(c4|cam(alots?)?)|(#?0\.4)(\s(c4|cam(alots?)?))?/gi,
};
const zero_five_c4: Cam = {
    id: 'zero_five_c4',
    name: '#0.5',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [0.77, 1.32], mm: [19.6, 33.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /purple\s(c4|cam(alots?)?)|(#?0\.5)(\s(c4|cam(alots?)?))?/gi,
};
const zero_seven_five_c4: Cam = {
    id: 'zero_seven_five_c4',
    name: '#0.75',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [0.94, 1.62], mm: [23.9, 41.2] },
    color: '#009E3A', // Green
    regex: /green\s(c4|cam(alots?)?)|(#?0\.75)(\s(c4|cam(alots?)?))?/gi,
};
const one_c4: Cam = {
    id: 'one_c4',
    name: '#1',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [1.19, 2.05], mm: [30.2, 52.1] },
    color: '#CB1B31', // Red
    regex: /red\s(c4|cam(alots?)?)|(#1(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const two_c4: Cam = {
    id: 'two_c4',
    name: '#2',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [1.46, 2.55], mm: [37.2, 64.9] },
    color: '#E8C70E', // Yellow
    regex: /yellow\s(c4|cam(alots?)?)|(#2(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const three_c4: Cam = {
    id: 'three_c4',
    name: '#3',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [2.0, 3.46], mm: [50.7, 87.9] },
    color: '#1177CC', // Blue
    regex: /(#3(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const four_c4: Cam = {
    id: 'four_c4',
    name: '#4',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [2.6, 4.51], mm: [66.0, 114.7] },
    color: '#9BA1B7', // Gray
    regex: /(#4(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const five_c4: Cam = {
    id: 'five_c4',
    name: '#5',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [3.36, 5.85], mm: [85.4, 148.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(#5(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const six_c4: Cam = {
    id: 'six_c4',
    name: '#6',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [4.5, 7.68], mm: [114.1, 195.0] },
    color: '#009E3A', // Green
    regex: /(#6(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const seven_c4: Cam = {
    id: 'seven_c4',
    name: '#7',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [5.9, 9.98], mm: [150, 253.5] },
    color: '#CB1B31', // Red
    regex: /(#7(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const eight_c4: Cam = {
    id: 'eight_c4',
    name: '#8',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: [7.6, 12.6], mm: [193, 321] },
    color: '#E8C70E', // Yellow
    regex: /(#8(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const triple_zero_c3: Cam = {
    id: 'triple_zero_c3',
    name: '#000',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: [0.31, 0.51], mm: [7.8, 12.9] },
    color: '#9BA1B7', // Gray
    regex: /((#?000)|gr[ae]y)\sc3/gi,
};
const double_zero_c3: Cam = {
    id: 'double_zero_c3',
    name: '#00',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: [0.35, 0.54], mm: [9.0, 13.7] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /((#?00)|gray)\sc3/gi,
};
const zero_c3: Cam = {
    id: 'zero_c3',
    name: '#0',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: [0.42, 0.62], mm: [10.7, 15.8] },
    color: '#009E3A', // Green
    regex: /((#?0)|green)\sc3/gi,
};
const one_c3: Cam = {
    id: 'one_c3',
    name: '#1',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: [0.47, 0.74], mm: [12.0, 18.8] },
    color: '#CB1B31', // Red
    regex: /((#?1)|red)\sc3/gi,
};
const two_c3: Cam = {
    id: 'two_c3',
    name: '#2',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: [0.56, 0.89], mm: [14.2, 22.6] },
    color: '#E8C70E', // Yellow
    regex: /((#?2)|yellow|gold)\sc3/gi,
};
const double_zero_mc: Cam = {
    id: 'double_zero_mc',
    name: '#00',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.34, 0.47], mm: [8.5, 12.0] },
    color: '#9BA1B7', // Gray
    regex: /(gr[ae]y|00)\s(metolius|mc|mastercam)/gi,
};
const zero_mc: Cam = {
    id: 'zero_mc',
    name: '#0',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.39, 0.59], mm: [10.0, 15.0] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(purple|0)\s(metolius|mc|mastercam)/gi,
};
const one_mc: Cam = {
    id: 'one_mc',
    name: '#1',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.49, 0.71], mm: [12.5, 18.0] },
    color: '#1177CC', // Blue
    regex: /(blue|1)\s(metolius|mc|mastercam)/gi,
};
const two_mc: Cam = {
    id: 'two_mc',
    name: '#2',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.62, 0.89], mm: [15.5, 22.5] },
    color: '#E8C70E', // Yellow
    regex: /(yellow|2)\s(metolius|mc|mastercam)/gi,
};
const three_mc: Cam = {
    id: 'three_mc',
    name: '#3',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.74, 1.04], mm: [18.5, 26.5] },
    color: '#D9591E', // Orange
    regex: /(orange|3)\s(metolius|mc|mastercam)/gi,
};
const four_mc: Cam = {
    id: 'four_mc',
    name: '#4',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [0.93, 1.32], mm: [23.5, 33.5] },
    color: '#CB1B31', // Red
    regex: /(red|4)\s(metolius|mc|mastercam)/gi,
};
const five_mc: Cam = {
    id: 'five_mc',
    name: '#5',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [1.01, 1.56], mm: [28.0, 39.5] },
    color: '#000000', // Black
    regex: /(black|5)\s(metolius|mc|mastercam)/gi,
};
const six_mc: Cam = {
    id: 'six_mc',
    name: '#6',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [1.28, 1.89], mm: [32.5, 48.0] },
    color: '#009E3A', // Green
    regex: /(green|6)\s(metolius|mc|mastercam)/gi,
};
const seven_mc: Cam = {
    id: 'seven_mc',
    name: '#7',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [1.57, 2.26], mm: [40.0, 57.5] },
    color: '#09CAE3', // Blue
    regex: /(light\sblue|7)\s(metolius|mc|mastercam)/gi,
};
const eight_mc: Cam = {
    id: 'eight_mc',
    name: '#8',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: [1.91, 2.81], mm: [48.5, 71.5] },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(purple|8)\s(metolius|mc|mastercam)/gi,
};

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
    triple_zero_c3,
    double_zero_c3,
    zero_c3,
    one_c3,
    two_c3,
    double_zero_mc,
    zero_mc,
    one_mc,
    two_mc,
    three_mc,
    four_mc,
    five_mc,
    six_mc,
    seven_mc,
    eight_mc,
];

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
    triple_zero_c3,
    double_zero_c3,
    zero_c3,
    one_c3,
    two_c3,
    double_zero_mc,
    zero_mc,
    one_mc,
    two_mc,
    three_mc,
    four_mc,
    five_mc,
    six_mc,
    seven_mc,
    eight_mc,
    cams,
};
