export interface IResponsivePattern {
    bootstrap?: string | string[];
    browser?: string | string[];
    device?: string | string[];
    pixelratio?: string | string[];
    orientation?: string | string[];
    standard?: string | string[];
    ie?: string | string[];
    sizes?: number;
}

export interface IResponsiveSubscriptions {
    bootstrap?: boolean;
    browser?: boolean;
    device?: boolean;
    pixelratio?: boolean;
    orientation?: boolean;
    standard?: boolean;
    ie?: boolean;
    sizes?: boolean;
}

export interface IResponsiveConfig {
    breakPoints: {
        xs: { max: number },
        sm: { min: number, max: number },
        md: { min: number, max: number },
        lg: { min: number, max: number },
        xl: { min: number }
    };
    debounceTime: number;
}