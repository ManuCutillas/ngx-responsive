/**
 * @name ie-info.rx
 * @description IE Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core';
import { IeInfo } from './ie-info';

@Injectable()
export class IeInfoRx extends IeInfo  {
    constructor( public _responsiveState: ResponsiveState) { super(_responsiveState); }
}
