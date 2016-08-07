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
    var ResponsiveClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            ResponsiveClass = (function () {
                function ResponsiveClass(_responsiveState, el, _renderer) {
                    this._responsiveState = _responsiveState;
                    this.el = el;
                    this._renderer = _renderer;
                    this.element = el.nativeElement;
                }
                Object.defineProperty(ResponsiveClass.prototype, "xl", {
                    set: function (_class) {
                        console.info(_class);
                        if (this.xlClass !== undefined || this.xlClass !== null) {
                            this.xlActive = true;
                            this.xlClass = _class;
                            this.updateData(this.currentstate);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponsiveClass.prototype, "lg", {
                    set: function (_class) {
                        console.info(_class);
                        if (this.lgClass !== undefined || this.lgClass !== null) {
                            this.lgActive = true;
                            this.lgClass = _class;
                            this.updateData(this.currentstate);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponsiveClass.prototype, "md", {
                    set: function (_class) {
                        if (this.mdClass !== undefined || this.mdClass !== null) {
                            this.mdActive = true;
                            this.mdClass = _class;
                            this.updateData(this.currentstate);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponsiveClass.prototype, "sm", {
                    set: function (_class) {
                        if (this.smClass !== undefined || this.smClass !== null) {
                            this.smActive = true;
                            this.smClass = _class;
                            this.updateData(this.currentstate);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponsiveClass.prototype, "xs", {
                    set: function (_class) {
                        if (this.xsClass !== undefined || this.xsClass !== null) {
                            this.xsActive = true;
                            this.xsClass = _class;
                            this.updateData(this.currentstate);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ResponsiveClass.prototype.ngOnInit = function () {
                    var _this = this;
                    this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this), function (value) {
                        _this.currentstate = value;
                    });
                };
                ResponsiveClass.prototype.ngDoCheck = function () {
                };
                ResponsiveClass.prototype.ngOnDestroy = function () {
                    this._subscription.unsubscribe();
                };
                ResponsiveClass.prototype.updateData = function (value) {
                    var update = this._ifValueChanged(this._noRepeat, value);
                    if (update) {
                        switch (value) {
                            case "xl":
                                if (this.xlActive)
                                    this._renderer.setElementClass(this.element, this.xlClass, true);
                                if (this.lgActive)
                                    this._renderer.setElementClass(this.element, this.lgClass, false);
                                if (this.mdActive)
                                    this._renderer.setElementClass(this.element, this.mdClass, false);
                                if (this.smActive)
                                    this._renderer.setElementClass(this.element, this.smClass, false);
                                if (this.xsActive)
                                    this._renderer.setElementClass(this.element, this.xsClass, false);
                                break;
                            case "lg":
                                if (this.xlActive)
                                    this._renderer.setElementClass(this.element, this.xlClass, false);
                                if (this.lgActive)
                                    this._renderer.setElementClass(this.element, this.lgClass, true);
                                if (this.mdActive)
                                    this._renderer.setElementClass(this.element, this.mdClass, false);
                                if (this.smActive)
                                    this._renderer.setElementClass(this.element, this.smClass, false);
                                if (this.xsActive)
                                    this._renderer.setElementClass(this.element, this.xsClass, false);
                                break;
                            case "md":
                                if (this.xlActive)
                                    this._renderer.setElementClass(this.element, this.xlClass, false);
                                if (this.lgActive)
                                    this._renderer.setElementClass(this.element, this.lgClass, false);
                                if (this.mdActive)
                                    this._renderer.setElementClass(this.element, this.mdClass, true);
                                if (this.smActive)
                                    this._renderer.setElementClass(this.element, this.smClass, false);
                                if (this.xsActive)
                                    this._renderer.setElementClass(this.element, this.xsClass, false);
                                break;
                            case "sm":
                                if (this.xlActive)
                                    this._renderer.setElementClass(this.element, this.xlClass, false);
                                if (this.lgActive)
                                    this._renderer.setElementClass(this.element, this.lgClass, false);
                                if (this.mdActive)
                                    this._renderer.setElementClass(this.element, this.mdClass, false);
                                if (this.smActive)
                                    this._renderer.setElementClass(this.element, this.smClass, true);
                                if (this.xsActive)
                                    this._renderer.setElementClass(this.element, this.xsClass, false);
                                break;
                            case "xs":
                                if (this.xlActive)
                                    this._renderer.setElementClass(this.element, this.xlClass, false);
                                if (this.lgActive)
                                    this._renderer.setElementClass(this.element, this.lgClass, false);
                                if (this.mdActive)
                                    this._renderer.setElementClass(this.element, this.mdClass, false);
                                if (this.smActive)
                                    this._renderer.setElementClass(this.element, this.smClass, false);
                                if (this.xsActive)
                                    this._renderer.setElementClass(this.element, this.xsClass, true);
                                break;
                            default:
                        }
                    }
                };
                ResponsiveClass.prototype._ifValueChanged = function (oldValue, newValue) {
                    if (oldValue === newValue) {
                        return false;
                    }
                    else {
                        this._noRepeat = newValue;
                        return true;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResponsiveClass.prototype, "xl", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResponsiveClass.prototype, "lg", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResponsiveClass.prototype, "md", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResponsiveClass.prototype, "sm", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ResponsiveClass.prototype, "xs", null);
                ResponsiveClass = __decorate([
                    core_1.Directive({
                        selector: "responsiveclass",
                        inputs: ['xl', 'lg', 'md', 'sm', 'xs']
                    }), 
                    __metadata('design:paramtypes', [config_1.ResponsiveState, core_1.ElementRef, core_1.Renderer])
                ], ResponsiveClass);
                return ResponsiveClass;
            }());
            exports_1("ResponsiveClass", ResponsiveClass);
        }
    }
});
//# sourceMappingURL=responsive-css.js.map