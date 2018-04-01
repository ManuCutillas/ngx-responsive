/**
 * @name mobile.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @license MIT
 */

import {
    TIphone, TAndroid, TWindowsPhone, TBlackberry, TGenericMobile
} from '../types';

/**
 * @export IMobile
 */
export interface IMobile {
    IPHONE: TIphone;
    ANDROID: TAndroid;
    WINDOWS_PHONE: TWindowsPhone;
    BLACKBERRY: TBlackberry;
    GENERIC_MOBILE: TGenericMobile;
}
