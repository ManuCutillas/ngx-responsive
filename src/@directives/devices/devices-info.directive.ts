import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { DevicesInfo } from './devices-info';

@Directive({ selector: 'device-info' })
export class DeviceInfoDirective extends DevicesInfo implements OnInit, OnDestroy {
    @Output() device: EventEmitter<any> = new EventEmitter();
    constructor(protected _responsiveState: ResponsiveState,
        protected viewContainer: ViewContainerRef,
        protected cd: ChangeDetectorRef) {
        super(_responsiveState);
    }
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
