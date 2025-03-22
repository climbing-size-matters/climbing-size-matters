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

export { Brand, Model, Cam };
