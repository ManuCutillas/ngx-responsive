/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 */
import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
@Directive({
    selector: '[xl]'
})
export class XlDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'xl';
    protected _showWhenTrue = true;
    @Input() set xl( grid_state: string[] | string ) {
        this.setGrid(this._state, 'bootstrap');
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {

        super ( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}

@Directive(
{
    selector: '[lg]'
})
export class LgDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'lg';
    protected _showWhenTrue = true;
    @Input() set lg( grid_state: string[] | string ) {
        this.setGrid( this._state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}
@Directive(
{
    selector: '[md]'
})
export class MdDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'md';
    protected _showWhenTrue = true;
    @Input() set md( grid_state: string[] | string ) {
        this.setGrid( this._state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}

@Directive({
    selector: '[sm]'
})
export class SmDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'sm';
    protected _showWhenTrue = true;
    @Input() set sm( grid_state: string[] | string ) {
        this.setGrid( this._state, 'bootstrap' );
    }

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}

@Directive({
    selector: '[xs]'
})
export class XsDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'xs';
    protected _showWhenTrue = true;
    @Input() set xs( grid_state: string[] | string ) {
        this.setGrid(this._state, 'bootstrap');
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}
@Directive(
{
    selector: '[showItBootstrap]'
})
export class ShowItBootstrapDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue = true;
    @Input() set showItBootstrap( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}
@Directive(
{
    selector: '[hideItBootstrap]'
})
export class HideItBootstrapDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    @Input() set hideItBootstrap( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 @Inject(PLATFORM_ID) _platformId 
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, _platformId );
    }
}
