/**
 * @name responsive
 * @description Responsive directive in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { IResponsivePattern, IResponsiveSubscriptions } from '../../@core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { ResponsiveWindowDirective } from "../responsive-window/responsive-window";
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive(
    {
        selector: '[responsive]'
    })
export class ResponsiveDirective implements OnDestroy {

    private _config: string | string[];
    @Input() set responsive(config: string | string[]) {
        this._config = config;
        this.init_responsive();
    }
    get config(): string | string[]{
        return this._config;
    }
    
    // @Input() responsiveContainer: ResponsiveWindowDirective;
    private _responsiveContainer:ResponsiveWindowDirective;
    @Input() 
    set responsiveContainer(value: ResponsiveWindowDirective) {
      this._responsiveContainer = value;
      if(this.config){
          if(this._sizes_window !== null && this._sizes_window !== "window") {
            throw new Error('Responsive directive cannot use window AND responsiveContainer together');
          }
          this.init_responsive();
      }
    }
    get responsiveContainer(): ResponsiveWindowDirective{
        return this._responsiveContainer;
    }

    @Output() changes: EventEmitter<any> = new EventEmitter();
    private _windows = null;
    private _window = null;
    private _isEnabledForPlatform: boolean = null;
    public set_values: IResponsivePattern = {
        bootstrap: '',
        browser: '',
        device: '',
        pixelratio: '',
        orientation: '',
        standard: '',
        ie: '',
        sizes: 0
    };

    private set_active_subscriptions: IResponsiveSubscriptions =
        {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
    private match_multiple: IResponsiveSubscriptions =
        {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };

    private _subscription_Bootstrap: Subscription;
    private _subscription_Browser: Subscription;
    private _subscription_Pixel_Ratio: Subscription;
    private _subscription_Device: Subscription;
    private _subscription_Orientation: Subscription;
    private _subscription_Standard: Subscription;
    private _subscription_IE_Version: Subscription;
    private _subscription_custom_sizes: Subscription;


    protected _showWhenTrue = true;
    private _globalNoRepeat = 0;
    private _noRepeatBootstrapName: string;

    private _bootstrapNoRepeat = 0;
    private _deviceNoRepeat = 0;
    private _standardNoRepeat = 0;
    private _orientationNoRepeat = 0;
    private _browserNoRepeat = 0;
    private _pixelratioNoRepeat = 0;
    private _ieNoRepeat = 0;
    private _sizesNoRepeat = 0;

    private _bootstrap_user_param: string[] = [];
    private _devices_user_param: string[] = [];
    private _standard_user_param: string[] = [];
    private _orientation_user_param: string[] = [];
    private _browser_user_param: string[] = [];
    private _pixelratio_user_param: string[] = [];
    private _ie_user_param: string[] = [];
    private _sizes_user_param: [number, number] = [0, Number.MAX_VALUE];
    private _sizes_window = 'window';
    // private _sizes_container = null;

    protected _actives: string[] = [];

    constructor(
        public templateRef: TemplateRef<Object>,
        private _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef,
        platformService: PlatformService
    ) {
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }

    public init_responsive(): void {
        const config: any = this.config;
        if (this.isJSON(config)) {
            if (!!config.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = <string[]>(Array.isArray(config.bootstrap) ? config.bootstrap : [config.bootstrap]);
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!config.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = <string[]>(Array.isArray(config.device) ? config.device : [config.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!config.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = <string[]>(Array.isArray(config.standard) ? config.standard : [config.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!config.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = <string[]>(Array.isArray(config.orientation) ? config.orientation : [config.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!config.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = <string[]>(Array.isArray(config.browser) ? config.browser : [config.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!config.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = <string[]>(Array.isArray(config.pixelratio) ? config.pixelratio : [config.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!config.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = <string[]>(Array.isArray(config.ie) ? config.ie : [config.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!config.sizes && this._sizesNoRepeat === 0) {
                const _min = config.sizes.min || 0;
                const _max = config.sizes.max || Number.MAX_VALUE;
                const _win = config.sizes.window;
                if (_win !== undefined) {
                    this._sizes_window = _win;
                }
                // this._sizes_container = value.sizes.container;
                this._sizes_user_param = [_min, _max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        } else if (Array.isArray(config)) {
            throw new Error('Responsive directive don´t work with a only array parameter');
        } else if (typeof config === 'string') {
            throw new Error('Responsive directive don´t work with a only string parameter');
        } else if (typeof config === 'number') {
            throw new Error('Responsive directive don´t work with a only number parameter');
        } else if (typeof config === 'undefined' || config === null) {
            throw new Error('Responsive directive don´t work without a param');
        }

        for (let key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key]) {
                this._actives.push(key);
            }
        }
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateBootstrap.bind(this));
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateBrowser.bind(this));
            }

            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateDevice.bind(this));
            }

            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updatePixelRatio.bind(this));
            }

            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateOrientation.bind(this));
            }

            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateStandard.bind(this));
            }

            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateIEversion.bind(this));
            }

            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateSizes.bind(this));
            }
        }
    }

    private updateBootstrap(value: string): void {
        const _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    }
    private updateBrowser(value: string): void {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    }
    private updateDevice(value: string): void {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    }
    private updatePixelRatio(value: string): void {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    }
    private updateOrientation(value: string): void {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    }
    private updateStandard(value: string): void {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    }
    private updateIEversion(value: string): void {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    }
    private updateSizes(value: number): void {
        if(this.responsiveContainer){
            this.set_values.sizes = this._isEnabledForPlatform ? this.responsiveContainer.getWidth() : 0;
        }else if (this._sizes_window){
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }else{
            this.set_values.sizes = value;
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    }

    private updateEvent(param: any, type_directive: string): void {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(
                        (
                            param >= this._sizes_user_param[0] &&
                            param < this._sizes_user_param[1]
                        ),
                        type_directive);
                    break;
            }
        } else {

            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!((
                        param >= this._sizes_user_param[0] &&
                        param < this._sizes_user_param[1])),
                        type_directive);
                    break;
            }
        }
    }

    private showHideOperations(show: boolean, type_directive: string): void {
        const global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        } else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }

    private matchValues(show: boolean, type_directive: string) {
        let match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        } else {
            this.match_multiple[type_directive] = false;
        }

        for (let all_key in this.match_multiple) {
            for (let active of this._actives) {
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
    }

    public ngOnDestroy(): void {
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

    private _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    }

    private isJSON(value: any): boolean {
        try {
            JSON.stringify(value);
            return true;
        } catch (ex) {
            return false;
        }
    }
}
