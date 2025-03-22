import { Brand } from './types';
import { c3, c4, mc } from './models';

const bd: Brand = {
    id: 'bd',
    name: 'Black Diamond',
    models: [c3, c4],
};
const mt: Brand = {
    id: 'mt',
    name: 'Metolius',
    models: [mc],
};

export { bd, mt };
