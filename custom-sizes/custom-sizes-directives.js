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
var CustomSizes = (function () {
    function CustomSizes(templateRef, viewContainer, _responsiveState) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.noRepeat = 0;
    }
    CustomSizes.prototype.setGrid = function (_grid_state) {
        this._grid_state = _grid_state;
    };
    CustomSizes.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));
    };
    CustomSizes.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    CustomSizes.prototype.showHide = function (show) {
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
    CustomSizes.prototype.updateView = function (size) {
        if (!!this._showWhenTrue) {
            this.showHide(!!(size >= this._grid_state.min && size <= this._grid_state.max));
        }
        else {
            this.showHide(!(size >= this._grid_state.min && size <= this._grid_state.max));
        }
    };
    return CustomSizes;
}());
/*======== CUSTOM SIZES =========*/
/* show */
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowItSizes.prototype, "showItSizes", null);
    ShowItSizes = __decorate([
        core_1.Directive({
            selector: '[showItSizes]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], ShowItSizes);
    return ShowItSizes;
}(CustomSizes));
exports.ShowItSizes = ShowItSizes;
/* hide */
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideItSizes.prototype, "hideItSizes", null);
    HideItSizes = __decorate([
        core_1.Directive({
            selector: '[hideItSizes]',
            providers: [config_1.ResponsiveState]
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
    ], HideItSizes);
    return HideItSizes;
}(CustomSizes));
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map