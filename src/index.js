System.register(['./bootstrap/bootstrap-directives', './devices/devices-directives', './custom-sizes/custom-sizes-directives', './pixelratio/pixelratio-directives', './browsers/browsers-directives', './responsive/responsive', './responsive-css/responsive-css', './responsive-window/responsive-window', './useragent/useragent', './config/config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bootstrap_directives_1, devices_directives_1, custom_sizes_directives_1, pixelratio_directives_1, browsers_directives_1, responsive_1, responsive_css_1, responsive_window_1, useragent_1;
    var RESPONSIVE_DIRECTIVES;
    var exportedNames_1 = {
        'RESPONSIVE_DIRECTIVES': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (bootstrap_directives_1_1) {
                bootstrap_directives_1 = bootstrap_directives_1_1;
                exportStar_1(bootstrap_directives_1_1);
            },
            function (devices_directives_1_1) {
                devices_directives_1 = devices_directives_1_1;
                exportStar_1(devices_directives_1_1);
            },
            function (custom_sizes_directives_1_1) {
                custom_sizes_directives_1 = custom_sizes_directives_1_1;
                exportStar_1(custom_sizes_directives_1_1);
            },
            function (pixelratio_directives_1_1) {
                pixelratio_directives_1 = pixelratio_directives_1_1;
                exportStar_1(pixelratio_directives_1_1);
            },
            function (browsers_directives_1_1) {
                browsers_directives_1 = browsers_directives_1_1;
                exportStar_1(browsers_directives_1_1);
            },
            function (responsive_1_1) {
                responsive_1 = responsive_1_1;
                exportStar_1(responsive_1_1);
            },
            function (responsive_css_1_1) {
                responsive_css_1 = responsive_css_1_1;
                exportStar_1(responsive_css_1_1);
            },
            function (responsive_window_1_1) {
                responsive_window_1 = responsive_window_1_1;
                exportStar_1(responsive_window_1_1);
            },
            function (useragent_1_1) {
                useragent_1 = useragent_1_1;
                exportStar_1(useragent_1_1);
            },
            function (config_1_1) {
                exportStar_1(config_1_1);
            }],
        execute: function() {
            exports_1("RESPONSIVE_DIRECTIVES", RESPONSIVE_DIRECTIVES = [
                responsive_1.Responsive, bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, devices_directives_1.IsSmartTv, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, devices_directives_1.ShowItDevice, devices_directives_1.HideItDevice, devices_directives_1.IsIphone, devices_directives_1.IsIpad,
                devices_directives_1.IsAndroidMobile, devices_directives_1.IsAndroidTablet, devices_directives_1.IsWindowsPhone, devices_directives_1.ShowItStandard, devices_directives_1.HideItStandard, devices_directives_1.IsPortrait, devices_directives_1.IsLandscape, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes,
                pixelratio_directives_1.Is1xPixel, pixelratio_directives_1.IsRetina, pixelratio_directives_1.Is4k, pixelratio_directives_1.PixelRatioInfo, browsers_directives_1.IsChrome, browsers_directives_1.IsFirefox, browsers_directives_1.IsSafari, browsers_directives_1.IsOpera, browsers_directives_1.IsIE, browsers_directives_1.IsIE9, browsers_directives_1.IsIE10, browsers_directives_1.IsIE11, browsers_directives_1.IsIE12, browsers_directives_1.IeInfo, browsers_directives_1.ShowItBrowser, browsers_directives_1.HideItBrowser, browsers_directives_1.ShowIEVersion, browsers_directives_1.HideIEVersion,
                bootstrap_directives_1.ResponsiveSizeInfo, devices_directives_1.DeviceInfo, devices_directives_1.OrientationInfo, responsive_css_1.ResponsiveClass, responsive_window_1.ResponsiveWindow, useragent_1.UserAgentInfo]);
        }
    }
});
//# sourceMappingURL=index.js.map