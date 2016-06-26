/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at JUN 6, 2016 - by ManuCutillas
 * @version_0.2.6
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
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var bootstrap_directives_1 = require('./bootstrap/bootstrap-directives');
var devices_directives_1 = require('./devices/devices-directives');
var custom_sizes_directives_1 = require('./custom-sizes/custom-sizes-directives');
var pixelratio_directives_1 = require('./pixelratio/pixelratio-directives');
var browsers_directives_1 = require('./browsers/browsers-directives');
var responsive_1 = require('./responsive/responsive');
var responsive_css_1 = require('./responsive-css/responsive-css');
/* EXPORT => MODULES */
__export(require('./config/config'));
__export(require('./bootstrap/bootstrap-directives'));
__export(require('./devices/devices-directives'));
__export(require('./custom-sizes/custom-sizes-directives'));
__export(require('./pixelratio/pixelratio-directives'));
__export(require('./browsers/browsers-directives'));
__export(require('./responsive/responsive'));
__export(require('./responsive-css/responsive-css'));
/* RESPONSIVE DIRECTIVES */
exports.RESPONSIVE_DIRECTIVES = [
    responsive_1.Responsive, bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, devices_directives_1.IsSmartTv, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, devices_directives_1.ShowItDevice, devices_directives_1.HideItDevice, devices_directives_1.IsIphone, devices_directives_1.IsIpad,
    devices_directives_1.IsAndroidMobile, devices_directives_1.IsAndroidTablet, devices_directives_1.IsWindowsPhone, devices_directives_1.ShowItStandard, devices_directives_1.HideItStandard, devices_directives_1.IsPortrait, devices_directives_1.IsLandscape, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes,
    pixelratio_directives_1.Is1xPixel, pixelratio_directives_1.IsRetina, pixelratio_directives_1.Is4k, pixelratio_directives_1.PixelRatioInfo, browsers_directives_1.IsChrome, browsers_directives_1.IsFirefox, browsers_directives_1.IsSafari, browsers_directives_1.IsOpera, browsers_directives_1.IsIE, browsers_directives_1.IsIE9, browsers_directives_1.IsIE10, browsers_directives_1.IsIE11, browsers_directives_1.IsIE12, browsers_directives_1.ShowItBrowser, browsers_directives_1.HideItBrowser, browsers_directives_1.ShowIEVersion, browsers_directives_1.HideIEVersion,
    bootstrap_directives_1.ResponsiveSizeInfo, devices_directives_1.DeviceInfo, devices_directives_1.OrientationInfo, responsive_css_1.ResponsiveClass
];
//# sourceMappingURL=index.js.map