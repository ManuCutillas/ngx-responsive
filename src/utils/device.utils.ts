/**
 * @name device.utils
 * @description Core device utils in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { isMobile, isTablet, isDesktop, isSMART } from './user-agent.utils';

 /**
 * @function
 * @name getWidth
 * @param windowName
 * @param _windows
 * @param _window
 * @export getWidth
 * @returns {number}
 */
export function getWidth(windowName: string = null, _windows: any = null, _window: any = null): number {
    if (_windows !== null && _window !== null) {
        if (windowName && _windows[windowName]) {
            return _windows[windowName].getWidth();
        } else {
            return _window.innerWidth;
        }
    }
    return 0;
}

 /**
 * @function
 * @name getDevicePixelRatio
 * @param _window
 * @export getDevicePixelRatio
 * @returns {number}
 */
export function getDevicePixelRatio(_window = null): any {
    let ratio = 1;
    if (_window !== null) {
        if (typeof _window.screen.systemXDPI !== 'undefined' &&
            typeof _window.screen.logicalXDPI !== 'undefined' &&
            _window.screen.systemXDPI > _window.screen.logicalXDPI) {
            ratio = _window.screen.systemXDPI / _window.screen.logicalXDPI;
        } else if (typeof _window.devicePixelRatio !== 'undefined') {
            ratio = _window.devicePixelRatio;
        }
    }
    return ratio;
}

 /**
 * @function
 * @name getOrientation
 * @param _window
 * @export getOrientation
 * @returns {any}
 */
export function getOrientation(_window = null): any {
    return (_window !== null) ?  window.orientation : null;
}

 /**
 * @function
 * @name sizeObserver
 * @param _window
 * @param _windows
 * @export sizeObserver
 * @returns {any}
 */
export function sizeObserver(_windows = null, _window = null): any {
    return (_windows !== null && _window !== null) ?  getWidth('window', _windows, _window) : 0;
}

/**
 * @function
 * @name sizeOperations
 * @param _windows
 * @param _window
 * @param _breackpoints
 * @export sizeOperations
 * @returns {string}
 */
export function sizeOperations(_windows = null, _window = null, _breackpoints = null): string {
    if (_windows !== null && _window !== null && _breackpoints !== null) {
        const _width = getWidth('window', _windows, window);
        if (_breackpoints.xl.min <= _width) {
            return 'xl';
        } else if (_breackpoints.lg.max >= _width && _breackpoints.lg.min <= _width) {
            return 'lg';
        } else if (_breackpoints.md.max >= _width && _breackpoints.md.min <= _width) {
            return 'md';
        } else if (_breackpoints.sm.max >= _width && _breackpoints.sm.min <= _width) {
            return 'sm';
        } else if (_breackpoints.xs.max >= _width) {
            return 'xs';
        }
    }
    return null;
}

/**
 * @function
 * @name sizeOperations
 * @param _windows
 * @param _window
 * @param _breackpoints
 * @export sizeOperations
 * @returns {string}
 */
export function pixelRatio (_window: any = null, screenHeight = null, screenWidth = null ): string {
    let _pixelRatio = null;
    if (_window !== null && screenHeight !== null && screenWidth !== null) {
        if (testIs4k(screenHeight, screenWidth)) {
            _pixelRatio = '4k';
        } else if (getDevicePixelRatio(_window) > 1) {
            _pixelRatio = 'retina';
        } else if (getDevicePixelRatio(_window) === 1) {
            _pixelRatio = '1x';
        }
    }
    return _pixelRatio;
}

/**
 * @function
 * @name testIs4k
 * @param screenHeight
 * @param screenWidth
 * @export testIs4k
 * @returns {boolean}
 */
export function testIs4k(screenHeight = null, screenWidth = null): boolean {
    return (screenHeight !== null && screenWidth !== null) ?
    ((screenHeight < screenWidth) ? (screenWidth > 3839) : (screenHeight > 3839)) : false;
}

/**
 * @function
 * @name orientationDevice
 * @param _window
 * @param userAgent
 * @export orientationDevice
 * @returns {boolean}
 */
export function orientationDevice (_window = null, userAgent = null): string {
    let _orientationDevice = null;
    if (_window !== null && userAgent !== null) {
        if (isMobile(userAgent) || isTablet(userAgent)) {
            if (_window.innerHeight > _window.innerWidth) {
                _orientationDevice = 'portrait';
            } else {
                _orientationDevice = 'landscape';
            }
        } else if (isSMART(userAgent) || isDesktop(userAgent)) {
            _orientationDevice = 'landscape';
        }
    }
    return _orientationDevice;
}
