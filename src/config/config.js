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
        this._screenWidth = window.screen.width;
        this._screenHeight = window.screen.height;
        this._orientation = window.orientation;
        this._userAgent = window.navigator.userAgent.toLowerCase();
        this._window = window;
        this._vendor = window.navigator.vendor;
        /*
         *  Bootstrap states
         *  xl / lg / md / sm / xs
         *  @Custom breackpoints
         */
        this.sizeObserver = function () {
            return _this._width = _this.getWidth();
        };
        this.sizeOperations = function () {
            _this._width = _this.getWidth();
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
        //window resize observer
        var resize_observer = Rx_1.Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth());
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
    ResponsiveState.prototype.getWidth = function () {
        return window.innerWidth;
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
//# sourceMappingURL=config.js.map