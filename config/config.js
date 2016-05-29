"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/share');
require('rxjs/add/operator/debounce');
var Rx_1 = require('rxjs/Rx');
// Configuration class in order to allow to change breakpoints values
var ResponsiveConfig = (function () {
    function ResponsiveConfig(config) {
        this.config = {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100
        };
        if (!!config)
            this.config = config;
    }
    ResponsiveConfig = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [Object])
    ], ResponsiveConfig);
    return ResponsiveConfig;
}());
exports.ResponsiveConfig = ResponsiveConfig;
var ResponsiveState = (function () {
    //Optional es un ternario.
    function ResponsiveState(responsiveConfig) {
        var _this = this;
        this.sizeObserver = function () {
            return _this.width = _this.getWidth();
        };
        this.sizeOperations = function () {
            _this.width = _this.getWidth();
            try {
                if (_this._responsiveConfig.config.breakPoints.xl.min <= _this.width) {
                    return 'xl';
                }
                else if (_this._responsiveConfig.config.breakPoints.lg.max >= _this.width && _this._responsiveConfig.config.breakPoints.lg.min <= _this.width) {
                    return 'lg';
                }
                else if (_this._responsiveConfig.config.breakPoints.md.max >= _this.width && _this._responsiveConfig.config.breakPoints.md.min <= _this.width) {
                    return 'md';
                }
                else if (_this._responsiveConfig.config.breakPoints.sm.max >= _this.width && _this._responsiveConfig.config.breakPoints.sm.min <= _this.width) {
                    return 'sm';
                }
                else if (_this._responsiveConfig.config.breakPoints.xs.max >= _this.width) {
                    return 'xs';
                }
            }
            catch (error) {
            }
            return null;
        };
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        var observer = Rx_1.Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth());
        this.elementoObservar = observer.map(this.sizeOperations); //.share() //todo share seems to break startWith behavior;
        this.anchoObservar = observer.map(this.sizeObserver); //.share();
    }
    ResponsiveState.prototype.getWidth = function () {
        return window.innerWidth;
    };
    ResponsiveState.prototype.getDeviceSizeInitial = function () {
        return this.sizeOperations();
    };
    ResponsiveState = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [ResponsiveConfig])
    ], ResponsiveState);
    return ResponsiveState;
}());
exports.ResponsiveState = ResponsiveState;
/*======== responsiveSizeInfo =========*/
/* responsiveSizeInfo */
var ResponsiveSizeInfo = (function () {
    function ResponsiveSizeInfo(_responsiveState) {
        var _this = this;
        this._responsiveState = _responsiveState;
        this._responsiveState.elementoObservar.subscribe(function (value) {
            _this.currentOperation = value;
        });
    }
    ResponsiveSizeInfo.prototype.ngOnInit = function () {
    };
    ResponsiveSizeInfo = __decorate([
        core_1.Directive({
            selector: "[responsiveSizeInfo]",
            exportAs: "responsiveSizeInfoCtrl"
        }), 
        __metadata('design:paramtypes', [ResponsiveState])
    ], ResponsiveSizeInfo);
    return ResponsiveSizeInfo;
}());
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=config.js.map