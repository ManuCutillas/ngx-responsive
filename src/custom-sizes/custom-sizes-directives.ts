import { Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';

@Directive(
{
    selector: '[showItSizes]'
})
export class ShowItSizes extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super(templateRef, viewContainer, _responsiveState, cd);
    }
     @Input() set showItSizes( _grid_state: any ) {
        this.setGrid(_grid_state,'sizes');
    }
}

@Directive(
{
    selector: '[hideItSizes]'
})
export class HideItSizes extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }

    @Input() set hideItSizes( _grid_state: any ) {
        this.setGrid( _grid_state, 'sizes' );
    }
}
