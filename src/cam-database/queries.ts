import { Brand, Model, Cam } from './types';
import { bd, mt } from './brands';
import { c4, c3, mc } from './models';
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

// Queries
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

export { cams, brands, models };
