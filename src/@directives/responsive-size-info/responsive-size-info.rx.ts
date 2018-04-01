/**
 * @name responsive-size-info.rx
 * @description Responsive Size Info reactive service in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ResponsiveState } from '../../@core';
import { ResponsiveSizeInfo } from './responsive-size-info';

@Injectable()
export class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor(public _responsiveState: ResponsiveState) {
            super(_responsiveState);
        }
}
