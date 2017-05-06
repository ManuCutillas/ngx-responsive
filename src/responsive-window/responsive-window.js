"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../config/index");
var ResponsiveWindow = (function () {
    function ResponsiveWindow(_responsiveState, el, cd) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this.element = el.nativeElement;
    }
    ResponsiveWindow.prototype.ngOnInit = function () {
        this._responsiveState.registerWindow(this);
    };
    ResponsiveWindow.prototype.ngDoCheck = function () {
        var update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
            this.cd.markForCheck();
        }
    };
    ResponsiveWindow.prototype.ngOnDestroy = function () {
        this._responsiveState.unregisterWindow(this);
    };
    ResponsiveWindow.prototype.getWidth = function () {
        return this.element.offsetWidth;
    };
    ResponsiveWindow.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this._noRepeat = newValue;
        return true;
    };
    return ResponsiveWindow;
}());
ResponsiveWindow.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[responsive-window]"
            },] },
];
/** @nocollapse */
ResponsiveWindow.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
ResponsiveWindow.propDecorators = {
    'name': [{ type: core_1.Input, args: ['responsive-window',] },],
};
exports.ResponsiveWindow = ResponsiveWindow;
//# sourceMappingURL=responsive-window.js.map