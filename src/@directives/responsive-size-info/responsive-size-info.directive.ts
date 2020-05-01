/**
 * @name responsive-size-info.directive
 * @description Responsive Size Info directive in ngx-responsive
 *
 * @license MIT
 */
import { Directive, EventEmitter, Input, Output, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { ResponsiveSizeInfo } from './responsive-size-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive({ selector: 'responsiveSizeInfo' })
export class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo implements OnInit, OnDestroy {
    public currentstate: string;
    @Input() set responsiveSizeInfo(grid_state: string[] | string) {
        this._updateData(this.currentstate);
    }
    @Output() statechanges: EventEmitter<any> = new EventEmitter();

    constructor(public _responsiveState: ResponsiveState,
        public viewContainer: ViewContainerRef,
        public cd: ChangeDetectorRef,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
    ngOnInit(): void {
        this.connect();
    }
    ngOnDestroy(): void {
        this.disconnect();
    }
    protected _updateData(value: any): void {
        this.statechanges.emit(value);
        this.cd.markForCheck();
    }
}
