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
 * PIXEL RATIO DIRECTIVES
 * @4k @RETINA @1X
 *  on work;
 */
var PIXEL_RATIO = (function () {
    function PIXEL_RATIO(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    PIXEL_RATIO.prototype.setGrid = function (grid_state) {
        this._grid_state = grid_state;
    };
    PIXEL_RATIO.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));
    };
    PIXEL_RATIO.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PIXEL_RATIO.prototype.showHide = function (show) {
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
    PIXEL_RATIO.prototype.updateView = function (device) {
        if (!!this._showWhenTrue) {
            this.showHide(!!(this._grid_state && device));
        }
        else {
            this.showHide(!(!!(this._grid_state && device)));
        }
    };
    return PIXEL_RATIO;
}());
/*======== 1x =========*/
var Is1xPixel = (function (_super) {
    __extends(Is1xPixel, _super);
    function Is1xPixel(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = '1x';
        this._showWhenTrue = true;
    }
    Object.defineProperty(Is1xPixel.prototype, "is1xPixel", {
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
    ], Is1xPixel.prototype, "is1xPixel", null);
    Is1xPixel = __decorate([
        core_1.Directive({
            selector: '[is1xPixel]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], Is1xPixel);
    return Is1xPixel;
}(PIXEL_RATIO));
exports.Is1xPixel = Is1xPixel;
/*======== RETINA =========*/
var IsRetina = (function (_super) {
    __extends(IsRetina, _super);
    function IsRetina(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = 'retina';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsRetina.prototype, "isRetina", {
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
    ], IsRetina.prototype, "isRetina", null);
    IsRetina = __decorate([
        core_1.Directive({
            selector: '[isRetina]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], IsRetina);
    return IsRetina;
}(PIXEL_RATIO));
exports.IsRetina = IsRetina;
/*======== RETINA =========*/
var Is4k = (function (_super) {
    __extends(Is4k, _super);
    function Is4k(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this.state = '4k';
        this._showWhenTrue = true;
    }
    Object.defineProperty(Is4k.prototype, "isRetina", {
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
    ], Is4k.prototype, "isRetina", null);
    Is4k = __decorate([
        core_1.Directive({
            selector: '[is4k]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], Is4k);
    return Is4k;
}(PIXEL_RATIO));
exports.Is4k = Is4k;
//# sourceMappingURL=pixelratio-directives.js.map