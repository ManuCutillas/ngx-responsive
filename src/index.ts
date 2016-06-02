/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at Jun 2, 2016 - by ManuCutillas
 * @version_0.2.2
 *
 * PeerDependencies:
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

/* IMPORTS => MODULES */

//PACKAGE CONFIG
import {ResponsiveConfigInterface} from './config/interfaces';

//Import Bootstrap Directives
import {XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, ResponsiveSizeInfo} from './bootstrap/bootstrap-directives';
//Import Devices Directives
import {IsDesktop, IsTablet, IsMobile, IsSmartTv, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard,
    IsPortrait, IsLandscape, DeviceInfo, OrientationInfo } from './devices/devices-directives';
//Import Custom Sizes Directives
import {ShowItSizes, HideItSizes} from './custom-sizes/custom-sizes-directives';
//Import Pixel Ratio Directives
import {Is1xPixel, IsRetina, Is4k, PixelRatioInfo} from './pixelratio/pixelratio-directives';
//Import Browsers Directives
import {IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion} from './browsers/browsers-directives';

/* EXPORT => MODULES */
export * from './config/interfaces';
export * from './config/config';
export * from './bootstrap/bootstrap-directives';
export * from './devices/devices-directives';
export * from './custom-sizes/custom-sizes-directives';
export * from './pixelratio/pixelratio-directives';
export * from './browsers/browsers-directives';

export const RESPONSIVE_DIRECTIVES = [
    XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, IsSmartTv, IsDesktop, IsTablet, IsMobile, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard, IsPortrait, IsLandscape, ShowItSizes, HideItSizes,
    Is1xPixel, IsRetina, Is4k, PixelRatioInfo, IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion,
    ResponsiveSizeInfo, DeviceInfo, OrientationInfo
]; 