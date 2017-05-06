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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'chrome';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsChrome;
}(index_1.RESPONSIVE_BASE));
IsChrome.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isChrome]'
            },] },
];
/** @nocollapse */
IsChrome.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsChrome.propDecorators = {
    'isChrome': [{ type: core_1.Input },],
};
exports.IsChrome = IsChrome;
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'firefox';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsFirefox;
}(index_1.RESPONSIVE_BASE));
IsFirefox.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isFirefox]'
            },] },
];
/** @nocollapse */
IsFirefox.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsFirefox.propDecorators = {
    'isFirefox': [{ type: core_1.Input },],
};
exports.IsFirefox = IsFirefox;
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'safari';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsSafari;
}(index_1.RESPONSIVE_BASE));
IsSafari.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isSafari]'
            },] },
];
/** @nocollapse */
IsSafari.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsSafari.propDecorators = {
    'isSafari': [{ type: core_1.Input },],
};
exports.IsSafari = IsSafari;
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'opera';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsOpera;
}(index_1.RESPONSIVE_BASE));
IsOpera.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isOpera]'
            },] },
];
/** @nocollapse */
IsOpera.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsOpera.propDecorators = {
    'isOpera': [{ type: core_1.Input },],
};
exports.IsOpera = IsOpera;
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE;
}(index_1.RESPONSIVE_BASE));
IsIE.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE]'
            },] },
];
/** @nocollapse */
IsIE.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE.propDecorators = {
    'isIE': [{ type: core_1.Input },],
};
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBrowser;
}(index_1.RESPONSIVE_BASE));
ShowItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBrowser]'
            },] },
];
/** @nocollapse */
ShowItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBrowser.propDecorators = {
    'showItBrowser': [{ type: core_1.Input },],
};
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBrowser;
}(index_1.RESPONSIVE_BASE));
HideItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBrowser]',
                providers: [index_1.ResponsiveState]
            },] },
];
/** @nocollapse */
HideItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBrowser.propDecorators = {
    'hideItBrowser': [{ type: core_1.Input },],
};
exports.HideItBrowser = HideItBrowser;
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 9';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE9;
}(index_1.RESPONSIVE_BASE));
IsIE9.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE9]'
            },] },
];
/** @nocollapse */
IsIE9.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE9.propDecorators = {
    'isIE9': [{ type: core_1.Input },],
};
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 10';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE10;
}(index_1.RESPONSIVE_BASE));
IsIE10.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE10]'
            },] },
];
/** @nocollapse */
IsIE10.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE10.propDecorators = {
    'isIE10': [{ type: core_1.Input },],
};
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 11';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE11;
}(index_1.RESPONSIVE_BASE));
IsIE11.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE11]'
            },] },
];
/** @nocollapse */
IsIE11.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE11.propDecorators = {
    'isIE11': [{ type: core_1.Input },],
};
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 12';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE12;
}(index_1.RESPONSIVE_BASE));
IsIE12.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE12]'
            },] },
];
/** @nocollapse */
IsIE12.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE12.propDecorators = {
    'isIE12': [{ type: core_1.Input },],
};
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return ShowIEVersion;
}(index_1.RESPONSIVE_BASE));
ShowIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showIEVersion]'
            },] },
];
/** @nocollapse */
ShowIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowIEVersion.propDecorators = {
    'showIEVersion': [{ type: core_1.Input },],
};
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return HideIEVersion;
}(index_1.RESPONSIVE_BASE));
HideIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideIEVersion]'
            },] },
];
/** @nocollapse */
HideIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideIEVersion.propDecorators = {
    'hideIEVersion': [{ type: core_1.Input },],
};
exports.HideIEVersion = HideIEVersion;
var BrowserInfo = (function () {
    function BrowserInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
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
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    BrowserInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BrowserInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
            this.cd.markForCheck();
        }
    };
    BrowserInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return BrowserInfo;
}());
BrowserInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "browserInfo", inputs: ['browserInfo'], outputs: ['browser']
            },] },
];
/** @nocollapse */
BrowserInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.BrowserInfo = BrowserInfo;
var IeInfo = (function () {
    function IeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
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
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    IeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
            this.cd.markForCheck();
        }
    };
    IeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return IeInfo;
}());
IeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "ieInfo", inputs: ['ieInfo'], outputs: ['ieVersion']
            },] },
];
/** @nocollapse */
IeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.IeInfo = IeInfo;
//# sourceMappingURL=browsers-directives.js.map