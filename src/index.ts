/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at JUN 26, 2016 - by ManuCutillas
 * @version_0.3.0
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

/* IMPORTS => MODULES */
import {ResponsiveConfigInterface} from './config/interfaces';
import {XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, ResponsiveSizeInfo} from './bootstrap/bootstrap-directives';
import {IsDesktop, IsTablet, IsMobile, IsSmartTv, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard,
    IsPortrait, IsLandscape, DeviceInfo, DeviceStandardInfo, OrientationInfo } from './devices/devices-directives';
import {ShowItSizes, HideItSizes} from './custom-sizes/custom-sizes-directives';
import {Is1xPixel, IsRetina, Is4k, PixelRatioInfo} from './pixelratio/pixelratio-directives';
import {IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion, IeInfo, BrowserInfo} from './browsers/browsers-directives';
import {Responsive} from './responsive/responsive';
import {ResponsiveClass} from './responsive-css/responsive-css';
import {ResponsiveWindow} from './responsive-window/responsive-window';
/* EXPORT => MODULES */
export * from './config/interfaces';
export * from './config/config';
export * from './bootstrap/bootstrap-directives';
export * from './devices/devices-directives';
export * from './custom-sizes/custom-sizes-directives';
export * from './pixelratio/pixelratio-directives';
export * from './browsers/browsers-directives';
export * from './responsive/responsive';
export * from './responsive-css/responsive-css';
export * from './responsive-window/responsive-window';

/* RESPONSIVE DIRECTIVES */
export const RESPONSIVE_DIRECTIVES = [
    Responsive, XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, IsSmartTv, IsDesktop, IsTablet, IsMobile, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard, IsPortrait, IsLandscape, ShowItSizes, HideItSizes,
    Is1xPixel, IsRetina, Is4k, PixelRatioInfo, IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion,
    ResponsiveSizeInfo, DeviceInfo, OrientationInfo, ResponsiveClass, ResponsiveWindow
]; 