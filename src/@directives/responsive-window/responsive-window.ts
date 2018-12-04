/**
 * @name responsive-window
 * @description responsiveWindow Directive in ngx-responsive
 *
 * @license MIT
 */
import { DoCheck, Directive, Input, ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';

@Directive({
    selector: "[responsive-window]",
    exportAs: "container"
})
export class ResponsiveWindowDirective implements OnInit, OnDestroy, DoCheck {

    private _noRepeat: string;
    private element: HTMLElement;
    private _isBrowser: boolean = null;

    @Input('responsive-window') name: string;

    constructor(
        private _responsiveState: ResponsiveState,
        private el: ElementRef,
        private cd: ChangeDetectorRef,
        @Inject(PLATFORM_ID) protected _platformId) {
        this._isBrowser = isPlatformBrowser(this._platformId);
        if (this._isBrowser) {
            this.element = el.nativeElement;
        }
    }
    public ngOnInit(): void {
        if (this._isBrowser) {
            this._responsiveState.registerWindow(this);
        }
    }

    public ngDoCheck(): void {
        if (this._isBrowser) {
            const _update = this._ifValueChanged(this._noRepeat, this.name);
            if (_update) {
                this._responsiveState.unregisterWindow(this);
                this._responsiveState.registerWindow(this);
                this.cd.markForCheck();
            }
        }
    }
    public ngOnDestroy() {
        if(this._isBrowser) {
            this._responsiveState.unregisterWindow(this);
        }
    }

    public getWidth() {
        return (this._isBrowser) ? this.element.offsetWidth : 0;
    }

    private _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
