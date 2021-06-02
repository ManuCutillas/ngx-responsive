import { TBootstraps, TBrowserNames, TDevices, TOrientations, TPixelRatios, TStandards, TIE_VERSIONS, TSizes } from "../types";

export interface IResponsivePattern {
    bootstrap?: TBootstraps | TBootstraps[];
    browser?: TBrowserNames | TBrowserNames[];
    device?: TDevices | TDevices[];
    pixelRatio?: TPixelRatios | TPixelRatios[];
    orientation?: TOrientations | TOrientations[];
    standard?: TStandards | TStandards[];
    ie?: TIE_VERSIONS | TIE_VERSIONS[];
    sizes?: number | TSizes;
}

export interface IResponsiveSubscriptions {
    bootstrap?: boolean;
    browser?: boolean;
    device?: boolean;
    pixelRatio?: boolean;
    orientation?: boolean;
    standard?: boolean;
    ie?: boolean;
    sizes?: boolean;
}
