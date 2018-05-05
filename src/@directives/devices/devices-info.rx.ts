/**
 * @name devices-info.rx
 * @description devices-info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DevicesInfo } from './devices-info';

@Injectable()
export class DeviceInfoRx extends DevicesInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
}
