/**
 * @name smart-tv.types
 * @description Smart tv types in ngx-responsive
 *
 * @license MIT
 */
import { TPs4, TXboxOne } from './game-devices.types';
/**
 * @type
 * @name TChromecast
 * @export TChromecast
 */
export type TChromecast = 'Chromecast';

/**
 * @type
 * @name TAppleTv
 * @export TAppleTv
 */
export type TAppleTv = 'Apple tv';

/**
 * @type
 * @name TGoogleTv
 * @export TGoogleTv
 */
export type TGoogleTv = 'Google tv';

/**
 * @type
 * @name TGenericTv
 * @export TGenericTv
 */
export type TGenericTv = 'Generic smartv';

/**
 * @type
 * @name TSmartTv
 * @export TSmartTv
 */
export type TSmartTv = TChromecast | TAppleTv | TGoogleTv | TPs4 | TXboxOne | TGenericTv;

