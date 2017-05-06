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
var XL = (function (_super) {
    __extends(XL, _super);
    function XL(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xl';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XL.prototype, "xl", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XL;
}(index_1.RESPONSIVE_BASE));
XL.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xl]'
            },] },
];
/** @nocollapse */
XL.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XL.propDecorators = {
    'xl': [{ type: core_1.Input },],
};
exports.XL = XL;
var LG = (function (_super) {
    __extends(LG, _super);
    function LG(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'lg';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(LG.prototype, "lg", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return LG;
}(index_1.RESPONSIVE_BASE));
LG.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lg]'
            },] },
];
/** @nocollapse */
LG.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
LG.propDecorators = {
    'lg': [{ type: core_1.Input },],
};
exports.LG = LG;
var MD = (function (_super) {
    __extends(MD, _super);
    function MD(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'md';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(MD.prototype, "md", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return MD;
}(index_1.RESPONSIVE_BASE));
MD.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[md]'
            },] },
];
/** @nocollapse */
MD.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
MD.propDecorators = {
    'md': [{ type: core_1.Input },],
};
exports.MD = MD;
var SM = (function (_super) {
    __extends(SM, _super);
    function SM(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'sm';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(SM.prototype, "sm", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return SM;
}(index_1.RESPONSIVE_BASE));
SM.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[sm]'
            },] },
];
/** @nocollapse */
SM.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
SM.propDecorators = {
    'sm': [{ type: core_1.Input },],
};
exports.SM = SM;
var XS = (function (_super) {
    __extends(XS, _super);
    function XS(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xs';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XS.prototype, "xs", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XS;
}(index_1.RESPONSIVE_BASE));
XS.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xs]'
            },] },
];
/** @nocollapse */
XS.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XS.propDecorators = {
    'xs': [{ type: core_1.Input },],
};
exports.XS = XS;
var ShowItBootstrap = (function (_super) {
    __extends(ShowItBootstrap, _super);
    function ShowItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBootstrap.prototype, "showItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBootstrap;
}(index_1.RESPONSIVE_BASE));
ShowItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBootstrap]'
            },] },
];
/** @nocollapse */
ShowItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBootstrap.propDecorators = {
    'showItBootstrap': [{ type: core_1.Input },],
};
exports.ShowItBootstrap = ShowItBootstrap;
var HideItBootstrap = (function (_super) {
    __extends(HideItBootstrap, _super);
    function HideItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBootstrap.prototype, "hideItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBootstrap;
}(index_1.RESPONSIVE_BASE));
HideItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBootstrap]'
            },] },
];
/** @nocollapse */
HideItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBootstrap.propDecorators = {
    'hideItBootstrap': [{ type: core_1.Input },],
};
exports.HideItBootstrap = HideItBootstrap;
var ResponsiveSizeInfo = (function () {
    function ResponsiveSizeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new core_1.EventEmitter();
    }
    Object.defineProperty(ResponsiveSizeInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveSizeInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this));
    };
    ResponsiveSizeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ResponsiveSizeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            this.statechanges.emit(value);
            this.cd.markForCheck();
        }
    };
    ResponsiveSizeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    return ResponsiveSizeInfo;
}());
ResponsiveSizeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'responsiveSizeInfo',
                inputs: ['responsiveSizeInfo'],
                outputs: ['statechanges']
            },] },
];
/** @nocollapse */
ResponsiveSizeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map