/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 *  @author Manu cutillas
 */
import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../config/index';

@Directive({
    selector: '[xl]'
})
export class XlDirective extends RESPONSIVE_BASE<any> {

    _state = 'xl';
    _showWhenTrue = true;

    @Input() set xl( grid_state: string[] | string ) {
        this.setGrid(this._state, 'bootstrap');
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {

        super ( templateRef, viewContainer, _responsiveState, cd );
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
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
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
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
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
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
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
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}
@Directive(
{
    selector: '[showItBootstrap]'
})
export class ShowItBootstrap extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue = true;
    @Input() set showItBootstrap( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}
@Directive(
{
    selector: '[hideItBootstrap]'
})
export class HideItBootstrap extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    @Input() set hideItBootstrap( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'bootstrap' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}