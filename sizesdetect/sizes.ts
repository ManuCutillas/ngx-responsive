/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @created_by Manu Cutillas
 * @created_at May 23, 2016
 * @updated_at May 24, 2016
 * @version_1.0.2
 * 
 * Dependencies:
 * @angular/core : "2.0.0-rc.1"
 * rxjs: "5.0.0-beta.6"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 * 
 * @description : First version of Responsive Detect State for Angular 2
 *
 */

import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef} from '@angular/core';
import 'rxjs/add/operator/share';
import {Observable, Observer} from  'rxjs/Rx';

export const RESPONSIVE_DEVICE_SIZES = {
      lg: { min: 1200 },
      md: { min: 992, max: 1199 },
      sm: { min: 768, max: 991 },
      xs: { max: 767 } };

@Injectable()
export class ResponsiveState {
    elementoObservar: Observable<any>;
    width: any;
    
    constructor() {
       this.elementoObservar = Observable.fromEvent(window, 'resize').map(this.sizeOperations).share();
    }

    getDeviceSizeInitial(){
        return this.sizeOperations();
    }

    sizeOperations = (): any => {
        this.width = this.getWidth();
        try {
            if (RESPONSIVE_DEVICE_SIZES.lg.min < this.width) {
                return 'lg';  
            } else if (RESPONSIVE_DEVICE_SIZES.md.max > this.width && RESPONSIVE_DEVICE_SIZES.md.min < this.width) {
                return 'md';   
            } else if (RESPONSIVE_DEVICE_SIZES.sm.max > this.width && RESPONSIVE_DEVICE_SIZES.sm.min < this.width) {
                return 'sm';   
            } else if (RESPONSIVE_DEVICE_SIZES.xs.max > this.width) {
                return 'xs';
            }
        } catch (error) {
            //console.error('size operations error :', error);
        }
    }
    getWidth(){
       return window.innerWidth;
    }
}

/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobiles
 */

/*======== DESKTOPS STATES =========*/
@Directive({
    selector: '[isDesktop]',
    providers: [ResponsiveState]
})
export class IsDesktop {
    private sizeLG: string = 'lg';
    private sizeMD: string = 'md';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) { 
        if(this.initialDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
    }
    @Input() set isDesktop(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[isTablet]',
    providers: [ResponsiveState]
})
export class IsTablet {
    private sizeSM: string = 'sm';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) { 
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
    }
    @Input() set isTablet(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[isMobile]',
    providers: [ResponsiveState]
})
export class IsMobile {
    private sizeXS: string = 'xs';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) { 
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
    }
    @Input() set isMobile(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[lg]',
    providers: [ResponsiveState]
})
export class LG {
    private state: string = 'lg';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) { 
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
    }
    @Input() set lg(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[md]',
    providers: [ResponsiveState]
})
export class MD {
    private state: string = 'md';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) { 
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
    }
    @Input() set md(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[sm]',
    providers: [ResponsiveState]
})
export class SM {

    private state: string = 'sm';
    private noRepeat: number = 0;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) {
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
     }
    @Input() set sm(element: any) {

        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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
    selector: '[xs]',
    providers: [ResponsiveState]
})
export class XS {
    private state: string = 'xs';
    private noRepeat: number = 0;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private _responsiveState: ResponsiveState
    ) {
        if(this.initalDeviceSize()){
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.noRepeat = 1;   
        }
     }
    @Input() set xs(element: any) {
        this._responsiveState.elementoObservar.subscribe((valor:any) => {
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


