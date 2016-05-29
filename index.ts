/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU
 * @created_at May 23, 2016
 * @updated_at May 28, 2016 - by Christophe HOARAU & Manu Cutillas
 * @version_0.1.6
 *
 * Dependencies:
 * @angular/core : "2.0.0-rc.1"
 * rxjs: "5.0.0-beta.6"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : Responsive Detect Directives for Angular 2
 *
 */

// index.ts
/* IMPORTS => MODULES */

//PACKAGE CONFIG
import {ResponsiveSizeInfo} from './config/config';

//Import Bootstrap Directives
import {XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap} from './bootstrap/bootstrap-directives';
//Import Devices Directives
import {IsDesktop, IsTablet, IsMobile} from './devices/devices-directives';
//Import Custom Sizes Directives
import {ShowItSizes, HideItSizes} from './custom-sizes/custom-sizes-directives';

/* EXPORT => MODULES */
export * from './config/config';
export * from './bootstrap/bootstrap-directives';
export * from './devices/devices-directives';
export * from './custom-sizes/custom-sizes-directives';


export const RESPONSIVE_DIRECTIVES = [
    XL, LG, MD, SM, XS, IsDesktop, IsTablet, IsMobile, ShowItBootstrap, HideItBootstrap, ShowItSizes, HideItSizes
]; 