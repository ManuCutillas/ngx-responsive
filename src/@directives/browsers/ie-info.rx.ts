/**
 * @name ie-info.rx
 * @description IE Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { IeInfo } from './ie-info';

@Injectable()
export class IeInfoRx extends IeInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
}
