import {Directive, Input, Output, EventEmitter, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';
/*
 * PIXEL RATIO DIRECTIVES
 * @4k @RETINA @1X
 */

/*======== 1x =========*/
@Directive({
    selector: '[is1xPixel]'
})
export class Is1xPixel extends RESPONSIVE_BASE<any> {
    protected _state: string = '1x';
    protected _showWhenTrue: boolean = true;

    @Input() set is1xPixel(grid_state: string) {
        this.setGrid(this._state, 'pixelratio');
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }

}

/*======== RETINA =========*/
@Directive({
    selector: '[isRetina]'
})

export class IsRetina extends RESPONSIVE_BASE<any> {
    protected _state: string = 'retina';
    protected _showWhenTrue: boolean = true;

    @Input() set isRetina(grid_state: string) {
        this.setGrid(this._state, 'pixelratio');
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== 4K =========*/
@Directive({
    selector: '[is4k]'
})
export class Is4k extends RESPONSIVE_BASE<any> {
    protected _state: string = '4k';
    protected _showWhenTrue: boolean = true;

    @Input() set isRetina(grid_state: string) {
        this.setGrid(this._state, 'pixelratio');
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}


//Next to refactor
/*======== DeviceInfo =========*/
/* DeviceInfo */
@Directive({
    selector: "pixelratioInfo",
    inputs: ['pixelratioInfo']
})
export class PixelRatioInfo implements OnInit, OnDestroy {
    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;

    set pixelratioInfo(grid_state: string[] | string) {
        this.updateData(this.currentstate);
    }

    @Output() pixelratio: EventEmitter<any> = new EventEmitter();
    constructor(private _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef) { }

    ngOnInit() {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    updateData(value: any) {
        let update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
        }
    }

    _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
