/**
 * @name custom-sizes.directives
 * @description Custom sizes directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
@Directive(
{
    selector: '[showItSizes]'
})
export class ShowItSizesDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
     @Input() set showItSizes( _grid_state: any ) {
        this.setGrid(_grid_state, 'sizes');
    }
}

@Directive(
{
    selector: '[hideItSizes]'
})
export class HideItSizesDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }

    @Input() set hideItSizes( _grid_state: any ) {
        this.setGrid( _grid_state, 'sizes' );
    }
}
