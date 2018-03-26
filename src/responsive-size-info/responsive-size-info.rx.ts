
import { Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ResponsiveState } from '../config/index';
import { ResponsiveSizeInfo } from './responsive-size-info';

@Injectable()
export class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor(public _responsiveState: ResponsiveState,
        public viewContainer: ViewContainerRef) {
            super(
                _responsiveState,
                viewContainer
            );
        }
}
