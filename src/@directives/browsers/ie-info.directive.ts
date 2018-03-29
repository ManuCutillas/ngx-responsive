import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { IeInfo } from './ie-info';

@Directive({ selector: 'ie-info' })
export class IeInfoDirective extends IeInfo implements OnInit, OnDestroy {
    @Input() set ieInfo(grid_state: string[] | string) {
        this.updateData(this.currentstate);
    }
    @Output() public ieVersion: EventEmitter<any> = new EventEmitter();
    constructor(public _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef) { super(_responsiveState); }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
            this.cd.markForCheck();
        }
    }
}
