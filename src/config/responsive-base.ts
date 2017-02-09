import { Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { Subscription } from  'rxjs/Subscription'
import { ResponsiveState, responsivePattern, responsiveSubscriptions } from '../config/index'

export abstract class RESPONSIVE_BASE<T> implements OnInit, OnDestroy {

    private _noRepeat: number= 0
    private _sizes_grid_state: any
    private _others_grid_state: string[]
    private _directive: string

    private _subscription_Bootstrap: Subscription
    private _subscription_Browser: Subscription
    private _subscription_Pixel_Ratio: Subscription
    private _subscription_Device: Subscription
    private _subscription_Orientation: Subscription
    private _subscription_Standard: Subscription
    private _subscription_IE_Version: Subscription
    private _subscription_custom_sizes: Subscription

    protected _showWhenTrue: boolean

    private set_active_subscriptions: responsiveSubscriptions= 
    {
        bootstrap: false,
        browser: false,
        device: false,
        pixelratio: false,
        orientation: false,
        standard: false,
        ie: false,
        sizes: false
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState,
        private cd: ChangeDetectorRef
        ) 
    {}

    protected eventChanges: EventEmitter<any>= new EventEmitter()
    protected setGrid(grid_state: any, directive: string): void 
    {    
        switch ( directive ) 
        {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap= true
                break;
            case 'device':
                this.set_active_subscriptions.device= true
                break;
            case 'standard':
                this.set_active_subscriptions.standard= true
                    break;
            case 'orientation':
                this.set_active_subscriptions.orientation= true
                break;
            case 'browser':
                this.set_active_subscriptions.browser= true
                break
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio= true
                break;
            case 'ie':
                this.set_active_subscriptions.ie= true
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true
                break;
            default:
                null;
        }   
                  
        if( directive === 'sizes' ) this._sizes_grid_state= grid_state
        else this._others_grid_state = <string[]> ( Array.isArray( grid_state ) ? grid_state : [ grid_state ] )
        
        this._directive= directive
    }

    public ngOnInit() 
    {
        
        if ( this.set_active_subscriptions.bootstrap ) 
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe( this.updateView.bind( this ))
           
        if ( this.set_active_subscriptions.bootstrap ) 
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind( this ) )

        if ( this.set_active_subscriptions.browser )
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateView.bind( this ))

        if ( this.set_active_subscriptions.device ) 
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe( this.updateView.bind( this ))

        if ( this.set_active_subscriptions.pixelratio ) 
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updateView.bind( this ) )

        if ( this.set_active_subscriptions.orientation ) 
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe( this.updateView.bind( this ))

        if ( this.set_active_subscriptions.standard ) 
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateView.bind( this ))

        if ( this.set_active_subscriptions.ie ) 
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind( this ))

        if (this.set_active_subscriptions.sizes ) 
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateView.bind( this ))
    }

    public ngOnDestroy() 
    {
        if ( this.set_active_subscriptions.bootstrap )
        this._subscription_Bootstrap.unsubscribe()

        if ( this.set_active_subscriptions.browser ) 
        this._subscription_Browser.unsubscribe()

        if ( this.set_active_subscriptions.device ) 
        this._subscription_Device.unsubscribe()

        if ( this.set_active_subscriptions.pixelratio ) 
        this._subscription_Pixel_Ratio.unsubscribe()

        if ( this.set_active_subscriptions.orientation )
        this._subscription_Orientation.unsubscribe();

        if ( this.set_active_subscriptions.standard ) 
        this._subscription_Standard.unsubscribe()

        if ( this.set_active_subscriptions.ie ) 
        this._subscription_IE_Version.unsubscribe()

        if ( this.set_active_subscriptions.sizes ) 
        this._subscription_custom_sizes.unsubscribe()
    }

    private showHide( show: boolean ): void 
    {
        if (!!show) {
            if ( this._noRepeat === 0 ) 
            {
                this._noRepeat = 1
                this.eventChanges.emit( true )
                this.viewContainer.createEmbeddedView( this.templateRef )
                this.cd.markForCheck() 
            }
        } 
        else {
            this._noRepeat = 0
            this.eventChanges.emit( false )
            this.viewContainer.clear()
            this.cd.markForCheck() 
        }
    }

    private updateView( value: any ): void 
    {
        let showBoolean = this._directive === 'sizes' ?
            !!(
                (typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min ) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max )
            ) :
            !!this._others_grid_state && this._others_grid_state.indexOf( value ) !== -1 

        this.showHide( !!this._showWhenTrue ? showBoolean : !showBoolean )
    }
}
