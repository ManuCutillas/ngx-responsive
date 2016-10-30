"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var config_1 = require('../config');
/*======== CUSTOM SIZES =========*/
/* show */
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    ShowItSizes.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showItSizes]'
                },] },
    ];
    /** @nocollapse */
    ShowItSizes.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    ShowItSizes.propDecorators = {
        'showItSizes': [{ type: core_1.Input },],
    };
    return ShowItSizes;
}(config_1.RESPONSIVE_BASE));
exports.ShowItSizes = ShowItSizes;
/* hide */
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    HideItSizes.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideItSizes]'
                },] },
    ];
    /** @nocollapse */
    HideItSizes.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    HideItSizes.propDecorators = {
        'hideItSizes': [{ type: core_1.Input },],
    };
    return HideItSizes;
}(config_1.RESPONSIVE_BASE));
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map