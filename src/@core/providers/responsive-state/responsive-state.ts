/**
 * @name responsive-state
 * @description Core responsive state provider in ngx-responsive
 *
 * @license MIT
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { defaultIfEmpty } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';

import { ResponsiveWindowDirective } from '../../../@directives';
import {
    REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES,
    REG_GAME_DEVICES, REG_BOTS, REG_OS, REG_WINDOWS_OS_VERSION, REG_LINUX_OS,
    USER_AGENT, REG_IE_VERSIONS, TABLET, WINDOWS_OS, LINUX_OS, MOBILE,
    IE_VERSIONS
} from '../../constants';
import {
    TLinuxOS, TWindowsOS, TTablet, TMobile,
    TosSystems, TSmartTv, TGameDevices
} from '../../types';
import { ResponsiveConfig } from '../responsive-config/responsive-config';

@Injectable()
export class ResponsiveState {

    public _windows: Object = {};
    public _window: any = null;

    public elemento$: Observable<string>;
    public ancho$: Observable<number>;
    public browser$: Observable<string>;
    public pixel$: Observable<string>;
    public device$: Observable<any>;
    public orientation$: Observable<any>;
    public standard$: Observable<any>;
    public ieVersion$: Observable<any>;
    public userAgent$: Observable<any>;

    private _width: number;
    private _screenWidth: number = null;
    private _screenHeight: number = null;
    private _userAgent: any = null;
    private _isBrowser: boolean = null;

    private _forceRefresh$: BehaviorSubject<null> = new BehaviorSubject<null>(null);

    constructor(
        private _responsiveConfig: ResponsiveConfig,
        @Inject(PLATFORM_ID) private _platformId
    ) {
        this._isBrowser = isPlatformBrowser(this._platformId);
        this._window = (this._isBrowser) ? window : null;
        this._screenWidth = (this._isBrowser) ? this._window.screen.width : 0;
        this._screenHeight = (this._isBrowser) ? this._window.screen.height : 0;
        this._userAgent = (this._isBrowser) ? this._window.navigator.userAgent.toLowerCase() : null;

        if(this._isBrowser) {
           
            const _resize$ =  combineLatest(
                fromEvent(this._window, 'resize').pipe(
                    debounceTime(this._responsiveConfig.config.debounceTime),
                    defaultIfEmpty(),
                    startWith(this.getWidth('window'))
                ),
                this._forceRefresh$
            ).pipe(
                debounceTime(this._responsiveConfig.config.debounceTime)
            );

            const _pixelRatio$ = fromEvent(this._window, 'onload')
                .pipe(
                defaultIfEmpty(),
                startWith(this.getDevicePixelRatio())
                );

            const _device$ = fromEvent(this._window, 'onload')
                .pipe(
                defaultIfEmpty(),
                startWith(this.getUserAgent())
                );

            const _userAgent$ = fromEvent(this._window, 'onload')
                .pipe(
                defaultIfEmpty(),
                startWith(this.userAgentData())
                );

            const _orientation$ = fromEvent(this._window, 'orientationchange')
                .pipe(
                defaultIfEmpty(),
                startWith(this.getOrientation())
                );

            this.elemento$ = _resize$.pipe(map(this.sizeOperations.bind(this)));
            this.ancho$ = _resize$.pipe(map(this.sizeObserver.bind(this)));
            this.browser$ = _device$.pipe(map(this.browserName.bind(this)));
            this.pixel$ = _pixelRatio$.pipe(map(this.pixelRatio.bind(this)));
            this.device$ = _device$.pipe(map(this.deviceDetection.bind(this)));
            this.orientation$ = _orientation$.pipe(map(this.orientationDevice.bind(this)));
            this.standard$ = _device$.pipe(map(this.standardDevices.bind(this)));
            this.ieVersion$ = _device$.pipe(map(this.ieVersionDetect.bind(this)));
            this.userAgent$ = _userAgent$.pipe(map(this.userAgentData.bind(this)));
        }
    }

    public forceRefresh(){
        this._forceRefresh$.next(null);
    }

    /**
    * @name registerWindow
    * @param rw
    * @param _window
    */
    public registerWindow(rw: ResponsiveWindowDirective, _window = null) {
        if (rw.name && !this._windows[rw.name]) {
            this._windows[rw.name] = rw;
            if (_window !== null) {
                _window.dispatchEvent(new Event('resize'));
            }
        }
    }

    /**
    * @name unregisterWindow
    * @param rw
    * @param _window
    */
    public unregisterWindow(rw: ResponsiveWindowDirective, _window = null) {
        for (const rwn in this._windows) {
            if (this._windows[rwn] === rw) {
                delete (this._windows[rwn]);
            }
        }
        if (_window !== null) {
            _window.dispatchEvent(new Event('resize'));
        }
    }

    /**
    * @name getWidth
    * @param windowName
    */
    public getWidth(windowName: string = null): any {
        if (this._windows !== null && this._isBrowser) {
            if (windowName && this._windows[windowName]) {
                return this._windows[windowName].getWidth();
            } else {
                return this._window.innerWidth;
            }
        }
        return 0;
    }

    /**
    * @name getDevicePixelRatio
    */
    public getDevicePixelRatio(): any {
        let ratio = 1;
        if (this._isBrowser) {
            if (typeof this._window.screen.systemXDPI !== 'undefined' &&
                typeof this._window.screen.logicalXDPI !== 'undefined' &&
                this._window.screen.systemXDPI > this._window.screen.logicalXDPI) {
                ratio = this._window.screen.systemXDPI / this._window.screen.logicalXDPI;
            } else if (typeof this._window.devicePixelRatio !== 'undefined') {
                ratio = this._window.devicePixelRatio;
            }
        }
        return ratio;
    }

    /**
    * @name getOrientation
    */
    public getOrientation(): any {
        return (this._isBrowser) ? window.orientation : null;
    }

    /**
    * @name sizeObserver
    */
    public sizeObserver(): any {
        return (this._windows !== null && this._isBrowser) ? this.getWidth('window') : 0;
    }

    /**
     * @name sizeOperations
     */
    public sizeOperations(): any {
        let _sizes = null;
        const _breackpoints = this._responsiveConfig.config.breakPoints;
        if (this._windows !== null && this._isBrowser && _breackpoints !== null) {
            const _width = this.getWidth('window');
            if (_breackpoints.xl.min <= _width) {
                _sizes = 'xl';
            } else if (_breackpoints.lg.max >= _width && _breackpoints.lg.min <= _width) {
                _sizes = 'lg';
            } else if (_breackpoints.md.max >= _width && _breackpoints.md.min <= _width) {
                _sizes = 'md';
            } else if (_breackpoints.sm.max >= _width && _breackpoints.sm.min <= _width) {
                _sizes = 'sm';
            } else if (_breackpoints.xs.max >= _width) {
                _sizes = 'xs';
            }
        }
        return _sizes;
    }

    /**
     * @name sizeOperations
     */
    public pixelRatio(): any {
        let _pixelRatio = null;
        if (this._isBrowser && this._screenWidth !== 0 && this._screenHeight !== 0) {
            if (this.testIs4k()) {
                _pixelRatio = '4k';
            } else if (this.getDevicePixelRatio() > 1) {
                _pixelRatio = 'retina';
            } else if (this.getDevicePixelRatio() === 1) {
                _pixelRatio = '1x';
            }
        }
        return _pixelRatio;
    }

    /**
     * @name testIs4k
     * @param screenHeight
     * @param screenWidth
     */
    public testIs4k(): boolean {
        return (this._screenHeight !== 0 && this._screenWidth !== 0) ?
            ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839)) : false;
    }

    /**
     * @name orientationDevice
     */
    public orientationDevice(): any {
        let _orientationDevice = null;
        if (this._isBrowser) {
            if (this.isMobile() || this.isTablet()) {
                if (this._window.innerHeight > this._window.innerWidth) {
                    _orientationDevice = 'portrait';
                } else {
                    _orientationDevice = 'landscape';
                }
            } else if (this.isSMART() || this.isDesktop()) {
                _orientationDevice = 'landscape';
            }
        }
        return _orientationDevice;
    }

    /**
     * @name getUserAgent
     */
    public getUserAgent(): any {
        return (this._isBrowser) ? this._window.navigator.userAgent.toLowerCase() : null;
    }

    /**
     * @name userAgentData
     */
    public userAgentData(): any {
        if (this._window === null) {
            return USER_AGENT;
        }
        const DEFAULT_USER_AGENT_VALUE = '';
        const _ieVersionState = (this.ieVersionDetect() !== null);
        const _isGameDevice = this.isGameDevice();
        const _isSMART = this.isSMART();
        const _isDesktop = this.isDesktop();
        const _isTablet = this.isTablet();
        const _isMobile = this.isMobile();
        const _isWindows = this.isWindows();
        const _isLinux = this.isLinux();
        return {
            device: this.deviceDetection(),
            browser: this.browserName(),
            pixelratio: this.pixelRatio(),
            ie_version: {
                name: (_ieVersionState) ? this.ieVersionDetect() : DEFAULT_USER_AGENT_VALUE,
                state: _ieVersionState
            },
            game_device: {
                name: (_isGameDevice) ? this.gameDevices() : DEFAULT_USER_AGENT_VALUE,
                state: _isGameDevice
            },
            smart_tv: {
                name: (_isSMART) ? this.smartTv() : DEFAULT_USER_AGENT_VALUE,
                state: _isSMART
            },
            desktop: {
                name: (_isDesktop) ? this.desktop() : DEFAULT_USER_AGENT_VALUE,
                state: _isDesktop
            },
            tablet: {
                name: (_isTablet) ? this.tablet() : DEFAULT_USER_AGENT_VALUE,
                state: _isTablet
            },
            mobile: {
                name: (_isMobile) ? this.mobile() : DEFAULT_USER_AGENT_VALUE,
                state: _isMobile
            },
            window_os: {
                name: (_isWindows) ? this.windows() : DEFAULT_USER_AGENT_VALUE,
                state: _isWindows
            },
            linux_os: {
                name: (_isLinux) ? this.linux() : DEFAULT_USER_AGENT_VALUE,
                state: _isLinux
            },
            bot: this.isBot()
        };
    }

    /**
     * @name deviceDetection
     */
    public deviceDetection(): any {
        if (this._isBrowser) {
            if (this.isMobile()) {
                return 'mobile';
            } else if (this.isTablet()) {
                return 'tablet';
            } else if (this.isSMART()) {
                return 'smarttv';
            } else if (this.isDesktop()) {
                return 'desktop';
            }
        }
        return null;
    }

    /**
     * @name standardDevices
     */
    public standardDevices(): any {
        if (this._isBrowser) {
            if (REG_MOBILES.IPHONE.REG.test(this._userAgent)) {
                return 'iphone';
            } else if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                return 'ipad';
            } else if (this.isMobile() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android mobile';
            } else if (this.isTablet() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android tablet';
            } else if (REG_MOBILES.WINDOWS_PHONE.REG.test(this._userAgent)) {
                return 'windows phone';
            }
        }
        return null;
    }

    /**
     * @name ieVersionDetect
     */
    public ieVersionDetect(): any {
        if (this._isBrowser) {
            const _userAgent = this.getUserAgent();
            const msie = _userAgent.indexOf('msie ');
            let _ieVersion = null;
            if (REG_IE_VERSIONS.MS_MSIE.REG.test(_userAgent)) {
                _ieVersion = parseInt(_userAgent.substring(msie + 5, _userAgent.indexOf('.', msie)), 10);
                if (_ieVersion === 7) {
                    return IE_VERSIONS.IE_7;
                } else if (_ieVersion == 8) {
                    return IE_VERSIONS.IE_8;
                } else if (_ieVersion == 9) {
                    return IE_VERSIONS.IE_9;
                } else if (_ieVersion == 10) {
                    return IE_VERSIONS.IE_10;
                }
            }
            // let trident = this._userAgent.indexOf('trident/')
            if (REG_IE_VERSIONS.MS_TRIDENT.REG.test(_userAgent)) {
                let _rv = _userAgent.indexOf('rv:');
                _ieVersion = parseInt(_userAgent.substring(_rv + 3, _userAgent.indexOf('.', _rv)), 10);
                if (_ieVersion == 11) {
                    return IE_VERSIONS.IE_11;
                }
            }

            // let edge = this._userAgent.indexOf('Edge/')
            if (REG_IE_VERSIONS.MS_EDGE.REG.test(_userAgent)) {
                return IE_VERSIONS.IE_12;
            }
        }
        return null;
    }

    /**
     * @name browserName
     */
    public browserName(): any {
        let _browserName = null;
        if (this._isBrowser) {
            if (REG_SORT_NAMES.WEBKIT.REG.test(this._userAgent) && REG_SORT_NAMES.CHROME.REG.test(this._userAgent)
                && !REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.CHROME.VALUE;
            } else if (REG_SORT_NAMES.MOZILLA.REG.test(this._userAgent) &&
                REG_BROWSERS.FIREFOX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.FIREFOX.VALUE;
            } else if (REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.IE.VALUE;
            } else if (REG_SORT_NAMES.SAFARI.REG.test(this._userAgent) &&
                REG_SORT_NAMES.APPLE_WEBKIT.REG.test(this._userAgent) && !REG_SORT_NAMES.CHROME.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SAFARI.VALUE;
            } else if (REG_BROWSERS.OPERA.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.OPERA.VALUE;
            } else if (REG_BROWSERS.SILK.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SILK.VALUE;
            } else if (REG_BROWSERS.YANDEX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.YANDEX.VALUE;
            } else {
                _browserName = REG_BROWSERS.NA.VALUE;
            }
        }
        return _browserName;
    }

    /**
     * @name gameDevices
     */
    public gameDevices(): TGameDevices {
        let _gameDevice = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_GAME_DEVICES) {
                if (REG_GAME_DEVICES[_reg].REG.test(this._userAgent)) {
                    _gameDevice = REG_GAME_DEVICES[_reg].VALUE;
                }
            }
        }
        return _gameDevice;
    }

    /**
     * @name smartTv
     */
    public smartTv(): TSmartTv {
        let _smartTv = null;
        if (this._userAgent !== null) {
            if (REG_SMARTS_TV.CHROMECAST.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.CHROMECAST.VALUE;
            } else if (REG_SMARTS_TV.APPLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.APPLE_TV.VALUE;
            } else if (REG_SMARTS_TV.GOOGLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GOOGLE_TV.VALUE;
            } else if (REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.XBOX_ONE.VALUE;
            } else if (REG_SMARTS_TV.PS4.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.PS4.VALUE;
            } else if (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GENERIC_TV.VALUE;
            }
        }
        return _smartTv;
    }

    /**
     * @name desktop
     */
    public desktop(): TosSystems {
        let _desktop = null;
        if (this._userAgent !== null) {
            if (REG_OS.WINDOWS.REG.test(this._userAgent)) {
                _desktop = REG_OS.WINDOWS.VALUE;
            } else if (REG_OS.MAC_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.MAC_OS.VALUE;
            } else if (REG_OS.LINUX.REG.test(this._userAgent)) {
                _desktop = REG_OS.LINUX.VALUE;
            } else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.FIREFOX_OS.VALUE;
            } else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.CHROME_OS.VALUE;
            }
        }
        return _desktop;
    }

    /**
     * @name tablet
     */
    public tablet(): TTablet {
        let _tablet = null;
        if (this._userAgent !== null) {
            if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                _tablet = TABLET.IPAD;
            } else if (REG_TABLETS.TABLET.REG.test(this._userAgent) && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                _tablet = TABLET.ANDROID;
            } else if (REG_TABLETS.KINDLE.REG.test(this._userAgent)) {
                _tablet = TABLET.KINDLE;
            } else if (REG_TABLETS.TABLET.REG.test(this._userAgent)) {
                _tablet = TABLET.GENERIC_TABLET;
            }
        }
        return _tablet;
    }

    /**
     * @name mobile
     */
    public mobile(): TMobile {
        let _mobile = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_MOBILES) {
                if (REG_MOBILES[_reg].REG.test(this._userAgent)) {
                    _mobile = REG_MOBILES[_reg].VALUE;
                }
            }
            if (_mobile === null && this.isMobile()) {
                _mobile = MOBILE.GENERIC_MOBILE;
            }
        }
        return _mobile;
    }

    /**
     * @name windows
     */
    public windows(): TWindowsOS {
        let _windows = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_WINDOWS_OS_VERSION) {
                if (REG_WINDOWS_OS_VERSION[_reg].REG.test(this._userAgent)) {
                    _windows = REG_WINDOWS_OS_VERSION[_reg].VALUE;
                }
            }
            if (_windows === null && this.isDesktop() && this.isWindows()) {
                _windows = WINDOWS_OS.GENERIC_WINDOWS;
            }
        }
        return _windows;
    }

    /**
     * @name linux
     */
    public linux(): TLinuxOS {
        let _linux: TLinuxOS = null;
        if (this._userAgent !== null) {
            for (let _reg in REG_LINUX_OS) {
                if (REG_LINUX_OS[_reg].REG.test(this._userAgent)) {
                    _linux = REG_LINUX_OS[_reg].VALUE;
                }
            }
            if (_linux === null && this.isDesktop() && this.isLinux()) {
                _linux = LINUX_OS.GENERIC_LINUX;
            }
        }
        return _linux;
    }

    /**
     * @name isMobile
     */
    public isMobile(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            let _userAgent = this._userAgent;
            _result = (REG_MOBILES.GENERIC_REG_1.REG.test(_userAgent) && this.isTablet() === false ||
                REG_MOBILES.GENERIC_REG_2.REG.test(_userAgent.substr(0, 4)) && this.isTablet() === false);
        }
        return _result;
    }

    /**
     * @name isTablet
     */
    public isTablet(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_TABLETS.IPAD.REG.test(this._userAgent) ||
                REG_TABLETS.KINDLE.REG.test(this._userAgent) ||
                REG_TABLETS.TABLET.REG.test(this._userAgent));
        }
        return _result;
    }

    /**
     * @name isSMART
     */
    public isSMART(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent) ||
                REG_SMARTS_TV.PS4.REG.test(this._userAgent) ||
                REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent));
        }
        return _result;
    }

    /**
     * @name isDesktop
     */
    public isDesktop(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (!this.isMobile() || !this.isTablet() || !this.isSMART());
        }
        return _result;
    }

    /**
     * @name isGameDevice
     */
    public isGameDevice(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_GAME_DEVICES.PS4.REG.test(this._userAgent) || REG_GAME_DEVICES.PS3.REG.test(this._userAgent)
                || REG_GAME_DEVICES.XBOX.REG.test(this._userAgent) || REG_GAME_DEVICES.XBOX_ONE.REG.test(this._userAgent)
                || REG_GAME_DEVICES.WII.REG.test(this._userAgent) || REG_GAME_DEVICES.WII_U.REG.test(this._userAgent)
                || REG_GAME_DEVICES.NINTENDO_3DS.REG.test(this._userAgent) || REG_GAME_DEVICES.PS_VITA.REG.test(this._userAgent)
                || REG_GAME_DEVICES.PSP.REG.test(this._userAgent));
        }
        return _result;
    }

    /**
     * @name isWindows
     */
    public isWindows(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.WINDOWS.REG.test(this._userAgent));
        }
        return _result;
    }

    /**
     * @name isLinux
     */
    public isLinux(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.LINUX.REG.test(this._userAgent));
        }
        return _result;
    }

    /**
     * @name isBot
     */
    public isBot(): boolean {
        let _result = false;
        if (this._userAgent !== null) {
            _result = (REG_BOTS.GENERIC_BOT.REG.test(this._userAgent));
        }
        return _result;
    }

}
