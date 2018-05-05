/**
 * @name devices-info.directive
 * @description devices-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Output, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DevicesInfo } from './devices-info';

@Directive({ selector: 'device-info' })
export class DeviceInfoDirective extends DevicesInfo implements OnInit, OnDestroy {
    @Output() device: EventEmitter<any> = new EventEmitter();
    constructor(protected _responsiveState: ResponsiveState,
        protected viewContainer: ViewContainerRef,
        protected cd: ChangeDetectorRef,
        @Inject(PLATFORM_ID) protected _platformId
    ) { super(_responsiveState, _platformId); }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    protected _updateData(value: any) {
        this.device.emit(value);
        this.cd.markForCheck();
    }
}
