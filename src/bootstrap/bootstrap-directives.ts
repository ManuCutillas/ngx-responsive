import {Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {RESPONSIVE_BASE} from '../config/responsive-base';

/*
 *
 * Bootstrap standard screen sizes directives
 * XL / LG / MD / SM / XS
 */

/*======== XL STATES =========*/
@Directive({
    selector: '[xl]'
})
export class XL extends RESPONSIVE_BASE {
    protected _state: string = 'xl';
    protected _showWhenTrue: boolean = true;

    @Input() set xl(grid_state: string[] | string) {
        this.setGrid(this._state,'bootstrap');
    }
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== LG STATES =========*/
@Directive({
    selector: '[lg]'
})
export class LG extends RESPONSIVE_BASE {
    protected _state: string = 'lg';
    protected _showWhenTrue: boolean = true;
    @Input() set lg(grid_state: string[] | string) {
        this.setGrid(this._state,'bootstrap');
    }
    
    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}  

/*======== MD STATES =========*/
@Directive({
    selector: '[md]'
})
export class MD extends RESPONSIVE_BASE {
    protected _state: string = 'md';
    protected _showWhenTrue: boolean = true;

    @Input() set md(grid_state: string[] | string) {
        this.setGrid(this._state,'bootstrap');
    }

    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);

    }
}

/*======== SM STATES =========*/
@Directive({
    selector: '[sm]'
})
export class SM extends RESPONSIVE_BASE {
    protected _state: string = 'sm';
    protected _showWhenTrue: boolean = true;

    @Input() set sm(grid_state: string[] | string) {
        this.setGrid(this._state,'bootstrap');
    }

    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== XS STATES =========*/
@Directive({
    selector: '[xs]'
})
export class XS extends RESPONSIVE_BASE {
    protected _state: string = 'xs';
    protected _showWhenTrue: boolean = true;

    @Input() set xs(grid_state: string[] | string) {
        this.setGrid(this._state,'bootstrap');
    }

    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== MULTIPLE SIZES STATES =========*/
/* show */
@Directive({
    selector: '[showItBootstrap]'
})
export class ShowItBootstrap extends RESPONSIVE_BASE {
    protected _showWhenTrue: boolean = true;

    @Input() set showItBootstrap(grid_state: string[] | string) {
        this.setGrid(grid_state,'bootstrap');
    }

    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }

}

/* hide */
@Directive({
    selector: '[hideItBootstrap]'
})

export class HideItBootstrap extends RESPONSIVE_BASE {
    protected _showWhenTrue: boolean = false;

    @Input() set hideItBootstrap(grid_state: string[] | string) {
        this.setGrid(grid_state,'bootstrap');
    }

    constructor(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef,
        _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}


/*======== responsiveSizeInfo =========*/
@Directive({
    selector: "responsiveSizeInfo",
    inputs: ['responsiveSizeInfo'],
    outputs:['statechanges']
})
export class ResponsiveSizeInfo implements OnInit, OnDestroy {
    public currentstate: string;
    private _subscription: Subscription;
    private _noRepeat: string;

    public set responsiveSizeInfo(grid_state: string[] | string) {
        this.updateData(this.currentstate);
    }
    public  statechanges: EventEmitter<any> = new EventEmitter();
    constructor(private _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef) { }

    public ngOnInit() {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private updateData(value: any): void {
        let update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            this.statechanges.emit(value);
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