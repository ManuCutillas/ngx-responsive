
/**
 * @name mobile.types
 * @description Mobile types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @type
 * @name TIphone
 * @export TIphone
 */
export type TIphone = 'Iphone';

/**
 * @type
 * @name TAndroid
 * @export TAndroid
 */
export type TAndroid = 'Android';

/**
 * @type
 * @name TWindowsPhone
 * @export TWindowsPhone
 */
export type TWindowsPhone = 'Windows Phone';

/**
 * @type
 * @name TBlackberry
 * @export TBlackberry
 */
export type TBlackberry = 'Blackberry';

/**
 * @type
 * @name TGenericMobile
 * @export TGenericMobile
 */
export type TGenericMobile = 'Generic Mobile';

/**
 * @type
 * @name TMobile
 * @export TMobile
 */
export type TMobile = TIphone | TAndroid | TWindowsPhone | TBlackberry | TGenericMobile | null;

