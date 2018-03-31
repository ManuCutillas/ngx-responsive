import { NgModule, ModuleWithProviders } from '@angular/core';
import { ResponsiveConfig, ResponsiveState } from './@core/index';
import {
    BOOTSTRAP_DIRECTIVES, BROWSER_DIRECTIVES, BROWSER_INFO_RX, IE_INFO_RX,
    CUSTOMSIZES_DIRECTIVES, DEVICES_DIRECTIVES, PIXELRATIO_DIRECTIVES, RESPONSIVE_DIRECTIVE,
    RESPONSIVEWINDOW_DIRECTIVE, USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX, RESPONSIVE_SIZE_INFO_DIRECTIVE,
    RESPONSIVE_SIZE_INFO_RX, DEVICES_INFO_RX
} from './@directives/index';
import { IResponsiveConfig } from './@core';

@NgModule({
    declarations:
    [
        BOOTSTRAP_DIRECTIVES,
        BROWSER_DIRECTIVES,
        CUSTOMSIZES_DIRECTIVES,
        DEVICES_DIRECTIVES,
        PIXELRATIO_DIRECTIVES,
        RESPONSIVE_DIRECTIVE,
        RESPONSIVEWINDOW_DIRECTIVE,
        USERAGENT_INFO_DIRECTIVE,
        RESPONSIVE_SIZE_INFO_DIRECTIVE
    ],
    exports:
    [
        BOOTSTRAP_DIRECTIVES,
        BROWSER_DIRECTIVES,
        CUSTOMSIZES_DIRECTIVES,
        DEVICES_DIRECTIVES,
        PIXELRATIO_DIRECTIVES,
        RESPONSIVE_DIRECTIVE,
        RESPONSIVEWINDOW_DIRECTIVE,
        USERAGENT_INFO_DIRECTIVE,
        RESPONSIVE_SIZE_INFO_DIRECTIVE
    ],
    providers:
    [
        ResponsiveState,
        ResponsiveConfig,
        RESPONSIVE_SIZE_INFO_RX,
        USERAGENT_INFO_RX,
        BROWSER_INFO_RX,
        IE_INFO_RX,
        DEVICES_INFO_RX
    ]
})
export class ResponsiveModule {
    static forRoot(config: IResponsiveConfig): ModuleWithProviders {
        let _config = {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100
        };
        if (!!config) {
            _config = config;
        }
        return {
          ngModule: ResponsiveModule,
          providers: [ResponsiveConfig, {provide: 'config', useValue: _config}]
        };
      }
}
