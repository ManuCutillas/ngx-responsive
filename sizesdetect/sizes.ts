/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @created_by Manu Cutillas
 * @Contributors Christophe HOARAU
 * @created_at May 23, 2016
 * @updated_at May 26, 2016 - by Christophe HOARAU
 * @version_0.1.3
 *
 * Dependencies:
 * @angular/core : "2.0.0-rc.1"
 * rxjs: "5.0.0-beta.6"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : Responsive Detect Directives for Angular 2
 *
 */

import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import {Observable, Observer, Subscription} from  'rxjs/Rx';

export interface ResponsiveConfigInterface {
    xs: {max: number},
    sm: {min: number, max: number},
    md: {min: number, max: number},
    lg: {min: number}
}
// Configuration class in order to allow to change breakpoints values
@Injectable()
export class ResponsiveConfig {
    RESPONSIVE_DEVICE_SIZES: ResponsiveConfigInterface = {
        xs: {max: 767},
        sm: {min: 768, max: 991},
        md: {min: 992, max: 1199},
        lg: {min: 1200}
    };

    constructor(@Optional() config?: ResponsiveConfigInterface) {
        if (!!config)
            this.RESPONSIVE_DEVICE_SIZES = config;
    }
}

@Injectable()
export class ResponsiveState {
    private _responsiveConfig: ResponsiveConfig;
    elementoObservar: Observable<any>;
    anchoObservar: Observable<any>;
    width: any;

    constructor(@Optional() responsiveConfig: ResponsiveConfig) {
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        // console.log("_responsiveConfig2:", this._responsiveConfig);
        let observer = Observable.fromEvent(window, 'resize').debounceTime(100);
        this.elementoObservar = observer.map(this.sizeOperations).share();
        this.anchoObservar = observer.map(this.sizeObserver).share();
    }

    getDeviceSizeInitial() {
        return this.sizeOperations();
    }

    private sizeObserver = (): any => {
        this.width = this.getWidth();
        try {
            return this.width;
        } catch (error) {
            //console.error('size operations error :', error);
        }
    };

    private sizeOperations = (): any => {
        this.width = this.getWidth();
        try {
            if (this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.lg.min <= this.width) {
                return 'lg';
            } else if (this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.md.max >= this.width && this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.md.min <= this.width) {
                return 'md';
            } else if (this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.sm.max >= this.width && this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.sm.min <= this.width) {
                return 'sm';
            } else if (this._responsiveConfig.RESPONSIVE_DEVICE_SIZES.xs.max >= this.width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
    };

    getWidth() {
        return window.innerWidth;
    }
}

/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobiles
 */

/*======== DESKTOPS STATES =========*/
@Directive({
    selector: '[isDesktop]'
})
export class IsDesktop {
    private sizeLG: string = 'lg';
    private sizeMD: string = 'md';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initialDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set isDesktop(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.sizeMD || valor == this.sizeLG) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }

        });
    }

    initialDeviceSize() {
        let initialDevice: string = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'lg' || initialDevice == 'md') {
            return true;
        } else {
            return false;
        }
    }
}

/*======== TABLETS STATES =========*/
@Directive({
    selector: '[isTablet]'
})
export class IsTablet {
    private sizeSM: string = 'sm';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set isTablet(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.sizeSM) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }

        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'sm') {
            return true;
        } else {
            return false;
        }
    }
}

/*======== MOBILE STATES =========*/
@Directive({
    selector: '[isMobile]'
})
export class IsMobile {
    private sizeXS: string = 'xs';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set isMobile(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.sizeXS) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }

        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'xs') {
            return true;
        } else {
            return false;
        }
    }
}


/*
 *
 * Bootstrap standard screen sizes directives
 * LG / MD / SM / XS
 */

/*======== LG STATES =========*/
@Directive({
    selector: '[lg]'
})
export class LG {
    private state: string = 'lg';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set lg(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.state) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }

        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'lg') {
            return true;
        } else {
            return false;
        }

    }
}

/*======== MD STATES =========*/
@Directive({
    selector: '[md]'
})
export class MD {
    private state: string = 'md';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set md(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.state) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }
        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'md') {
            return true;
        } else {
            return false;
        }

    }
}

/*======== SM STATES =========*/
@Directive({
    selector: '[sm]'
})
export class SM {

    private state: string = 'sm';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set sm(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.state) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }

        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'sm') {
            return true;
        } else {
            return false;
        }

    }
}

/*======== XS STATES =========*/
@Directive({
    selector: '[xs]'
})
export class XS {
    private state: string = 'xs';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set xs(element: any) {
        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == this.state) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }
        });
    }

    initalDeviceSize() {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == 'xs') {
            return true;
        } else {
            return false;
        }

    }
}


/*======== MULTIPLE SIZES STATES =========*/
/* show */
@Directive({
    selector: '[showItBootstrap]'
})
export class ShowItBootstrap implements OnInit, OnDestroy {
    private noRepeat: number = 0;
    private _grid_state: string[];
    private _subscription: Subscription;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    @Input() set showItBootstrap(grid_state: string[]|string) {
        if (Array.isArray(grid_state))
            this._grid_state = <string[]>grid_state;
        else
            this._grid_state = <string[]>[grid_state];
        this.updateView(this._responsiveState.getDeviceSizeInitial());
    }

    ngOnInit() {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
    }

    updateView(valor: string) {
        if (!!this._grid_state && this._grid_state.indexOf(valor) !== -1) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}

/* hide */
@Directive({
    selector: '[hideItBootstrap]'
})
export class HideItBootstrap {
    private noRepeat: number = 0;
    private callInit: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    @Input() set hideItBootstrap(_grid_state: string) {
        if (this.callInit == 0) {
            this.init(_grid_state);
            this.callInit = 1;
        }
        this._responsiveState.elementoObservar.subscribe((valor: any) => {
            if (valor == _grid_state[0] || valor == _grid_state[1]) {
                this.noRepeat = 0;
                this.viewContainer.clear();
            } else {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            }

        });
    }

    init(_grid_state: string) {
        let initialDevice: any = this._responsiveState.getDeviceSizeInitial();
        if (initialDevice == _grid_state[0] || initialDevice == _grid_state[1]) {
            this.noRepeat = 0;
            this.viewContainer.clear();
        } else {

            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
    }
}

/*======== CUSTOM SIZES =========*/
/* show */
@Directive({
    selector: '[showItSizes]'
})
export class ShowItSizes {
    private noRepeat: number = 0;
    private callInit: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    @Input() set showItSizes(_grid_state: any) {
        if (this.callInit == 0) {
            this.init(_grid_state);
            this.callInit = 1;
        }
        this._responsiveState.anchoObservar.subscribe((size: any) => {
            if (size >= _grid_state.min && size <= _grid_state.max) {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            } else {
                this.noRepeat = 0;
                this.viewContainer.clear();
            }
        });
    }

    init(_grid_state: any) {
        let width: any = this._responsiveState.getWidth();
        if (width >= _grid_state.min && width <= _grid_state.max) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }
}

/* hide */
@Directive({
    selector: '[hideItSizes]'
})
export class HideItSizes {
    private noRepeat: number = 0;
    private callInit: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }

    @Input() set hideItSizes(_grid_state: any) {
        if (this.callInit == 0) {
            this.init(_grid_state);
            this.callInit = 1;
        }
        this._responsiveState.anchoObservar.subscribe((size: any) => {
            if (size >= _grid_state.min && size <= _grid_state.max) {
                this.noRepeat = 0;
                this.viewContainer.clear();
            } else {
                if (this.noRepeat == 0) {
                    this.noRepeat = 1;
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            }
        });
    }

    init(_grid_state: any) {
        let width: any = this._responsiveState.getWidth();
        if (width >= _grid_state.min && width <= _grid_state.max) {
            this.noRepeat = 0;
            this.viewContainer.clear();
        } else {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
    }
}