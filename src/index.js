/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at Sept 2, 2016 - by ManuCutillas
 * @version_0.4.5
 *
 * Dependencies:
 * @angular/core : "2.0.0-rc.6"
 * rxjs: "5.0.0-beta.11"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NG2-RESPONSIVE
 *
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* IMPORTS => MODULES */
var core_1 = require('@angular/core');
var config_1 = require('./config/config');
var bootstrap_directives_1 = require('./bootstrap/bootstrap-directives');
var devices_directives_1 = require('./devices/devices-directives');
var custom_sizes_directives_1 = require('./custom-sizes/custom-sizes-directives');
var pixelratio_directives_1 = require('./pixelratio/pixelratio-directives');
var browsers_directives_1 = require('./browsers/browsers-directives');
var responsive_1 = require('./responsive/responsive');
var responsive_window_1 = require('./responsive-window/responsive-window');
var useragent_1 = require('./useragent/useragent');
var config_2 = require('./config/config');
exports.ResponsiveState = config_2.ResponsiveState;
exports.ResponsiveConfig = config_2.ResponsiveConfig;
/* RESPONSIVE DIRECTIVES */
exports.RESPONSIVE_DIRECTIVES = [
    responsive_1.Responsive, bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, devices_directives_1.IsSmartTv, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, devices_directives_1.ShowItDevice, devices_directives_1.HideItDevice, devices_directives_1.IsIphone, devices_directives_1.IsIpad,
    devices_directives_1.IsAndroidMobile, devices_directives_1.IsAndroidTablet, devices_directives_1.IsWindowsPhone, devices_directives_1.ShowItStandard, devices_directives_1.HideItStandard, devices_directives_1.IsPortrait, devices_directives_1.IsLandscape, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes,
    pixelratio_directives_1.Is1xPixel, pixelratio_directives_1.IsRetina, pixelratio_directives_1.Is4k, pixelratio_directives_1.PixelRatioInfo, browsers_directives_1.IsChrome, browsers_directives_1.IsFirefox, browsers_directives_1.IsSafari, browsers_directives_1.IsOpera, browsers_directives_1.IsIE, browsers_directives_1.IsIE9, browsers_directives_1.IsIE10, browsers_directives_1.IsIE11, browsers_directives_1.IsIE12, browsers_directives_1.IeInfo, browsers_directives_1.ShowItBrowser, browsers_directives_1.HideItBrowser, browsers_directives_1.ShowIEVersion, browsers_directives_1.HideIEVersion,
    bootstrap_directives_1.ResponsiveSizeInfo, devices_directives_1.DeviceInfo, devices_directives_1.OrientationInfo, responsive_window_1.ResponsiveWindow, useragent_1.UserAgentInfo];
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule = __decorate([
        core_1.NgModule({
            declarations: [responsive_1.Responsive, bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, devices_directives_1.IsSmartTv, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, devices_directives_1.ShowItDevice, devices_directives_1.HideItDevice, devices_directives_1.IsIphone, devices_directives_1.IsIpad,
                devices_directives_1.IsAndroidMobile, devices_directives_1.IsAndroidTablet, devices_directives_1.IsWindowsPhone, devices_directives_1.ShowItStandard, devices_directives_1.HideItStandard, devices_directives_1.IsPortrait, devices_directives_1.IsLandscape, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes,
                pixelratio_directives_1.Is1xPixel, pixelratio_directives_1.IsRetina, pixelratio_directives_1.Is4k, pixelratio_directives_1.PixelRatioInfo, browsers_directives_1.IsChrome, browsers_directives_1.IsFirefox, browsers_directives_1.IsSafari, browsers_directives_1.IsOpera, browsers_directives_1.IsIE, browsers_directives_1.IsIE9, browsers_directives_1.IsIE10, browsers_directives_1.IsIE11, browsers_directives_1.IsIE12, browsers_directives_1.IeInfo, browsers_directives_1.ShowItBrowser, browsers_directives_1.HideItBrowser, browsers_directives_1.ShowIEVersion, browsers_directives_1.HideIEVersion,
                bootstrap_directives_1.ResponsiveSizeInfo, devices_directives_1.DeviceInfo, devices_directives_1.OrientationInfo, responsive_window_1.ResponsiveWindow, useragent_1.UserAgentInfo],
            exports: [responsive_1.Responsive, bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, devices_directives_1.IsSmartTv, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, devices_directives_1.ShowItDevice, devices_directives_1.HideItDevice, devices_directives_1.IsIphone, devices_directives_1.IsIpad,
                devices_directives_1.IsAndroidMobile, devices_directives_1.IsAndroidTablet, devices_directives_1.IsWindowsPhone, devices_directives_1.ShowItStandard, devices_directives_1.HideItStandard, devices_directives_1.IsPortrait, devices_directives_1.IsLandscape, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes,
                pixelratio_directives_1.Is1xPixel, pixelratio_directives_1.IsRetina, pixelratio_directives_1.Is4k, pixelratio_directives_1.PixelRatioInfo, browsers_directives_1.IsChrome, browsers_directives_1.IsFirefox, browsers_directives_1.IsSafari, browsers_directives_1.IsOpera, browsers_directives_1.IsIE, browsers_directives_1.IsIE9, browsers_directives_1.IsIE10, browsers_directives_1.IsIE11, browsers_directives_1.IsIE12, browsers_directives_1.IeInfo, browsers_directives_1.ShowItBrowser, browsers_directives_1.HideItBrowser, browsers_directives_1.ShowIEVersion, browsers_directives_1.HideIEVersion,
                bootstrap_directives_1.ResponsiveSizeInfo, devices_directives_1.DeviceInfo, devices_directives_1.OrientationInfo, responsive_window_1.ResponsiveWindow, useragent_1.UserAgentInfo],
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsiveModule);
    return ResponsiveModule;
}());
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map