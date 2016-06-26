import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import { Observable } from 'rxjs/Rx';
import { ResponsiveConfigInterface } from './interfaces';
export declare class ResponsiveConfig {
    config: ResponsiveConfigInterface;
    constructor(config?: ResponsiveConfigInterface);
}
export declare class ResponsiveState {
    private _responsiveConfig;
    elementoObservar: Observable<string>;
    anchoObservar: Observable<number>;
    alturaObservar: Observable<number>;
    browserObserver: Observable<string>;
    pixelObserver: Observable<string>;
    deviceObserver: Observable<any>;
    orientationObserver: Observable<any>;
    standardObserver: Observable<any>;
    ieVersionObserver: Observable<any>;
    private _width;
    private _height;
    private _screenWidth;
    private _screenHeight;
    private _orientation;
    private _userAgent;
    private _window;
    private _vendor;
    constructor(responsiveConfig: ResponsiveConfig);
    private sizeObserver;
    private sizeOperations;
    private browserName;
    private ie_version_detect;
    private pixel_ratio;
    private test_Is_4k();
    private getDevicePixelRatio();
    private device_detection;
    private orientation_device;
    private standard_devices;
    private isMobile();
    private isTablet();
    private isSMART();
    private isDesktop();
    private getWidth();
    private getUserAgent();
    private getOrientation();
}
