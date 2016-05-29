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
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
//Import Bootstrap Directives
var bootstrap_directives_1 = require('./bootstrap/bootstrap-directives');
//Import Devices Directives
var devices_directives_1 = require('./devices/devices-directives');
//Import Custom Sizes Directives
var custom_sizes_directives_1 = require('./custom-sizes/custom-sizes-directives');
/* EXPORT => MODULES */
__export(require('./config/config'));
__export(require('./bootstrap/bootstrap-directives'));
__export(require('./devices/devices-directives'));
__export(require('./custom-sizes/custom-sizes-directives'));
exports.RESPONSIVE_DIRECTIVES = [
    bootstrap_directives_1.XL, bootstrap_directives_1.LG, bootstrap_directives_1.MD, bootstrap_directives_1.SM, bootstrap_directives_1.XS, devices_directives_1.IsDesktop, devices_directives_1.IsTablet, devices_directives_1.IsMobile, bootstrap_directives_1.ShowItBootstrap, bootstrap_directives_1.HideItBootstrap, custom_sizes_directives_1.ShowItSizes, custom_sizes_directives_1.HideItSizes
];
//# sourceMappingURL=index.js.map