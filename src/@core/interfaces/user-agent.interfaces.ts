/**
 * @name user-agent.interfaces
 * @description Core user agent interfaces in ngx-responsive
 *
 * @license MIT
 */

import {
    TBrowserNames,
    TDevices,
    TGameDevices,
    TIE_VERSIONS,
    TLinuxOS,
    TMobileDevices,
    TosSystems,
    TPixelRatios,
    TSmartTv,
    TTabletDevices,
    TWindowsOS
} from "../types";

/**
 * @export IUserAgent
 */
export interface IUserAgent {
    device: TDevices;
    browser: TBrowserNames;
    pixelRatio: TPixelRatios;
    ie_version: {
        name: TIE_VERSIONS;
        state: boolean;
    };
    game_device: {
        name: TGameDevices;
        state: boolean;
    };
    smart_tv: {
        name: TSmartTv;
        state: boolean;
    };
    desktop: {
        name: TosSystems;
        state: boolean;
    };
    tablet: {
        name: TTabletDevices;
        state: boolean;
    };
    mobile: {
        name: TMobileDevices;
        state: boolean;
    };
    window_os: {
        name: TWindowsOS;
        state: boolean;
    };
    linux_os: {
        name: TLinuxOS;
        state: boolean;
    };
    bot: boolean;
}
