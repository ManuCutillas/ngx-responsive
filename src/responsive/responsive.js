"use strict";
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
/*======== RESPONSIVE MULTIPLE =========*/
var Responsive = (function () {
    /*** CONSTRUCTOR ***/
    function Responsive(templateRef, _responsiveState, viewContainer) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.changes = new core_1.EventEmitter();
        //Init the interface var
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
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
        //Para comprobar que todos estan activos entonces cambiar el estado del elemento
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        //Show or hide option
        this._showWhenTrue = true;
        //Global No Repeat
        this._globalNoRepeat = 0;
        //No repeat to init responsive
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        //Parameters
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [];
        this._sizes_window = "window";
        //User parameters
        this._actives = [];
    }
    Object.defineProperty(Responsive.prototype, "responsive", {
        set: function (config) {
            this.init_responsive(config);
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Init method
    Responsive.prototype.init_responsive = function (value) {
        if (this.isJSON(value)) {
            //If bootstrap object exists
            if (!!value.bootstrap && this._bootstrapNoRepeat == 0) {
                this._bootstrap_user_param = (Array.isArray(value.bootstrap) ? value.bootstrap : [value.bootstrap]);
                this._bootstrapNoRepeat = 1;
                // add bootstrap subscription
                this.set_active_subscriptions.bootstrap = true;
            }
            //If device object exists
            if (!!value.device && this._deviceNoRepeat == 0) {
                this._devices_user_param = (Array.isArray(value.device) ? value.device : [value.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            //If standard object exists
            if (!!value.standard && this._standardNoRepeat == 0) {
                this._standard_user_param = (Array.isArray(value.standard) ? value.standard : [value.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            //If orientation object exists
            if (!!value.orientation && this._orientationNoRepeat == 0) {
                this._orientation_user_param = (Array.isArray(value.orientation) ? value.orientation : [value.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            //If browser object exists
            if (!!value.browser && this._browserNoRepeat == 0) {
                this._browser_user_param = (Array.isArray(value.browser) ? value.browser : [value.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            //If pixel ratio object exists
            if (!!value.pixelratio && this._pixelratioNoRepeat == 0) {
                this._pixelratio_user_param = (Array.isArray(value.pixelratio) ? value.pixelratio : [value.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            //If ie object exists
            if (!!value.ie && this._ieNoRepeat == 0) {
                this._ie_user_param = (Array.isArray(value.ie) ? value.ie : [value.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            //If custom sizes object exists
            if (!!value.sizes && this._sizesNoRepeat == 0) {
                var min = value.sizes.min;
                var max = value.sizes.max;
                var win = value.sizes.window;
                if (win !== undefined) {
                    this._sizes_window = win;
                }
                this._sizes_user_param = [min, max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(value)) {
            throw new Error("Responsive directive don´t work with a only array parameter");
        }
        else if (typeof value == 'string') {
            throw new Error("Responsive directive don´t work with a only string parameter");
        }
        else if (typeof value == 'number') {
            throw new Error("Responsive directive don´t work with a only number parameter");
        }
        else if (value == undefined || value === null) {
            throw new Error("Responsive directive don´t work without a param");
        }
        //Add names of subscriptions actives
        for (var key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key] == true) {
                this._actives.push(key);
            }
        }
        ;
        //Initialize subscriptios
        if (this.set_active_subscriptions.bootstrap == true)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateBootstrap.bind(this));
        if (this.set_active_subscriptions.browser == true)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateBrowser.bind(this));
        if (this.set_active_subscriptions.device == true)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateDevice.bind(this));
        if (this.set_active_subscriptions.pixelratio == true)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updatePixelRatio.bind(this));
        if (this.set_active_subscriptions.orientation == true)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateOrientation.bind(this));
        if (this.set_active_subscriptions.standard == true)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateStandard.bind(this));
        if (this.set_active_subscriptions.ie == true)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateIEversion.bind(this));
        if (this.set_active_subscriptions.sizes == true)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateSizes.bind(this));
    };
    Responsive.prototype.ngOnInit = function () { };
    //Subscriptions changes
    Responsive.prototype.updateBootstrap = function (value) {
        var update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    };
    Responsive.prototype.updateBrowser = function (value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    };
    Responsive.prototype.updateDevice = function (value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    };
    Responsive.prototype.updatePixelRatio = function (value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    };
    Responsive.prototype.updateOrientation = function (value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    };
    Responsive.prototype.updateStandard = function (value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    };
    Responsive.prototype.updateIEversion = function (value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    };
    Responsive.prototype.updateSizes = function (value) {
        if (!this._sizes_window) {
            this.set_values.sizes = value;
        }
        else {
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    };
    //Subscriptions changes operations
    Responsive.prototype.updateEvent = function (param, type_directive) {
        //WHEN TRUE
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case "bootstrap":
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "device":
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "standard":
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "orientation":
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "browser":
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "pixelratio":
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "ie":
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case "sizes":
                    this.showHideOperations(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1]), type_directive);
                    break;
                default:
                    null;
            }
        }
        else {
            switch (type_directive) {
                case "bootstrap":
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case "device":
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case "standard":
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case "orientation":
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case "browser":
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case "pixelratio":
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case "ie":
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case "sizes":
                    this.showHideOperations(!(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1])), type_directive);
                    break;
                default:
                    null;
            }
        }
    };
    //Show / Hide element
    Responsive.prototype.showHideOperations = function (show, type_directive) {
        var global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat == 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
        }
    };
    //Multiple match boolean values
    Responsive.prototype.matchValues = function (show, type_directive) {
        var match = true;
        //Change the state of value
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        //Match all values estates => If (all values == true) => return true else => return false
        for (var all_key in this.match_multiple) {
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var active = _a[_i];
                if (all_key == active && this.match_multiple[all_key] == false) {
                    //If the match multiple actives values have one in false; return false
                    return match = false;
                }
            }
        }
        //Return match boolean
        return match;
    };
    //Destroy all subscriptions
    Responsive.prototype.ngOnDestroy = function () {
        //unsubscribe all subscriptions actives
        if (this.set_active_subscriptions.bootstrap == true)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser == true)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device == true)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio == true)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation == true)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard == true)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie == true)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes == true)
            this._subscription_custom_sizes.unsubscribe();
    };
    //No repeat method for bootstrap states
    Responsive.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    };
    //IsJSON OBJECT solution
    Responsive.prototype.isJSON = function (value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Responsive.prototype, "responsive", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], Responsive.prototype, "changes", void 0);
    Responsive = __decorate([
        core_1.Directive({
            selector: '[responsive]'
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _b) || Object, config_1.ResponsiveState, (typeof (_c = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _c) || Object])
    ], Responsive);
    return Responsive;
    var _a, _b, _c;
}());
exports.Responsive = Responsive;
//# sourceMappingURL=responsive.js.map