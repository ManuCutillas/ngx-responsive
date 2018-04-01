import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../../@core';
import { OrientationInfo } from './orientation-info';

@Directive({ selector: 'orientation-info' })
export class OrientationInfoDirective extends OrientationInfo implements OnInit, OnDestroy {
    @Output() public orientation: EventEmitter<any> = new EventEmitter();
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
        this.orientation.emit(value);
        this.cd.markForCheck();
    }
}
