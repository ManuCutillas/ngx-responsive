import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { defaultIfEmpty } from 'rxjs/operators/defaultIfEmpty';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { ResponsiveWindow } from '../../../@directives';
import {
    REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES,
    REG_GAME_DEVICES, REG_BOTS, REG_OS, REG_WINDOWS_OS_VERSION, REG_LINUX_OS
} from '../../constants';
import {
    getWidth, getDevicePixelRatio, getUserAgent, getOrientation, sizeObserver,
    sizeOperations, userAgentData, browserName, deviceDetection, standardDevices, ieVersionDetect,
    pixelRatio, orientationDevice
} from '../../../utils';
import { IResponsiveConfig } from '../../interfaces';
import { ResponsiveConfig } from '../responsive-config';

@Injectable()
export class ResponsiveState {

    private _windows: Object = {};
    private _window: any = null;
    private _responsiveConfig: ResponsiveConfig;

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

    constructor( @Optional() responsiveConfig: ResponsiveConfig) {

        this._window = window;
        this._screenWidth = this._window.screen.width;
        this._screenHeight = this._window.screen.height;
        this._userAgent = this._window.navigator.userAgent.toLowerCase();
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();

        const _resize$ = fromEvent(this._window, 'resize')
            .pipe(
            debounceTime(this._responsiveConfig.config.debounceTime),
            defaultIfEmpty(),
            startWith(getWidth('window', this._windows, this._window))
            );

        const _pixelRatio$ = fromEvent(this._window, 'onload')
            .pipe(
            defaultIfEmpty(),
            startWith(getDevicePixelRatio(this._window))
            );

        const _device$ = fromEvent(this._window, 'onload')
            .pipe(
            defaultIfEmpty(),
            startWith(getUserAgent(this._window))
            );

        const _userAgent$ = fromEvent(this._window, 'onload')
            .pipe(
            defaultIfEmpty(),
            startWith(userAgentData())
            );

        const _orientation$ = fromEvent(this._window, 'orientationchange')
            .pipe(
            defaultIfEmpty(),
            startWith(getOrientation(this._window))
            );

        this.elemento$ = _resize$.pipe(map(sizeOperations(this._windows, this._window, this._responsiveConfig.config.breakPoints)));
        this.ancho$ = _resize$.pipe(map(sizeObserver(this._windows, this._window)));
        this.browser$ = _device$.pipe(map(browserName));
        this.pixel$ = _pixelRatio$.pipe(map(pixelRatio));
        this.device$ = _device$.pipe(map(deviceDetection));
        this.orientation$ = _orientation$.pipe(map(orientationDevice));
        this.standard$ = _device$.pipe(map(standardDevices));
        this.ieVersion$ = _device$.pipe(map(ieVersionDetect));
        this.userAgent$ = _userAgent$.pipe(map(userAgentData));
    }

    public registerWindow(rw: ResponsiveWindow, _window = null) {
        if (_window !== null) {
            if (rw.name && !this._windows[rw.name]) {
                this._windows[rw.name] = rw;
                _window.dispatchEvent(new Event('resize'));
            }
        }
    }

    public unregisterWindow(rw: ResponsiveWindow, _window = null) {
        if (_window !== null) {
            for (const rwn in this._windows) {
                if (this._windows[rwn] === rw) {
                    delete (this._windows[rwn]);
                }
            }
            _window.dispatchEvent(new Event('resize'));
        }
    }
}
