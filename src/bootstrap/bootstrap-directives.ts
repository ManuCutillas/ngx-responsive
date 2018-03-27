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
    protected _state = 'xl';
    protected _showWhenTrue = true;
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

@Directive(
{
    selector: 'responsive-size-info'
})
export class ResponsiveSizeInfo implements OnInit, OnDestroy {

    @Input() set responsiveSizeInfo( grid_state: string[] | string ) {
        this._updateData( this.currentstate );
    }

    @Output() statechanges: EventEmitter<any> = new EventEmitter();

    public currentstate: string;
    private _subscription: Subscription;
    private _noRepeat: string;

    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd: ChangeDetectorRef ) {}

    public ngOnInit() {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this._updateData.bind( this ));
    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();
    }


    private _updateData( value: any ): void {
        const _update = this._ifValueIsChanged( this._noRepeat, value );
        if (_update) {
            this.statechanges.emit(value);
            this.cd.markForCheck();
        }
    }

    private _ifValueIsChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
