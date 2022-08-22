export type Location = 'Hong Kong' | 'USA' | 'Australia';
export type Package = 'standard' | 'safe' | 'super safe';
export type Currency = 'HKD' | 'USD' | 'AUD';
export interface Form {
    name: string,
    age: number,
    location: Location,
    package: Package,
    premium?: number
}