/**
 * @name browser-names.interfaces
 * @description Browser names interfaces in ngx-responsive
 *
 * @license MIT
 */
import {
    TChrome, TFirefox, TIe, TSafari, TSilk, TYandex, TNA, TOpera
} from '../types';

/**
 * @export IBrowserNames
 */
export interface IBrowserNames {
    CHROME: TChrome;
    FIREFOX: TFirefox;
    IE:  TIe;
    SAFARI: TSafari;
    OPERA: TOpera;
    SILK: TSilk;
    YANDEX: TYandex;
    NA: TNA;
}
