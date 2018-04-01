
import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';
import { BrowserInfo } from './browser-info';

@Directive({
    selector: 'browser-info'
})
export class BrowserInfoDirective extends BrowserInfo implements OnInit, OnDestroy {
    @Output() public browser: EventEmitter<any> = new EventEmitter();
    @Input() set browserInfo(grid_state: string[] | string) {
        this._updateData(this.currentstate);
    }
    constructor(public _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef) { super(_responsiveState); }

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
