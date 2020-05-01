/**
 * @name responsive-size-info.rx
 * @description Responsive Size Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { ResponsiveSizeInfo } from './responsive-size-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Injectable()
export class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor( 
        public _responsiveState: ResponsiveState,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
}
