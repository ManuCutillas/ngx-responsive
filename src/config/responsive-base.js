"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RESPONSIVE_BASE = (function () {
    function RESPONSIVE_BASE(templateRef, viewContainer, _responsiveState, cd) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new core_1.EventEmitter();
    }
    RESPONSIVE_BASE.prototype.setGrid = function (grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
            default:
                null;
        }
        if (directive === 'sizes')
            this._sizes_grid_state = grid_state;
        else
            this._others_grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        this._directive = directive;
    };
    RESPONSIVE_BASE.prototype.ngOnInit = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.device)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));
    };
    RESPONSIVE_BASE.prototype.ngOnDestroy = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes.unsubscribe();
    };
    RESPONSIVE_BASE.prototype.showHide = function (show) {
        if (!!show) {
            if (this._noRepeat === 0) {
                this._noRepeat = 1;
                this.eventChanges.emit(true);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this._noRepeat = 0;
            this.eventChanges.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    RESPONSIVE_BASE.prototype.updateView = function (value) {
        var showBoolean = this._directive === 'sizes' ?
            !!((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(!!this._showWhenTrue ? showBoolean : !showBoolean);
    };
    return RESPONSIVE_BASE;
}());
exports.RESPONSIVE_BASE = RESPONSIVE_BASE;
//# sourceMappingURL=responsive-base.js.map