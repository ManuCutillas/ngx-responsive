export function getWidth(windowName: string = null, _windows: any = null, _window: any = null): any {
    if (_windows !== null && _window !== null) {
        if (windowName && _windows[windowName]) {
            return _windows[windowName].getWidth();
        } else {
            return _window.innerWidth;
        }
    }
    return 0;
}

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

export function getUserAgent(_window = null): any {
    return (_window !== null) ? _window.navigator.userAgent.toLowerCase() : null;
}

export function getOrientation(_window = null): any {
    return (_window !== null) ?  window.orientation : null;
}

export function sizeObserver(_windows = null, _window = null): any {
    return (_windows !== null && _window !== null) ?  getWidth('window', _windows, _window) : 0;
}

export function sizeOperations(_windows = null, _window = null): any {
    if (_windows !== null && _window !== null) {
        let _width = getWidth('window', _windows, window);
        try {
            let breakpoints = this._responsiveConfig.config.breakPoints;
            if (breakpoints.xl.min <= _width) return 'xl';
            else if (breakpoints.lg.max >= _width && breakpoints.lg.min <= _width) return 'lg';
            else if (breakpoints.md.max >= _width && breakpoints.md.min <= _width) return 'md';
            else if (breakpoints.sm.max >= _width && breakpoints.sm.min <= _width) return 'sm';
            else if (breakpoints.xs.max >= _width) return 'xs';
        } catch (e) { }
    }
    return null;
};
