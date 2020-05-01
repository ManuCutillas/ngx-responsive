/**
 * @name browser-info.rx
 * @description Browser info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { BrowserInfo } from './browser-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Injectable()
export class BrowserInfoRx extends BrowserInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
}
