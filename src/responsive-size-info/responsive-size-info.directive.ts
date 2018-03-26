import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../config/index';
import { ResponsiveSizeInfo } from './responsive-size-info';

@Directive({ selector: 'responsiveSizeInfo' })
export class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo implements OnInit, OnDestroy {
    currentstate: string;
    @Input() set responsiveSizeInfo(grid_state: string[] | string) {
        this._updateData(this.currentstate);
    }
    @Output() statechanges: EventEmitter<any> = new EventEmitter();

    constructor(public _responsiveState: ResponsiveState,
        public viewContainer: ViewContainerRef,
        public cd: ChangeDetectorRef) {
        super(_responsiveState, viewContainer);
    }

    ngOnInit(): void {
        this.connect();
    }

    ngOnDestroy(): void {
        this.disconnect();
    }

    _updateData(value: any): void {
        const _update = this._ifValueIsChanged(this._noRepeat, value);
        if (_update) {
            this.statechanges.emit(value);
            this.cd.markForCheck();
        }
    }
}
