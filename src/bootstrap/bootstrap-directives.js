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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], XL.prototype, "xl", null);
    XL = __decorate([
        core_1.Directive({
            selector: '[xl]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], XL);
    return XL;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LG.prototype, "lg", null);
    LG = __decorate([
        core_1.Directive({
            selector: '[lg]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], LG);
    return LG;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MD.prototype, "md", null);
    MD = __decorate([
        core_1.Directive({
            selector: '[md]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], MD);
    return MD;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SM.prototype, "sm", null);
    SM = __decorate([
        core_1.Directive({
            selector: '[sm]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], SM);
    return SM;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], XS.prototype, "xs", null);
    XS = __decorate([
        core_1.Directive({
            selector: '[xs]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], XS);
    return XS;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowItBootstrap.prototype, "showItBootstrap", null);
    ShowItBootstrap = __decorate([
        core_1.Directive({
            selector: '[showItBootstrap]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowItBootstrap);
    return ShowItBootstrap;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideItBootstrap.prototype, "hideItBootstrap", null);
    HideItBootstrap = __decorate([
        core_1.Directive({
            selector: '[hideItBootstrap]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideItBootstrap);
    return HideItBootstrap;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
    ResponsiveSizeInfo = __decorate([
        core_1.Directive({
            selector: "responsiveSizeInfo",
            inputs: ['responsiveSizeInfo'],
            outputs: ['statechanges']
        }), 
        __metadata('design:paramtypes', [config_1.ResponsiveState, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
    ], ResponsiveSizeInfo);
    return ResponsiveSizeInfo;
    var _a;
}());
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map