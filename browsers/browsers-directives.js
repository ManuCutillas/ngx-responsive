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
 * BROWSERS DIRECTIVES
 * @CHROME @FIREFOX @IE @OPERA
 *  on work;
 */
var BROWSERS = (function () {
    function BROWSERS(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    BROWSERS.prototype.setGrid = function (grid_state) {
        this._grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
    };
    BROWSERS.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));
    };
    BROWSERS.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BROWSERS.prototype.showHide = function (show) {
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
    BROWSERS.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }
        else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        }
    };
    return BROWSERS;
}());
/*======== CHROME =========*/
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'chrome';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
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
    ], IsChrome.prototype, "isChrome", null);
    IsChrome = __decorate([
        core_1.Directive({
            selector: '[isChrome]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsChrome);
    return IsChrome;
}(BROWSERS));
exports.IsChrome = IsChrome;
/*======== FIREFOX =========*/
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'firefox';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
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
    ], IsFirefox.prototype, "isFirefox", null);
    IsFirefox = __decorate([
        core_1.Directive({
            selector: '[isFirefox]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsFirefox);
    return IsFirefox;
}(BROWSERS));
exports.IsFirefox = IsFirefox;
/*======== SAFARI =========*/
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'safari';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
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
    ], IsSafari.prototype, "isSafari", null);
    IsSafari = __decorate([
        core_1.Directive({
            selector: '[isSafari]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsSafari);
    return IsSafari;
}(BROWSERS));
exports.IsSafari = IsSafari;
/*======== OPERA =========*/
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'opera';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
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
    ], IsOpera.prototype, "isOpera", null);
    IsOpera = __decorate([
        core_1.Directive({
            selector: '[isOpera]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsOpera);
    return IsOpera;
}(BROWSERS));
exports.IsOpera = IsOpera;
/*======== IE =========*/
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'ie';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
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
    ], IsIE.prototype, "isIE", null);
    IsIE = __decorate([
        core_1.Directive({
            selector: '[isIE]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIE);
    return IsIE;
}(BROWSERS));
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
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
    ], ShowItBrowser.prototype, "showItBrowser", null);
    ShowItBrowser = __decorate([
        core_1.Directive({
            selector: '[showItBrowser]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowItBrowser);
    return ShowItBrowser;
}(BROWSERS));
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
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
    ], HideItBrowser.prototype, "hideItBrowser", null);
    HideItBrowser = __decorate([
        core_1.Directive({
            selector: '[hideItBrowser]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideItBrowser);
    return HideItBrowser;
}(BROWSERS));
exports.HideItBrowser = HideItBrowser;
var IE_VERSION = (function () {
    function IE_VERSION(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    IE_VERSION.prototype.setGrid = function (grid_state) {
        this._grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
    };
    IE_VERSION.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));
    };
    IE_VERSION.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IE_VERSION.prototype.showHide = function (show) {
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
    IE_VERSION.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(device) !== -1);
        }
        else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(device) !== -1));
        }
    };
    return IE_VERSION;
}());
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'ie 9';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
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
    ], IsIE9.prototype, "isIE9", null);
    IsIE9 = __decorate([
        core_1.Directive({
            selector: '[isIE9]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIE9);
    return IsIE9;
}(BROWSERS));
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'ie 10';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
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
    ], IsIE10.prototype, "isIE10", null);
    IsIE10 = __decorate([
        core_1.Directive({
            selector: '[isIE10]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIE10);
    return IsIE10;
}(BROWSERS));
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'ie 11';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
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
    ], IsIE11.prototype, "isIE11", null);
    IsIE11 = __decorate([
        core_1.Directive({
            selector: '[isIE11]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIE11);
    return IsIE11;
}(BROWSERS));
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'ie 12';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
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
    ], IsIE12.prototype, "isIE12", null);
    IsIE12 = __decorate([
        core_1.Directive({
            selector: '[isIE12]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsIE12);
    return IsIE12;
}(BROWSERS));
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
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
    ], ShowIEVersion.prototype, "showIEVersion", null);
    ShowIEVersion = __decorate([
        core_1.Directive({
            selector: '[showIEVersion]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowIEVersion);
    return ShowIEVersion;
}(BROWSERS));
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
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
    ], HideIEVersion.prototype, "hideIEVersion", null);
    HideIEVersion = __decorate([
        core_1.Directive({
            selector: '[hideIEVersion]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideIEVersion);
    return HideIEVersion;
}(BROWSERS));
exports.HideIEVersion = HideIEVersion;
//# sourceMappingURL=browsers-directives.js.map