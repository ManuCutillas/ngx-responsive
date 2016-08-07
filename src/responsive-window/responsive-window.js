System.register(['@angular/core', '../config/config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1;
    var ResponsiveWindow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ResponsiveWindow = (function () {
                function ResponsiveWindow(_responsiveState, el) {
                    this._responsiveState = _responsiveState;
                    this.el = el;
                    this.element = el.nativeElement;
                }
                ResponsiveWindow.prototype.ngOnInit = function () { this._responsiveState.registerWindow(this); };
                ResponsiveWindow.prototype.ngDoCheck = function () {
                    var update = this._ifValueChanged(this._noRepeat, this.name);
                    if (update) {
                        this._responsiveState.unregisterWindow(this);
                        this._responsiveState.registerWindow(this);
                    }
                };
                ResponsiveWindow.prototype.ngOnDestroy = function () { this._responsiveState.unregisterWindow(this); };
                ResponsiveWindow.prototype.getWidth = function () { return this.element.offsetWidth; };
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
                    __metadata('design:paramtypes', [config_1.ResponsiveState, core_1.ElementRef])
                ], ResponsiveWindow);
                return ResponsiveWindow;
            }());
            exports_1("ResponsiveWindow", ResponsiveWindow);
        }
    }
});
//# sourceMappingURL=responsive-window.js.map