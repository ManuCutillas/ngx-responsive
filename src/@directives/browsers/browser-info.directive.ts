
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
        this.updateData(this.currentstate);
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
    updateData(value: any) {
        const update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
            this.cd.markForCheck();
        }
    }
}
