/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 04, 2016
 * @updated_at Febr 5, 2017 - by ManuCutillas
 * @version_0.7.5
 *
 * Dependencies:
 * @angular/core : "2.4.6"
 * rxjs: "5.1.0"
 *
 * @more_info https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NGX-RESPONSIVE
 *
 */

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

export {
        ResponsiveConfig,
        ResponsiveState,
        ResponsiveConfigInterface
      } from './config/index';

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
