"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var config_1 = require('../config');
/*
 *
 * Bootstrap standard screen sizes directives
 * XL / LG / MD / SM / XS
 */
/*======== XL STATES =========*/
var XL = (function (_super) {
    __extends(XL, _super);
    function XL(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'xl';
        this._showWhenTrue = true;
    }
    Object.defineProperty(XL.prototype, "xl", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    XL.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[xl]'
                },] },
    ];
    /** @nocollapse */
    XL.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    XL.propDecorators = {
        'xl': [{ type: core_1.Input },],
    };
    return XL;
}(config_1.RESPONSIVE_BASE));
exports.XL = XL;
/*======== LG STATES =========*/
var LG = (function (_super) {
    __extends(LG, _super);
    function LG(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'lg';
        this._showWhenTrue = true;
    }
    Object.defineProperty(LG.prototype, "lg", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    LG.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[lg]'
                },] },
    ];
    /** @nocollapse */
    LG.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    LG.propDecorators = {
        'lg': [{ type: core_1.Input },],
    };
    return LG;
}(config_1.RESPONSIVE_BASE));
exports.LG = LG;
/*======== MD STATES =========*/
var MD = (function (_super) {
    __extends(MD, _super);
    function MD(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'md';
        this._showWhenTrue = true;
    }
    Object.defineProperty(MD.prototype, "md", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    MD.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[md]'
                },] },
    ];
    /** @nocollapse */
    MD.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    MD.propDecorators = {
        'md': [{ type: core_1.Input },],
    };
    return MD;
}(config_1.RESPONSIVE_BASE));
exports.MD = MD;
/*======== SM STATES =========*/
var SM = (function (_super) {
    __extends(SM, _super);
    function SM(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'sm';
        this._showWhenTrue = true;
    }
    Object.defineProperty(SM.prototype, "sm", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    SM.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[sm]'
                },] },
    ];
    /** @nocollapse */
    SM.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    SM.propDecorators = {
        'sm': [{ type: core_1.Input },],
    };
    return SM;
}(config_1.RESPONSIVE_BASE));
exports.SM = SM;
/*======== XS STATES =========*/
var XS = (function (_super) {
    __extends(XS, _super);
    function XS(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'xs';
        this._showWhenTrue = true;
    }
    Object.defineProperty(XS.prototype, "xs", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    XS.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[xs]'
                },] },
    ];
    /** @nocollapse */
    XS.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    XS.propDecorators = {
        'xs': [{ type: core_1.Input },],
    };
    return XS;
}(config_1.RESPONSIVE_BASE));
exports.XS = XS;
/*======== MULTIPLE SIZES STATES =========*/
/* show */
var ShowItBootstrap = (function (_super) {
    __extends(ShowItBootstrap, _super);
    function ShowItBootstrap(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItBootstrap.prototype, "showItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    ShowItBootstrap.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showItBootstrap]'
                },] },
    ];
    /** @nocollapse */
    ShowItBootstrap.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    ShowItBootstrap.propDecorators = {
        'showItBootstrap': [{ type: core_1.Input },],
    };
    return ShowItBootstrap;
}(config_1.RESPONSIVE_BASE));
exports.ShowItBootstrap = ShowItBootstrap;
/* hide */
var HideItBootstrap = (function (_super) {
    __extends(HideItBootstrap, _super);
    function HideItBootstrap(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItBootstrap.prototype, "hideItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    HideItBootstrap.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideItBootstrap]'
                },] },
    ];
    /** @nocollapse */
    HideItBootstrap.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    HideItBootstrap.propDecorators = {
        'hideItBootstrap': [{ type: core_1.Input },],
    };
    return HideItBootstrap;
}(config_1.RESPONSIVE_BASE));
exports.HideItBootstrap = HideItBootstrap;
/*======== responsiveSizeInfo =========*/
var ResponsiveSizeInfo = (function () {
    function ResponsiveSizeInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
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
        var _this = this;
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    ResponsiveSizeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ResponsiveSizeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            this.statechanges.emit(value);
        }
    };
    ResponsiveSizeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    ResponsiveSizeInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "responsiveSizeInfo",
                    inputs: ['responsiveSizeInfo'],
                    outputs: ['statechanges']
                },] },
    ];
    /** @nocollapse */
    ResponsiveSizeInfo.ctorParameters = [
        { type: config_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
    ];
    return ResponsiveSizeInfo;
}());
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map