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
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';

export interface ResponsiveConfigInterface {
    breakPoints: {
        xs: {max: number},
        sm: {min: number, max: number},
        md: {min: number, max: number},
        lg: {min: number, max: number},
        xl: {min: number}
    },
    debounceTime: number
}
// Configuration class in order to allow to change breakpoints values
@Injectable()
export class ResponsiveConfig {
    config: ResponsiveConfigInterface = {
        breakPoints: {
            xs: {max: 767},
            sm: {min: 768, max: 991},
            md: {min: 992, max: 1199},
            lg: {min: 1200, max: 1599},
            xl: {min: 1600}
        },
        debounceTime: 100
    };


    constructor(@Optional() config?: ResponsiveConfigInterface) {
        if (!!config)
            this.config = config;
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
        let observer = Observable.fromEvent(window, 'resize').debounceTime(this._responsiveConfig.config.debounceTime);
        this.elementoObservar = observer.map(this.sizeOperations).share();
        this.anchoObservar = observer.map(this.sizeObserver).share();
    }


    private sizeObserver = (): number => {
        this.width = this.getWidth();
        try {
            return this.width; // I don't see how there could be an error here
        } catch (error) {
            //console.error('size operations error :', error);
        }
        return null;
    };

    private sizeOperations = (): string => {
        this.width = this.getWidth();
        try {
            if (this._responsiveConfig.config.breakPoints.xl.min <= this.width) {
                return 'xl';
            } else if (this._responsiveConfig.config.breakPoints.lg.max >= this.width && this._responsiveConfig.config.breakPoints.lg.min <= this.width) {
                return 'lg';
            } else if (this._responsiveConfig.config.breakPoints.md.max >= this.width && this._responsiveConfig.config.breakPoints.md.min <= this.width) {
                return 'md';
            } else if (this._responsiveConfig.config.breakPoints.sm.max >= this.width && this._responsiveConfig.config.breakPoints.sm.min <= this.width) {
                return 'sm';
            } else if (this._responsiveConfig.config.breakPoints.xs.max >= this.width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
        return null;
    };

    getWidth(): number {
        return window.innerWidth;
    }

    getDeviceSizeInitial(): string {
        return this.sizeOperations();
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

/*======== XL STATES =========*/
@Directive({
    selector: '[xl]'
})
export class XL {
    private state: string = 'xl';
    private noRepeat: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
        if (this.initalDeviceSize()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.noRepeat = 1;
        }
    }

    @Input() set xl(element: any) {

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
        if (initialDevice == 'xl') {
            return true;
        } else {
            return false;
        }

    }
}

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

abstract class ShowHideItBootstrap implements OnInit, OnDestroy {
    private noRepeat: number = 0;
    private _grid_state: string[];
    private _subscription: Subscription;
    protected _showWhenTrue: boolean;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private _responsiveState: ResponsiveState) {
    }


    protected setGrid(grid_state: string[]|string) {
        this._grid_state = <string[]>(Array.isArray(grid_state) ? grid_state : [grid_state]);
        this.updateView(this._responsiveState.getDeviceSizeInitial());
    }

    ngOnInit() {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private showHide(show: boolean) {
        if (!!show) {
            if (this.noRepeat == 0) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
        }
    }

    updateView(valor: string) {
        if (!!this._showWhenTrue) {
            this.showHide(!!this._grid_state && this._grid_state.indexOf(valor) !== -1)
        } else {
            this.showHide(!(!!this._grid_state && this._grid_state.indexOf(valor) !== -1))
        }
    }
}

/*======== MULTIPLE SIZES STATES =========*/
/* show */
@Directive({
    selector: '[showItBootstrap]'
})
export class ShowItBootstrap extends ShowHideItBootstrap {
    protected _showWhenTrue: boolean = true;

    @Input() set showItBootstrap(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
        // this._showWhenTrue = true;
    }

}

/* hide */
@Directive({
    selector: '[hideItBootstrap]'
})
export class HideItBootstrap extends ShowHideItBootstrap {
    protected _showWhenTrue: boolean = false;

    @Input() set hideItBootstrap(grid_state: string[]|string) {
        this.setGrid(grid_state);
    }

    constructor(templateRef: TemplateRef<any>,
                viewContainer: ViewContainerRef,
                _responsiveState: ResponsiveState) {
        super(templateRef, viewContainer, _responsiveState);
        // this._showWhenTrue = true;
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