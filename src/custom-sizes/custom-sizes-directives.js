"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItSizes;
}(index_1.RESPONSIVE_BASE));
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
exports.ShowItSizes = ShowItSizes;
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return HideItSizes;
}(index_1.RESPONSIVE_BASE));
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
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map