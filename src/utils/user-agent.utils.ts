/**
 * @name user-agent-utils
 * @description Core user-agent-utils in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import {
    REG_TABLETS, REG_MOBILES, REG_SMARTS_TV, REG_BROWSERS, REG_SORT_NAMES,
    REG_GAME_DEVICES, REG_BOTS, REG_OS, REG_WINDOWS_OS_VERSION, REG_LINUX_OS,
    TLinuxOS, LINUX_OS, TWindowsOS, WINDOWS_OS, TTablet, TMobile, MOBILE,
    TABLET, TosSystems, OS_SYSTEMS, TSmartTv, TGameDevices, TBrowserNames,
    REG_IE_VERSIONS, TIE_VERSIONS, IE_VERSIONS
} from '../@core';

/**
 * @function
 * @name getUserAgent
 * @param _window
 * @export getUserAgent
 * @returns window.navigator.userAgent
 */
export function getUserAgent(_window = null): any {
    return (_window !== null) ? _window.navigator.userAgent.toLowerCase() : null;
}

/**
 * @function
 * @name userAgentData
 * @param {string} userAgent
 * @export userAgentData
 * @returns useragent object
 */
export function userAgentData(userAgent: string = null): any {
    const DEFAULT_USER_AGENT_VALUE = '';
    const _ieVersionState = (ieVersionDetect(userAgent) !== null);
    const _isGameDevice = isGameDevice(userAgent);
    const _isSMART = isSMART(userAgent);
    const _isDesktop = isDesktop(userAgent);
    const _isTablet = isTablet(userAgent);
    const _isMobile = isMobile(userAgent);
    const _isWindows = isWindows(userAgent);
    const _isLinux = isLinux(userAgent);
    return {
        device: deviceDetection(userAgent),
        browser: browserName(userAgent),
        pixelratio: pixelRatio(userAgent),
        ie_version: {
            name: (_ieVersionState) ? ieVersionDetect(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _ieVersionState
        },
        game_device: {
            name: (_isGameDevice) ? gameDevices(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isGameDevice
        },
        smart_tv: {
            name: (_isSMART) ? smartTv(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isSMART
        },
        desktop: {
            name: (_isDesktop) ? desktop(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isDesktop
        },
        tablet: {
            name: (_isTablet) ? tablet(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isTablet
        },
        mobile: {
            name: (_isMobile) ? mobile(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isMobile
        },
        window_os: {
            name: (_isWindows) ? windows(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isWindows
        },
        linux_os: {
            name: (_isLinux) ? linux(userAgent) : DEFAULT_USER_AGENT_VALUE,
            state: _isLinux
        },
        bot: isBot(userAgent)
    };
}

/**
 * @function
 * @name deviceDetection
 * @param {string} userAgent
 * @export deviceDetection
 * @returns {string}
 */
export function deviceDetection(userAgent = null) {
    if (userAgent !== null) {
        if (isMobile(userAgent)) {
            return 'mobile';
        } else if (isTablet(userAgent)) {
            return 'tablet';
        } else if (isSMART(userAgent)) {
            return 'smarttv';
        } else if (isDesktop(userAgent)) {
            return 'desktop';
        }
    }
    return null;
}

/**
 * @function
 * @name standardDevices
 * @param {string} userAgent
 * @export standardDevices
 * @returns {TDeviceDetection}
 */
export function standardDevices(userAgent = null) {
    if (userAgent !== null) {
        if (REG_MOBILES.IPHONE.REG.test(userAgent)) {
            return 'iphone';
        } else if (REG_TABLETS.IPAD.REG.test(userAgent)) {
            return 'ipad';
        } else if (isMobile(userAgent) && REG_MOBILES.ANDROID.REG.test(userAgent)) {
            return 'android mobile';
        } else if (isTablet(userAgent) && REG_MOBILES.ANDROID.REG.test(userAgent)) {
            return 'android tablet';
        } else if (REG_MOBILES.WINDOWS_PHONE.REG.test(userAgent)) {
            return 'windows phone';
        }
    }
    return null;
}

export function ieVersionDetect(userAgent = null): TIE_VERSIONS {
    if (userAgent !== null) {
        const msie = userAgent.indexOf('msie ');
        let _ieVersion = null;
        if (REG_IE_VERSIONS.MS_MSIE.REG.test(userAgent)) {
            _ieVersion = parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10);
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
        if (REG_IE_VERSIONS.MS_TRIDENT.REG.test(userAgent)) {
            let _rv = userAgent.indexOf('rv:');
            _ieVersion = parseInt(userAgent.substring(_rv + 3, userAgent.indexOf('.', _rv)), 10);
            if (_ieVersion == 11) {
                return IE_VERSIONS.IE_11;
            }
        }

        // let edge = this._userAgent.indexOf('Edge/')
        if (REG_IE_VERSIONS.MS_EDGE.REG.test(userAgent)) {
            return IE_VERSIONS.IE_12;
        }
    }
    return null;
}

/**
 * @function
 * @name browserName
 * @param {string} userAgent
 * @export browserName
 * @returns {TGameDevices}
 */
export function browserName(userAgent = null): TBrowserNames {
    let _browserName = null;
    if (userAgent !== null) {
        if (REG_SORT_NAMES.WEBKIT.REG.test(userAgent) && REG_SORT_NAMES.CHROME.REG.test(userAgent)
            && !REG_BROWSERS.IE.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.CHROME.VALUE;
        } else if (REG_SORT_NAMES.MOZILLA.REG.test(userAgent) &&
            REG_BROWSERS.FIREFOX.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.FIREFOX.VALUE;
        } else if (REG_BROWSERS.IE.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.IE.VALUE;
        } else if (REG_SORT_NAMES.SAFARI.REG.test(userAgent) &&
            REG_SORT_NAMES.APPLE_WEBKIT.REG.test(userAgent) && !REG_SORT_NAMES.CHROME.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.SAFARI.VALUE;
        } else if (REG_BROWSERS.OPERA.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.OPERA.VALUE;
        } else if (REG_BROWSERS.SILK.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.SILK.VALUE;
        } else if (REG_BROWSERS.YANDEX.REG.test(userAgent)) {
            _browserName = REG_BROWSERS.YANDEX.VALUE;
        } else {
            _browserName = REG_BROWSERS.NA.VALUE;
        }
    }
    return _browserName;
}

/**
 * @function
 * @name gameDevices
 * @param {string} userAgent
 * @export gameDevices
 * @returns {TGameDevices}
 */
export function gameDevices(userAgent: string = null): TGameDevices {
    let _gameDevice = null;
    if (userAgent !== null) {
        for (let _reg in REG_GAME_DEVICES) {
            if (REG_GAME_DEVICES[_reg].REG.test(userAgent)) {
                _gameDevice = REG_GAME_DEVICES[_reg].VALUE;
            }
        }
    }
    return _gameDevice;
}

/**
 * @function
 * @name smartTv
 * @param {string} userAgent
 * @export smartTv
 * @returns {TSmartTv}
 */
export function smartTv(userAgent: string = null): TSmartTv {
    let _smartTv = null;
    if (userAgent !== null) {
        if (REG_SMARTS_TV.CHROMECAST.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.CHROMECAST.VALUE;
        } else if (REG_SMARTS_TV.APPLE_TV.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.APPLE_TV.VALUE;
        } else if (REG_SMARTS_TV.GOOGLE_TV.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.GOOGLE_TV.VALUE;
        } else if (REG_SMARTS_TV.XBOX_ONE.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.XBOX_ONE.VALUE;
        } else if (REG_SMARTS_TV.PS4.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.PS4.VALUE;
        } else if (REG_SMARTS_TV.GENERIC_TV.REG.test(userAgent)) {
            _smartTv = REG_SMARTS_TV.GENERIC_TV.VALUE;
        }
    }
    return _smartTv;
}

/**
 * @function
 * @name desktop
 * @param {string} userAgent
 * @export desktop
 * @returns {TosSystems}
 */
export function desktop(userAgent: string = null): TosSystems {
    let _desktop = null;
    if (userAgent !== null) {
        if (REG_OS.WINDOWS.REG.test(userAgent)) {
            _desktop = REG_OS.WINDOWS.VALUE;
        } else if (REG_OS.MAC_OS.REG.test(userAgent)) {
            _desktop = REG_OS.MAC_OS.VALUE;
        } else if (REG_OS.LINUX.REG.test(userAgent)) {
            _desktop = REG_OS.LINUX.VALUE;
        } else if (REG_OS.FIREFOX_OS.REG.test(userAgent)) {
            _desktop = REG_OS.FIREFOX_OS.VALUE;
        } else if (REG_OS.FIREFOX_OS.REG.test(userAgent)) {
            _desktop = REG_OS.CHROME_OS.VALUE;
        }
    }
    return _desktop;
}

/**
 * @function
 * @name tablet
 * @param {string} userAgent
 * @export tablet
 * @returns {TTablet}
 */
export function tablet(userAgent: string = null): TTablet {
    let _tablet = null;
    if (userAgent !== null) {
        if (REG_TABLETS.IPAD.REG.test(userAgent)) {
            _tablet = TABLET.IPAD;
        } else if (REG_TABLETS.TABLET.REG.test(userAgent) && REG_MOBILES.ANDROID.REG.test(userAgent)) {
            _tablet = TABLET.ANDROID;
        } else if (REG_TABLETS.KINDLE.REG.test(userAgent)) {
            _tablet = TABLET.KINDLE;
        } else if (REG_TABLETS.TABLET.REG.test(userAgent)) {
            _tablet = TABLET.GENERIC_TABLET;
        }
    }
    return _tablet;
}

/**
 * @function
 * @name mobile
 * @param {string} userAgent
 * @export mobile
 * @returns {TMobile}
 */
export function mobile(userAgent: string = null): TMobile {
    let _mobile = null;
    if (userAgent !== null) {
        for (let _reg in REG_MOBILES) {
            if (REG_MOBILES[_reg].REG.test(userAgent)) {
                _mobile = REG_MOBILES[_reg].VALUE;
            }
        }
        if (_mobile === null && isMobile(userAgent)) {
            _mobile = MOBILE.GENERIC_MOBILE;
        }
    }
    return _mobile;
}

/**
 * @function
 * @name windows
 * @param {string} userAgent
 * @export windows
 * @returns {TWindowsOS}
 */
export function windows(userAgent: string = null): TWindowsOS {
    let _windows = null;
    if (userAgent !== null) {
        for (let _reg in REG_WINDOWS_OS_VERSION) {
            if (REG_WINDOWS_OS_VERSION[_reg].REG.test(userAgent)) {
                _windows = REG_WINDOWS_OS_VERSION[_reg].VALUE;
            }
        }
        if (_windows === null && isDesktop(userAgent) && isWindows(userAgent)) {
            _windows = WINDOWS_OS.GENERIC_WINDOWS;
        }
    }
    return _windows;
}

/**
 * @function
 * @name linux
 * @param {string} userAgent
 * @export linux
 * @returns {TLinuxOS}
 */
export function linux(userAgent: string = null): TLinuxOS {
    let _linux: TLinuxOS = null;
    if (userAgent !== null) {
        for (let _reg in REG_LINUX_OS) {
            if (REG_LINUX_OS[_reg].REG.test(userAgent)) {
                _linux = REG_LINUX_OS[_reg].VALUE;
            }
        }
        if (_linux === null && isDesktop(userAgent) && isLinux(userAgent)) {
            _linux = LINUX_OS.GENERIC_LINUX;
        }
    }
    return _linux;
}

/**
 * @function
 * @name isMobile
 * @param {string} userAgent
 * @export isMobile
 * @returns {boolean}
 */
export function isMobile(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_MOBILES.GENERIC_REG_1.REG.test(userAgent) && isTablet(userAgent) === false ||
            REG_MOBILES.GENERIC_REG_2.REG.test(userAgent.substr(0, 4)) && isTablet(userAgent) === false);
    }
    return _result;
}

/**
 * @function
 * @name isTablet
 * @param {string} userAgent
 * @export isTablet
 * @returns {boolean}
 */
export function isTablet(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_TABLETS.IPAD.REG.test(userAgent) ||
            REG_TABLETS.KINDLE.REG.test(userAgent) ||
            REG_TABLETS.TABLET.REG.test(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isSMART
 * @param {string} userAgent
 * @export isSMART
 * @returns {boolean}
 */
export function isSMART(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_SMARTS_TV.GENERIC_TV.REG.test(userAgent) ||
            REG_SMARTS_TV.PS4.REG.test(userAgent) ||
            REG_SMARTS_TV.XBOX_ONE.REG.test(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isDesktop
 * @param {string} userAgent
 * @export isDesktop
 * @returns {boolean}
 */
export function isDesktop(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (!isMobile(userAgent) || !isTablet(userAgent) || !isSMART(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isGameDevice
 * @param {string} userAgent
 * @export isGameDevice
 * @returns {boolean}
 */
export function isGameDevice(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_GAME_DEVICES.PS4.REG.test(userAgent) || REG_GAME_DEVICES.PS3.REG.test(userAgent)
            || REG_GAME_DEVICES.XBOX.REG.test(userAgent) || REG_GAME_DEVICES.XBOX_ONE.REG.test(userAgent)
            || REG_GAME_DEVICES.WII.REG.test(userAgent) || REG_GAME_DEVICES.WII_U.REG.test(userAgent)
            || REG_GAME_DEVICES.NINTENDO_3DS.REG.test(userAgent) || REG_GAME_DEVICES.PS_VITA.REG.test(userAgent)
            || REG_GAME_DEVICES.PSP.REG.test(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isWindows
 * @param {string} userAgent
 * @export isWindows
 * @returns {boolean}
 */
export function isWindows(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_OS.WINDOWS.REG.test(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isLinux
 * @param {string} userAgent
 * @export isLinux
 * @returns {boolean}
 */
export function isLinux(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_OS.LINUX.REG.test(userAgent));
    }
    return _result;
}

/**
 * @function
 * @name isBot
 * @param {string} userAgent
 * @export isBot
 * @returns {boolean}
 */
export function isBot(userAgent: string = null): boolean {
    let _result = false;
    if (userAgent !== null) {
        _result = (REG_BOTS.GENERIC_BOT.REG.test(userAgent));
    }
    return _result;
}

