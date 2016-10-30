/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at Oct 30, 2016 - by ManuCutillas
 * @version_0.6.1
 *
 * Dependencies:
 * @angular/core : "2.1.1"
 * rxjs: "5.0.0-rc.1"
 *
 * @more_info https://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NG2-RESPONSIVE
 *
 */


/* IMPORTS => MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveConfig,ResponsiveState } from './config';
import { BOOTSTRAP_DIRECTIVES } from './bootstrap';
import { BROWSER_DIRECTIVES } from './browsers';
import { CUSTOMSIZES_DIRECTIVES } from './custom-sizes';
import { DEVICES_DIRECTIVES } from './devices';
import { PIXELRATIO_DIRECTIVES } from './pixelratio';
import { RESPONSIVE_DIRECTIVE } from './responsive';
import { RESPONSIVEWINDOW_DIRECTIVE } from './responsive-window';
import { USERAGENT_DIRECTIVE } from './useragent';

export { 
  ResponsiveConfig, 
  ResponsiveState
 };

@NgModule({
declarations:[
  BOOTSTRAP_DIRECTIVES,
  BROWSER_DIRECTIVES,
  CUSTOMSIZES_DIRECTIVES,
  DEVICES_DIRECTIVES,
  PIXELRATIO_DIRECTIVES,
  RESPONSIVE_DIRECTIVE,
  RESPONSIVEWINDOW_DIRECTIVE,
  USERAGENT_DIRECTIVE
  ],
exports:[
  BOOTSTRAP_DIRECTIVES,
  BROWSER_DIRECTIVES,
  CUSTOMSIZES_DIRECTIVES,
  DEVICES_DIRECTIVES,
  PIXELRATIO_DIRECTIVES,
  RESPONSIVE_DIRECTIVE,
  RESPONSIVEWINDOW_DIRECTIVE,
  USERAGENT_DIRECTIVE,
  ],
providers: [ResponsiveState,ResponsiveConfig]
})
export class ResponsiveModule { }  