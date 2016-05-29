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
require('rxjs/add/operator/debounce');
var config_1 = require('../config/config');
/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 *  Work in : Detect device by navigator and refactor the code with abstract class
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
        if (this.initialDeviceSize()) {
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
    IsDesktop.prototype.initialDeviceSize = function () {
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
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsDesktop);
    return IsDesktop;
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
    Object.defineProperty(IsTablet.prototype, "isTablet", {
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
    ], IsTablet.prototype, "isTablet", null);
    IsTablet = __decorate([
        core_1.Directive({
            selector: '[isTablet]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsTablet);
    return IsTablet;
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
        this.userAgent = window.navigator.userAgent;
        this.detectisMobile = false;
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }
    Object.defineProperty(IsMobile.prototype, "isMobile", {
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
    ], IsMobile.prototype, "isMobile", null);
    IsMobile = __decorate([
        core_1.Directive({
            selector: '[isMobile]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsMobile);
    return IsMobile;
}());
exports.IsMobile = IsMobile;
//# sourceMappingURL=devices-directives.js.map