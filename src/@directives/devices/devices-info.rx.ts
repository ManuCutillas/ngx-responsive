import { Injectable } from '@angular/core';
import { ResponsiveState } from '../../@core';
import { DevicesInfo } from './devices-info';

@Injectable()
export class DeviceInfoRx extends DevicesInfo  {
    constructor( protected _responsiveState: ResponsiveState) { super(_responsiveState); }
}
