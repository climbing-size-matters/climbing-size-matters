type Cam = {
    id: string;
    name: string;
    brand_id: string;
    model_id: string;
    size: {
        inches: { min: number; max: number };
        mm: { min: number; max: number };
    };
    color: string;
    regex: RegExp;
};
type Model = {
    id: string;
    name: string;
    cams: Cam[];
};
type Brand = {
    id: string;
    name: string;
    models: Model[];
};
type Database = {
    brands: Brand[];
    models: Model[];
    cams: Cam[];
};

export { Cam, Model, Brand, Database };
