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
require('rxjs/add/operator/share');
require('rxjs/add/operator/debounce');
var config_1 = require('../config/config');
/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 *  Work in : Detect device by navigator and refactor the code with abstract class
 */
var DEVICE_DETECT = (function () {
    function DEVICE_DETECT(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    DEVICE_DETECT.prototype.setGrid = function (grid_state) {
        this._grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
    };
    DEVICE_DETECT.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));
    };
    DEVICE_DETECT.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DEVICE_DETECT.prototype.showHide = function (show) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    };
    DEVICE_DETECT.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }
        else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        }
    };
    return DEVICE_DETECT;
}());
/*======== SMART TV STATES =========*/
var IsSmartTv = (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'smarttv';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsSmartTv.prototype, "isSmartTv", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isSmartTv]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsSmartTv);
    return IsSmartTv;
}(DEVICE_DETECT));
exports.IsSmartTv = IsSmartTv;
/*======== DESKTOPS STATES =========*/
var IsDesktop = (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'desktop';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsDesktop.prototype, "isDesktop", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isDesktop]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsDesktop);
    return IsDesktop;
}(DEVICE_DETECT));
exports.IsDesktop = IsDesktop;
/*======== TABLETS STATES =========*/
var IsTablet = (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'tablet';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsTablet.prototype, "isTablet", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isTablet]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsTablet);
    return IsTablet;
}(DEVICE_DETECT));
exports.IsTablet = IsTablet;
/*======== MOBILE STATES =========*/
var IsMobile = (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'mobile';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsMobile.prototype, "isMobile", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isMobile]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsMobile);
    return IsMobile;
}(DEVICE_DETECT));
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
            this.setGrid(grid_state);
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
            selector: '[showItDevice]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowItDevice);
    return ShowItDevice;
}(DEVICE_DETECT));
exports.ShowItDevice = ShowItDevice;
var HideItDevice = (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItDevice.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state);
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
            selector: '[hideItDevice]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideItDevice);
    return HideItDevice;
}(DEVICE_DETECT));
exports.HideItDevice = HideItDevice;
var STANDARD_DEVICES = (function () {
    function STANDARD_DEVICES(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    STANDARD_DEVICES.prototype.setGrid = function (grid_state) {
        this._grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
    };
    STANDARD_DEVICES.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));
    };
    STANDARD_DEVICES.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    STANDARD_DEVICES.prototype.showHide = function (show) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    };
    STANDARD_DEVICES.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }
        else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        }
    };
    return STANDARD_DEVICES;
}());
/*======== IPHONE =========*/
var IsIphone = (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'iphone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIphone.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isIphone]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIphone);
    return IsIphone;
}(STANDARD_DEVICES));
exports.IsIphone = IsIphone;
var IsIpad = (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'iphone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIpad.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isIpad]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIpad);
    return IsIpad;
}(STANDARD_DEVICES));
exports.IsIpad = IsIpad;
var IsAndroidMobile = (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'android mobile';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsAndroidMobile.prototype, "isAndroidMobile", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isAndroidMobile]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsAndroidMobile);
    return IsAndroidMobile;
}(STANDARD_DEVICES));
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'android tablet';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsAndroidTablet.prototype, "isAndroidTablet", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isAndroidTablet]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsAndroidTablet);
    return IsAndroidTablet;
}(STANDARD_DEVICES));
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'windows phone';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsWindowsPhone.prototype, "isWindowsPhone", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isWindowsPhone]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsWindowsPhone);
    return IsWindowsPhone;
}(STANDARD_DEVICES));
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItStandard.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state);
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
            selector: '[showItStandard]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowItStandard);
    return ShowItStandard;
}(STANDARD_DEVICES));
exports.ShowItStandard = ShowItStandard;
var HideItStandard = (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItStandard.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state);
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
            selector: '[hideItStandard]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideItStandard);
    return HideItStandard;
}(STANDARD_DEVICES));
exports.HideItStandard = HideItStandard;
var ORIENTATION = (function () {
    function ORIENTATION(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    ORIENTATION.prototype.setGrid = function (grid_state) {
        return this._grid_state = grid_state;
    };
    ORIENTATION.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));
    };
    ORIENTATION.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ORIENTATION.prototype.showHide = function (show) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    };
    ORIENTATION.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!(this._grid_state == device));
        }
        else {
            this.showHide(!(!!(this._grid_state == device)));
        }
    };
    return ORIENTATION;
}());
var IsPortrait = (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'portrait';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isPortrait]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsPortrait);
    return IsPortrait;
}(STANDARD_DEVICES));
exports.IsPortrait = IsPortrait;
var IsLandscape = (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'landscape';
        this._showWhenTrue = false;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this.state);
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
            selector: '[isLandscape]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsLandscape);
    return IsLandscape;
}(STANDARD_DEVICES));
exports.IsLandscape = IsLandscape;
//# sourceMappingURL=devices-directives.js.map