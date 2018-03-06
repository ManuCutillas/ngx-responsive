import { Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';

@Directive({
    selector: '[isSmartTv]'
})
export class IsSmartTv extends RESPONSIVE_BASE<any> {

    protected _state = 'smarttv';
    protected _showWhenTrue = true;

    @Input() set isSmartTv( grid_state: string[]|string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef
               ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isDesktop]'
})
export class IsDesktop extends RESPONSIVE_BASE<any> {

    protected _state = 'desktop';
    protected _showWhenTrue = true;

    @Input() set isDesktop( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isTablet]'
})
export class IsTablet extends RESPONSIVE_BASE<any> {

    protected _state = 'tablet';
    protected _showWhenTrue = true;

    @Input() set isTablet( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isMobile]'
})
export class IsMobile extends RESPONSIVE_BASE<any> {

    protected _state = 'mobile';
    protected _showWhenTrue = true;

    @Input() set isMobile( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
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
    selector: '[showItDevice]'
})
export class ShowItDevice extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    @Input() set showItDevice( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[hideItDevice]'
})
export class HideItDevice extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue= false;

    @Input() set hideItDevice( grid_state: string[] | string )
    {
        this.setGrid( grid_state, 'device' );
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
    selector: '[isIphone]'
})
export class IsIphone extends RESPONSIVE_BASE<any> {

    protected _state = 'iphone';
    protected _showWhenTrue = true;

    @Input() set isIphone( grid_state: string[]|string ) {
        this.setGrid(this._state,'standard');
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
    selector: '[isIpad]'
})
export class IsIpad extends RESPONSIVE_BASE<any> {

    protected _state = 'iphone';
    protected _showWhenTrue = true;

    @Input() set isIphone(grid_state: string[] | string ) {
        this.setGrid( this._state, 'standard' );
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
    selector: '[isAndroidMobile]'
})
export class IsAndroidMobile extends RESPONSIVE_BASE<any> {

    protected _state = 'android mobile';
    protected _showWhenTrue = true;

    @Input() set isAndroidMobile( grid_state: string[] | string ) {
        this.setGrid(this._state,'standard');
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
    selector: '[isAndroidTablet]'
})
export class IsAndroidTablet extends RESPONSIVE_BASE<any> {

    protected _state = 'android tablet';
    protected _showWhenTrue = true;

    @Input() set isAndroidTablet( grid_state: string[] | string ) {
        this.setGrid( this._state, 'standard' );
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
    selector: '[isWindowsPhone]'
})
export class IsWindowsPhone extends RESPONSIVE_BASE<any> {

    protected _state = 'windows phone';
    protected _showWhenTrue = true;

    @Input() set isWindowsPhone(grid_state: string[]|string) {
        this.setGrid( this._state, 'standard' );
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
    selector: '[showItStandard]'
})
export class ShowItStandard extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    @Input() set showItStandard( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'standard' );
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
    selector: '[hideItStandard]'
})
export class HideItStandard extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    @Input() set hideItStandard( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'standard' );
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
    selector: '[isPortrait]'
})
export class IsPortrait extends RESPONSIVE_BASE<any> {

    protected _state = 'portrait';
    protected _showWhenTrue = false;

    @Input() set isPortrait( grid_state: string ) {
        this.setGrid( this._state, 'orientation' );
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
    selector: '[isLandscape]'
})
export class IsLandscape extends RESPONSIVE_BASE<any> {

    protected _state = 'landscape';
    protected _showWhenTrue = false;

    @Input() set isLandscape( grid_state: string ) {
        this.setGrid( this._state, 'orientation' );
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
    selector: 'deviceInfo'
})
export class DeviceInfo implements OnInit, OnDestroy {

    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;

    public set responsiveSizeInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
    }

    @Output() device: EventEmitter<any>= new EventEmitter();

    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd: ChangeDetectorRef ) {}

    ngOnInit() {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind( this ));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    updateData( value: any ) {
        const update = this._ifValueChanged( this.noRepeat, value );
        if ( update ) {
            this.device.emit( value );
            this.cd.markForCheck();
        }
    }

    _ifValueChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}

@Directive(
{
    selector: "deviceStandardInfo",
    inputs: [ 'deviceStandardInfo' ],
    outputs: [ 'standard' ]
})
export class DeviceStandardInfo implements OnInit, OnDestroy {

    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;

    set deviceStandardInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
    }

    public standard: EventEmitter<any>= new EventEmitter();
    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd: ChangeDetectorRef ) {}

    ngOnInit() {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind( this ));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    updateData( value: any ) {
        let update = this._ifValueChanged( this.noRepeat, value );
        if ( update ) {
            this.standard.emit( value );
            this.cd.markForCheck();
        }
    }

    _ifValueChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}

@Directive(
{
    selector: 'orientationInfo',
    outputs:[ 'orientation' ]
})
export class OrientationInfo implements OnInit, OnDestroy {

    public currentstate: string;
    private _subscription: Subscription;
    private noRepeat: string;

    set responsiveSizeInfo( grid_state: string[] | string ) {
        this.updateData( this.currentstate );
    }

    public orientation: EventEmitter<any>= new EventEmitter()

    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd: ChangeDetectorRef ) {}

    ngOnInit() {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind( this ));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    updateData( value: any ) {
        let update = this._ifValueChanged( this.noRepeat, value );
        if (update) {
            this.orientation.emit( value );
            this.cd.markForCheck();
        }
    }

    _ifValueChanged( oldValue: any, newValue: any ): boolean {
        if ( oldValue === newValue ) {
            return false;
        } else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
