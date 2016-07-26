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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/share');
require('rxjs/add/operator/debounce');
var Rx_1 = require('rxjs/Rx');
var const_1 = require('./const');
// Configuration class in order to allow to change breakpoints values
var ResponsiveConfig = (function () {
    function ResponsiveConfig(config) {
        this.config = {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100
        };
        if (!!config)
            this.config = config;
    }
    ResponsiveConfig = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [Object])
    ], ResponsiveConfig);
    return ResponsiveConfig;
}());
exports.ResponsiveConfig = ResponsiveConfig;
var ResponsiveState = (function () {
    //Optional config
    function ResponsiveState(responsiveConfig) {
        var _this = this;
        this._windows = {};
        this._screenWidth = window.screen.width;
        this._screenHeight = window.screen.height;
        this._orientation = window.orientation;
        this._userAgent = window.navigator.userAgent.toLowerCase();
        this._window = window;
        this._vendor = window.navigator.vendor;
        this.registerWindow = function (rw) {
            console.log("REGISTER");
            if (rw.name && !_this._windows[rw.name]) {
                _this._windows[rw.name] = rw;
                console.log("REGISTER " + rw.name);
                window.dispatchEvent(new Event('resize'));
            }
        };
        this.unregisterWindow = function (rw) {
            for (var rwn in _this._windows) {
                if (_this._windows[rwn] === rw) {
                    delete (_this._windows[rwn]);
                }
            }
            window.dispatchEvent(new Event('resize'));
        };
        /*
         *  Bootstrap states
         *  xl / lg / md / sm / xs
         *  @Custom breackpoints
         */
        this.sizeObserver = function () {
            return _this._width = _this.getWidth('window');
        };
        this.sizeOperations = function () {
            _this._width = _this.getWidth('window');
            try {
                var breakpoints = _this._responsiveConfig.config.breakPoints;
                if (breakpoints.xl.min <= _this._width) {
                    return 'xl';
                }
                else if (breakpoints.lg.max >= _this._width && breakpoints.lg.min <= _this._width) {
                    return 'lg';
                }
                else if (breakpoints.md.max >= _this._width && breakpoints.md.min <= _this._width) {
                    return 'md';
                }
                else if (breakpoints.sm.max >= _this._width && breakpoints.sm.min <= _this._width) {
                    return 'sm';
                }
                else if (breakpoints.xs.max >= _this._width) {
                    return 'xs';
                }
            }
            catch (error) {
            }
            return null;
        };
        this.browserName = function () {
            try {
                if (const_1.REG_SORT_NAMES.WEBKIT[0].test(_this._userAgent) && const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent) && !const_1.REG_BROWSERS.IE[2].test(_this._userAgent)) {
                    return 'chrome';
                }
                else if (const_1.REG_SORT_NAMES.MOZILLA.test(_this._userAgent) && const_1.REG_BROWSERS.FIREFOX.test(_this._userAgent)) {
                    return 'firefox';
                }
                else if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent) || const_1.REG_BROWSERS.IE[1].test(_this._userAgent) || const_1.REG_BROWSERS.IE[2].test(_this._userAgent)) {
                    return 'ie';
                }
                else if (const_1.REG_SORT_NAMES.SAFARI.test(_this._userAgent) && const_1.REG_SORT_NAMES.WEBKIT[1].test(_this._userAgent) && !const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent)) {
                    return 'safari';
                }
                else if (const_1.REG_BROWSERS.OPERA.test(_this._userAgent)) {
                    return 'opera';
                }
                else if (const_1.REG_BROWSERS.SILK.test(_this._userAgent)) {
                    return 'silk';
                }
                else if (const_1.REG_BROWSERS.YANDEX.test(_this._userAgent)) {
                    return 'yandex';
                }
                else {
                    return 'NA';
                }
            }
            catch (error) {
            }
            return null;
        };
        this.ie_version_detect = function () {
            try {
                var msie = _this._userAgent.indexOf('msie ');
                if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent)) {
                    var ie_version = parseInt(_this._userAgent.substring(msie + 5, _this._userAgent.indexOf('.', msie)), 10);
                    // IE 10 or older => return version number
                    if (ie_version == 7) {
                        return 'ie 7';
                    }
                    else if (ie_version == 8) {
                        return 'ie 8';
                    }
                    else if (ie_version == 9) {
                        return 'ie 9';
                    }
                    else if (ie_version == 10) {
                        return 'ie 10';
                    }
                    return null;
                }
                var trident = _this._userAgent.indexOf('trident/');
                if (const_1.REG_BROWSERS.IE[1].test(_this._userAgent)) {
                    // IE 11 => return version number
                    var rv = _this._userAgent.indexOf('rv:');
                    var ie_version = parseInt(_this._userAgent.substring(rv + 3, _this._userAgent.indexOf('.', rv)), 10);
                    if (ie_version == 11) {
                        return 'ie 11';
                    }
                    return null;
                }
                var edge = _this._userAgent.indexOf('Edge/');
                if (const_1.REG_BROWSERS.IE[2].test(_this._userAgent)) {
                    // Edge (IE 12+) => return version number
                    //let ie_version = parseInt(this.userAgent.substring(edge + 5, this.userAgent.indexOf('.', edge)), 10);
                    return 'ie +12';
                }
            }
            catch (error) {
            }
            // detect Error
            return null;
        };
        this.pixel_ratio = function () {
            try {
                if (_this.test_Is_4k()) {
                    return '4k';
                }
                else if (_this.getDevicePixelRatio() > 1) {
                    return 'retina';
                }
                else if (_this.getDevicePixelRatio() == 1) {
                    return '1x';
                }
                else {
                    return null;
                }
            }
            catch (error) {
            }
            return null;
        };
        this.device_detection = function () {
            try {
                if (_this.isMobile()) {
                    return 'mobile';
                }
                else if (_this.isTablet()) {
                    return 'tablet';
                }
                else if (_this.isSMART()) {
                    return 'smarttv';
                }
                else if (_this.isDesktop()) {
                    return 'desktop';
                }
            }
            catch (error) {
            }
            return null;
        };
        this.orientation_device = function () {
            try {
                if (_this.isMobile() || _this.isTablet()) {
                    if (_this._screenHeight > _this._screenWidth) {
                        return 'portrait';
                    }
                    else if (_this._orientation === 90 || _this._orientation === -90) {
                        return 'landscape';
                    }
                }
                else if (_this.isSMART() || _this.isDesktop()) {
                    return 'landscape';
                }
                else {
                    return null;
                }
            }
            catch (error) {
            }
            return null;
        };
        this.standard_devices = function () {
            try {
                if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent)) {
                    return 'iphone';
                }
                else if (const_1.REG_TABLETS.IPAD.test(_this._userAgent)) {
                    return 'ipad';
                }
                else if (_this.isMobile() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent)) {
                    return 'android mobile';
                }
                else if (_this.isTablet() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent)) {
                    return 'android tablet';
                }
                else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent)) {
                    return 'windows phone';
                }
            }
            catch (error) {
            }
            return null;
        };
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        //Window resize observer
        var resize_observer = Rx_1.Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth('window'));
        //Get pixel ratio
        var pixel_ratio_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getDevicePixelRatio());
        //Get user agent
        var device_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getUserAgent());
        //Window orientation changes observer
        var orientation_observer = Rx_1.Observable
            .fromEvent(window, 'orientationchange')
            .defaultIfEmpty()
            .startWith(this.getOrientation());
        //Map operations
        this.elementoObservar = resize_observer.map(this.sizeOperations);
        this.anchoObservar = resize_observer.map(this.sizeObserver);
        this.browserObserver = device_observer.map(this.browserName);
        this.pixelObserver = pixel_ratio_observer.map(this.pixel_ratio);
        this.deviceObserver = device_observer.map(this.device_detection);
        this.orientationObserver = orientation_observer.map(this.orientation_device);
        this.standardObserver = device_observer.map(this.standard_devices);
        this.ieVersionObserver = device_observer.map(this.ie_version_detect);
    }
    ResponsiveState.prototype.getWidth = function (windowName) {
        if (windowName && this._windows[windowName])
            return this._windows[windowName].getWidth();
        else
            return window.innerWidth;
    };
    ResponsiveState.prototype.test_Is_4k = function () {
        return ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839));
    };
    ResponsiveState.prototype.getDevicePixelRatio = function () {
        var ratio = 1;
        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        }
        else if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        return ratio;
    };
    ;
    ResponsiveState.prototype.isMobile = function () {
        if (const_1.REG_MOBILES.GENERIC_REG[0].test(this._userAgent) && this.isTablet() == false ||
            const_1.REG_MOBILES.GENERIC_REG[1].test(this._userAgent.substr(0, 4)) && this.isTablet() == false) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isTablet = function () {
        if (const_1.REG_TABLETS.IPAD.test(this._userAgent) || const_1.REG_TABLETS.KINDLE.test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[0].test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[1].test(this._userAgent) || const_1.REG_TABLETS.TABLET.test(this._userAgent)) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isSMART = function () {
        if (const_1.REG_SMARTS_TV.GENERIC_TV.test(this._userAgent) || const_1.REG_SMARTS_TV.PS4.test(this._userAgent) || const_1.REG_SMARTS_TV.XBOX_ONE.test(this._userAgent)) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isDesktop = function () {
        if (!this.isMobile() || !this.isTablet() || !this.isSMART()) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.getUserAgent = function () {
        return window.navigator.userAgent.toLowerCase();
    };
    ResponsiveState.prototype.getOrientation = function () {
        return window.orientation;
    };
    ResponsiveState = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [ResponsiveConfig])
    ], ResponsiveState);
    return ResponsiveState;
}());
exports.ResponsiveState = ResponsiveState;

//# sourceMappingURL=data:application/json;base64,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QUVPLHdDQUFjLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDOUIsQ0FBQztJQTFUTDtRQUFDLGlCQUFVLEVBQUU7bUJBNkJLLGVBQVEsRUFBRTs7dUJBN0JmO0lBNFRiLHNCQUFDO0FBQUQsQ0EzVEEsQUEyVEMsSUFBQTtBQTNUWSx1QkFBZSxrQkEyVDNCLENBQUEiLCJmaWxlIjoiY29uZmlnL2NvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3Vic2NyaXB0aW9ufSBmcm9tICAncnhqcy9SeCc7XG5pbXBvcnQge1Jlc3BvbnNpdmVXaW5kb3d9IGZyb20gJy4uL3Jlc3BvbnNpdmUtd2luZG93L3Jlc3BvbnNpdmUtd2luZG93JztcbmltcG9ydCB7R0xPQkFMX0lOUFVUUywgUkVHX1RBQkxFVFMsIFJFR19NT0JJTEVTLCBSRUdfU01BUlRTX1RWLCBSRUdfQlJPV1NFUlMsIFJFR19TT1JUX05BTUVTIH0gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQge1Jlc3BvbnNpdmVDb25maWdJbnRlcmZhY2UsIHJlc3BvbnNpdmVTdWJzY3JpcHRpb25zfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vLyBDb25maWd1cmF0aW9uIGNsYXNzIGluIG9yZGVyIHRvIGFsbG93IHRvIGNoYW5nZSBicmVha3BvaW50cyB2YWx1ZXNcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlQ29uZmlnIHtcbiAgICBjb25maWc6IFJlc3BvbnNpdmVDb25maWdJbnRlcmZhY2UgPSB7XG4gICAgICAgIGJyZWFrUG9pbnRzOiB7XG4gICAgICAgICAgICB4czogeyBtYXg6IDc2NyB9LFxuICAgICAgICAgICAgc206IHsgbWluOiA3NjgsIG1heDogOTkxIH0sXG4gICAgICAgICAgICBtZDogeyBtaW46IDk5MiwgbWF4OiAxMTk5IH0sXG4gICAgICAgICAgICBsZzogeyBtaW46IDEyMDAsIG1heDogMTU5OSB9LFxuICAgICAgICAgICAgeGw6IHsgbWluOiAxNjAwIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVib3VuY2VUaW1lOiAxMDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIGNvbmZpZz86IFJlc3BvbnNpdmVDb25maWdJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYgKCEhY29uZmlnKSB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU3RhdGUge1xuICAgIHByaXZhdGUgX3dpbmRvd3M6IE9iamVjdCA9IHt9O1xuXG4gICAgLy9Cb290c3RyYXAgQ29uZmlndXJhdGlvblxuICAgIHByaXZhdGUgX3Jlc3BvbnNpdmVDb25maWc6IFJlc3BvbnNpdmVDb25maWc7XG5cbiAgICAvL09ic2VydmVyc1xuICAgIHB1YmxpYyBlbGVtZW50b09ic2VydmFyOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIGFuY2hvT2JzZXJ2YXI6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBwdWJsaWMgYWx0dXJhT2JzZXJ2YXI6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBwdWJsaWMgYnJvd3Nlck9ic2VydmVyOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIHBpeGVsT2JzZXJ2ZXI6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwdWJsaWMgZGV2aWNlT2JzZXJ2ZXI6IE9ic2VydmFibGU8YW55PjtcbiAgICBwdWJsaWMgb3JpZW50YXRpb25PYnNlcnZlcjogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBzdGFuZGFyZE9ic2VydmVyOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHVibGljIGllVmVyc2lvbk9ic2VydmVyOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAvL1ByaXZhdGUgb2JqZWN0c1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2NyZWVuV2lkdGg6IG51bWJlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gICAgcHJpdmF0ZSBfc2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvbjogc3RyaW5nIHwgbnVtYmVyID0gd2luZG93Lm9yaWVudGF0aW9uO1xuICAgIHByaXZhdGUgX3VzZXJBZ2VudDogYW55ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBwcml2YXRlIF93aW5kb3c6IGFueSA9IHdpbmRvdztcbiAgICBwcml2YXRlIF92ZW5kb3I6IGFueSA9IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yO1xuXG4gICAgLy9PcHRpb25hbCBjb25maWdcbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgcmVzcG9uc2l2ZUNvbmZpZzogUmVzcG9uc2l2ZUNvbmZpZykge1xuICAgICAgICB0aGlzLl9yZXNwb25zaXZlQ29uZmlnID0gISFyZXNwb25zaXZlQ29uZmlnID8gcmVzcG9uc2l2ZUNvbmZpZyA6IG5ldyBSZXNwb25zaXZlQ29uZmlnKCk7XG5cbiAgICAgICAgLy9XaW5kb3cgcmVzaXplIG9ic2VydmVyXG4gICAgICAgIGxldCByZXNpemVfb2JzZXJ2ZXIgPSBPYnNlcnZhYmxlXG4gICAgICAgICAgICAuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmRlYm91bmNlVGltZSlcbiAgICAgICAgICAgIC5kZWZhdWx0SWZFbXB0eSgpXG4gICAgICAgICAgICAuc3RhcnRXaXRoKHRoaXMuZ2V0V2lkdGgoJ3dpbmRvdycpKTtcbiAgICAgICAgLy9HZXQgcGl4ZWwgcmF0aW9cbiAgICAgICAgbGV0IHBpeGVsX3JhdGlvX29ic2VydmVyID0gT2JzZXJ2YWJsZVxuICAgICAgICAgICAgLmZyb21FdmVudCh3aW5kb3csICdvbmxvYWQnKVxuICAgICAgICAgICAgLmRlZmF1bHRJZkVtcHR5KClcbiAgICAgICAgICAgIC5zdGFydFdpdGgodGhpcy5nZXREZXZpY2VQaXhlbFJhdGlvKCkpO1xuICAgICAgICAvL0dldCB1c2VyIGFnZW50XG4gICAgICAgIGxldCBkZXZpY2Vfb2JzZXJ2ZXIgPSBPYnNlcnZhYmxlXG4gICAgICAgICAgICAuZnJvbUV2ZW50KHdpbmRvdywgJ29ubG9hZCcpXG4gICAgICAgICAgICAuZGVmYXVsdElmRW1wdHkoKVxuICAgICAgICAgICAgLnN0YXJ0V2l0aCh0aGlzLmdldFVzZXJBZ2VudCgpKTtcbiAgICAgICAgLy9XaW5kb3cgb3JpZW50YXRpb24gY2hhbmdlcyBvYnNlcnZlclxuICAgICAgICBsZXQgb3JpZW50YXRpb25fb2JzZXJ2ZXIgPSBPYnNlcnZhYmxlXG4gICAgICAgICAgICAuZnJvbUV2ZW50KHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJylcbiAgICAgICAgICAgIC5kZWZhdWx0SWZFbXB0eSgpXG4gICAgICAgICAgICAuc3RhcnRXaXRoKHRoaXMuZ2V0T3JpZW50YXRpb24oKSk7XG5cbiAgICAgICAgLy9NYXAgb3BlcmF0aW9uc1xuICAgICAgICB0aGlzLmVsZW1lbnRvT2JzZXJ2YXIgPSByZXNpemVfb2JzZXJ2ZXIubWFwKHRoaXMuc2l6ZU9wZXJhdGlvbnMpO1xuICAgICAgICB0aGlzLmFuY2hvT2JzZXJ2YXIgPSByZXNpemVfb2JzZXJ2ZXIubWFwKHRoaXMuc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdGhpcy5icm93c2VyT2JzZXJ2ZXIgPSBkZXZpY2Vfb2JzZXJ2ZXIubWFwKHRoaXMuYnJvd3Nlck5hbWUpO1xuICAgICAgICB0aGlzLnBpeGVsT2JzZXJ2ZXIgPSBwaXhlbF9yYXRpb19vYnNlcnZlci5tYXAodGhpcy5waXhlbF9yYXRpbyk7XG4gICAgICAgIHRoaXMuZGV2aWNlT2JzZXJ2ZXIgPSBkZXZpY2Vfb2JzZXJ2ZXIubWFwKHRoaXMuZGV2aWNlX2RldGVjdGlvbik7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PYnNlcnZlciA9IG9yaWVudGF0aW9uX29ic2VydmVyLm1hcCh0aGlzLm9yaWVudGF0aW9uX2RldmljZSk7XG4gICAgICAgIHRoaXMuc3RhbmRhcmRPYnNlcnZlciA9IGRldmljZV9vYnNlcnZlci5tYXAodGhpcy5zdGFuZGFyZF9kZXZpY2VzKTtcbiAgICAgICAgdGhpcy5pZVZlcnNpb25PYnNlcnZlciA9IGRldmljZV9vYnNlcnZlci5tYXAodGhpcy5pZV92ZXJzaW9uX2RldGVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdpZHRoKHdpbmRvd05hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGlmICh3aW5kb3dOYW1lICYmIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZV0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lXS5nZXRXaWR0aCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyV2luZG93ID0gKHJ3OiBSZXNwb25zaXZlV2luZG93KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJFR0lTVEVSXCIpO1xuICAgICAgICBpZiAocncubmFtZSAmJiAhdGhpcy5fd2luZG93c1tydy5uYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5fd2luZG93c1tydy5uYW1lXSA9IHJ3O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RFUiBcIiArIHJ3Lm5hbWUpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5yZWdpc3RlcldpbmRvdyA9IChydzogUmVzcG9uc2l2ZVdpbmRvdykgPT4ge1xuICAgICAgZm9yIChsZXQgcnduIGluIHRoaXMuX3dpbmRvd3MpIHtcbiAgICAgICAgICBpZiAodGhpcy5fd2luZG93c1tyd25dID09PSBydykge1xuICAgICAgICAgICAgICBkZWxldGUgKHRoaXMuX3dpbmRvd3NbcnduXSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqICBCb290c3RyYXAgc3RhdGVzXG4gICAgICogIHhsIC8gbGcgLyBtZCAvIHNtIC8geHNcbiAgICAgKiAgQEN1c3RvbSBicmVhY2twb2ludHNcbiAgICAgKi9cbiAgICBwcml2YXRlIHNpemVPYnNlcnZlciA9ICgpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGggPSB0aGlzLmdldFdpZHRoKCd3aW5kb3cnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzaXplT3BlcmF0aW9ucyA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuZ2V0V2lkdGgoJ3dpbmRvdycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGJyZWFrcG9pbnRzID0gdGhpcy5fcmVzcG9uc2l2ZUNvbmZpZy5jb25maWcuYnJlYWtQb2ludHM7XG4gICAgICAgICAgICBpZiAoYnJlYWtwb2ludHMueGwubWluIDw9IHRoaXMuX3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd4bCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRzLmxnLm1heCA+PSB0aGlzLl93aWR0aCAmJiBicmVha3BvaW50cy5sZy5taW4gPD0gdGhpcy5fd2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludHMubWQubWF4ID49IHRoaXMuX3dpZHRoICYmIGJyZWFrcG9pbnRzLm1kLm1pbiA8PSB0aGlzLl93aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50cy5zbS5tYXggPj0gdGhpcy5fd2lkdGggJiYgYnJlYWtwb2ludHMuc20ubWluIDw9IHRoaXMuX3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzbSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRzLnhzLm1heCA+PSB0aGlzLl93aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAneHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdzaXplIG9wZXJhdGlvbnMgZXJyb3IgOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBicm93c2VyTmFtZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFJFR19TT1JUX05BTUVTLldFQktJVFswXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgJiYgUkVHX1NPUlRfTkFNRVMuQ0hST01FLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJiAhUkVHX0JST1dTRVJTLklFWzJdLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1NPUlRfTkFNRVMuTU9aSUxMQS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgJiYgUkVHX0JST1dTRVJTLkZJUkVGT1gudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX0JST1dTRVJTLklFWzBdLnRlc3QodGhpcy5fdXNlckFnZW50KSB8fCBSRUdfQlJPV1NFUlMuSUVbMV0udGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8IFJFR19CUk9XU0VSUy5JRVsyXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1NPUlRfTkFNRVMuU0FGQVJJLnRlc3QodGhpcy5fdXNlckFnZW50KSAmJiBSRUdfU09SVF9OQU1FUy5XRUJLSVRbMV0udGVzdCh0aGlzLl91c2VyQWdlbnQpICYmICFSRUdfU09SVF9OQU1FUy5DSFJPTUUudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChSRUdfQlJPV1NFUlMuT1BFUkEudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19CUk9XU0VSUy5TSUxLLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc2lsayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19CUk9XU0VSUy5ZQU5ERVgudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd5YW5kZXgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05BJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcignZ2V0IGJyb3dzZXIgOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGllX3ZlcnNpb25fZGV0ZWN0ID0gKCk6IGFueSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbXNpZSA9IHRoaXMuX3VzZXJBZ2VudC5pbmRleE9mKCdtc2llICcpO1xuICAgICAgICAgICAgaWYgKFJFR19CUk9XU0VSUy5JRVswXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWVfdmVyc2lvbiA9IHBhcnNlSW50KHRoaXMuX3VzZXJBZ2VudC5zdWJzdHJpbmcobXNpZSArIDUsIHRoaXMuX3VzZXJBZ2VudC5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCk7XG4gICAgICAgICAgICAgICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICAgICAgICAgICAgaWYgKGllX3ZlcnNpb24gPT0gNykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2llIDcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWVfdmVyc2lvbiA9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaWUgOCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZV92ZXJzaW9uID09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpZSA5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGllX3ZlcnNpb24gPT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpZSAxMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdHJpZGVudCA9IHRoaXMuX3VzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50LycpO1xuICAgICAgICAgICAgaWYgKFJFR19CUk9XU0VSUy5JRVsxXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJRSAxMSA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcbiAgICAgICAgICAgICAgICBsZXQgcnYgPSB0aGlzLl91c2VyQWdlbnQuaW5kZXhPZigncnY6Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGllX3ZlcnNpb24gPSBwYXJzZUludCh0aGlzLl91c2VyQWdlbnQuc3Vic3RyaW5nKHJ2ICsgMywgdGhpcy5fdXNlckFnZW50LmluZGV4T2YoJy4nLCBydikpLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGllX3ZlcnNpb24gPT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpZSAxMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZWRnZSA9IHRoaXMuX3VzZXJBZ2VudC5pbmRleE9mKCdFZGdlLycpO1xuICAgICAgICAgICAgaWYgKFJFR19CUk9XU0VSUy5JRVsyXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIChJRSAxMispID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgICAgICAgICAgIC8vbGV0IGllX3ZlcnNpb24gPSBwYXJzZUludCh0aGlzLnVzZXJBZ2VudC5zdWJzdHJpbmcoZWRnZSArIDUsIHRoaXMudXNlckFnZW50LmluZGV4T2YoJy4nLCBlZGdlKSksIDEwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llICsxMic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdpZSBlcnJvciA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVjdCBFcnJvclxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBpeGVsX3JhdGlvID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXN0X0lzXzRrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzRrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXREZXZpY2VQaXhlbFJhdGlvKCkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZXRpbmEnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldERldmljZVBpeGVsUmF0aW8oKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcxeCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdwaXhlbCByYXRpbyA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGVzdF9Jc180aygpOiBhbnkge1xuICAgICAgICByZXR1cm4gKCh0aGlzLl9zY3JlZW5IZWlnaHQgPCB0aGlzLl9zY3JlZW5XaWR0aCkgPyAodGhpcy5fc2NyZWVuV2lkdGggPiAzODM5KSA6ICh0aGlzLl9zY3JlZW5IZWlnaHQgPiAzODM5KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREZXZpY2VQaXhlbFJhdGlvKCkge1xuICAgICAgICBsZXQgcmF0aW8gPSAxO1xuICAgICAgICBpZiAod2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJICE9PSB1bmRlZmluZWQgJiYgd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYXRpbztcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkZXZpY2VfZGV0ZWN0aW9uID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVGFibGV0KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RhYmxldCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNTTUFSVCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzbWFydHR2JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rlc2t0b3AoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZGVza3RvcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ3BpeGVsIHJhdGlvIDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcmllbnRhdGlvbl9kZXZpY2UgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKCkgfHwgdGhpcy5pc1RhYmxldCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjcmVlbkhlaWdodCA+IHRoaXMuX3NjcmVlbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncG9ydHJhaXQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3JpZW50YXRpb24gPT09IDkwIHx8IHRoaXMuX29yaWVudGF0aW9uID09PSAtOTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdsYW5kc2NhcGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1NNQVJUKCkgfHwgdGhpcy5pc0Rlc2t0b3AoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbGFuZHNjYXBlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ3BpeGVsIHJhdGlvIDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFuZGFyZF9kZXZpY2VzID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoUkVHX01PQklMRVMuSVBIT05FLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaXBob25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVHX1RBQkxFVFMuSVBBRC50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2lwYWQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTW9iaWxlKCkgJiYgUkVHX01PQklMRVMuQU5EUk9JRC50ZXN0KHRoaXMuX3VzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FuZHJvaWQgbW9iaWxlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1RhYmxldCgpICYmIFJFR19NT0JJTEVTLkFORFJPSUQudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhbmRyb2lkIHRhYmxldCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJFR19NT0JJTEVTLldJTkRPV1NfUEhPTkUudGVzdCh0aGlzLl91c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd3aW5kb3dzIHBob25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcigncGl4ZWwgcmF0aW8gOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoUkVHX01PQklMRVMuR0VORVJJQ19SRUdbMF0udGVzdCh0aGlzLl91c2VyQWdlbnQpICYmIHRoaXMuaXNUYWJsZXQoKSA9PSBmYWxzZSB8fFxuICAgICAgICAgICAgUkVHX01PQklMRVMuR0VORVJJQ19SRUdbMV0udGVzdCh0aGlzLl91c2VyQWdlbnQuc3Vic3RyKDAsIDQpKSAmJiB0aGlzLmlzVGFibGV0KCkgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNUYWJsZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChSRUdfVEFCTEVUUy5JUEFELnRlc3QodGhpcy5fdXNlckFnZW50KSB8fCBSRUdfVEFCTEVUUy5LSU5ETEUudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8IFJFR19UQUJMRVRTLlBMQVlCT09LWzBdLnRlc3QodGhpcy5fdXNlckFnZW50KSB8fCBSRUdfVEFCTEVUUy5QTEFZQk9PS1sxXS50ZXN0KHRoaXMuX3VzZXJBZ2VudCkgfHwgUkVHX1RBQkxFVFMuVEFCTEVULnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU01BUlQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChSRUdfU01BUlRTX1RWLkdFTkVSSUNfVFYudGVzdCh0aGlzLl91c2VyQWdlbnQpIHx8IFJFR19TTUFSVFNfVFYuUFM0LnRlc3QodGhpcy5fdXNlckFnZW50KSB8fCBSRUdfU01BUlRTX1RWLlhCT1hfT05FLnRlc3QodGhpcy5fdXNlckFnZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRGVza3RvcCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW9iaWxlKCkgfHwgIXRoaXMuaXNUYWJsZXQoKSB8fCAhdGhpcy5pc1NNQVJUKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVc2VyQWdlbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPcmllbnRhdGlvbigpOiBhbnkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm9yaWVudGF0aW9uO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
