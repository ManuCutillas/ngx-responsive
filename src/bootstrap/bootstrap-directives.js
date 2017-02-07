"use strict";
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], XL.prototype, "xl", null);
XL = __decorate([
    core_1.Directive({
        selector: '[xl]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], XL);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LG.prototype, "lg", null);
LG = __decorate([
    core_1.Directive({
        selector: '[lg]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], LG);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MD.prototype, "md", null);
MD = __decorate([
    core_1.Directive({
        selector: '[md]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], MD);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SM.prototype, "sm", null);
SM = __decorate([
    core_1.Directive({
        selector: '[sm]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], SM);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], XS.prototype, "xs", null);
XS = __decorate([
    core_1.Directive({
        selector: '[xs]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], XS);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ShowItBootstrap.prototype, "showItBootstrap", null);
ShowItBootstrap = __decorate([
    core_1.Directive({
        selector: '[showItBootstrap]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], ShowItBootstrap);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HideItBootstrap.prototype, "hideItBootstrap", null);
HideItBootstrap = __decorate([
    core_1.Directive({
        selector: '[hideItBootstrap]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef,
        index_1.ResponsiveState,
        core_1.ChangeDetectorRef])
], HideItBootstrap);
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
ResponsiveSizeInfo = __decorate([
    core_1.Directive({
        selector: 'responsiveSizeInfo',
        inputs: ['responsiveSizeInfo'],
        outputs: ['statechanges']
    }),
    __metadata("design:paramtypes", [index_1.ResponsiveState,
        core_1.ViewContainerRef,
        core_1.ChangeDetectorRef])
], ResponsiveSizeInfo);
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map