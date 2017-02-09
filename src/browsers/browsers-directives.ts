import { Injectable, Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { Subscription } from  'rxjs/Subscription'
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index'

@Directive(
{
    selector: '[isChrome]'
})
export class IsChrome extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'chrome'
    protected _showWhenTrue: boolean = true

    @Input() set isChrome( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isFirefox]'
})

export class IsFirefox extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'firefox'
    protected _showWhenTrue: boolean = true

    @Input() set isFirefox( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isSafari]'
})
export class IsSafari extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'safari'
    protected _showWhenTrue: boolean = true

    @Input() set isSafari( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isOpera]'
})
export class IsOpera extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'opera'
    protected _showWhenTrue: boolean = true

    @Input() set isOpera( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isIE]'
})
export class IsIE extends RESPONSIVE_BASE<any> {

    protected _state: string = 'ie'
    protected _showWhenTrue: boolean = true

    @Input() set isIE( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[showItBrowser]'
})
export class ShowItBrowser extends RESPONSIVE_BASE<any> {
    
    protected _showWhenTrue: boolean = true

    @Input() set showItBrowser( grid_state: string[] | string ) 
    {
        this.setGrid( grid_state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef )
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[hideItBrowser]',
    providers: [ResponsiveState]
})
export class HideItBrowser extends RESPONSIVE_BASE<any> {
    
    protected _showWhenTrue: boolean = false

    @Input() set hideItBrowser( grid_state: string[] | string ) 
    {
        this.setGrid( grid_state, 'browser' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isIE9]'
})
export class IsIE9 extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'ie 9'
    protected _showWhenTrue: boolean = true

    @Input() set isIE9( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isIE10]'
})
export class IsIE10 extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'ie 10'
    protected _showWhenTrue: boolean = true

    @Input() set isIE10( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd ) 
    }
}

@Directive(
{
    selector: '[isIE11]'
})
export class IsIE11 extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'ie 11'
    protected _showWhenTrue: boolean = true

    @Input() set isIE11( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[isIE12]'
})
export class IsIE12 extends RESPONSIVE_BASE<any> {
    
    protected _state: string = 'ie 12'
    protected _showWhenTrue: boolean = true

    @Input() set isIE12( grid_state: string[] | string ) 
    {
        this.setGrid( this._state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[showIEVersion]'
})
export class ShowIEVersion extends RESPONSIVE_BASE<any> {
    
    protected _showWhenTrue: boolean = true

    @Input() set showIEVersion( grid_state: string[] | string ) 
    {
        this.setGrid( grid_state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: '[hideIEVersion]'
})
export class HideIEVersion extends RESPONSIVE_BASE<any> {
    
    protected _showWhenTrue: boolean = false

    @Input() set hideIEVersion( grid_state: string[] | string ) 
    {
        this.setGrid( grid_state, 'ie' )
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) 
    {
        super( templateRef, viewContainer, _responsiveState, cd )
    }
}

@Directive(
{
    selector: "browserInfo",inputs:['browserInfo'], outputs:['browser']
})
export class BrowserInfo implements OnInit,OnDestroy {
    
    public currentstate: string
    private _subscription: Subscription
    private noRepeat:string

    set browserInfo( grid_state: string[] | string ) 
    {
        this.updateData( this.currentstate )
    }
    public browser:EventEmitter<any> = new EventEmitter()
    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd: ChangeDetectorRef ){}

    ngOnInit() 
    {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind( this ))
    }
    ngOnDestroy() 
    {
        this._subscription.unsubscribe()
    }
    updateData( value: any ) 
    {
        let update = this._ifValueChanged( this.noRepeat, value )
        if (update)
        {
            this.browser.emit( value )
            this.cd.markForCheck() 
        }
    }
    _ifValueChanged( oldValue: any, newValue: any ): boolean 
    {
        if (oldValue === newValue) return false
        else {
            this.noRepeat = newValue;
            return true;
        }
    }
}

@Directive(
{
    selector: "ieInfo",inputs:['ieInfo'], outputs:['ieVersion']
})
export class IeInfo implements OnInit,OnDestroy {
    
    public currentstate: string
    private _subscription: Subscription
    private noRepeat:string

    set ieInfo( grid_state: string[] | string ) 
    {
        this.updateData( this.currentstate )
    }
    public ieVersion: EventEmitter<any> = new EventEmitter()
    constructor( private _responsiveState: ResponsiveState,
                 private viewContainer: ViewContainerRef,
                 private cd : ChangeDetectorRef ) {}
    ngOnInit() 
    {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind( this ))
    }
    ngOnDestroy() 
    {
        this._subscription.unsubscribe()
    }
    updateData(value: any) 
    {
        let update = this._ifValueChanged( this.noRepeat, value );
        if (update)
        {
            this.ieVersion.emit( value )
            this.cd.markForCheck() 
        }
    }
    _ifValueChanged( oldValue: any, newValue: any ): boolean 
    {
        if ( oldValue === newValue ) return false
        else {
            this.noRepeat = newValue;
            return true;
        }
    }
}



