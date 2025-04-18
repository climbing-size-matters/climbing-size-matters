import { Cam } from './types';

const zero_three_c4: Cam = {
    id: 'zero_three_c4',
    name: '#0.3',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 0.54, max: 0.92}, mm: {min: 13.8, max: 23.4} },
    color: 'rgb(17, 119, 204)', // Blue
    regex: /blue\s(bd|c4|cam(alots?)?)|(#?0\.3)(\s(bd|c4|cam(alots?)?))?/gi,
};
const zero_four_c4: Cam = {
    id: 'zero_four_c4',
    name: '#0.4',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 0.61, max: 1.05}, mm: {min: 15.5, max: 26.7} },
    color: 'rgb(155, 161, 183)', // Gray
    regex: /gray\s(c4|cam(alots?)?)|(#?0\.4)(\s(c4|cam(alots?)?))?/gi,
};
const zero_five_c4: Cam = {
    id: 'zero_five_c4',
    name: '#0.5',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 0.77, max: 1.32}, mm: {min: 19.6, max: 33.5} },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /purple\s(c4|cam(alots?)?)|(#?0\.5)(\s(c4|cam(alots?)?))?/gi,
};
const zero_seven_five_c4: Cam = {
    id: 'zero_seven_five_c4',
    name: '#0.75',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 0.94, max: 1.62}, mm: {min: 23.9, max: 41.2} },
    color: 'rgb(0, 158, 58)', // Green
    regex: /green\s(c4|cam(alots?)?)|(#?0\.75)(\s(c4|cam(alots?)?))?/gi,
};
const one_c4: Cam = {
    id: 'one_c4',
    name: '#1',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 1.19, max: 2.05}, mm: {min: 30.2, max: 52.1} },
    color: 'rgb(203, 27, 49)', // Red
    regex: /red\s(c4|cam(alots?)?)|(#1(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const two_c4: Cam = {
    id: 'two_c4',
    name: '#2',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 1.46, max: 2.55}, mm: {min: 37.2, max: 64.9} },
    color: 'rgb(232, 199, 14)', // Yellow
    regex: /yellow\s(c4|cam(alots?)?)|(#2(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const three_c4: Cam = {
    id: 'three_c4',
    name: '#3',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 2.0, max: 3.46}, mm: {min: 50.7, max: 87.9} },
    color: 'rgb(17, 119, 204)', // Blue
    regex: /(#3(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const four_c4: Cam = {
    id: 'four_c4',
    name: '#4',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 2.6, max: 4.51}, mm: {min: 66.0, max: 114.7} },
    color: 'rgb(155, 161, 183)', // Gray
    regex: /(#4(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const five_c4: Cam = {
    id: 'five_c4',
    name: '#5',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 3.36, max: 5.85}, mm: {min: 85.4, max: 148.5} },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(#5(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const six_c4: Cam = {
    id: 'six_c4',
    name: '#6',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 4.5, max: 7.68}, mm: {min: 114.1, max: 195.0} },
    color: 'rgb(0, 158, 58)', // Green
    regex: /(#6(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const seven_c4: Cam = {
    id: 'seven_c4',
    name: '#7',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 5.9, max: 9.98}, mm: {min: 150, max: 253.5} },
    color: 'rgb(203, 27, 49)', // Red
    regex: /(#7(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const eight_c4: Cam = {
    id: 'eight_c4',
    name: '#8',
    brand_id: 'bd',
    model_id: 'c4',
    size: { inches: {min: 7.6, max: 12.6}, mm: {min: 193, max: 321} },
    color: 'rgb(232, 199, 14)', // Yellow
    regex: /(#8(\.0)?)(\s(c4|cam(alots?)?))?/gi,
};
const triple_zero_c3: Cam = {
    id: 'triple_zero_c3',
    name: '#000',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: {min: 0.31, max: 0.51}, mm: {min: 7.8, max: 12.9} },
    color: 'rgb(155, 161, 183)', // Gray
    regex: /((#?000)|gr{min: ae}y)\sc3/gi,
};
const double_zero_c3: Cam = {
    id: 'double_zero_c3',
    name: '#00',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: {min: 0.35, max: 0.54}, mm: {min: 9.0, max: 13.7} },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /((#?00)|purple)\sc3/gi,
};
const zero_c3: Cam = {
    id: 'zero_c3',
    name: '#0',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: {min: 0.42, max: 0.62}, mm: {min: 10.7, max: 15.8} },
    color: 'rgb(0, 158, 58)', // Green
    regex: /((#?0)|green)\sc3/gi,
};
const one_c3: Cam = {
    id: 'one_c3',
    name: '#1',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: {min: 0.47, max: 0.74}, mm: {min: 12.0, max: 18.8} },
    color: 'rgb(203, 27, 49)', // Red
    regex: /((#?1)|red)\sc3/gi,
};
const two_c3: Cam = {
    id: 'two_c3',
    name: '#2',
    brand_id: 'bd',
    model_id: 'c3',
    size: { inches: {min: 0.56, max: 0.89}, mm: {min: 14.2, max: 22.6} },
    color: 'rgb(232, 199, 14)', // Yellow
    regex: /((#?2)|yellow|gold)\sc3/gi,
};
const double_zero_mc: Cam = {
    id: 'double_zero_mc',
    name: '#00',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.34, max: 0.47}, mm: {min: 8.5, max: 12.0} },
    color: 'rgb(155, 161, 183)', // Gray
    regex: /(gr{min: ae}y|00)\s(metolius|mc|mastercam)/gi,
};
const zero_mc: Cam = {
    id: 'zero_mc',
    name: '#0',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.39, max: 0.59}, mm: {min: 10.0, max: 15.0} },
    color: 'rgb(117, 102, 201)', // Purple
    regex: /(purple|0)\s(metolius|mc|mastercam)/gi,
};
const one_mc: Cam = {
    id: 'one_mc',
    name: '#1',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.49, max: 0.71}, mm: {min: 12.5, max: 18.0} },
    color: 'rgb(17, 119, 204)', // Blue
    regex: /(blue|1)\s(metolius|mc|mastercam)/gi,
};
const two_mc: Cam = {
    id: 'two_mc',
    name: '#2',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.62, max: 0.89}, mm: {min: 15.5, max: 22.5} },
    color: 'rgb(232, 199, 14)', // Yellow
    regex: /(yellow|2)\s(metolius|mc|mastercam)/gi,
};
const three_mc: Cam = {
    id: 'three_mc',
    name: '#3',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.74, max: 1.04}, mm: {min: 18.5, max: 26.5} },
    color: 'rgb(217, 89, 30)', // Orange
    regex: /(orange|3)\s(metolius|mc|mastercam)/gi,
};
const four_mc: Cam = {
    id: 'four_mc',
    name: '#4',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 0.93, max: 1.32}, mm: {min: 23.5, max: 33.5} },
    color: 'rgb(203, 27, 49)', // Red
    regex: /(red|4)\s(metolius|mc|mastercam)/gi,
};
const five_mc: Cam = {
    id: 'five_mc',
    name: '#5',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 1.01, max: 1.56}, mm: {min: 28.0, max: 39.5} },
    color: 'rgb(0, 0, 0)', // Black
    regex: /(black|5)\s(metolius|mc|mastercam)/gi,
};
const six_mc: Cam = {
    id: 'six_mc',
    name: '#6',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 1.28, max: 1.89}, mm: {min: 32.5, max: 48.0} },
    color: 'rgb(0, 158, 58)', // Green
    regex: /(green|6)\s(metolius|mc|mastercam)/gi,
};
const seven_mc: Cam = {
    id: 'seven_mc',
    name: '#7',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 1.57, max: 2.26}, mm: {min: 40.0, max: 57.5} },
    color: 'rgb(9, 195, 234)', // Light Blue
    regex: /(light\sblue|7)\s(metolius|mc|mastercam)/gi,
};
const eight_mc: Cam = {
    id: 'eight_mc',
    name: '#8',
    brand_id: 'mt',
    model_id: 'mc',
    size: { inches: {min: 1.91, max: 2.81}, mm: {min: 48.5, max: 71.5} },
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
