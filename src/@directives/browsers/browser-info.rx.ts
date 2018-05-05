/**
 * @name browser-info.rx
 * @description Browser info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { BrowserInfo } from './browser-info';

@Injectable()
export class BrowserInfoRx extends BrowserInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
}
