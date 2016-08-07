import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveWindow} from '../responsive-window/responsive-window';
import {GLOBAL_INPUTS, REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES, REG_GAME_DEVICES, REG_BOTS, REG_OS, WINDOWS_OS_VERSION,LINUX_OS} from './const';
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
    public userAgentObserver: Observable<any>;

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
        let user_agent_observer = Observable.fromEvent(window,'onload')
            .defaultIfEmpty()
            .startWith(this.userAgent_data());
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
        this.userAgentObserver = user_agent_observer.map(this.userAgent_data);
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
    };

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

    private game_devices = (): string => {
        try {
            if (REG_GAME_DEVICES.PS4.test(this._userAgent)) {
                return 'Playstation 4';
            } else if (REG_GAME_DEVICES.PS3.test(this._userAgent)) {
                return 'Playstation 3';
            } else if (REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)) {
                return 'Xbox one';
            } else if (REG_GAME_DEVICES.XBOX.test(this._userAgent)) {
                return 'Xbox';
            } else if (REG_GAME_DEVICES.WII.test(this._userAgent)) {
                return 'Wii';
            } else if (REG_GAME_DEVICES.WII_U.test(this._userAgent)) {
                return 'Wii U';
            } else if (REG_GAME_DEVICES.NINTENDO_3DS.test(this._userAgent)) {
                return 'Nintendo 3DS';
            } else if (REG_GAME_DEVICES.PS_VITA.test(this._userAgent)) {
                return 'Playstation Vita';
            } else if (REG_GAME_DEVICES.PSP.test(this._userAgent)) {
                return 'PSP';
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private smart_tv = (): string => {
        try {
            if (REG_SMARTS_TV.CHROMECAST.test(this._userAgent)) {
                return 'Chromecast';
            } else if (REG_SMARTS_TV.APPLE_TV.test(this._userAgent)) {
                return 'Apple tv';
            } else if (REG_SMARTS_TV.GOOGLE_TV.test(this._userAgent)) {
                return 'Google tv';
            } else if (REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)) {
                return 'Xbox One';
            } else if (REG_GAME_DEVICES.PS4.test(this._userAgent)) {
                return 'Playstation 4';
            } else if (REG_SMARTS_TV.GENERIC_TV.test(this._userAgent)) {
                return 'Generic smartv';
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private desktop = (): string => {
        try {
            if (this.isDesktop()) {
                if (REG_OS.WINDOWS.test(this._userAgent)) {
                    return 'Windows';
                } else if (REG_OS.MAC_OS.test(this._userAgent)) {
                    return 'Mac';
                } else if (REG_OS.LINUX.test(this._userAgent)) {
                    return 'Linux';
                }
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private tablet = (): string => {
        try {
            if (this.isTablet()) {
                if (REG_TABLETS.IPAD.test(this._userAgent)) {
                    return 'Ipad';
                } else if (REG_TABLETS.TABLET.test(this._userAgent) && REG_MOBILES.ANDROID.test(this._userAgent)) {
                    return 'Android';
                } else if (REG_TABLETS.KINDLE.test(this._userAgent)) {
                    return 'Kindle';
                } else if (REG_TABLETS.TABLET.test(this._userAgent)) {
                    return 'Generic Tablet';
                }
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private mobile = (): string => {
        try {
            if (this.isMobile()) {
                if (REG_MOBILES.IPHONE.test(this._userAgent)) {
                    return 'Iphone';
                } else if (REG_MOBILES.ANDROID.test(this._userAgent)) {
                    return 'Android';
                } else if (REG_MOBILES.WINDOWS_PHONE.test(this._userAgent)) {
                    return 'Windows Phone';
                } else if (REG_MOBILES.BLACKBERRY.test(this._userAgent) || REG_MOBILES.BB10.test(this._userAgent)) {
                    return 'Blackberry';
                } else {
                    return 'Generic Mobile';
                }
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private windows = (): string => {
        try {
            if (this.isDesktop() && this.isWindows()) {
                if (WINDOWS_OS_VERSION.WINDOWS_XP.test(this._userAgent)) {
                    return 'Windows XP';
                } else if (WINDOWS_OS_VERSION.WINDOWS_VISTA.test(this._userAgent)) {
                    return 'Windows Vista';
                } else if (WINDOWS_OS_VERSION.WINDOWS_7.test(this._userAgent)) {
                    return 'Windows 7';
                } else if (WINDOWS_OS_VERSION.WINDOWS_8.test(this._userAgent) || WINDOWS_OS_VERSION.WINDOWS_8_1.test(this._userAgent)) {
                    return 'Windows 8';
                } else if (WINDOWS_OS_VERSION.WINDOWS_10.test(this._userAgent)) {
                    return 'Windows 10';
                } else {
                    return 'Generic Windows';
                }
            }
        } catch (error) {
            //console.error('pixel ratio :', error);
        }
        return null;
    }

    private linux = (): string => {
        try {
            if (this.isDesktop() && this.isLinux()) {
                if (LINUX_OS.DEBIAN.test(this._userAgent)) {
                    return 'Debian';
                } else if (LINUX_OS.KNOPPIX.test(this._userAgent)) {
                    return 'Knoppix';
                } else if (LINUX_OS.MINT.test(this._userAgent)) {
                    return 'Mint';
                } else if (LINUX_OS.UBUNTU.test(this._userAgent)) {
                    return 'Ubuntu';
                } else if (LINUX_OS.KUBUNTU.test(this._userAgent)) {
                    return 'Kubuntu';
                }else if (LINUX_OS.XUBUNTU.test(this._userAgent)) {
                    return 'Xubuntu';
                }else if (LINUX_OS.LUBUNTU.test(this._userAgent)) {
                    return 'Lubuntu';
                }else if (LINUX_OS.FEDORA.test(this._userAgent)) {
                    return 'Fedora';
                }else if (LINUX_OS.RED_HAT.test(this._userAgent)) {
                    return 'Red hat';
                }else if (LINUX_OS.MANDRIVA.test(this._userAgent)) {
                    return 'Mandriva';
                }else if (LINUX_OS.GENTOO.test(this._userAgent)) {
                    return 'Gentoo';
                }else if (LINUX_OS.SABAYON.test(this._userAgent)) {
                    return 'Sabayon';
                }else if (LINUX_OS.SLACKWARE.test(this._userAgent)) {
                    return 'Slackware';
                }else if (LINUX_OS.SUSE.test(this._userAgent)) {
                    return 'Suse';
                }else if (LINUX_OS.CENT_OS.test(this._userAgent)) {
                    return 'CentOS';
                }else if (LINUX_OS.BACKTRACK.test(this._userAgent)) {
                    return 'Backtrack';
                }else {
                    return 'Generic Linux';
                }
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

    private isGameDevice(): boolean {
        if (REG_GAME_DEVICES.PS4.test(this._userAgent) || REG_GAME_DEVICES.PS3.test(this._userAgent)
            || REG_GAME_DEVICES.XBOX.test(this._userAgent) || REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)
            || REG_GAME_DEVICES.WII.test(this._userAgent) || REG_GAME_DEVICES.WII_U.test(this._userAgent)
            || REG_GAME_DEVICES.NINTENDO_3DS.test(this._userAgent) || REG_GAME_DEVICES.PS_VITA.test(this._userAgent)
            || REG_GAME_DEVICES.PSP.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    private isWindows(): boolean {
        if (REG_OS.WINDOWS.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    private isLinux(): boolean {
        if (REG_OS.LINUX.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    private isBot(): boolean {
        if (REG_BOTS.GENERIC_BOT.test(this._userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    public userAgent_data = (): any => {

        var ie_version_name:any = '';
        var ie_version_state:any = false;
        var game_device_name:any = '';
        var smart_tv_name:any = '';
        var desktop_name:any = '';
        var tablet_name:any = '';
        var mobile_name:any = '';
        var windows_name:any = '';
        var linux_name:any = '';

        if (this.ie_version_detect() != null) {
            ie_version_name = this.ie_version_detect();
            ie_version_state = true;
        }

        if (this.isGameDevice()) {
            game_device_name = this.game_devices();
        }

        if (this.isSMART()) {
            smart_tv_name = this.smart_tv();
        }

        if(this.isDesktop()){
            desktop_name = this.desktop();
        }

        if(this.isTablet()){
            tablet_name = this.tablet();
        }

        if(this.isMobile()){
            mobile_name = this.mobile();
        }

        if(this.isWindows()){
            windows_name = this.windows();
        }

        if(this.isLinux()){
            linux_name = this.linux();
        }

        return {
            device: this.device_detection(),
            browser: this.browserName(),
            pixelratio: this.pixel_ratio(),
            ie_version: {
                name: ie_version_name,
                state: ie_version_state
            },
            game_device: {
                name: game_device_name,
                state: this.isGameDevice()
            },
            smart_tv: {
                name: smart_tv_name,
                state: this.isSMART()
            },
            desktop: {
                name: desktop_name,
                state: this.isDesktop()
            },
            tablet: {
                name: tablet_name,
                state: this.isTablet()
            },
            mobile: {
                name: mobile_name,
                state: this.isMobile()
            },
            window_os: {
                name: windows_name,
                state: this.isWindows()
            },
            linux_os: {
                name: linux_name,
                state: this.isLinux()
            },
            bot: this.isBot()
        };

    }

    private getUserAgent(): any {
        return window.navigator.userAgent.toLowerCase();
    }

    private getOrientation(): any {
        return window.orientation;
    }

}
