import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {ResponsiveConfigInterface} from '../config/interfaces';
/*
 *
 * Bootstrap standard screen sizes directives
 * XL / LG / MD / SM / XS
 */
abstract class Bootstrap implements OnInit, OnDestroy {
    private noRepeat: number = 0;
    private _grid_state: string[];
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }

    protected setGrid(grid_state: string[]|string) {
        this._grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);
        // this.updateView(this._responsiveState.getDeviceSizeInitial());

    }

    ngOnInit() {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
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

    updateView(valor: string) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(valor) !== -1)
        } else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(valor) !== -1))
        }
    }
}

/*======== XL STATES =========*/
@Directive({
    selector: '[xl]',
    providers:[ResponsiveState]
})
export class XL extends Bootstrap {
    protected state: string = 'xl';
    protected _showWhenTrue: boolean = true;
    
     @Input() set xl(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
     constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== LG STATES =========*/
@Directive({
    selector: '[lg]',
    providers:[ResponsiveState]
})
export class LG extends Bootstrap{
    protected state: string = 'lg';
    protected _showWhenTrue: boolean = true;
    
     @Input() set lg(grid_state: string[]|string) {
        this.setGrid(this.state);
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
export class MD extends Bootstrap {
   protected state: string = 'md';
    protected _showWhenTrue: boolean = true;
    
     @Input() set md(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    
     constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== SM STATES =========*/
@Directive({
    selector: '[sm]',
    providers:[ResponsiveState]
})
export class SM extends Bootstrap{
    protected state: string = 'sm';
    protected _showWhenTrue: boolean = true;
    
     @Input() set sm(grid_state: string[]|string) {
        this.setGrid(this.state);
    }
    
     constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}

/*======== XS STATES =========*/
@Directive({
    selector: '[xs]',
    providers:[ResponsiveState]
})
export class XS extends Bootstrap {
    protected state: string = 'xs';
    protected _showWhenTrue: boolean = true;
    
     @Input() set xs(grid_state: string[]|string) {
        this.setGrid(this.state);
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
    selector: '[showItBootstrap]',
    providers:[ResponsiveState]
})
export class ShowItBootstrap extends Bootstrap {
    protected _showWhenTrue: boolean = true;

    @Input() set showItBootstrap(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }

}

/* hide */
@Directive({
    selector: '[hideItBootstrap]',
    providers:[ResponsiveState]
})
export class HideItBootstrap extends Bootstrap {
    protected _showWhenTrue: boolean = false;

    @Input() set hideItBootstrap(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
    }
}