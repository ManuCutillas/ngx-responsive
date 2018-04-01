/**
 * @name game-devices.interfaces
 * @description Game devices interfaces in ngx-responsive
 *
 * @license MIT
 */
import {
    TPs4, TPs3, TXboxOne, TXbox, TWii, TWiiU, TNintendo3DS, TPlaystationVita, TPsp
} from '../types';

/**
 * @export IGameDevices
 */
export interface IGameDevices {
    PS4: TPs4;
    PS3: TPs3;
    XBOX_ONE: TXboxOne;
    XBOX: TXbox;
    WII: TWii;
    WII_U: TWiiU;
    NINTENDO_3DS: TNintendo3DS;
    PLAYSTATION_VITA: TPlaystationVita;
    PSP: TPsp;
}
