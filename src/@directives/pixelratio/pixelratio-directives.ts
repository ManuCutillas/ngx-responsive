/**
 * @name pixelratio.directives
 * @description pixelratio directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input, Output, EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

/*======== 1x =========*/
@Directive({
    selector: '[is1xPixel]'
})
export class Is1xPixelDirective extends RESPONSIVE_BASE<any> {

    protected _state = '1x';
    protected _showWhenTrue = true;

    @Input() set is1xPixel( grid_state: string ) {
        this.setGrid( this._state, 'pixelratio' );
    }
    constructor ( templateRef: TemplateRef<any>,
                  viewContainer: ViewContainerRef,
                  _responsiveState: ResponsiveState,
                  cd: ChangeDetectorRef,
                  platformService: PlatformService
         ) {
         super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

/*======== RETINA =========*/
@Directive(
{
    selector: '[isRetina]'
})

export class IsRetinaDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'retina';
    protected _showWhenTrue = true;

    @Input() set isRetina( grid_state: string ) {
        this.setGrid( this._state, 'pixelratio' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}

/*======== 4K =========*/
@Directive(
{
    selector: '[is4k]'
})
export class Is4kDirective extends RESPONSIVE_BASE<any> {

    protected _state = '4k';
    protected _showWhenTrue = true;

    @Input() set isRetina( grid_state: string ) {
        this.setGrid( this._state, 'pixelratio' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState,
                cd: ChangeDetectorRef,
                @Inject(PLATFORM_ID) _platformId 
       ) {
       super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}

/*======== DeviceInfo =========*/

@Directive({ selector: 'pixel-ratio-info' })
export class PixelRatioInfoDirective implements OnInit, OnDestroy {

    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;
    private _isEnabledForPlatform: boolean = null;

    @Input() set pixelratioInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
    }

    @Output() pixelratio: EventEmitter<any> = new EventEmitter();

    constructor(
        private _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }

    ngOnInit() {
        if (this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind( this ));
        }
    }

    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._subscription.unsubscribe();
        }
    }

    updateData( value: any ) {
        const update = this._ifValueChanged( this.noRepeat, value );
        if (update) {
            this.pixelratio.emit( value );
            this.cd.markForCheck();
        }
    }

    _ifValueChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
