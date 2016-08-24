"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var config_1 = require('../config/config');
var responsive_base_1 = require('../config/responsive-base');
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], Is1xPixel.prototype, "is1xPixel", null);
    Is1xPixel = __decorate([
        core_1.Directive({
            selector: '[is1xPixel]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], Is1xPixel);
    return Is1xPixel;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], IsRetina.prototype, "isRetina", null);
    IsRetina = __decorate([
        core_1.Directive({
            selector: '[isRetina]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsRetina);
    return IsRetina;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], Is4k.prototype, "isRetina", null);
    Is4k = __decorate([
        core_1.Directive({
            selector: '[is4k]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], Is4k);
    return Is4k;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], PixelRatioInfo.prototype, "pixelratio", void 0);
    PixelRatioInfo = __decorate([
        core_1.Directive({
            selector: "pixelratioInfo",
            inputs: ['pixelratioInfo']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object])
    ], PixelRatioInfo);
    return PixelRatioInfo;
    var _a, _b;
}());
exports.PixelRatioInfo = PixelRatioInfo;
//# sourceMappingURL=pixelratio-directives.js.map