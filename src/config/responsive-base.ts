import {Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/rx';
import {ResponsiveState, responsivePattern, responsiveSubscriptions} from '../config/index';

/*======== RESPONSIVE BASE CLASS =========*/
export abstract class RESPONSIVE_BASE<T> implements OnInit, OnDestroy {

    private _noRepeat: number = 0;
    private _sizes_grid_state: any;
    private _others_grid_state:string[];
    private _directive:string;
    //Subscriptions
    private _subscription_Bootstrap: Subscription;
    private _subscription_Browser: Subscription;
    private _subscription_Pixel_Ratio: Subscription;
    private _subscription_Device: Subscription;
    private _subscription_Orientation: Subscription;
    private _subscription_Standard: Subscription;
    private _subscription_IE_Version: Subscription;
    private _subscription_custom_sizes: Subscription;
    //show/hide
    protected _showWhenTrue: boolean;
    //Active subscription
    private set_active_subscriptions: responsiveSubscriptions = {
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
        private _responsiveState: ResponsiveState) {}
    //Input - Output
    protected eventChanges: EventEmitter<any> = new EventEmitter();
    protected setGrid(grid_state: any, directive: string): void {
        
            switch (directive) {
                case "bootstrap":
                    this.set_active_subscriptions.bootstrap = true;
                    break;
                case "device":
                     this.set_active_subscriptions.device = true;
                    break;
                case "standard":
                    this.set_active_subscriptions.standard = true;
                    break;
                case "orientation":
                    this.set_active_subscriptions.orientation = true;
                    break;
                case "browser":
                    this.set_active_subscriptions.browser = true;
                    break;
                case "pixelratio":
                    this.set_active_subscriptions.pixelratio == true;
                    break;
                case "ie":
                    this.set_active_subscriptions.ie = true;
                    break;
                case "sizes":
                    this.set_active_subscriptions.sizes = true;
                    break;
                default:
                    null;
            }   
                  
        if(directive == 'sizes'){
              this._sizes_grid_state = grid_state;
        }else{
             this._others_grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);   
        }
        this._directive = directive;
    }

    public ngOnInit() { 
        //Initialize subscriptios
        if (this.set_active_subscriptions.bootstrap == true) this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.browser == true) this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.device == true) this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.pixelratio == true) this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.orientation == true) this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.standard == true) this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.ie == true) this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));

        if (this.set_active_subscriptions.sizes == true) this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));

    }

    public ngOnDestroy() {
        //unsubscribe all subscriptions actives
        if (this.set_active_subscriptions.bootstrap == true) this._subscription_Bootstrap.unsubscribe();

        if (this.set_active_subscriptions.browser == true) this._subscription_Browser.unsubscribe();

        if (this.set_active_subscriptions.device == true) this._subscription_Device.unsubscribe();

        if (this.set_active_subscriptions.pixelratio == true) this._subscription_Pixel_Ratio.unsubscribe();

        if (this.set_active_subscriptions.orientation == true) this._subscription_Orientation.unsubscribe();

        if (this.set_active_subscriptions.standard == true) this._subscription_Standard.unsubscribe();

        if (this.set_active_subscriptions.ie == true) this._subscription_IE_Version.unsubscribe();

        if (this.set_active_subscriptions.sizes == true) this._subscription_custom_sizes.unsubscribe();
    }

    private showHide(show: boolean): void {
        if (!!show) {
            if (this._noRepeat == 0) {
                this._noRepeat = 1;
                this.eventChanges.emit(true);
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this._noRepeat = 0;
            this.eventChanges.emit(false);
            this.viewContainer.clear();
        }
    }

    private updateView(value: any): void {
       let showBoolean = this._directive == 'sizes' ?
            !!(
                (this._sizes_grid_state.min === undefined || value >= this._sizes_grid_state.min ) &&
                (this._sizes_grid_state.max === undefined || value <= this._sizes_grid_state.max )
            ) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;

        this.showHide( !!this._showWhenTrue ? showBoolean : !showBoolean );
    }

}
