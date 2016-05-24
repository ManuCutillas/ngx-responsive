/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @created_by Manu Cutillas
 * @created_at May 23, 2016
 * @updated_at May 24, 2016
 * @version_1.0.2
 *
 * Dependencies:
 * @angular/core : "2.0.0-rc.1"
 * rxjs: "5.0.0-beta.6"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *
 * @description : First version of Responsive Detect State for Angular 2
 *
 */
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
var core_1 = require('@angular/core');
require('rxjs/add/operator/share');
var Rx_1 = require('rxjs/Rx');
exports.RESPONSIVE_DEVICE_SIZES = {
    lg: { min: 1200 },
    md: { min: 992, max: 1199 },
    sm: { min: 768, max: 991 },
    xs: { max: 767 } };
var ResponsiveState = (function () {
    function ResponsiveState() {
        var _this = this;
        this.sizeOperations = function () {
            _this.width = function () { return window.innerWidth; };
            try {
                if (exports.RESPONSIVE_DEVICE_SIZES.lg.min < _this.width) {
                    return 'lg';
                }
                else if (exports.RESPONSIVE_DEVICE_SIZES.md.max > _this.width && exports.RESPONSIVE_DEVICE_SIZES.md.min < _this.width) {
                    return 'md';
                }
                else if (exports.RESPONSIVE_DEVICE_SIZES.sm.max > _this.width && exports.RESPONSIVE_DEVICE_SIZES.sm.min < _this.width) {
                    return 'sm';
                }
                else if (exports.RESPONSIVE_DEVICE_SIZES.xs.max > _this.width) {
                    return 'xs';
                }
            }
            catch (error) {
            }
        };
        this.elementoObservar = Rx_1.Observable.fromEvent(window, 'resize').map(this.sizeOperations).share();
    }
    ResponsiveState.prototype.getDeviceSizeInitial = function () {
        return this.sizeOperations();
    };
    ResponsiveState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ResponsiveState);
    return ResponsiveState;
}());
exports.ResponsiveState = ResponsiveState;
/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobiles
 */
/*======== DESKTOPS STATES =========*/
var IsDesktop = (function () {
    function IsDesktop(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.sizeLG = 'lg';
        this.sizeMD = 'md';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(IsDesktop.prototype, "isDesktop", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.sizeMD || valor == _this.sizeLG) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    IsDesktop.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'lg' || initialDevice == 'md') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsDesktop.prototype, "isDesktop", null);
    IsDesktop = __decorate([
        core_1.Directive({
            selector: '[isDesktop]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], IsDesktop);
    return IsDesktop;
    var _a, _b;
}());
exports.IsDesktop = IsDesktop;
/*======== TABLETS STATES =========*/
var IsTablet = (function () {
    function IsTablet(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.sizeSM = 'sm';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(IsTablet.prototype, "isDesktop", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.sizeSM) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    IsTablet.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'sm') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsTablet.prototype, "isDesktop", null);
    IsTablet = __decorate([
        core_1.Directive({
            selector: '[isTablet]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], IsTablet);
    return IsTablet;
    var _a, _b;
}());
exports.IsTablet = IsTablet;
/*======== MOBILE STATES =========*/
var IsMobile = (function () {
    function IsMobile(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.sizeXS = 'xs';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(IsMobile.prototype, "isDesktop", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.sizeXS) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    IsMobile.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'xs') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsMobile.prototype, "isDesktop", null);
    IsMobile = __decorate([
        core_1.Directive({
            selector: '[isMobile]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], IsMobile);
    return IsMobile;
    var _a, _b;
}());
exports.IsMobile = IsMobile;
/*
 *
 * Bootstrap standard screen sizes directives
 * LG / MD / SM / XS
 */
/*======== LG STATES =========*/
var LG = (function () {
    function LG(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.state = 'lg';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(LG.prototype, "lg", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.state) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    LG.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'lg') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LG.prototype, "lg", null);
    LG = __decorate([
        core_1.Directive({
            selector: '[lg]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], LG);
    return LG;
    var _a, _b;
}());
exports.LG = LG;
/*======== MD STATES =========*/
var MD = (function () {
    function MD(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.state = 'md';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(MD.prototype, "md", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.state) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    MD.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'md') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MD.prototype, "md", null);
    MD = __decorate([
        core_1.Directive({
            selector: '[md]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], MD);
    return MD;
    var _a, _b;
}());
exports.MD = MD;
/*======== SM STATES =========*/
var SM = (function () {
    function SM(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.state = 'sm';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(SM.prototype, "sm", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.state) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    SM.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'sm') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SM.prototype, "sm", null);
    SM = __decorate([
        core_1.Directive({
            selector: '[sm]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], SM);
    return SM;
    var _a, _b;
}());
exports.SM = SM;
/*======== XS STATES =========*/
var XS = (function () {
    function XS(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.state = 'xs';
        this.noRepeat = 0;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(XS.prototype, "xs", {
        set: function (element) {
            var _this = this;
            this._responsiveState.elementoObservar.subscribe(function (valor) {
                if (valor == _this.state) {
                    if (_this.noRepeat == 0) {
                        _this.noRepeat = 1;
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
                else {
                    _this.noRepeat = 0;
                    _this.viewContainer.clear();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    XS.prototype.initalDeviceSize = function () {
        var initialDevice = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'xs') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], XS.prototype, "xs", null);
    XS = __decorate([
        core_1.Directive({
            selector: '[xs]',
            providers: [ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, ResponsiveState])
    ], XS);
    return XS;
    var _a, _b;
}());
exports.XS = XS;
//# sourceMappingURL=sizes.js.map