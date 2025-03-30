import { Model } from './types';
import {
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
} from './cams';

const c3: Model = {
    id: 'c3',
    name: 'Camalot C3',
    cams: [two_c3],
};
const c4: Model = {
    id: 'c4',
    name: 'Camalot C4 (2019)',
    cams: [
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
    ],
};
const mc: Model = {
    id: 'mc',
    name: 'Ultralight Master Cam',
    cams: [four_mc],
};

const models: Model[] = [c3, c4, mc];

export { c4, c3, mc, models };
