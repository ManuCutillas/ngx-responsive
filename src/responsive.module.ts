import { NgModule } from '@angular/core';
import { ResponsiveConfig, ResponsiveState } from './config/index';
import { BOOTSTRAP_DIRECTIVES } from './bootstrap/index';
import { BROWSER_DIRECTIVES } from './browsers/index';
import { CUSTOMSIZES_DIRECTIVES } from './custom-sizes/index';
import { DEVICES_DIRECTIVES } from './devices/index';
import { PIXELRATIO_DIRECTIVES } from './pixelratio/index';
import { RESPONSIVE_DIRECTIVE } from './responsive/index';
import { RESPONSIVEWINDOW_DIRECTIVE } from './responsive-window/index';
import { USERAGENT_DIRECTIVE } from './useragent/index';
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
        USERAGENT_DIRECTIVE
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
        USERAGENT_DIRECTIVE
    ],
    providers:
    [
        ResponsiveState,
        ResponsiveConfig
    ]
})
export class ResponsiveModule {}
