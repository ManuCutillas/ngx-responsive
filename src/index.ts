/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at Sept 15, 2016 - by ManuCutillas
 * @version_0.4.6
 *
 * Dependencies:
 * @angular/core : "2.0.0"
 * rxjs: "5.0.0-beta.13"
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
import {ResponsiveConfigInterface } from './config/interfaces';
import {ResponsiveState} from './config/config';
import {XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, ResponsiveSizeInfo} from './bootstrap/bootstrap-directives';
import {IsDesktop, IsTablet, IsMobile, IsSmartTv, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard,
    IsPortrait, IsLandscape, DeviceInfo, DeviceStandardInfo, OrientationInfo } from './devices/devices-directives';
import {ShowItSizes, HideItSizes} from './custom-sizes/custom-sizes-directives';
import {Is1xPixel, IsRetina, Is4k, PixelRatioInfo} from './pixelratio/pixelratio-directives';
import {IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion, IeInfo, BrowserInfo} from './browsers/browsers-directives';
import {Responsive} from './responsive/responsive';
import {ResponsiveWindow} from './responsive-window/responsive-window';
import { UserAgentInfo } from './useragent/useragent';

export { ResponsiveConfigInterface} from './config/interfaces';
export { ResponsiveState, ResponsiveConfig } from './config/config';

@NgModule({
 declarations: [Responsive, XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, IsSmartTv, IsDesktop, IsTablet, IsMobile, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard, IsPortrait, IsLandscape, ShowItSizes, HideItSizes,
    Is1xPixel, IsRetina, Is4k, PixelRatioInfo, IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, IeInfo, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion,
    ResponsiveSizeInfo, DeviceInfo, OrientationInfo, ResponsiveWindow, UserAgentInfo],
 exports: [Responsive, XL, LG, MD, SM, XS, ShowItBootstrap, HideItBootstrap, IsSmartTv, IsDesktop, IsTablet, IsMobile, ShowItDevice, HideItDevice, IsIphone, IsIpad,
    IsAndroidMobile, IsAndroidTablet, IsWindowsPhone, ShowItStandard, HideItStandard, IsPortrait, IsLandscape, ShowItSizes, HideItSizes,
    Is1xPixel, IsRetina, Is4k, PixelRatioInfo, IsChrome, IsFirefox, IsSafari, IsOpera, IsIE, IsIE9, IsIE10, IsIE11, IsIE12, IeInfo, ShowItBrowser, HideItBrowser, ShowIEVersion, HideIEVersion,
    ResponsiveSizeInfo, DeviceInfo, OrientationInfo, ResponsiveWindow, UserAgentInfo],
  providers: [ResponsiveState]
})
export class ResponsiveModule { }   