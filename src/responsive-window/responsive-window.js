"use strict";
var core_1 = require('@angular/core');
var config_1 = require('../config');
var ResponsiveWindow = (function () {
    ////CONSTRUCTOR
    function ResponsiveWindow(_responsiveState, el) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.element = el.nativeElement;
    }
    ////LIFECICLE METHODS
    ResponsiveWindow.prototype.ngOnInit = function () { this._responsiveState.registerWindow(this); };
    ResponsiveWindow.prototype.ngDoCheck = function () {
        var update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
        }
    };
    ResponsiveWindow.prototype.ngOnDestroy = function () { this._responsiveState.unregisterWindow(this); };
    ////Public Methods
    ResponsiveWindow.prototype.getWidth = function () { return this.element.offsetWidth; };
    ////Private Methods
    ResponsiveWindow.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    ResponsiveWindow.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[responsive-window]"
                },] },
    ];
    /** @nocollapse */
    ResponsiveWindow.ctorParameters = [
        { type: config_1.ResponsiveState, },
        { type: core_1.ElementRef, },
    ];
    ResponsiveWindow.propDecorators = {
        'name': [{ type: core_1.Input, args: ['responsive-window',] },],
    };
    return ResponsiveWindow;
}());
exports.ResponsiveWindow = ResponsiveWindow;
//# sourceMappingURL=responsive-window.js.map