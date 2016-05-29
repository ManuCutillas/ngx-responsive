import {Injectable, Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit, OnDestroy, Optional} from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import {Observable, Observer, Subscription} from  'rxjs/Rx';
import {ResponsiveConfigInterface,ResponsiveState} from '../config/config';

/*
 * DEVICES DIRECTIVES
 * @Desktops / @Tablets / @Mobile
 *  Work in : Detect device by navigator and refactor the code with abstract class
 */

/*======== DESKTOPS STATES =========*/
@Directive({
    selector: '[isDesktop]',
    providers:[ResponsiveState]
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
    selector: '[isTablet]',
    providers:[ResponsiveState]
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
    selector: '[isMobile]',
    providers:[ResponsiveState]
})

export class IsMobile {
    private sizeXS: string = 'xs';
    private noRepeat: number = 0;
    private userAgent: any = window.navigator.userAgent;
    private detectisMobile: boolean = false;

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