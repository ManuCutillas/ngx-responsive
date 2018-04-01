/**
 * @name devices-standard-info.directive
 * @description devices-standard-info directive in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../../@core';
import { DeviceStandardInfo } from './devices-standard-info';

@Directive({ selector: 'device-standard-info' })
export class DeviceStandardInfoDirective extends DeviceStandardInfo implements OnInit, OnDestroy {
    @Input() set deviceStandardInfo( grid_state: string[] | string ) {
        this._updateData( this.currentstate );
    }
    @Output() public standard: EventEmitter<any> = new EventEmitter();
    constructor( protected _responsiveState: ResponsiveState,
        protected viewContainer: ViewContainerRef,
        protected cd: ChangeDetectorRef ) {
            super(_responsiveState);
        }
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
