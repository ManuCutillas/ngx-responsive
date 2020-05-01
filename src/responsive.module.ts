/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { ResponsiveState } from './@core/providers/responsive-state/responsive-state';
import { ResponsiveConfig } from './@core/providers/responsive-config/responsive-config';
import { InjectionToken } from '@angular/core';
import { BOOTSTRAP_DIRECTIVES } from './@directives/bootstrap/index';
import { BROWSER_DIRECTIVES, BROWSER_INFO_RX, IE_INFO_RX } from './@directives/browsers/index';
import { CUSTOMSIZES_DIRECTIVES } from './@directives/custom-sizes/index';
import { DEVICES_DIRECTIVES, DEVICES_INFO_RX } from './@directives/devices/index';
import { PIXELRATIO_DIRECTIVES } from './@directives/pixelratio/index';
import { RESPONSIVE_DIRECTIVE } from './@directives/responsive/index';
import { RESPONSIVE_SIZE_INFO_DIRECTIVE, RESPONSIVE_SIZE_INFO_RX } from './@directives/responsive-size-info/index';
import { RESPONSIVEWINDOW_DIRECTIVE } from './@directives/responsive-window/index';
import { USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX } from './@directives/useragent/index';
import { IResponsiveConfig } from './@core/interfaces/responsive-config.interfaces';
import { PlatformService } from './@core/providers/platform-service/platform.service';
export const RESPONSIVE_CONFIGURATION = new InjectionToken<IResponsiveConfig>('config');

export function responsiveConfiguration(config: IResponsiveConfig) {
    return new ResponsiveConfig(config);
}
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
        ]
})
export class ResponsiveModule {
    public static forRoot(config: IResponsiveConfig = null): ModuleWithProviders {
        return {
            ngModule: ResponsiveModule,
            providers: [            {
                provide: RESPONSIVE_CONFIGURATION,
                useValue: (config !== null) ? config : {
                    breakPoints: {
                        xs: { max: 767 },
                        sm: { min: 768, max: 991 },
                        md: { min: 992, max: 1199 },
                        lg: { min: 1200, max: 1599 },
                        xl: { min: 1600 }
                    },
                    debounceTime: 100,
                    renderOnServer: false
                } as IResponsiveConfig
            },{
                provide: ResponsiveConfig,
                useFactory: responsiveConfiguration,
                deps:[RESPONSIVE_CONFIGURATION]
            },
            ResponsiveState,
            PlatformService,
            RESPONSIVE_SIZE_INFO_RX,
            USERAGENT_INFO_RX,
            BROWSER_INFO_RX,
            IE_INFO_RX,
            DEVICES_INFO_RX]
        };
    }
}


