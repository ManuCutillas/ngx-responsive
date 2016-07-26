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
            console.info(config);
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
            selector: '[responsive]', inputs: ['responsive']
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _b) || Object, config_1.ResponsiveState, (typeof (_c = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _c) || Object])
    ], Responsive);
    return Responsive;
    var _a, _b, _c;
}());
exports.Responsive = Responsive;

//# sourceMappingURL=data:application/json;base64,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QXNCLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFDaEIsMkJBQU0sR0FBZCxVQUFlLEtBQUs7UUFDaEIsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUU7UUFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQXRYRDtRQUFDLFlBQUssRUFBRTs7O2dEQUFBO0lBSVI7UUFBQyxhQUFNLEVBQUU7OytDQUFBO0lBVGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDbkQsQ0FBQzs7a0JBQUE7SUEwWEYsaUJBQUM7O0FBQUQsQ0F6WEEsQUF5WEMsSUFBQTtBQXpYWSxrQkFBVSxhQXlYdEIsQ0FBQSIsImZpbGUiOiJyZXNwb25zaXZlL3Jlc3BvbnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICAncnhqcy9SeCc7XG5pbXBvcnQge1Jlc3BvbnNpdmVTdGF0ZX0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQge3Jlc3BvbnNpdmVQYXR0ZXJuLCByZXNwb25zaXZlU3Vic2NyaXB0aW9uc30gZnJvbSAnLi4vY29uZmlnL2ludGVyZmFjZXMnO1xuXG4vKj09PT09PT09IFJFU1BPTlNJVkUgTVVMVElQTEUgPT09PT09PT09Ki9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3Jlc3BvbnNpdmVdJywgaW5wdXRzOiBbJ3Jlc3BvbnNpdmUnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc2V0IHJlc3BvbnNpdmUoY29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICBjb25zb2xlLmluZm8oY29uZmlnKTtcbiAgICAgICAgdGhpcy5pbml0X3Jlc3BvbnNpdmUoY29uZmlnKTtcbiAgICB9O1xuICAgIEBPdXRwdXQoKSBjaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vSW5pdCB0aGUgaW50ZXJmYWNlIHZhclxuICAgIHB1YmxpYyBzZXRfdmFsdWVzOiByZXNwb25zaXZlUGF0dGVybiA9IHtcbiAgICAgICAgYm9vdHN0cmFwOiAnJyxcbiAgICAgICAgYnJvd3NlcjogJycsXG4gICAgICAgIGRldmljZTogJycsXG4gICAgICAgIHBpeGVscmF0aW86ICcnLFxuICAgICAgICBvcmllbnRhdGlvbjogJycsXG4gICAgICAgIHN0YW5kYXJkOiAnJyxcbiAgICAgICAgaWU6ICcnLFxuICAgICAgICBzaXplczogMFxuICAgIH07XG5cbiAgICBwcml2YXRlIHNldF9hY3RpdmVfc3Vic2NyaXB0aW9uczogcmVzcG9uc2l2ZVN1YnNjcmlwdGlvbnMgPSB7XG4gICAgICAgIGJvb3RzdHJhcDogZmFsc2UsXG4gICAgICAgIGJyb3dzZXI6IGZhbHNlLFxuICAgICAgICBkZXZpY2U6IGZhbHNlLFxuICAgICAgICBwaXhlbHJhdGlvOiBmYWxzZSxcbiAgICAgICAgb3JpZW50YXRpb246IGZhbHNlLFxuICAgICAgICBzdGFuZGFyZDogZmFsc2UsXG4gICAgICAgIGllOiBmYWxzZSxcbiAgICAgICAgc2l6ZXM6IGZhbHNlXG4gICAgfVxuICAgIC8vUGFyYSBjb21wcm9iYXIgcXVlIHRvZG9zIGVzdGFuIGFjdGl2b3MgZW50b25jZXMgY2FtYmlhciBlbCBlc3RhZG8gZGVsIGVsZW1lbnRvXG4gICAgcHJpdmF0ZSBtYXRjaF9tdWx0aXBsZTogcmVzcG9uc2l2ZVN1YnNjcmlwdGlvbnMgPSB7XG4gICAgICAgIGJvb3RzdHJhcDogZmFsc2UsXG4gICAgICAgIGJyb3dzZXI6IGZhbHNlLFxuICAgICAgICBkZXZpY2U6IGZhbHNlLFxuICAgICAgICBwaXhlbHJhdGlvOiBmYWxzZSxcbiAgICAgICAgb3JpZW50YXRpb246IGZhbHNlLFxuICAgICAgICBzdGFuZGFyZDogZmFsc2UsXG4gICAgICAgIGllOiBmYWxzZSxcbiAgICAgICAgc2l6ZXM6IGZhbHNlXG4gICAgfVxuXG4gICAgLy9TdWJzY3JpcHRpb25zXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0Jvb3RzdHJhcDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9Ccm93c2VyOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX1BpeGVsX1JhdGlvOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0RldmljZTogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9PcmllbnRhdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9TdGFuZGFyZDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9JRV9WZXJzaW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX2N1c3RvbV9zaXplczogU3Vic2NyaXB0aW9uO1xuXG4gICAgLy9TaG93IG9yIGhpZGUgb3B0aW9uXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy9HbG9iYWwgTm8gUmVwZWF0XG4gICAgcHJpdmF0ZSBfZ2xvYmFsTm9SZXBlYXQ6IG51bWJlciA9IDA7XG5cbiAgICAvL05vIHJlcGVhdCBmb3IgYm9vdHN0cmFwIHN0cmluZyBuYW1lc1xuICAgIHByaXZhdGUgX25vUmVwZWF0Qm9vdHN0cmFwTmFtZTogc3RyaW5nO1xuXG4gICAgLy9ObyByZXBlYXQgdG8gaW5pdCByZXNwb25zaXZlXG4gICAgcHJpdmF0ZSBfYm9vdHN0cmFwTm9SZXBlYXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZGV2aWNlTm9SZXBlYXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RhbmRhcmROb1JlcGVhdDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvbk5vUmVwZWF0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2Jyb3dzZXJOb1JlcGVhdDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9waXhlbHJhdGlvTm9SZXBlYXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaWVOb1JlcGVhdDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zaXplc05vUmVwZWF0OiBudW1iZXIgPSAwO1xuXG4gICAgLy9QYXJhbWV0ZXJzXG4gICAgcHJpdmF0ZSBfYm9vdHN0cmFwX3VzZXJfcGFyYW06IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfZGV2aWNlc191c2VyX3BhcmFtOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX3N0YW5kYXJkX3VzZXJfcGFyYW06IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb25fdXNlcl9wYXJhbTogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIF9icm93c2VyX3VzZXJfcGFyYW06IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfcGl4ZWxyYXRpb191c2VyX3BhcmFtOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2llX3VzZXJfcGFyYW06IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfc2l6ZXNfdXNlcl9wYXJhbTogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIF9zaXplc193aW5kb3c6IHN0cmluZyA9IFwid2luZG93XCI7XG5cbiAgICAvL1VzZXIgcGFyYW1ldGVyc1xuICAgIHByb3RlY3RlZCBfYWN0aXZlczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8qKiogQ09OU1RSVUNUT1IgKioqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sXG4gICAgICAgIHByaXZhdGUgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHsgfVxuXG5cbiAgICAvL0luaXQgbWV0aG9kXG4gICAgcHVibGljIGluaXRfcmVzcG9uc2l2ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzSlNPTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vSWYgYm9vdHN0cmFwIG9iamVjdCBleGlzdHNcbiAgICAgICAgICAgIGlmICghIXZhbHVlLmJvb3RzdHJhcCAmJiB0aGlzLl9ib290c3RyYXBOb1JlcGVhdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYm9vdHN0cmFwX3VzZXJfcGFyYW0gPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkodmFsdWUuYm9vdHN0cmFwKSA/IHZhbHVlLmJvb3RzdHJhcCA6IFt2YWx1ZS5ib290c3RyYXBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ib290c3RyYXBOb1JlcGVhdCA9IDE7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGJvb3RzdHJhcCBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5ib290c3RyYXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9JZiBkZXZpY2Ugb2JqZWN0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUuZGV2aWNlICYmIHRoaXMuX2RldmljZU5vUmVwZWF0ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXZpY2VzX3VzZXJfcGFyYW0gPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkodmFsdWUuZGV2aWNlKSA/IHZhbHVlLmRldmljZSA6IFt2YWx1ZS5kZXZpY2VdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXZpY2VOb1JlcGVhdCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuZGV2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgc3RhbmRhcmQgb2JqZWN0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUuc3RhbmRhcmQgJiYgdGhpcy5fc3RhbmRhcmROb1JlcGVhdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhbmRhcmRfdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheSh2YWx1ZS5zdGFuZGFyZCkgPyB2YWx1ZS5zdGFuZGFyZCA6IFt2YWx1ZS5zdGFuZGFyZF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YW5kYXJkTm9SZXBlYXQgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgb3JpZW50YXRpb24gb2JqZWN0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUub3JpZW50YXRpb24gJiYgdGhpcy5fb3JpZW50YXRpb25Ob1JlcGVhdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZW50YXRpb25fdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheSh2YWx1ZS5vcmllbnRhdGlvbikgPyB2YWx1ZS5vcmllbnRhdGlvbiA6IFt2YWx1ZS5vcmllbnRhdGlvbl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uTm9SZXBlYXQgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLm9yaWVudGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgYnJvd3NlciBvYmplY3QgZXhpc3RzXG4gICAgICAgICAgICBpZiAoISF2YWx1ZS5icm93c2VyICYmIHRoaXMuX2Jyb3dzZXJOb1JlcGVhdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnJvd3Nlcl91c2VyX3BhcmFtID0gPHN0cmluZ1tdPihBcnJheS5pc0FycmF5KHZhbHVlLmJyb3dzZXIpID8gdmFsdWUuYnJvd3NlciA6IFt2YWx1ZS5icm93c2VyXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnJvd3Nlck5vUmVwZWF0ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgcGl4ZWwgcmF0aW8gb2JqZWN0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUucGl4ZWxyYXRpbyAmJiB0aGlzLl9waXhlbHJhdGlvTm9SZXBlYXQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BpeGVscmF0aW9fdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheSh2YWx1ZS5waXhlbHJhdGlvKSA/IHZhbHVlLnBpeGVscmF0aW8gOiBbdmFsdWUucGl4ZWxyYXRpb10pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BpeGVscmF0aW9Ob1JlcGVhdCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMucGl4ZWxyYXRpbyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0lmIGllIG9iamVjdCBleGlzdHNcbiAgICAgICAgICAgIGlmICghIXZhbHVlLmllICYmIHRoaXMuX2llTm9SZXBlYXQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2llX3VzZXJfcGFyYW0gPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkodmFsdWUuaWUpID8gdmFsdWUuaWUgOiBbdmFsdWUuaWVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZU5vUmVwZWF0ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5pZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0lmIGN1c3RvbSBzaXplcyBvYmplY3QgZXhpc3RzXG4gICAgICAgICAgICBpZiAoISF2YWx1ZS5zaXplcyAmJiB0aGlzLl9zaXplc05vUmVwZWF0ID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWluID0gdmFsdWUuc2l6ZXMubWluO1xuICAgICAgICAgICAgICAgIGxldCBtYXggPSB2YWx1ZS5zaXplcy5tYXg7XG4gICAgICAgICAgICAgICAgbGV0IHdpbiA9IHZhbHVlLnNpemVzLndpbmRvdztcbiAgICAgICAgICAgICAgICBpZiAod2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemVzX3dpbmRvdyA9IHdpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZXNfdXNlcl9wYXJhbSA9IFttaW4sIG1heF07XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZXNOb1JlcGVhdCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlc3BvbnNpdmUgZGlyZWN0aXZlIGRvbsK0dCB3b3JrIHdpdGggYSBvbmx5IGFycmF5IHBhcmFtZXRlclwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlc3BvbnNpdmUgZGlyZWN0aXZlIGRvbsK0dCB3b3JrIHdpdGggYSBvbmx5IHN0cmluZyBwYXJhbWV0ZXJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zaXZlIGRpcmVjdGl2ZSBkb27CtHQgd29yayB3aXRoIGEgb25seSBudW1iZXIgcGFyYW1ldGVyXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVzcG9uc2l2ZSBkaXJlY3RpdmUgZG9uwrR0IHdvcmsgd2l0aG91dCBhIHBhcmFtXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9BZGQgbmFtZXMgb2Ygc3Vic2NyaXB0aW9ucyBhY3RpdmVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zW2tleV0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vSW5pdGlhbGl6ZSBzdWJzY3JpcHRpb3NcbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmJvb3RzdHJhcCA9PSB0cnVlKSB0aGlzLl9zdWJzY3JpcHRpb25fQm9vdHN0cmFwID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmVsZW1lbnRvT2JzZXJ2YXIuc3Vic2NyaWJlKHRoaXMudXBkYXRlQm9vdHN0cmFwLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyID09IHRydWUpIHRoaXMuX3N1YnNjcmlwdGlvbl9Ccm93c2VyID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmJyb3dzZXJPYnNlcnZlci5zdWJzY3JpYmUodGhpcy51cGRhdGVCcm93c2VyLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5kZXZpY2UgPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX0RldmljZSA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5kZXZpY2VPYnNlcnZlci5zdWJzY3JpYmUodGhpcy51cGRhdGVEZXZpY2UuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnBpeGVscmF0aW8gPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX1BpeGVsX1JhdGlvID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLnBpeGVsT2JzZXJ2ZXIuc3Vic2NyaWJlKHRoaXMudXBkYXRlUGl4ZWxSYXRpby5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMub3JpZW50YXRpb24gPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX09yaWVudGF0aW9uID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLm9yaWVudGF0aW9uT2JzZXJ2ZXIuc3Vic2NyaWJlKHRoaXMudXBkYXRlT3JpZW50YXRpb24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkID09IHRydWUpIHRoaXMuX3N1YnNjcmlwdGlvbl9TdGFuZGFyZCA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5zdGFuZGFyZE9ic2VydmVyLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVN0YW5kYXJkLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5pZSA9PSB0cnVlKSB0aGlzLl9zdWJzY3JpcHRpb25fSUVfVmVyc2lvbiA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5pZVZlcnNpb25PYnNlcnZlci5zdWJzY3JpYmUodGhpcy51cGRhdGVJRXZlcnNpb24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnNpemVzID09IHRydWUpIHRoaXMuX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXMgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuYW5jaG9PYnNlcnZhci5zdWJzY3JpYmUodGhpcy51cGRhdGVTaXplcy5iaW5kKHRoaXMpKTtcblxuICAgIH1cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICAgIC8vU3Vic2NyaXB0aW9ucyBjaGFuZ2VzXG4gICAgcHJpdmF0ZSB1cGRhdGVCb290c3RyYXAodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5faWZWYWx1ZUNoYW5nZWQodGhpcy5fbm9SZXBlYXRCb290c3RyYXBOYW1lLCB2YWx1ZSk7XG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0X3ZhbHVlcy5ib290c3RyYXAgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5ib290c3RyYXAsICdib290c3RyYXAnKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVCcm93c2VyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLmJyb3dzZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCh0aGlzLnNldF92YWx1ZXMuYnJvd3NlciwgJ2Jyb3dzZXInKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVEZXZpY2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldF92YWx1ZXMuZGV2aWNlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQodGhpcy5zZXRfdmFsdWVzLmRldmljZSwgJ2RldmljZScpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZVBpeGVsUmF0aW8odmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldF92YWx1ZXMucGl4ZWxyYXRpbyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5waXhlbHJhdGlvLCAncGl4ZWxyYXRpbycpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZU9yaWVudGF0aW9uKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLm9yaWVudGF0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQodGhpcy5zZXRfdmFsdWVzLm9yaWVudGF0aW9uLCAnb3JpZW50YXRpb24nKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVTdGFuZGFyZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0X3ZhbHVlcy5zdGFuZGFyZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5zdGFuZGFyZCwgJ3N0YW5kYXJkJyk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlSUV2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLmllID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQodGhpcy5zZXRfdmFsdWVzLmllLCAnaWUnKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplcyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fc2l6ZXNfd2luZG93KSB7XG4gICAgICAgICAgdGhpcy5zZXRfdmFsdWVzLnNpemVzID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRfdmFsdWVzLnNpemVzID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmdldFdpZHRoKHRoaXMuX3NpemVzX3dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCh0aGlzLnNldF92YWx1ZXMuc2l6ZXMsICdzaXplcycpO1xuICAgIH1cblxuICAgIC8vU3Vic2NyaXB0aW9ucyBjaGFuZ2VzIG9wZXJhdGlvbnNcbiAgICBwcml2YXRlIHVwZGF0ZUV2ZW50KHBhcmFtOiBhbnksIHR5cGVfZGlyZWN0aXZlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy9XSEVOIFRSVUVcbiAgICAgICAgaWYgKCEhdGhpcy5fc2hvd1doZW5UcnVlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVfZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb3RzdHJhcFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9ib290c3RyYXBfdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRldmljZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9kZXZpY2VzX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkgIT09IC0xLCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFuZGFyZFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9zdGFuZGFyZF91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pICE9PSAtMSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JpZW50YXRpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnModGhpcy5fb3JpZW50YXRpb25fdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJyb3dzZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnModGhpcy5fYnJvd3Nlcl91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pICE9PSAtMSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGl4ZWxyYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9waXhlbHJhdGlvX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkgIT09IC0xLCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9pZV91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pICE9PSAtMSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2l6ZXNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISEocGFyYW0gPj0gdGhpcy5fc2l6ZXNfdXNlcl9wYXJhbVswXSAmJiBwYXJhbSA8PSB0aGlzLl9zaXplc191c2VyX3BhcmFtWzFdKSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9XSEVOIEZBTFNFXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVfZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb3RzdHJhcFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyghKHRoaXMuX2Jvb3RzdHJhcF91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKCEodGhpcy5fZGV2aWNlc191c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhbmRhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9zdGFuZGFyZF91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JpZW50YXRpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9vcmllbnRhdGlvbl91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnJvd3NlclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyghKHRoaXMuX2Jyb3dzZXJfdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSksIHR5cGVfZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBpeGVscmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9waXhlbHJhdGlvX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkpLCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyghKHRoaXMuX2llX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkpLCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzaXplc1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyghKCEhKHBhcmFtID49IHRoaXMuX3NpemVzX3VzZXJfcGFyYW1bMF0gJiYgcGFyYW0gPD0gdGhpcy5fc2l6ZXNfdXNlcl9wYXJhbVsxXSkpLCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9TaG93IC8gSGlkZSBlbGVtZW50XG4gICAgcHJpdmF0ZSBzaG93SGlkZU9wZXJhdGlvbnMoc2hvdzogYm9vbGVhbiwgdHlwZV9kaXJlY3RpdmU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgZ2xvYmFsX3N0YXRlID0gdGhpcy5tYXRjaFZhbHVlcyhzaG93LCB0eXBlX2RpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghIWdsb2JhbF9zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2dsb2JhbE5vUmVwZWF0ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nbG9iYWxOb1JlcGVhdCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZXMuZW1pdCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy9FbHNlIGhpZGUgZWxlbWVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsTm9SZXBlYXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VzLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL011bHRpcGxlIG1hdGNoIGJvb2xlYW4gdmFsdWVzXG4gICAgcHJpdmF0ZSBtYXRjaFZhbHVlcyhzaG93OiBib29sZWFuLCB0eXBlX2RpcmVjdGl2ZTogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IG1hdGNoOiBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICAvL0NoYW5nZSB0aGUgc3RhdGUgb2YgdmFsdWVcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hfbXVsdGlwbGVbdHlwZV9kaXJlY3RpdmVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hfbXVsdGlwbGVbdHlwZV9kaXJlY3RpdmVdID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL01hdGNoIGFsbCB2YWx1ZXMgZXN0YXRlcyA9PiBJZiAoYWxsIHZhbHVlcyA9PSB0cnVlKSA9PiByZXR1cm4gdHJ1ZSBlbHNlID0+IHJldHVybiBmYWxzZVxuICAgICAgICBmb3IgKGxldCBhbGxfa2V5IGluIHRoaXMubWF0Y2hfbXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFjdGl2ZSBvZiB0aGlzLl9hY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbF9rZXkgPT0gYWN0aXZlICYmIHRoaXMubWF0Y2hfbXVsdGlwbGVbYWxsX2tleV0gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGUgbWF0Y2ggbXVsdGlwbGUgYWN0aXZlcyB2YWx1ZXMgaGF2ZSBvbmUgaW4gZmFsc2U7IHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9SZXR1cm4gbWF0Y2ggYm9vbGVhblxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG5cbiAgICAvL0Rlc3Ryb3kgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgICAgLy91bnN1YnNjcmliZSBhbGwgc3Vic2NyaXB0aW9ucyBhY3RpdmVzXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5ib290c3RyYXAgPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX0Jvb3RzdHJhcC51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyID09IHRydWUpIHRoaXMuX3N1YnNjcmlwdGlvbl9Ccm93c2VyLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmRldmljZSA9PSB0cnVlKSB0aGlzLl9zdWJzY3JpcHRpb25fRGV2aWNlLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnBpeGVscmF0aW8gPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX1BpeGVsX1JhdGlvLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLm9yaWVudGF0aW9uID09IHRydWUpIHRoaXMuX3N1YnNjcmlwdGlvbl9PcmllbnRhdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5zdGFuZGFyZCA9PSB0cnVlKSB0aGlzLl9zdWJzY3JpcHRpb25fU3RhbmRhcmQudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuaWUgPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX0lFX1ZlcnNpb24udW5zdWJzY3JpYmUoKTtcblxuICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMgPT0gdHJ1ZSkgdGhpcy5fc3Vic2NyaXB0aW9uX2N1c3RvbV9zaXplcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8vTm8gcmVwZWF0IG1ldGhvZCBmb3IgYm9vdHN0cmFwIHN0YXRlc1xuICAgIHByaXZhdGUgX2lmVmFsdWVDaGFuZ2VkKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbm9SZXBlYXRCb290c3RyYXBOYW1lID0gbmV3VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vSXNKU09OIE9CSkVDVCBzb2x1dGlvblxuICAgIHByaXZhdGUgaXNKU09OKHZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
