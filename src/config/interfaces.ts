//Breakpoints interface
/*export interface ResponsiveConfigInterface {
    breakPoints: {
        xs: {max: number},
        sm: {min: number, max: number},
        md: {min: number, max: number},
        lg: {min: number, max: number},
        xl: {min: number}
    },
    debounceTime: number
} */

//Custom sizes directives interface
export interface JsonGrid {
    min: number;
    max: number
}

//Responsive Pattern
export interface responsivePattern {
    bootstrap?: string | string[],
    browser?: string | string[],
    device?: string | string[],
    pixelratio?: string | string[],
    orientation?: string | string[],
    standard?: string | string[],
    ie?: string | string[],
    sizes?: number
}

//Responsive subscriptions
export interface responsiveSubscriptions {
    bootstrap?: boolean,
    browser?: boolean,
    device?: boolean,
    pixelratio?: boolean,
    orientation?: boolean,
    standard?: boolean,
    ie?: boolean,
    sizes?: boolean
}