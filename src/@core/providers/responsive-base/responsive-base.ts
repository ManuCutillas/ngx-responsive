/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
import {
    EventEmitter,
    TemplateRef,
    ViewContainerRef,
    OnInit,
    OnDestroy,
    ChangeDetectorRef,
    Injectable,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponsiveSubscriptions } from '../../interfaces';
import { ResponsiveState } from '../responsive-state/responsive-state';
import { PlatformService } from '../platform-service/platform.service';

@Injectable()
export abstract class RESPONSIVE_BASE<T> implements OnInit, OnDestroy {

    private _noRepeat = 0;
    private _sizes_grid_state: any;
    private _others_grid_state: string[];
    private _directive: string;

    private _subscription_Bootstrap: Subscription;
    private _subscription_Browser: Subscription;
    private _subscription_Pixel_Ratio: Subscription;
    private _subscription_Device: Subscription;
    private _subscription_Orientation: Subscription;
    private _subscription_Standard: Subscription;
    private _subscription_IE_Version: Subscription;
    private _subscription_custom_sizes: Subscription;

    protected _showWhenTrue: boolean;

    private set_active_subscriptions: IResponsiveSubscriptions = {
        bootstrap: false,
        browser: false,
        device: false,
        pixelratio: false,
        orientation: false,
        standard: false,
        ie: false,
        sizes: false
    };
    private _isEnabledForPlatform: boolean;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState,
        private cd: ChangeDetectorRef,
        private platformService: PlatformService
    ) {
        this._isEnabledForPlatform = this.platformService.isEnabledForPlatform();
    }

    protected eventChanges: EventEmitter<any> = new EventEmitter();
    protected setGrid(grid_state: any, directive: string): void {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
        }

        if (directive === 'sizes') {
            this._sizes_grid_state = grid_state;
        } else {
            this._others_grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);
        }
        this._directive = directive;
    }

    public ngOnInit() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateView.bind(this));
            }


            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateView.bind(this));
            }

            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updateView.bind(this));
            }

            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateView.bind(this));
            }

            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateView.bind(this));
            }

            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateView.bind(this));
            }

            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateView.bind(this));
            }
        }
    }

    public ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap.unsubscribe();
            }

            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser.unsubscribe();
            }

            if (this.set_active_subscriptions.device) {
                this._subscription_Device.unsubscribe();
            }

            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio.unsubscribe();
            }

            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation.unsubscribe();
            }

            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard.unsubscribe();
            }

            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version.unsubscribe();
            }

            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes.unsubscribe();
            }
        }
    }

    private showHide(show: boolean): void {
        if (this._isEnabledForPlatform) {
            if (show) {
                if (this._noRepeat === 0) {
                    this._noRepeat = 1;
                    this.eventChanges.emit(true);
                    this.viewContainer.createEmbeddedView(this.templateRef);
                    this.cd.markForCheck();
                }
            } else {
                this._noRepeat = 0;
                this.eventChanges.emit(false);
                this.viewContainer.clear();
                this.cd.markForCheck();
            }
        }
    }

    private updateView(value: any): void {
        const showBoolean = this._directive === 'sizes' ?
            (
                (typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)
            ) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;

        this.showHide(this._showWhenTrue ? showBoolean : !showBoolean);
    }
}
