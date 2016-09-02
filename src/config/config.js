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
            if (rw.name && !_this._windows[rw.name]) {
                _this._windows[rw.name] = rw;
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
                    if (window.innerHeight > window.innerWidth) {
                        return 'portrait';
                    }
                    else {
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
        this.game_devices = function () {
            try {
                if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent)) {
                    return 'Playstation 4';
                }
                else if (const_1.REG_GAME_DEVICES.PS3.test(_this._userAgent)) {
                    return 'Playstation 3';
                }
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent)) {
                    return 'Xbox one';
                }
                else if (const_1.REG_GAME_DEVICES.XBOX.test(_this._userAgent)) {
                    return 'Xbox';
                }
                else if (const_1.REG_GAME_DEVICES.WII.test(_this._userAgent)) {
                    return 'Wii';
                }
                else if (const_1.REG_GAME_DEVICES.WII_U.test(_this._userAgent)) {
                    return 'Wii U';
                }
                else if (const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(_this._userAgent)) {
                    return 'Nintendo 3DS';
                }
                else if (const_1.REG_GAME_DEVICES.PS_VITA.test(_this._userAgent)) {
                    return 'Playstation Vita';
                }
                else if (const_1.REG_GAME_DEVICES.PSP.test(_this._userAgent)) {
                    return 'PSP';
                }
            }
            catch (error) {
            }
            return null;
        };
        this.smart_tv = function () {
            try {
                if (const_1.REG_SMARTS_TV.CHROMECAST.test(_this._userAgent)) {
                    return 'Chromecast';
                }
                else if (const_1.REG_SMARTS_TV.APPLE_TV.test(_this._userAgent)) {
                    return 'Apple tv';
                }
                else if (const_1.REG_SMARTS_TV.GOOGLE_TV.test(_this._userAgent)) {
                    return 'Google tv';
                }
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent)) {
                    return 'Xbox One';
                }
                else if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent)) {
                    return 'Playstation 4';
                }
                else if (const_1.REG_SMARTS_TV.GENERIC_TV.test(_this._userAgent)) {
                    return 'Generic smartv';
                }
            }
            catch (error) {
            }
            return null;
        };
        this.desktop = function () {
            try {
                if (_this.isDesktop()) {
                    if (const_1.REG_OS.WINDOWS.test(_this._userAgent)) {
                        return 'Windows';
                    }
                    else if (const_1.REG_OS.MAC_OS.test(_this._userAgent)) {
                        return 'Mac';
                    }
                    else if (const_1.REG_OS.LINUX.test(_this._userAgent)) {
                        return 'Linux';
                    }
                }
            }
            catch (error) {
            }
            return null;
        };
        this.tablet = function () {
            try {
                if (_this.isTablet()) {
                    if (const_1.REG_TABLETS.IPAD.test(_this._userAgent)) {
                        return 'Ipad';
                    }
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent) && const_1.REG_MOBILES.ANDROID.test(_this._userAgent)) {
                        return 'Android';
                    }
                    else if (const_1.REG_TABLETS.KINDLE.test(_this._userAgent)) {
                        return 'Kindle';
                    }
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent)) {
                        return 'Generic Tablet';
                    }
                }
            }
            catch (error) {
            }
            return null;
        };
        this.mobile = function () {
            try {
                if (_this.isMobile()) {
                    if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent)) {
                        return 'Iphone';
                    }
                    else if (const_1.REG_MOBILES.ANDROID.test(_this._userAgent)) {
                        return 'Android';
                    }
                    else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent)) {
                        return 'Windows Phone';
                    }
                    else if (const_1.REG_MOBILES.BLACKBERRY.test(_this._userAgent) || const_1.REG_MOBILES.BB10.test(_this._userAgent)) {
                        return 'Blackberry';
                    }
                    else {
                        return 'Generic Mobile';
                    }
                }
            }
            catch (error) {
            }
            return null;
        };
        this.windows = function () {
            try {
                if (_this.isDesktop() && _this.isWindows()) {
                    if (const_1.WINDOWS_OS_VERSION.WINDOWS_XP.test(_this._userAgent)) {
                        return 'Windows XP';
                    }
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_VISTA.test(_this._userAgent)) {
                        return 'Windows Vista';
                    }
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_7.test(_this._userAgent)) {
                        return 'Windows 7';
                    }
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_8.test(_this._userAgent) || const_1.WINDOWS_OS_VERSION.WINDOWS_8_1.test(_this._userAgent)) {
                        return 'Windows 8';
                    }
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_10.test(_this._userAgent)) {
                        return 'Windows 10';
                    }
                    else {
                        return 'Generic Windows';
                    }
                }
            }
            catch (error) {
            }
            return null;
        };
        this.linux = function () {
            try {
                if (_this.isDesktop() && _this.isLinux()) {
                    if (const_1.LINUX_OS.DEBIAN.test(_this._userAgent)) {
                        return 'Debian';
                    }
                    else if (const_1.LINUX_OS.KNOPPIX.test(_this._userAgent)) {
                        return 'Knoppix';
                    }
                    else if (const_1.LINUX_OS.MINT.test(_this._userAgent)) {
                        return 'Mint';
                    }
                    else if (const_1.LINUX_OS.UBUNTU.test(_this._userAgent)) {
                        return 'Ubuntu';
                    }
                    else if (const_1.LINUX_OS.KUBUNTU.test(_this._userAgent)) {
                        return 'Kubuntu';
                    }
                    else if (const_1.LINUX_OS.XUBUNTU.test(_this._userAgent)) {
                        return 'Xubuntu';
                    }
                    else if (const_1.LINUX_OS.LUBUNTU.test(_this._userAgent)) {
                        return 'Lubuntu';
                    }
                    else if (const_1.LINUX_OS.FEDORA.test(_this._userAgent)) {
                        return 'Fedora';
                    }
                    else if (const_1.LINUX_OS.RED_HAT.test(_this._userAgent)) {
                        return 'Red hat';
                    }
                    else if (const_1.LINUX_OS.MANDRIVA.test(_this._userAgent)) {
                        return 'Mandriva';
                    }
                    else if (const_1.LINUX_OS.GENTOO.test(_this._userAgent)) {
                        return 'Gentoo';
                    }
                    else if (const_1.LINUX_OS.SABAYON.test(_this._userAgent)) {
                        return 'Sabayon';
                    }
                    else if (const_1.LINUX_OS.SLACKWARE.test(_this._userAgent)) {
                        return 'Slackware';
                    }
                    else if (const_1.LINUX_OS.SUSE.test(_this._userAgent)) {
                        return 'Suse';
                    }
                    else if (const_1.LINUX_OS.CENT_OS.test(_this._userAgent)) {
                        return 'CentOS';
                    }
                    else if (const_1.LINUX_OS.BACKTRACK.test(_this._userAgent)) {
                        return 'Backtrack';
                    }
                    else {
                        return 'Generic Linux';
                    }
                }
            }
            catch (error) {
            }
            return null;
        };
        this.userAgent_data = function () {
            var ie_version_name = '';
            var ie_version_state = false;
            var game_device_name = '';
            var smart_tv_name = '';
            var desktop_name = '';
            var tablet_name = '';
            var mobile_name = '';
            var windows_name = '';
            var linux_name = '';
            if (_this.ie_version_detect() != null) {
                ie_version_name = _this.ie_version_detect();
                ie_version_state = true;
            }
            if (_this.isGameDevice()) {
                game_device_name = _this.game_devices();
            }
            if (_this.isSMART()) {
                smart_tv_name = _this.smart_tv();
            }
            if (_this.isDesktop()) {
                desktop_name = _this.desktop();
            }
            if (_this.isTablet()) {
                tablet_name = _this.tablet();
            }
            if (_this.isMobile()) {
                mobile_name = _this.mobile();
            }
            if (_this.isWindows()) {
                windows_name = _this.windows();
            }
            if (_this.isLinux()) {
                linux_name = _this.linux();
            }
            return {
                device: _this.device_detection(),
                browser: _this.browserName(),
                pixelratio: _this.pixel_ratio(),
                ie_version: {
                    name: ie_version_name,
                    state: ie_version_state
                },
                game_device: {
                    name: game_device_name,
                    state: _this.isGameDevice()
                },
                smart_tv: {
                    name: smart_tv_name,
                    state: _this.isSMART()
                },
                desktop: {
                    name: desktop_name,
                    state: _this.isDesktop()
                },
                tablet: {
                    name: tablet_name,
                    state: _this.isTablet()
                },
                mobile: {
                    name: mobile_name,
                    state: _this.isMobile()
                },
                window_os: {
                    name: windows_name,
                    state: _this.isWindows()
                },
                linux_os: {
                    name: linux_name,
                    state: _this.isLinux()
                },
                bot: _this.isBot()
            };
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
        var user_agent_observer = Rx_1.Observable.fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.userAgent_data());
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
        this.userAgentObserver = user_agent_observer.map(this.userAgent_data);
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
    ResponsiveState.prototype.isGameDevice = function () {
        if (const_1.REG_GAME_DEVICES.PS4.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS3.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.XBOX.test(this._userAgent) || const_1.REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.WII.test(this._userAgent) || const_1.REG_GAME_DEVICES.WII_U.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS_VITA.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.PSP.test(this._userAgent)) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isWindows = function () {
        if (const_1.REG_OS.WINDOWS.test(this._userAgent)) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isLinux = function () {
        if (const_1.REG_OS.LINUX.test(this._userAgent)) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsiveState.prototype.isBot = function () {
        if (const_1.REG_BOTS.GENERIC_BOT.test(this._userAgent)) {
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
//# sourceMappingURL=config.js.map