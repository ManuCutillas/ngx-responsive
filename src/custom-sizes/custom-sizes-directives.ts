import {Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/Rx';
import {ResponsiveState, JsonGrid, RESPONSIVE_BASE,} from '../config';

/*======== CUSTOM SIZES =========*/
/* show */
@Directive({
    selector: '[showItSizes]'
})
export class ShowItSizes extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState ) {
                     
          super(templateRef, viewContainer, _responsiveState);
    }
     
     @Input() set showItSizes(_grid_state: any) {
        this.setGrid(_grid_state,'sizes');
    }
}

/* hide */
@Directive({
    selector: '[hideItSizes]'
})
export class HideItSizes extends RESPONSIVE_BASE<any> {
   protected _showWhenTrue: boolean = false;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState ) {
                     
          super(templateRef, viewContainer, _responsiveState);
    }
        
     @Input() set hideItSizes(_grid_state: any) {
        this.setGrid(_grid_state,'sizes');
    }
}
