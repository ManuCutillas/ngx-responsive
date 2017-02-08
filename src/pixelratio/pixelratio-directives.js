"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var index_1 = require('../config/index');
/*======== 1x =========*/
var Is1xPixel = (function (_super) {
    __extends(Is1xPixel, _super);
    function Is1xPixel(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._state = '1x';
        this._showWhenTrue = true;
    }
    Object.defineProperty(Is1xPixel.prototype, "is1xPixel", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    Is1xPixel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[is1xPixel]'
                },] },
    ];
    /** @nocollapse */
    Is1xPixel.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    Is1xPixel.propDecorators = {
        'is1xPixel': [{ type: core_1.Input },],
    };
    return Is1xPixel;
}(index_1.RESPONSIVE_BASE));
exports.Is1xPixel = Is1xPixel;
/*======== RETINA =========*/
var IsRetina = (function (_super) {
    __extends(IsRetina, _super);
    function IsRetina(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._state = 'retina';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsRetina.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    IsRetina.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isRetina]'
                },] },
    ];
    /** @nocollapse */
    IsRetina.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsRetina.propDecorators = {
        'isRetina': [{ type: core_1.Input },],
    };
    return IsRetina;
}(index_1.RESPONSIVE_BASE));
exports.IsRetina = IsRetina;
/*======== 4K =========*/
var Is4k = (function (_super) {
    __extends(Is4k, _super);
    function Is4k(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._state = '4k';
        this._showWhenTrue = true;
    }
    Object.defineProperty(Is4k.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    Is4k.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[is4k]'
                },] },
    ];
    /** @nocollapse */
    Is4k.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    Is4k.propDecorators = {
        'isRetina': [{ type: core_1.Input },],
    };
    return Is4k;
}(index_1.RESPONSIVE_BASE));
exports.Is4k = Is4k;
/*======== DeviceInfo =========*/
var PixelRatioInfo = (function () {
    function PixelRatioInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.pixelratio = new core_1.EventEmitter();
    }
    Object.defineProperty(PixelRatioInfo.prototype, "pixelratioInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    PixelRatioInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateData.bind(this));
    };
    PixelRatioInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PixelRatioInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    };
    PixelRatioInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this.noRepeat = newValue;
        return true;
    };
    PixelRatioInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'pixelratioInfo',
                    inputs: ['pixelratioInfo']
                },] },
    ];
    /** @nocollapse */
    PixelRatioInfo.ctorParameters = function () { return [
        { type: index_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    PixelRatioInfo.propDecorators = {
        'pixelratio': [{ type: core_1.Output },],
    };
    return PixelRatioInfo;
}());
exports.PixelRatioInfo = PixelRatioInfo;
//# sourceMappingURL=pixelratio-directives.js.map