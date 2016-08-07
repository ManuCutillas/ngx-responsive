System.register(['@angular/core', '../config/config', '../config/responsive-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, config_1, responsive_base_1;
    var ShowItSizes, HideItSizes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (responsive_base_1_1) {
                responsive_base_1 = responsive_base_1_1;
            }],
        execute: function() {
            ShowItSizes = (function (_super) {
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
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
                ], ShowItSizes);
                return ShowItSizes;
            }(responsive_base_1.RESPONSIVE_BASE));
            exports_1("ShowItSizes", ShowItSizes);
            HideItSizes = (function (_super) {
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
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, config_1.ResponsiveState])
                ], HideItSizes);
                return HideItSizes;
            }(responsive_base_1.RESPONSIVE_BASE));
            exports_1("HideItSizes", HideItSizes);
        }
    }
});
//# sourceMappingURL=custom-sizes-directives.js.map