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
import { ResponsiveConfig } from "../../@core/providers/responsive-config/responsive-config";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive({
    selector: "[responsive-window]",
    exportAs: "container"
})
export class ResponsiveWindowDirective implements OnInit, OnDestroy, DoCheck {

    private _noRepeat: string;
    private element: HTMLElement;
    private _isEnabledForPlatform: boolean = null;

    @Input('responsive-window') name: string;

    public currentBreakpoint$: Observable<string>;

    constructor(
        private _responsiveState: ResponsiveState,
        private el: ElementRef,
        private cd: ChangeDetectorRef,
        platformService: PlatformService,
        private _responsiveConfig: ResponsiveConfig) {

        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
        if (this._isEnabledForPlatform) {
            this.element = el.nativeElement;
        }

        this.currentBreakpoint$ = this._responsiveState
            .ancho$
            .pipe(
                map(this.getCurrentBreakpoint.bind(this))
            );
    }
    public ngOnInit(): void {
        if (this._isEnabledForPlatform) {
            this._responsiveState.registerWindow(this);
        }
    }

    public ngDoCheck(): void {
        if (this._isEnabledForPlatform) {
            const _update = this._ifValueChanged(this._noRepeat, this.name);
            if (_update) {
                this._responsiveState.unregisterWindow(this);
                this._responsiveState.registerWindow(this);
                this.cd.markForCheck();
            }
        }
    }
    public ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._responsiveState.unregisterWindow(this);
        }
    }

    public getWidth() {
        return (this._isEnabledForPlatform) ? this.element.offsetWidth : 0;
    }

    public getCurrentBreakpoint(): string {
        const width: number = this.getWidth();
        // console.error("getCurrentBreakpoint", width)
        if (this._responsiveConfig.config.breakPoints.xl.min <= width) {
            return 'xl';
        } else if (this._responsiveConfig.config.breakPoints.lg.max >= width && this._responsiveConfig.config.breakPoints.lg.min <= width) {
            return 'lg';
        } else if (this._responsiveConfig.config.breakPoints.md.max >= width && this._responsiveConfig.config.breakPoints.md.min <= width) {
            return 'md';
        } else if (this._responsiveConfig.config.breakPoints.sm.max >= width && this._responsiveConfig.config.breakPoints.sm.min <= width) {
            return 'sm';
        } else if (this._responsiveConfig.config.breakPoints.xs.max >= width) {
            return 'xs';
        }
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
