import {Injectable, Directive, Input, Output, EventEmitter, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {ResponsiveConfigInterface} from '../config/interfaces';
import { REG_TABLETS, REG_MOBILES } from '../config/const';

/*
 * PIXEL RATIO DIRECTIVES
 * @4k @RETINA @1X
 */
export abstract class PIXEL_RATIO implements OnInit, OnDestroy {

    private noRepeat: number = 0;
    private _grid_state: string;
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState) {
    }


    protected setGrid(grid_state: string) {
        this._grid_state = <string>grid_state;
    }

    ngOnInit() {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private showHide(show: boolean) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    updateView(device: string) {
        if (!!this._showWhenTrue) {
            this.showHide(!!(this._grid_state && device));
        } else {
            this.showHide(!(!!(this._grid_state && device)));
        }
    }
}

/*======== 1x =========*/
@Directive({
    selector: '[is1xPixel]',
    providers: [ResponsiveState]
})
export class Is1xPixel extends PIXEL_RATIO {
    protected state: string = '1x';
    protected _showWhenTrue: boolean = true;

    @Input() set is1xPixel(grid_state: string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }

}

/*======== RETINA =========*/
@Directive({
    selector: '[isRetina]',
    providers: [ResponsiveState]
})

export class IsRetina extends PIXEL_RATIO {
    protected state: string = 'retina';
    protected _showWhenTrue: boolean = true;

    @Input() set isRetina(grid_state: string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== RETINA =========*/
@Directive({
    selector: '[is4k]',
    providers: [ResponsiveState]
})
export class Is4k extends PIXEL_RATIO {
    protected state: string = '4k';
    protected _showWhenTrue: boolean = true;

    @Input() set isRetina(grid_state: string) {
        this.setGrid(this.state);
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}



/*======== PixelratioInfo =========*/
/* PixelratioInfo */
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
