import { Injectable } from '@angular/core';
import { ResponsiveState } from '../../@core';
import { DeviceStandardInfo } from './devices-standard-info';

@Injectable()
export class DeviceStandardInfoRx extends DeviceStandardInfo  {
    constructor( protected _responsiveState: ResponsiveState) { super(_responsiveState); }
}
