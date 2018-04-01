/**
 * @name tablet.types
 * @description Tablet types in ngx-responsive
 *
 * @license MIT
 */
import { TAndroid, TWindowsPhone } from './mobile.types';
/**
 * @type
 * @name TIpad
 * @export TIpad
 */
export type TIpad = 'Ipad';

/**
 * @type
 * @name TKindle
 * @export TKindle
 */
export type TKindle = 'Kindle';

/**
 * @type
 * @name TGenericTablet
 * @export TGenericTablet
 */
export type TGenericTablet = 'Generic Tablet';

/**
 * @type
 * @name TTablet
 * @export TTablet
 */
export type TTablet = TIpad | TAndroid | TWindowsPhone | TKindle | TGenericTablet | null;

