import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import { REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES } from './const';
import {ResponsiveConfigInterface} from './interfaces';

// Configuration class in order to allow to change breakpoints values
@Injectable()
export class ResponsiveConfig {
    config: ResponsiveConfigInterface = {
        breakPoints: {
            xs: { max: 767 },
            sm: { min: 768, max: 991 },
            md: { min: 992, max: 1199 },
            lg: { min: 1200, max: 1599 },
            xl: { min: 1600 }
        },
        debounceTime: 100
    };


    constructor( @Optional() config?: ResponsiveConfigInterface) {
        if (!!config)
            this.config = config;
    }
}

@Injectable()
export class ResponsiveState {
    private _responsiveConfig: ResponsiveConfig;
    elementoObservar: Observable<string>;
    anchoObservar: Observable<number>;
    alturaObservar: Observable<number>;
    browserObserver: Observable<string>;
    pixelObserver: Observable<string>;
    deviceObserver: Observable<any>;
    orientationObserver: Observable<any>;
    standardObserver: Observable<any>;
    ieVersionObserver: Observable<any>;

    width: number;
    height: number;
    screenWidth: number = window.screen.width;
    screenHeight: number = window.screen.height;
    orientation: string | number = window.orientation;
    userAgent: any = window.navigator.userAgent.toLowerCase();
    navigator: any = window.navigator;
    window: any = window;
    vendor: any = window.navigator.vendor;
    matchMedia: any = window.matchMedia;

    //Optional es un ternario.
    constructor( @Optional() responsiveConfig: ResponsiveConfig) {
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();

        let resize_observer = Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth());

        let pixel_ratio_observer = Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getDevicePixelRatio());

        let device_observer = Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getUserAgent());

        let orientation_observer = Observable
            .fromEvent(window, 'orientationchange')
            .defaultIfEmpty()
            .startWith(this.getOrientation());


        this.elementoObservar = resize_observer.map(this.sizeOperations);
        this.anchoObservar = resize_observer.map(this.sizeObserver);
        this.browserObserver = device_observer.map(this.browserName);
        this.pixelObserver = pixel_ratio_observer.map(this.pixel_ratio);
        this.deviceObserver = device_observer.map(this.device_detection);
        this.orientationObserver = orientation_observer.map(this.orientation_device);
        this.standardObserver = device_observer.map(this.standard_devices);
        this.ieVersionObserver = device_observer.map(this.ie_version_detect);
    }


    private sizeObserver = (): number => {
        return this.width = this.getWidth();
    };

    private sizeOperations = (): string => {
        this.width = this.getWidth();
        try {
            let breakpoints = this._responsiveConfig.config.breakPoints;
            if (breakpoints.xl.min <= this.width) {
                return 'xl';
            } else if (breakpoints.lg.max >= this.width && breakpoints.lg.min <= this.width) {
                return 'lg';
            } else if (breakpoints.md.max >= this.width && breakpoints.md.min <= this.width) {
                return 'md';
            } else if (breakpoints.sm.max >= this.width && breakpoints.sm.min <= this.width) {
                return 'sm';
            } else if (breakpoints.xs.max >= this.width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
        return null;
    };

    private browserName = (): string => {
        try {
            if (REG_SORT_NAMES.WEBKIT[0].test(this.userAgent) && REG_SORT_NAMES.CHROME.test(this.userAgent) && !REG_BROWSERS.IE[2].test(this.userAgent)) {
                return 'chrome';
            } else if (REG_SORT_NAMES.MOZILLA.test(this.userAgent) && REG_BROWSERS.FIREFOX.test(this.userAgent)) {
                return 'firefox';
            } else if (REG_BROWSERS.IE[0].test(this.userAgent) || REG_BROWSERS.IE[1].test(this.userAgent) || REG_BROWSERS.IE[2].test(this.userAgent)) {
                return 'ie';
            } else if (REG_SORT_NAMES.SAFARI.test(this.userAgent) && REG_SORT_NAMES.WEBKIT[1].test(this.userAgent) && !REG_SORT_NAMES.CHROME.test(this.userAgent)) {
                return 'safari';
            } else if (REG_BROWSERS.OPERA.test(this.userAgent)) {
                return 'opera';
            } else if (REG_BROWSERS.SILK.test(this.userAgent)) {
                return 'silk';
            } else if (REG_BROWSERS.YANDEX.test(this.userAgent)) {
                return 'yandex';
            } else {
                return 'NA';
            }
        } catch (error) {
            //console.error('get browser :', error);
        }
        return null;
    }

    private pixel_ratio = (): string => {
        try {
            if (this.test_Is_4k()) {
                return '4k';
            } else if (this.getDevicePixelRatio() > 1) {
                return 'retina';
            } else if (this.getDevicePixelRatio() == 1) {
                return '1x';
            } else {
                return null;
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private ie_version_detect = (): any => {
        try {
            let msie = this.userAgent.indexOf('msie ');
            if (REG_BROWSERS.IE[0].test(this.userAgent)) {
                let ie_version = parseInt(this.userAgent.substring(msie + 5, this.userAgent.indexOf('.', msie)), 10);
                // IE 10 or older => return version number
                if (ie_version == 7) {
                    return 'ie 7';
                } else if (ie_version == 8) {
                    return 'ie 8';
                } else if (ie_version == 9) {
                    return 'ie 9';
                } else if (ie_version == 10) {
                    return 'ie 10';
                }
                return null;
            }

            let trident = this.userAgent.indexOf('trident/');
            if (REG_BROWSERS.IE[1].test(this.userAgent)) {
                // IE 11 => return version number
                let rv = this.userAgent.indexOf('rv:');
                let ie_version = parseInt(this.userAgent.substring(rv + 3, this.userAgent.indexOf('.', rv)), 10);
                if (ie_version == 11) {
                    return 'ie 11';
                }
                return null;
            }

            let edge = this.userAgent.indexOf('Edge/');
            if (REG_BROWSERS.IE[2].test(this.userAgent)) {
                // Edge (IE 12+) => return version number
                //let ie_version = parseInt(this.userAgent.substring(edge + 5, this.userAgent.indexOf('.', edge)), 10);
                return 'ie +12';
            }
        } catch (error) {
            // console.error('ie error :', error);
        }
        // detect Error
        return null;
    }

    private device_detection = (): string => {
        try {
            if (this.isMobile()) {
                return 'mobile';
            } else if (this.isTablet()) {
                return 'tablet';
            } else if (this.isSMART()) {
                return 'smarttv';
            } else if (this.isDesktop()) {
                return 'desktop';
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private orientation_device = (): string => {
        try {
            if (this.isMobile() || this.isTablet()) {
                if (this.screenHeight > this.screenWidth) {
                    return 'portrait';
                } else if (this.orientation === 90 || this.orientation === -90) {
                    return 'landscape';
                }
            } else if (this.isSMART() || this.isDesktop()) {
                return 'landscape';
            } else {
                return null;
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private standard_devices = (): string => {
        try {
            if (REG_MOBILES.IPHONE.test(this.userAgent)) {
                return 'iphone';
            } else if (REG_TABLETS.IPAD.test(this.userAgent)) {
                return 'ipad';
            } else if (this.isMobile() && REG_MOBILES.ANDROID.test(this.userAgent)) {
                return 'android mobile';
            } else if (this.isTablet() && REG_MOBILES.ANDROID.test(this.userAgent)) {
                return 'android tablet';
            } else if (REG_MOBILES.WINDOWS_PHONE.test(this.userAgent)) {
                return 'windows phone';
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }


    test_Is_4k(): any {
        return ((this.screenHeight < this.screenWidth) ? (this.screenWidth > 3839) : (this.screenHeight > 3839));
    }

    getDevicePixelRatio() {
        let ratio = 1;
        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        }
        else if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        return ratio;
    };

    isMobile(): boolean {
        if (REG_MOBILES.GENERIC_REG[0].test(this.userAgent) && this.isTablet() == false ||
            REG_MOBILES.GENERIC_REG[1].test(this.userAgent.substr(0, 4)) && this.isTablet() == false
        ) {
            return true;
        } else {
            return false;
        }
    }

    isTablet(): boolean {
        if (REG_TABLETS.IPAD.test(this.userAgent) || REG_TABLETS.KINDLE.test(this.userAgent) || REG_TABLETS.PLAYBOOK[0].test(this.userAgent) || REG_TABLETS.PLAYBOOK[1].test(this.userAgent) || REG_TABLETS.TABLET.test(this.userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    isSMART(): boolean {
        if (REG_SMARTS_TV.GENERIC_TV.test(this.userAgent) || REG_SMARTS_TV.PS4.test(this.userAgent) || REG_SMARTS_TV.XBOX_ONE.test(this.userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    isDesktop(): boolean {
        if (!this.isMobile() || !this.isTablet() || !this.isSMART()) {
            return true;
        } else {
            return false;
        }
    }

    iOS_SO(): any {
        if (/iPad|iPhone|iPod/.test(this.userAgent) && !this.window.MSStream) {
            if (!!this.window.indexedDB) { return 'iOS 8'; }
            if (!!this.window.SpeechSynthesisUtterance) { return 'iOS 7'; }
            if (!!this.window.webkitAudioContext) { return 'iOS 6'; }
            if (!!this.window.matchMedia) { return 'iOS 5'; }
            if (!!this.window.history && 'pushState' in this.window.history) { return 'iOS 4'; }
            return 'iOS 3';
        }
    }

    getWidth(): number {
        return window.innerWidth;
    }

    getHeigth(): number {
        return window.innerHeight;
    }

    getUserAgent(): any {
        return window.navigator.userAgent.toLowerCase();
    }

    getOrientation(): any {
        return window.orientation;
    }

    //remove on next release
    getDeviceSizeInitial(): string {
        return this.sizeOperations();
    }
}
