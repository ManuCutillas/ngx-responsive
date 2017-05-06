"use strict";
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
 * @description : NG2-RESPONSIVE
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./config/index");
var index_2 = require("./bootstrap/index");
var index_3 = require("./browsers/index");
var index_4 = require("./custom-sizes/index");
var index_5 = require("./devices/index");
var index_6 = require("./pixelratio/index");
var index_7 = require("./responsive/index");
var index_8 = require("./responsive-window/index");
var index_9 = require("./useragent/index");
var index_10 = require("./config/index");
exports.ResponsiveConfig = index_10.ResponsiveConfig;
exports.ResponsiveState = index_10.ResponsiveState;
exports.ResponsiveConfigInterface = index_10.ResponsiveConfigInterface;
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    return ResponsiveModule;
}());
ResponsiveModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE
                ],
                exports: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE,
                ],
                providers: [
                    index_1.ResponsiveState,
                    index_1.ResponsiveConfig
                ]
            },] },
];
/** @nocollapse */
ResponsiveModule.ctorParameters = function () { return []; };
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map