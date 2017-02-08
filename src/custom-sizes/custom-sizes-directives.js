"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var index_1 = require('../config/index');
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    ShowItSizes.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    ShowItSizes.propDecorators = {
        'showItSizes': [{ type: core_1.Input },],
    };
    return ShowItSizes;
}(index_1.RESPONSIVE_BASE));
exports.ShowItSizes = ShowItSizes;
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    HideItSizes.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    HideItSizes.propDecorators = {
        'hideItSizes': [{ type: core_1.Input },],
    };
    return HideItSizes;
}(index_1.RESPONSIVE_BASE));
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map