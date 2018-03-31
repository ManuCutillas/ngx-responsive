/**
 * @name mobile.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */

import {
    TIphone, TAndroid, TWindowsPhone, TBlackberry, TGenericMobile
} from '../types';

/**
 * @interface IMobile
 * @export IMobile
 */
export interface IMobile {
    IPHONE: TIphone;
    ANDROID: TAndroid;
    WINDOWS_PHONE: TWindowsPhone;
    BLACKBERRY: TBlackberry;
    GENERIC_MOBILE: TGenericMobile;
}
