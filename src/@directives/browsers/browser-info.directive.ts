
/**
 * @name browser-info.directive
 * @description Browser info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { BrowserInfo } from './browser-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive({
    selector: 'browser-info'
})
export class BrowserInfoDirective extends BrowserInfo implements OnInit, OnDestroy {
    @Output() public browser: EventEmitter<any> = new EventEmitter();
    @Input() set browserInfo(grid_state: string[] | string) {
        this._updateData(this.currentstate);
    }
    constructor(public _responsiveState: ResponsiveState,
        private cd: ChangeDetectorRef,
        protected platformService: PlatformService
    ) { super(_responsiveState, platformService); }

    ngOnInit(): void {
        this.connect();
    }
    ngOnDestroy(): void {
        this.disconnect();
    }
    protected _updateData(value: any) {
        this.browser.emit(value);
        this.cd.markForCheck();
    }
}
