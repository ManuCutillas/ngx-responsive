"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var config_1 = require('../config');
/*
 * PIXEL RATIO DIRECTIVES
 * @4k @RETINA @1X
 */
/*======== 1x =========*/
var Is1xPixel = (function (_super) {
    __extends(Is1xPixel, _super);
    function Is1xPixel(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
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
    Is1xPixel.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    Is1xPixel.propDecorators = {
        'is1xPixel': [{ type: core_1.Input },],
    };
    return Is1xPixel;
}(config_1.RESPONSIVE_BASE));
exports.Is1xPixel = Is1xPixel;
/*======== RETINA =========*/
var IsRetina = (function (_super) {
    __extends(IsRetina, _super);
    function IsRetina(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
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
    IsRetina.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsRetina.propDecorators = {
        'isRetina': [{ type: core_1.Input },],
    };
    return IsRetina;
}(config_1.RESPONSIVE_BASE));
exports.IsRetina = IsRetina;
/*======== 4K =========*/
var Is4k = (function (_super) {
    __extends(Is4k, _super);
    function Is4k(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
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
    Is4k.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    Is4k.propDecorators = {
        'isRetina': [{ type: core_1.Input },],
    };
    return Is4k;
}(config_1.RESPONSIVE_BASE));
exports.Is4k = Is4k;
//Next to refactor
/*======== DeviceInfo =========*/
/* DeviceInfo */
var PixelRatioInfo = (function () {
    function PixelRatioInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
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
        var _this = this;
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    PixelRatioInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PixelRatioInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
        }
    };
    PixelRatioInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    PixelRatioInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "pixelratioInfo",
                    inputs: ['pixelratioInfo']
                },] },
    ];
    /** @nocollapse */
    PixelRatioInfo.ctorParameters = [
        { type: config_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
    ];
    PixelRatioInfo.propDecorators = {
        'pixelratio': [{ type: core_1.Output },],
    };
    return PixelRatioInfo;
}());
exports.PixelRatioInfo = PixelRatioInfo;
//# sourceMappingURL=pixelratio-directives.js.map