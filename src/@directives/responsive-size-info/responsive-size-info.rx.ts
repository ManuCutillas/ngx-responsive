/**
 * @name responsive-size-info.rx
 * @description Responsive Size Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { ResponsiveSizeInfo } from './responsive-size-info';

@Injectable()
export class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor( 
        public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
}
