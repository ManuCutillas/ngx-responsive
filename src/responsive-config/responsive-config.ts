import { Injectable, Optional } from '@angular/core';
import { IResponsiveConfig } from '../responsive.interfaces';

@Injectable()
export class ResponsiveConfig {
    public config: IResponsiveConfig = {
        breakPoints: {
            xs: { max: 767 },
            sm: { min: 768, max: 991 },
            md: { min: 992, max: 1199 },
            lg: { min: 1200, max: 1599 },
            xl: { min: 1600 }
        },
        debounceTime: 100
    };
    constructor( @Optional() config?: IResponsiveConfig) {
        if (!!config) {
            this.config = config;
        }
    }
}
