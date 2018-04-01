/**
 * @name os-sistems.constants
 * @description Core os-sistems.constants in ngx-responsive
 *
 * @license MIT
 */
import { IOsSistems } from '../interfaces';
import { MOBILE } from './mobile.constants';

export const OS_SYSTEMS: IOsSistems = {
    WINDOWS: 'Windows',
    ANDROID: MOBILE.ANDROID,
    WINDOWS_PHONE: MOBILE.WINDOWS_PHONE,
    IOS: 'iOS',
    MAC_OS: 'Mac',
    LINUX: 'Linux',
    FIREFOX_OS: 'Firefox OS',
    CHROME_OS: 'Chrome OS'
};
