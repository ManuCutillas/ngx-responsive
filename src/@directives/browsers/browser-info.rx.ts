/**
 * @name browser-info.rx
 * @description Browser info reactive service in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core';
import { BrowserInfo } from './browser-info';

@Injectable()
export class BrowserInfoRx extends BrowserInfo  {
    constructor( public _responsiveState: ResponsiveState) { super(_responsiveState); }
}
