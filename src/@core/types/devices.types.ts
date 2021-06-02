/**
 * @name device.types
 * @description Device types in ngx-responsive
 *
 * @license MIT
 */

/**
 * @type
 * @name TMobile
 * @export TMobile
 */
export type TMobile = 'mobile';

/**
 * @type
 * @name TTablet
 * @export TTablet
 */
export type TTablet = 'tablet';

 /**
 * @type
 * @name TSmartTV
 * @export TSmartTV
 */
export type TSmartTV = 'smarttv';

/**
 * @type
 * @name TDesktop
 * @export TDesktop
 */
export type TDesktop = 'desktop';

/**
 * @type
 * @name TDevices
 * @export TDevices
 */
export type TDevices = TMobile | TTablet | TSmartTV | TDesktop;
