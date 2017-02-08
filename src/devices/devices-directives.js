"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var index_1 = require('../config/index');
var IsSmartTv = (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsSmartTv.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isSmartTv]'
                },] },
    ];
    /** @nocollapse */
    IsSmartTv.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsSmartTv.propDecorators = {
        'isSmartTv': [{ type: core_1.Input },],
    };
    return IsSmartTv;
}(index_1.RESPONSIVE_BASE));
exports.IsSmartTv = IsSmartTv;
var IsDesktop = (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsDesktop.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isDesktop]'
                },] },
    ];
    /** @nocollapse */
    IsDesktop.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsDesktop.propDecorators = {
        'isDesktop': [{ type: core_1.Input },],
    };
    return IsDesktop;
}(index_1.RESPONSIVE_BASE));
exports.IsDesktop = IsDesktop;
var IsTablet = (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsTablet.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isTablet]'
                },] },
    ];
    /** @nocollapse */
    IsTablet.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsTablet.propDecorators = {
        'isTablet': [{ type: core_1.Input },],
    };
    return IsTablet;
}(index_1.RESPONSIVE_BASE));
exports.IsTablet = IsTablet;
var IsMobile = (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsMobile.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isMobile]'
                },] },
    ];
    /** @nocollapse */
    IsMobile.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsMobile.propDecorators = {
        'isMobile': [{ type: core_1.Input },],
    };
    return IsMobile;
}(index_1.RESPONSIVE_BASE));
exports.IsMobile = IsMobile;
var ShowItDevice = (function (_super) {
    __extends(ShowItDevice, _super);
    function ShowItDevice(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItDevice.prototype, "showItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    ShowItDevice.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showItDevice]'
                },] },
    ];
    /** @nocollapse */
    ShowItDevice.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    ShowItDevice.propDecorators = {
        'showItDevice': [{ type: core_1.Input },],
    };
    return ShowItDevice;
}(index_1.RESPONSIVE_BASE));
exports.ShowItDevice = ShowItDevice;
var HideItDevice = (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItDevice.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    HideItDevice.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideItDevice]'
                },] },
    ];
    /** @nocollapse */
    HideItDevice.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    HideItDevice.propDecorators = {
        'hideItDevice': [{ type: core_1.Input },],
    };
    return HideItDevice;
}(index_1.RESPONSIVE_BASE));
exports.HideItDevice = HideItDevice;
var IsIphone = (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsIphone.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIphone]'
                },] },
    ];
    /** @nocollapse */
    IsIphone.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsIphone.propDecorators = {
        'isIphone': [{ type: core_1.Input },],
    };
    return IsIphone;
}(index_1.RESPONSIVE_BASE));
exports.IsIphone = IsIphone;
var IsIpad = (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsIpad.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIpad]'
                },] },
    ];
    /** @nocollapse */
    IsIpad.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsIpad.propDecorators = {
        'isIphone': [{ type: core_1.Input },],
    };
    return IsIpad;
}(index_1.RESPONSIVE_BASE));
exports.IsIpad = IsIpad;
var IsAndroidMobile = (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsAndroidMobile.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isAndroidMobile]'
                },] },
    ];
    /** @nocollapse */
    IsAndroidMobile.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsAndroidMobile.propDecorators = {
        'isAndroidMobile': [{ type: core_1.Input },],
    };
    return IsAndroidMobile;
}(index_1.RESPONSIVE_BASE));
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsAndroidTablet.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isAndroidTablet]'
                },] },
    ];
    /** @nocollapse */
    IsAndroidTablet.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsAndroidTablet.propDecorators = {
        'isAndroidTablet': [{ type: core_1.Input },],
    };
    return IsAndroidTablet;
}(index_1.RESPONSIVE_BASE));
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
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
    IsWindowsPhone.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isWindowsPhone]'
                },] },
    ];
    /** @nocollapse */
    IsWindowsPhone.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsWindowsPhone.propDecorators = {
        'isWindowsPhone': [{ type: core_1.Input },],
    };
    return IsWindowsPhone;
}(index_1.RESPONSIVE_BASE));
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItStandard.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    ShowItStandard.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showItStandard]'
                },] },
    ];
    /** @nocollapse */
    ShowItStandard.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    ShowItStandard.propDecorators = {
        'showItStandard': [{ type: core_1.Input },],
    };
    return ShowItStandard;
}(index_1.RESPONSIVE_BASE));
exports.ShowItStandard = ShowItStandard;
var HideItStandard = (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItStandard.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    HideItStandard.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideItStandard]'
                },] },
    ];
    /** @nocollapse */
    HideItStandard.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    HideItStandard.propDecorators = {
        'hideItStandard': [{ type: core_1.Input },],
    };
    return HideItStandard;
}(index_1.RESPONSIVE_BASE));
exports.HideItStandard = HideItStandard;
var IsPortrait = (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._state = 'portrait';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    IsPortrait.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isPortrait]'
                },] },
    ];
    /** @nocollapse */
    IsPortrait.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsPortrait.propDecorators = {
        'isPortrait': [{ type: core_1.Input },],
    };
    return IsPortrait;
}(index_1.RESPONSIVE_BASE));
exports.IsPortrait = IsPortrait;
var IsLandscape = (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState, cd) {
        _super.call(this, templateRef, viewContainer, _responsiveState, cd);
        this._state = 'landscape';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    IsLandscape.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isLandscape]'
                },] },
    ];
    /** @nocollapse */
    IsLandscape.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: index_1.ResponsiveState, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IsLandscape.propDecorators = {
        'isLandscape': [{ type: core_1.Input },],
    };
    return IsLandscape;
}(index_1.RESPONSIVE_BASE));
exports.IsLandscape = IsLandscape;
var DeviceInfo = (function () {
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
    DeviceInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'deviceInfo'
                },] },
    ];
    /** @nocollapse */
    DeviceInfo.ctorParameters = function () { return [
        { type: index_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    DeviceInfo.propDecorators = {
        'device': [{ type: core_1.Output },],
    };
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
var DeviceStandardInfo = (function () {
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
    DeviceStandardInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "deviceStandardInfo", inputs: ['deviceStandardInfo'], outputs: ['standard']
                },] },
    ];
    /** @nocollapse */
    DeviceStandardInfo.ctorParameters = function () { return [
        { type: index_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return DeviceStandardInfo;
}());
exports.DeviceStandardInfo = DeviceStandardInfo;
var OrientationInfo = (function () {
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
    OrientationInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'orientationInfo',
                    outputs: ['orientation']
                },] },
    ];
    /** @nocollapse */
    OrientationInfo.ctorParameters = function () { return [
        { type: index_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return OrientationInfo;
}());
exports.OrientationInfo = OrientationInfo;
//# sourceMappingURL=devices-directives.js.map