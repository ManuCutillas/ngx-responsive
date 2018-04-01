/**
 * @name smart-tv.constants
 * @description Core smart-tv.constants in ngx-responsive
 *
 * @license MIT
 */
import { ISmartTv } from '../interfaces';
import { GAME_DEVICES } from './game-devices.constants';

export const SMART_TV: ISmartTv = {
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple tv',
    GOOGLE_TV: 'Google tv',
    PS4: GAME_DEVICES.PS4,
    XBOX_ONE: GAME_DEVICES.XBOX_ONE,
    GENERIC_TV: 'Generic smartv'
};
