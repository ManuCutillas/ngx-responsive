import {Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {JsonGrid} from '../config/interfaces';
import {RESPONSIVE_BASE} from '../config/responsive-base';

/*======== CUSTOM SIZES =========*/
/* show */
@Directive({
    selector: '[showItSizes]'
})
export class ShowItSizes extends RESPONSIVE_BASE {
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
export class HideItSizes extends RESPONSIVE_BASE {
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
