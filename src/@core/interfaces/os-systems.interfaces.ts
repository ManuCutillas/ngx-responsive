/**
 * @name os-systems.interfaces
 * @description Core os systems interfaces in ngx-responsive
 *
 * @license MIT
 */

import {
    TWindows, TAndroid, TWindowsPhone, TIos, TMacOS, TLinux, TFirefoxOS, TChromeOS
} from '../types';

/**
 * @export IOsSistems
 */
export interface IOsSistems {
    WINDOWS: TWindows;
    ANDROID: TAndroid;
    WINDOWS_PHONE: TWindowsPhone;
    IOS: TIos;
    MAC_OS: TMacOS;
    LINUX: TLinux;
    FIREFOX_OS: TFirefoxOS;
    CHROME_OS: TChromeOS;
}
