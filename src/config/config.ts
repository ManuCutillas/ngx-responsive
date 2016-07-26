import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveWindow} from '../responsive-window/responsive-window';
import {GLOBAL_INPUTS, REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES } from './const';
import {ResponsiveConfigInterface, responsiveSubscriptions} from './interfaces';

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
        if (!!config) this.config = config;
    }
}

@Injectable()
export class ResponsiveState {
    private _windows: Object = {};

    //Bootstrap Configuration
    private _responsiveConfig: ResponsiveConfig;

    //Observers
    public elementoObservar: Observable<string>;
    public anchoObservar: Observable<number>;
    public alturaObservar: Observable<number>;
    public browserObserver: Observable<string>;
    public pixelObserver: Observable<string>;
    public deviceObserver: Observable<any>;
    public orientationObserver: Observable<any>;
    public standardObserver: Observable<any>;
    public ieVersionObserver: Observable<any>;

    //Private objects
    private _width: number;
    private _height: number;
    private _screenWidth: number = window.screen.width;
    private _screenHeight: number = window.screen.height;
    private _orientation: string | number = window.orientation;
    private _userAgent: any = window.navigator.userAgent.toLowerCase();
    private _window: any = window;
    private _vendor: any = window.navigator.vendor;

    //Optional config
    constructor( @Optional() responsiveConfig: ResponsiveConfig) {
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();

        //Window resize observer
        let resize_observer = Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth('window'));
        //Get pixel ratio
        let pixel_ratio_observer = Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getDevicePixelRatio());
        //Get user agent
        let device_observer = Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getUserAgent());
        //Window orientation changes observer
        let orientation_observer = Observable
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

    public getWidth(windowName: string): number {
        if (windowName && this._windows[windowName])
            return this._windows[windowName].getWidth();
        else
            return window.innerWidth;
    }

    public registerWindow = (rw: ResponsiveWindow) => {
        if (rw.name && !this._windows[rw.name]) {
            this._windows[rw.name] = rw;

            window.dispatchEvent(new Event('resize'));
        }
    }

    public unregisterWindow = (rw: ResponsiveWindow) => {
      for (let rwn in this._windows) {
          if (this._windows[rwn] === rw) {
              delete (this._windows[rwn]);
          }
      }

      window.dispatchEvent(new Event('resize'));
    }

    /*
     *  Bootstrap states
     *  xl / lg / md / sm / xs
     *  @Custom breackpoints
     */
    private sizeObserver = (): number => {
        return this._width = this.getWidth('window');
    };

    private sizeOperations = (): string => {
        this._width = this.getWidth('window');
        try {
            let breakpoints = this._responsiveConfig.config.breakPoints;
            if (breakpoints.xl.min <= this._width) {
                return 'xl';
            } else if (breakpoints.lg.max >= this._width && breakpoints.lg.min <= this._width) {
                return 'lg';
            } else if (breakpoints.md.max >= this._width && breakpoints.md.min <= this._width) {
                return 'md';
            } else if (breakpoints.sm.max >= this._width && breakpoints.sm.min <= this._width) {
                return 'sm';
            } else if (breakpoints.xs.max >= this._width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
        return null;
    };

    private browserName = (): string => {
        try {
            if (REG_SORT_NAMES.WEBKIT[0].test(this._userAgent) && REG_SORT_NAMES.CHROME.test(this._userAgent) && !REG_BROWSERS.IE[2].test(this._userAgent)) {
                return 'chrome';
            } else if (REG_SORT_NAMES.MOZILLA.test(this._userAgent) && REG_BROWSERS.FIREFOX.test(this._userAgent)) {
                return 'firefox';
            } else if (REG_BROWSERS.IE[0].test(this._userAgent) || REG_BROWSERS.IE[1].test(this._userAgent) || REG_BROWSERS.IE[2].test(this._userAgent)) {
                return 'ie';
            } else if (REG_SORT_NAMES.SAFARI.test(this._userAgent) && REG_SORT_NAMES.WEBKIT[1].test(this._userAgent) && !REG_SORT_NAMES.CHROME.test(this._userAgent)) {
                return 'safari';
            } else if (REG_BROWSERS.OPERA.test(this._userAgent)) {
                return 'opera';
            } else if (REG_BROWSERS.SILK.test(this._userAgent)) {
                return 'silk';
            } else if (REG_BROWSERS.YANDEX.test(this._userAgent)) {
                return 'yandex';
            } else {
                return 'NA';
            }
        } catch (error) {
            //console.error('get browser :', error);
        }
        return null;
    }

    private ie_version_detect = (): any => {
        try {
            let msie = this._userAgent.indexOf('msie ');
            if (REG_BROWSERS.IE[0].test(this._userAgent)) {
                let ie_version = parseInt(this._userAgent.substring(msie + 5, this._userAgent.indexOf('.', msie)), 10);
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

            let trident = this._userAgent.indexOf('trident/');
            if (REG_BROWSERS.IE[1].test(this._userAgent)) {
                // IE 11 => return version number
                let rv = this._userAgent.indexOf('rv:');
                let ie_version = parseInt(this._userAgent.substring(rv + 3, this._userAgent.indexOf('.', rv)), 10);
                if (ie_version == 11) {
                    return 'ie 11';
                }
                return null;
            }

            let edge = this._userAgent.indexOf('Edge/');
            if (REG_BROWSERS.IE[2].test(this._userAgent)) {
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

    private test_Is_4k(): any {
        return ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839));
    }

    private getDevicePixelRatio() {
        let ratio = 1;
        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        } else if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        return ratio;
    };

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
                if (this._screenHeight > this._screenWidth) {
                    return 'portrait';
                } else if (this._orientation === 90 || this._orientation === -90) {
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
            if (REG_MOBILES.IPHONE.test(this._userAgent)) {
                return 'iphone';
            } else if (REG_TABLETS.IPAD.test(this._userAgent)) {
                return 'ipad';
            } else if (this.isMobile() && REG_MOBILES.ANDROID.test(this._userAgent)) {
                return 'android mobile';
            } else if (this.isTablet() && REG_MOBILES.ANDROID.test(this._userAgent)) {
                return 'android tablet';
            } else if (REG_MOBILES.WINDOWS_PHONE.test(this._userAgent)) {
                return 'windows phone';
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private isMobile(): boolean {
        if (REG_MOBILES.GENERIC_REG[0].test(this._userAgent) && this.isTablet() == false ||
            REG_MOBILES.GENERIC_REG[1].test(this._userAgent.substr(0, 4)) && this.isTablet() == false
        ) {
            return true;
        } else {
            return false;
        }
    }

    private isTablet(): boolean {
        if (REG_TABLETS.IPAD.test(this._userAgent) || REG_TABLETS.KINDLE.test(this._userAgent) || REG_TABLETS.PLAYBOOK[0].test(this._userAgent) || REG_TABLETS.PLAYBOOK[1].test(this._userAgent) || REG_TABLETS.TABLET.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    private isSMART(): boolean {
        if (REG_SMARTS_TV.GENERIC_TV.test(this._userAgent) || REG_SMARTS_TV.PS4.test(this._userAgent) || REG_SMARTS_TV.XBOX_ONE.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    private isDesktop(): boolean {
        if (!this.isMobile() || !this.isTablet() || !this.isSMART()) {
            return true;
        } else {
            return false;
        }
    }

    private getUserAgent(): any {
        return window.navigator.userAgent.toLowerCase();
    }

    private getOrientation(): any {
        return window.orientation;
    }

}
