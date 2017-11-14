"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var IsSmartTv = /** @class */ (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'smarttv';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsSmartTv.prototype, "isSmartTv", null);
    IsSmartTv = __decorate([
        core_1.Directive({
            selector: '[isSmartTv]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsSmartTv);
    return IsSmartTv;
}(index_1.RESPONSIVE_BASE));
exports.IsSmartTv = IsSmartTv;
var IsDesktop = /** @class */ (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'desktop';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsDesktop.prototype, "isDesktop", null);
    IsDesktop = __decorate([
        core_1.Directive({
            selector: '[isDesktop]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsDesktop);
    return IsDesktop;
}(index_1.RESPONSIVE_BASE));
exports.IsDesktop = IsDesktop;
var IsTablet = /** @class */ (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'tablet';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsTablet.prototype, "isTablet", null);
    IsTablet = __decorate([
        core_1.Directive({
            selector: '[isTablet]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsTablet);
    return IsTablet;
}(index_1.RESPONSIVE_BASE));
exports.IsTablet = IsTablet;
var IsMobile = /** @class */ (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'mobile';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsMobile.prototype, "isMobile", null);
    IsMobile = __decorate([
        core_1.Directive({
            selector: '[isMobile]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsMobile);
    return IsMobile;
}(index_1.RESPONSIVE_BASE));
exports.IsMobile = IsMobile;
var ShowItDevice = /** @class */ (function (_super) {
    __extends(ShowItDevice, _super);
    function ShowItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ShowItDevice.prototype, "showItDevice", null);
    ShowItDevice = __decorate([
        core_1.Directive({
            selector: '[showItDevice]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], ShowItDevice);
    return ShowItDevice;
}(index_1.RESPONSIVE_BASE));
exports.ShowItDevice = ShowItDevice;
var HideItDevice = /** @class */ (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HideItDevice.prototype, "hideItDevice", null);
    HideItDevice = __decorate([
        core_1.Directive({
            selector: '[hideItDevice]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], HideItDevice);
    return HideItDevice;
}(index_1.RESPONSIVE_BASE));
exports.HideItDevice = HideItDevice;
var IsIphone = /** @class */ (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsIphone.prototype, "isIphone", null);
    IsIphone = __decorate([
        core_1.Directive({
            selector: '[isIphone]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsIphone);
    return IsIphone;
}(index_1.RESPONSIVE_BASE));
exports.IsIphone = IsIphone;
var IsIpad = /** @class */ (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsIpad.prototype, "isIphone", null);
    IsIpad = __decorate([
        core_1.Directive({
            selector: '[isIpad]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsIpad);
    return IsIpad;
}(index_1.RESPONSIVE_BASE));
exports.IsIpad = IsIpad;
var IsAndroidMobile = /** @class */ (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android mobile';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsAndroidMobile.prototype, "isAndroidMobile", null);
    IsAndroidMobile = __decorate([
        core_1.Directive({
            selector: '[isAndroidMobile]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsAndroidMobile);
    return IsAndroidMobile;
}(index_1.RESPONSIVE_BASE));
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = /** @class */ (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android tablet';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsAndroidTablet.prototype, "isAndroidTablet", null);
    IsAndroidTablet = __decorate([
        core_1.Directive({
            selector: '[isAndroidTablet]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsAndroidTablet);
    return IsAndroidTablet;
}(index_1.RESPONSIVE_BASE));
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = /** @class */ (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'windows phone';
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IsWindowsPhone.prototype, "isWindowsPhone", null);
    IsWindowsPhone = __decorate([
        core_1.Directive({
            selector: '[isWindowsPhone]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsWindowsPhone);
    return IsWindowsPhone;
}(index_1.RESPONSIVE_BASE));
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = /** @class */ (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ShowItStandard.prototype, "showItStandard", null);
    ShowItStandard = __decorate([
        core_1.Directive({
            selector: '[showItStandard]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], ShowItStandard);
    return ShowItStandard;
}(index_1.RESPONSIVE_BASE));
exports.ShowItStandard = ShowItStandard;
var HideItStandard = /** @class */ (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HideItStandard.prototype, "hideItStandard", null);
    HideItStandard = __decorate([
        core_1.Directive({
            selector: '[hideItStandard]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], HideItStandard);
    return HideItStandard;
}(index_1.RESPONSIVE_BASE));
exports.HideItStandard = HideItStandard;
var IsPortrait = /** @class */ (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'portrait';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IsPortrait.prototype, "isPortrait", null);
    IsPortrait = __decorate([
        core_1.Directive({
            selector: '[isPortrait]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsPortrait);
    return IsPortrait;
}(index_1.RESPONSIVE_BASE));
exports.IsPortrait = IsPortrait;
var IsLandscape = /** @class */ (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'landscape';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IsLandscape.prototype, "isLandscape", null);
    IsLandscape = __decorate([
        core_1.Directive({
            selector: '[isLandscape]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            index_1.ResponsiveState,
            core_1.ChangeDetectorRef])
    ], IsLandscape);
    return IsLandscape;
}(index_1.RESPONSIVE_BASE));
exports.IsLandscape = IsLandscape;
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
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
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind(this));
    };
    DeviceInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.device.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DeviceInfo.prototype, "device", void 0);
    DeviceInfo = __decorate([
        core_1.Directive({
            selector: 'deviceInfo'
        }),
        __metadata("design:paramtypes", [index_1.ResponsiveState,
            core_1.ViewContainerRef,
            core_1.ChangeDetectorRef])
    ], DeviceInfo);
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
var DeviceStandardInfo = /** @class */ (function () {
    function DeviceStandardInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
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
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind(this));
    };
    DeviceStandardInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceStandardInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.standard.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceStandardInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    DeviceStandardInfo = __decorate([
        core_1.Directive({
            selector: "deviceStandardInfo", inputs: ['deviceStandardInfo'], outputs: ['standard']
        }),
        __metadata("design:paramtypes", [index_1.ResponsiveState,
            core_1.ViewContainerRef,
            core_1.ChangeDetectorRef])
    ], DeviceStandardInfo);
    return DeviceStandardInfo;
}());
exports.DeviceStandardInfo = DeviceStandardInfo;
var OrientationInfo = /** @class */ (function () {
    function OrientationInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
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
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind(this));
    };
    OrientationInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    OrientationInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientation.emit(value);
            this.cd.markForCheck();
        }
    };
    OrientationInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    OrientationInfo = __decorate([
        core_1.Directive({
            selector: 'orientationInfo',
            outputs: ['orientation']
        }),
        __metadata("design:paramtypes", [index_1.ResponsiveState,
            core_1.ViewContainerRef,
            core_1.ChangeDetectorRef])
    ], OrientationInfo);
    return OrientationInfo;
}());
exports.OrientationInfo = OrientationInfo;
//# sourceMappingURL=devices-directives.js.map