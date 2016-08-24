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
* BROWSERS DIRECTIVES
* @CHROME @FIREFOX @IE @OPERA
*
*/
/*======== CHROME =========*/
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'chrome';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsChrome.prototype, "isChrome", null);
    IsChrome = __decorate([
        core_1.Directive({
            selector: '[isChrome]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsChrome);
    return IsChrome;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsChrome = IsChrome;
/*======== FIREFOX =========*/
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'firefox';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsFirefox.prototype, "isFirefox", null);
    IsFirefox = __decorate([
        core_1.Directive({
            selector: '[isFirefox]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsFirefox);
    return IsFirefox;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsFirefox = IsFirefox;
/*======== SAFARI =========*/
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'safari';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsSafari.prototype, "isSafari", null);
    IsSafari = __decorate([
        core_1.Directive({
            selector: '[isSafari]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsSafari);
    return IsSafari;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsSafari = IsSafari;
/*======== OPERA =========*/
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'opera';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsOpera.prototype, "isOpera", null);
    IsOpera = __decorate([
        core_1.Directive({
            selector: '[isOpera]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsOpera);
    return IsOpera;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsOpera = IsOpera;
/*======== IE =========*/
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIE.prototype, "isIE", null);
    IsIE = __decorate([
        core_1.Directive({
            selector: '[isIE]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIE);
    return IsIE;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowItBrowser.prototype, "showItBrowser", null);
    ShowItBrowser = __decorate([
        core_1.Directive({
            selector: '[showItBrowser]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowItBrowser);
    return ShowItBrowser;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideItBrowser.prototype, "hideItBrowser", null);
    HideItBrowser = __decorate([
        core_1.Directive({
            selector: '[hideItBrowser]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideItBrowser);
    return HideItBrowser;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.HideItBrowser = HideItBrowser;
/*
* IE VERSIONS DIRECTIVES
* @IE9 @IE10 @IE11 @IE12
*
*/
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 9';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIE9.prototype, "isIE9", null);
    IsIE9 = __decorate([
        core_1.Directive({
            selector: '[isIE9]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIE9);
    return IsIE9;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 10';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIE10.prototype, "isIE10", null);
    IsIE10 = __decorate([
        core_1.Directive({
            selector: '[isIE10]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIE10);
    return IsIE10;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 11';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIE11.prototype, "isIE11", null);
    IsIE11 = __decorate([
        core_1.Directive({
            selector: '[isIE11]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIE11);
    return IsIE11;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 12';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IsIE12.prototype, "isIE12", null);
    IsIE12 = __decorate([
        core_1.Directive({
            selector: '[isIE12]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], IsIE12);
    return IsIE12;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowIEVersion.prototype, "showIEVersion", null);
    ShowIEVersion = __decorate([
        core_1.Directive({
            selector: '[showIEVersion]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowIEVersion);
    return ShowIEVersion;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideIEVersion.prototype, "hideIEVersion", null);
    HideIEVersion = __decorate([
        core_1.Directive({
            selector: '[hideIEVersion]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideIEVersion);
    return HideIEVersion;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.HideIEVersion = HideIEVersion;
/*======== BrowserInfo =========*/
var BrowserInfo = (function () {
    function BrowserInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.browser = new core_1.EventEmitter();
    }
    Object.defineProperty(BrowserInfo.prototype, "browserInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    BrowserInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BrowserInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
        }
    };
    BrowserInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    BrowserInfo = __decorate([
        core_1.Directive({
            selector: "browserInfo", inputs: ['browserInfo'], outputs: ['browser']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], BrowserInfo);
    return BrowserInfo;
    var _a;
}());
exports.BrowserInfo = BrowserInfo;
/*======== ieInfo =========*/
var IeInfo = (function () {
    function IeInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.ieVersion = new core_1.EventEmitter();
    }
    Object.defineProperty(IeInfo.prototype, "ieInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    IeInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    IeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
        }
    };
    IeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    IeInfo = __decorate([
        core_1.Directive({
            selector: "ieInfo", inputs: ['ieInfo'], outputs: ['ieVersion']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], IeInfo);
    return IeInfo;
    var _a;
}());
exports.IeInfo = IeInfo;
//# sourceMappingURL=browsers-directives.js.map