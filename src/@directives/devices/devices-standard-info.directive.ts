import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../../@core';
import { DeviceStandardInfo } from './devices-standard-info';

@Directive({ selector: 'device-standard-info' })
export class DeviceStandardInfoDirective extends DeviceStandardInfo implements OnInit, OnDestroy {
    @Input() set deviceStandardInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
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
    updateData( value: any ) {
        const update = this._ifValueChanged( this.noRepeat, value );
        if ( update ) {
            this.standard.emit( value );
            this.cd.markForCheck();
        }
    }
}
