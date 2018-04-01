/**
 * @name pixelratio.directives
 * @description pixelratio directives in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { Directive, Input, Output, EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';

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
                  cd: ChangeDetectorRef ) {
        super ( templateRef, viewContainer, _responsiveState, cd );
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
                 cd: ChangeDetectorRef ) {
        super ( templateRef, viewContainer, _responsiveState, cd );
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
                cd: ChangeDetectorRef ) {
        super ( templateRef, viewContainer, _responsiveState, cd );
    }
}

/*======== DeviceInfo =========*/

@Directive({ selector: 'pixel-ratio-info' })
export class PixelRatioInfoDirective implements OnInit, OnDestroy {

    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;

    @Input() set pixelratioInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
    }

    @Output() pixelratio: EventEmitter<any> = new EventEmitter();

    constructor(
        private _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef ) {}

    ngOnInit() {
        this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind( this ));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
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
