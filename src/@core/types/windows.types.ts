/**
 * @name windows.types
 * @description Core windows types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @type
 * @name TWindowsXP
 * @export TWindowsXP
 */
export type TWindowsXP = 'Windows XP';

/**
 * @type
 * @name TWindowsVista
 * @export TWindowsVista
 */
export type TWindowsVista = 'Windows Vista';

/**
 * @type
 * @name TWindows7
 * @export TWindows7
 */
export type TWindows7 = 'Windows 7';

/**
 * @type
 * @name TWindows8
 * @export TWindows8
 */
export type TWindows8 = 'Windows 8';

/**
 * @type
 * @name TWindows10
 * @export TWindows10
 */
export type TWindows10 = 'Windows 10';

/**
 * @type
 * @name TGenericWindows
 * @export TGenericWindows
 */
export type TGenericWindows = 'Generic Windows';

/**
 * @type
 * @name TWindowsOS
 * @export TWindowsOS
 */
export type TWindowsOS = TWindowsXP | TWindowsVista | TWindows7 | TWindows8 | TWindows10 | TGenericWindows | null;
