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
var config_1 = require('../config/config');
var ResponsiveWindow = (function () {
    ////CONSTRUCTOR
    function ResponsiveWindow(_responsiveState, el) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.element = el.nativeElement;
    }
    ////LIFECICLE METHODS
    ResponsiveWindow.prototype.ngOnInit = function () { this._responsiveState.registerWindow(this); };
    ResponsiveWindow.prototype.ngDoCheck = function () {
        var update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
        }
    };
    ResponsiveWindow.prototype.ngOnDestroy = function () { this._responsiveState.unregisterWindow(this); };
    ////Public Methods
    ResponsiveWindow.prototype.getWidth = function () { return this.element.offsetWidth; };
    ////Private Methods
    ResponsiveWindow.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    __decorate([
        core_1.Input('responsive-window'), 
        __metadata('design:type', String)
    ], ResponsiveWindow.prototype, "name", void 0);
    ResponsiveWindow = __decorate([
        core_1.Directive({
            selector: "[responsive-window]"
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], ResponsiveWindow);
    return ResponsiveWindow;
    var _a;
}());
exports.ResponsiveWindow = ResponsiveWindow;
//# sourceMappingURL=responsive-window.js.map