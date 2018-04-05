/**
 * @name orientation-info.rx
 * @description Orientation reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { OrientationInfo } from './orientation-info';

@Injectable()
export class OrientationInfoRx extends OrientationInfo  {
    constructor( protected _responsiveState: ResponsiveState) { super(_responsiveState); }
}
