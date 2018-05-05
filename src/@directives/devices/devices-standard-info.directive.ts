/**
 * @name devices-standard-info.directive
 * @description devices-standard-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DeviceStandardInfo } from './devices-standard-info';

@Directive({ selector: 'device-standard-info' })
export class DeviceStandardInfoDirective extends DeviceStandardInfo implements OnInit, OnDestroy {
    @Input() set deviceStandardInfo( grid_state: string[] | string ) {
        this._updateData( this.currentstate );
    }
    @Output() public standard: EventEmitter<any> = new EventEmitter();
    constructor( protected _responsiveState: ResponsiveState,
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
    protected _updateData( value: any ) {
        this.standard.emit( value );
        this.cd.markForCheck();
    }
}
