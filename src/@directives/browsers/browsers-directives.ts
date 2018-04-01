/**
 * @name browser-directives
 * @description Browser directives in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';

@Directive(
{
    selector: '[isChrome]'
})
export class IsChromeDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'chrome';
    protected _showWhenTrue = true;
    @Input() set isChrome( grid_state: string[] | string ) {
        this.setGrid( this._state, 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isFirefox]'
})

export class IsFirefoxDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'firefox';
    protected _showWhenTrue = true;
    @Input() set isFirefox( grid_state: string[] | string ) {
        this.setGrid( this._state, 'browser' );
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
    selector: '[isSafari]'
})
export class IsSafariDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'safari';
    protected _showWhenTrue = true;
    @Input() set isSafari( grid_state: string[] | string ) {
        this.setGrid( this._state, 'browser' );
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
    selector: '[isOpera]'
})
export class IsOperaDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'opera';
    protected _showWhenTrue = true;
    @Input() set isOpera( grid_state: string[] | string ) {
        this.setGrid( this._state, 'browser' );
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
    selector: '[isIE]'
})
export class IsIEDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'ie';
    protected _showWhenTrue = true;
    @Input() set isIE( grid_state: string[] | string ) {
        this.setGrid( this._state, 'browser' );
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
    selector: '[showItBrowser]'
})
export class ShowItBrowserDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;
    @Input() set showItBrowser( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'browser' );
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
    selector: '[hideItBrowser]'
})
export class HideItBrowserDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;
    @Input() set hideItBrowser( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'browser' );
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
    selector: '[isIE9]'
})
export class IsIE9Directive extends RESPONSIVE_BASE<any> {

    protected _state = 'ie 9';
    protected _showWhenTrue = true;
    @Input() set isIE9( grid_state: string[] | string ) {
        this.setGrid( this._state, 'ie' );
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
    selector: '[isIE10]'
})
export class IsIE10Directive extends RESPONSIVE_BASE<any> {

    protected _state = 'ie 10';
    protected _showWhenTrue = true;
    @Input() set isIE10( grid_state: string[] | string ) {
        this.setGrid( this._state, 'ie' );
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
    selector: '[isIE11]'
})
export class IsIE11Directive extends RESPONSIVE_BASE<any> {

    protected _state = 'ie 11';
    protected _showWhenTrue = true;
    @Input() set isIE11( grid_state: string[] | string ) {
        this.setGrid( this._state, 'ie' );
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
    selector: '[isIE12]'
})
export class IsIE12Directive extends RESPONSIVE_BASE<any> {

    protected _state = 'ie 12';
    protected _showWhenTrue = true;
    @Input() set isIE12( grid_state: string[] | string ) {
        this.setGrid( this._state, 'ie' );
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
    selector: '[showIEVersion]'
})
export class ShowIEVersionDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;
    @Input() set showIEVersion( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'ie' );
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
    selector: '[hideIEVersion]'
})
export class HideIEVersionDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;
    @Input() set hideIEVersion( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'ie' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}



