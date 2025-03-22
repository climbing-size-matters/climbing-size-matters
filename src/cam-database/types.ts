type Cam = {
    id: string;
    name: string;
    size: { inches: [number, number]; mm: [number, number] };
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
};

export { Cam, Model, Brand, Database };
