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
            this.setGrid(_grid_state, 'sizes');
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
            selector: '[showItSizes]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], ShowItSizes);
    return ShowItSizes;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
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
            this.setGrid(_grid_state, 'sizes');
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
            selector: '[hideItSizes]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, config_1.ResponsiveState])
    ], HideItSizes);
    return HideItSizes;
    var _a, _b;
}(responsive_base_1.RESPONSIVE_BASE));
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map