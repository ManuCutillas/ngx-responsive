"use strict";
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItSizes;
}(index_1.RESPONSIVE_BASE));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ShowItSizes.prototype, "showItSizes", null);
ShowItSizes = __decorate([
    core_1.Directive({
        selector: '[showItSizes]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], ShowItSizes);
exports.ShowItSizes = ShowItSizes;
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return HideItSizes;
}(index_1.RESPONSIVE_BASE));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HideItSizes.prototype, "hideItSizes", null);
HideItSizes = __decorate([
    core_1.Directive({
        selector: '[hideItSizes]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], HideItSizes);
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map