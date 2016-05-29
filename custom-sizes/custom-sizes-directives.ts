import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveConfigInterface,ResponsiveState} from '../config/config';

interface JsonGrid
{
    min : number;
    max: number
}


abstract class CustomSizes implements OnInit, OnDestroy {
    private noRepeat: number = 0;
    private _grid_state:JsonGrid;
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    protected setGrid(_grid_state: any) {
        this._grid_state = _grid_state;
    }

    ngOnInit() {
        this._subscription = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));
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

    updateView(size: number) {
        if(!!this._showWhenTrue){
            this.showHide(!!(size >= this._grid_state.min && size <= this._grid_state.max));
        }else{
             this.showHide(!(size >= this._grid_state.min && size <= this._grid_state.max));
        }  
    }
}

/*======== CUSTOM SIZES =========*/
/* show */
@Directive({
    selector: '[showItSizes]',
    providers:[ResponsiveState]
})
export class ShowItSizes extends CustomSizes {
    protected _showWhenTrue: boolean = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState ) {
                     
          super(templateRef, viewContainer, _responsiveState);
    }
    
     
     @Input() set showItSizes(_grid_state: any) {
        this.setGrid(_grid_state);
    }
}

/* hide */
@Directive({
    selector: '[hideItSizes]',
    providers:[ResponsiveState]
})
export class HideItSizes extends CustomSizes {
   protected _showWhenTrue: boolean = false;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState ) {
                     
          super(templateRef, viewContainer, _responsiveState);
    }
    
     
     @Input() set hideItSizes(_grid_state: any) {
        this.setGrid(_grid_state);
    }
}
