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
 * rxjs: "5.0.0-beta.12"
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
/* IMPORTS => MODULES */
var core_1 = require('@angular/core');
var config_1 = require('./config');
exports.ResponsiveConfig = config_1.ResponsiveConfig;
exports.ResponsiveState = config_1.ResponsiveState;
var bootstrap_1 = require('./bootstrap');
var browsers_1 = require('./browsers');
var custom_sizes_1 = require('./custom-sizes');
var devices_1 = require('./devices');
var pixelratio_1 = require('./pixelratio');
var responsive_1 = require('./responsive');
var responsive_window_1 = require('./responsive-window');
var useragent_1 = require('./useragent');
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        bootstrap_1.BOOTSTRAP_DIRECTIVES,
                        browsers_1.BROWSER_DIRECTIVES,
                        custom_sizes_1.CUSTOMSIZES_DIRECTIVES,
                        devices_1.DEVICES_DIRECTIVES,
                        pixelratio_1.PIXELRATIO_DIRECTIVES,
                        responsive_1.RESPONSIVE_DIRECTIVE,
                        responsive_window_1.RESPONSIVEWINDOW_DIRECTIVE,
                        useragent_1.USERAGENT_DIRECTIVE
                    ],
                    exports: [
                        bootstrap_1.BOOTSTRAP_DIRECTIVES,
                        browsers_1.BROWSER_DIRECTIVES,
                        custom_sizes_1.CUSTOMSIZES_DIRECTIVES,
                        devices_1.DEVICES_DIRECTIVES,
                        pixelratio_1.PIXELRATIO_DIRECTIVES,
                        responsive_1.RESPONSIVE_DIRECTIVE,
                        responsive_window_1.RESPONSIVEWINDOW_DIRECTIVE,
                        useragent_1.USERAGENT_DIRECTIVE,
                    ],
                    providers: [config_1.ResponsiveState, config_1.ResponsiveConfig]
                },] },
    ];
    /** @nocollapse */
    ResponsiveModule.ctorParameters = [];
    return ResponsiveModule;
}());
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map