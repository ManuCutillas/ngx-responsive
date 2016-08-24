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
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 */
/*======== SMART TV STATES =========*/
var IsSmartTv = (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'smarttv';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsSmartTv.prototype, "isSmartTv", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsSmartTv.prototype, "isSmartTv", null);
    IsSmartTv = __decorate([
        core_1.Directive({
            selector: '[isSmartTv]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsSmartTv);
    return IsSmartTv;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsSmartTv = IsSmartTv;
/*======== DESKTOPS STATES =========*/
var IsDesktop = (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'desktop';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsDesktop.prototype, "isDesktop", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsDesktop.prototype, "isDesktop", null);
    IsDesktop = __decorate([
        core_1.Directive({
            selector: '[isDesktop]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsDesktop);
    return IsDesktop;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsDesktop = IsDesktop;
/*======== TABLETS STATES =========*/
var IsTablet = (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'tablet';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsTablet.prototype, "isTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsTablet.prototype, "isTablet", null);
    IsTablet = __decorate([
        core_1.Directive({
            selector: '[isTablet]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsTablet);
    return IsTablet;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsTablet = IsTablet;
/*======== MOBILE STATES =========*/
var IsMobile = (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'mobile';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsMobile.prototype, "isMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsMobile.prototype, "isMobile", null);
    IsMobile = __decorate([
        core_1.Directive({
            selector: '[isMobile]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsMobile);
    return IsMobile;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsMobile = IsMobile;
/*======== DEVICE STATES =========*/
var ShowItDevice = (function (_super) {
    __extends(ShowItDevice, _super);
    function ShowItDevice(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItDevice.prototype, "showItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowItDevice.prototype, "showItDevice", null);
    ShowItDevice = __decorate([
        core_1.Directive({
            selector: '[showItDevice]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowItDevice);
    return ShowItDevice;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.ShowItDevice = ShowItDevice;
var HideItDevice = (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItDevice.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideItDevice.prototype, "hideItDevice", null);
    HideItDevice = __decorate([
        core_1.Directive({
            selector: '[hideItDevice]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideItDevice);
    return HideItDevice;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.HideItDevice = HideItDevice;
/*
 * STANDARD DEVICES DIRECTIVES
 * @isIphone / @isIpad / @isAndroidMobile / @isAndroidTablet / @IsWindowsPhone
 */
/*======== IPHONE =========*/
var IsIphone = (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIphone.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIphone.prototype, "isIphone", null);
    IsIphone = __decorate([
        core_1.Directive({
            selector: '[isIphone]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIphone);
    return IsIphone;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIphone = IsIphone;
var IsIpad = (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIpad.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIpad.prototype, "isIphone", null);
    IsIpad = __decorate([
        core_1.Directive({
            selector: '[isIpad]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIpad);
    return IsIpad;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIpad = IsIpad;
var IsAndroidMobile = (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'android mobile';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsAndroidMobile.prototype, "isAndroidMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsAndroidMobile.prototype, "isAndroidMobile", null);
    IsAndroidMobile = __decorate([
        core_1.Directive({
            selector: '[isAndroidMobile]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsAndroidMobile);
    return IsAndroidMobile;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'android tablet';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsAndroidTablet.prototype, "isAndroidTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsAndroidTablet.prototype, "isAndroidTablet", null);
    IsAndroidTablet = __decorate([
        core_1.Directive({
            selector: '[isAndroidTablet]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsAndroidTablet);
    return IsAndroidTablet;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'windows phone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsWindowsPhone.prototype, "isWindowsPhone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsWindowsPhone.prototype, "isWindowsPhone", null);
    IsWindowsPhone = __decorate([
        core_1.Directive({
            selector: '[isWindowsPhone]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsWindowsPhone);
    return IsWindowsPhone;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItStandard.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowItStandard.prototype, "showItStandard", null);
    ShowItStandard = __decorate([
        core_1.Directive({
            selector: '[showItStandard]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowItStandard);
    return ShowItStandard;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.ShowItStandard = ShowItStandard;
var HideItStandard = (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItStandard.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideItStandard.prototype, "hideItStandard", null);
    HideItStandard = __decorate([
        core_1.Directive({
            selector: '[hideItStandard]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideItStandard);
    return HideItStandard;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.HideItStandard = HideItStandard;
/*
 * ORIENTATION DEVICES DIRECTIVES
 * @isIphone / @isPortrait / @isLandscape
 */
var IsPortrait = (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'portrait';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, "orientation");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], IsPortrait.prototype, "isPortrait", null);
    IsPortrait = __decorate([
        core_1.Directive({
            selector: '[isPortrait]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsPortrait);
    return IsPortrait;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsPortrait = IsPortrait;
var IsLandscape = (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'landscape';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, "orientation");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], IsLandscape.prototype, "isLandscape", null);
    IsLandscape = __decorate([
        core_1.Directive({
            selector: '[isLandscape]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsLandscape);
    return IsLandscape;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsLandscape = IsLandscape;
//NEXT TO REFACTOR
/*======== DeviceInfo =========*/
/* DeviceInfo */
var DeviceInfo = (function () {
    function DeviceInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.device = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    DeviceInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.device.emit(value);
        }
    };
    DeviceInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    DeviceInfo = __decorate([
        core_1.Directive({
            selector: "deviceInfo", inputs: ['deviceInfo'], outputs: ['device']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], DeviceInfo);
    return DeviceInfo;
    var _a;
}());
exports.DeviceInfo = DeviceInfo;
/*======== deviceStandardInfo =========*/
var DeviceStandardInfo = (function () {
    function DeviceStandardInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.standard = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceStandardInfo.prototype, "deviceStandardInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceStandardInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    DeviceStandardInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceStandardInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.standard.emit(value);
        }
    };
    DeviceStandardInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    DeviceStandardInfo = __decorate([
        core_1.Directive({
            selector: "deviceStandardInfo", inputs: ['deviceStandardInfo'], outputs: ['standard']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], DeviceStandardInfo);
    return DeviceStandardInfo;
    var _a;
}());
exports.DeviceStandardInfo = DeviceStandardInfo;
/*======== OrientationInfo =========*/
var OrientationInfo = (function () {
    function OrientationInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.orientation = new core_1.EventEmitter();
    }
    Object.defineProperty(OrientationInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    OrientationInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    OrientationInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    OrientationInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientation.emit(value);
        }
    };
    OrientationInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    OrientationInfo = __decorate([
        core_1.Directive({
            selector: "orientationInfo", inputs: ['orientationInfo'], outputs: ['orientation']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], OrientationInfo);
    return OrientationInfo;
    var _a;
}());
exports.OrientationInfo = OrientationInfo;
//# sourceMappingURL=devices-directives.js.map