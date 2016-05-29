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
 *
 * Bootstrap standard screen sizes directives
 * XL / LG / MD / SM / XS
 */
var Bootstrap = (function () {
    function Bootstrap(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    Bootstrap.prototype.setGrid = function (grid_state) {
        this._grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        // this.updateView(this._responsiveState.getDeviceSizeInitial());
    };
    Bootstrap.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
    };
    Bootstrap.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    Bootstrap.prototype.showHide = function (show) {
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
    Bootstrap.prototype.updateView = function (valor) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(valor) !== -1);
        }
        else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(valor) !== -1));
        }
    };
    return Bootstrap;
}());
/*======== XL STATES =========*/
var XL = (function (_super) {
    __extends(XL, _super);
    function XL(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'xl';
        this._showWhenTrue = true;
    }
    Object.defineProperty(XL.prototype, "xl", {
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
    ], XL.prototype, "xl", null);
    XL = __decorate([
        core_1.Directive({
            selector: '[xl]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], XL);
    return XL;
}(Bootstrap));
exports.XL = XL;
/*======== LG STATES =========*/
var LG = (function (_super) {
    __extends(LG, _super);
    function LG(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'lg';
        this._showWhenTrue = true;
    }
    Object.defineProperty(LG.prototype, "lg", {
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
    ], LG.prototype, "lg", null);
    LG = __decorate([
        core_1.Directive({
            selector: '[lg]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], LG);
    return LG;
}(Bootstrap));
exports.LG = LG;
/*======== MD STATES =========*/
var MD = (function (_super) {
    __extends(MD, _super);
    function MD(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'md';
        this._showWhenTrue = true;
    }
    Object.defineProperty(MD.prototype, "md", {
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
    ], MD.prototype, "md", null);
    MD = __decorate([
        core_1.Directive({
            selector: '[md]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], MD);
    return MD;
}(Bootstrap));
exports.MD = MD;
/*======== SM STATES =========*/
var SM = (function (_super) {
    __extends(SM, _super);
    function SM(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'sm';
        this._showWhenTrue = true;
    }
    Object.defineProperty(SM.prototype, "sm", {
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
    ], SM.prototype, "sm", null);
    SM = __decorate([
        core_1.Directive({
            selector: '[sm]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], SM);
    return SM;
}(Bootstrap));
exports.SM = SM;
/*======== XS STATES =========*/
var XS = (function (_super) {
    __extends(XS, _super);
    function XS(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'xs';
        this._showWhenTrue = true;
    }
    Object.defineProperty(XS.prototype, "xs", {
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
    ], XS.prototype, "xs", null);
    XS = __decorate([
        core_1.Directive({
            selector: '[xs]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], XS);
    return XS;
}(Bootstrap));
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
            this.setGrid(grid_state);
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
            selector: '[showItBootstrap]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowItBootstrap);
    return ShowItBootstrap;
}(Bootstrap));
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
            this.setGrid(grid_state);
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
            selector: '[hideItBootstrap]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideItBootstrap);
    return HideItBootstrap;
}(Bootstrap));
exports.HideItBootstrap = HideItBootstrap;
//# sourceMappingURL=bootstrap-directives.js.map