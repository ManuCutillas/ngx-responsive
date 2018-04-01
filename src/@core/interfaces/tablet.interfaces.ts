/**
 * @name mobile.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @license MIT
 */

import {
    TIpad, TAndroid, TWindowsPhone, TKindle, TGenericTablet
} from '../types';

/**
 * @export ITablet
 */
export interface ITablet {
    IPAD: TIpad;
    ANDROID: TAndroid;
    WINDOWS_PHONE: TWindowsPhone;
    KINDLE: TKindle;
    GENERIC_TABLET: TGenericTablet;
}
