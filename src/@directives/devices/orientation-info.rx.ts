/**
 * @name orientation-info.rx
 * @description Orientation reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { OrientationInfo } from './orientation-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Injectable()
export class OrientationInfoRx extends OrientationInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
}
