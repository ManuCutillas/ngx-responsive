
/**
 * @name windows.interfaces
 * @description Core windows interfaces in ngx-responsive
 *
 * @license MIT
 */

import {
    TWindowsXP, TWindowsVista, TWindows7,
    TWindows8, TWindows10, TGenericWindows
} from '../types';

/**
 * @export IWindowsOS
 */
export interface IWindowsOS {
    WINDOWS_XP: TWindowsXP;
    WINDOWS_VISTA: TWindowsVista;
    WINDOWS_7: TWindows7;
    WINDOWS_8: TWindows8;
    WINDOWS_10: TWindows10;
    GENERIC_WINDOWS: TGenericWindows;
}
