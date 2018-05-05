/**
 * @name devices-standard-info.rx
 * @description devices-standard reactive service in ngx-responsive
 *
 * 
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DeviceStandardInfo } from './devices-standard-info';

@Injectable()
export class DeviceStandardInfoRx extends DeviceStandardInfo  {
    constructor( 
        public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
}
