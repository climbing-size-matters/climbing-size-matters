import { Database } from './types';
import { brands } from './brands';
import { models } from './models';
import { cams } from './cams';

const database: Database = {
    brands: brands,
    models: models,
    cams: cams,
};

export { database };
