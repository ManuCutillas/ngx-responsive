import { Output, DoCheck, IterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffer, KeyValueDiffers, Renderer, EventEmitter, Directive, Input, TemplateRef, ElementRef, ViewContainerRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from  'rxjs/Rx';
import {ResponsiveState} from '../config/config';
import {responsivePattern, responsiveSubscriptions} from '../config/interfaces';

//Dont work - [ON DEV]
@Directive({
    selector: "responsiveclass",
    inputs:['xl','lg','md','sm','xs']
})
export class ResponsiveClass implements OnInit, OnDestroy,DoCheck {
    public currentstate: string;
    private _subscription: Subscription;
    private _noRepeat: string;
    //private xlClass: string | string[];
    private xlClass: string;
    private lgClass: string;
    private mdClass: string;
    private smClass: string;
    private xsClass: string;
    private xlActive: boolean;
    private lgActive: boolean;
    private mdActive: boolean;
    private smActive: boolean;
    private xsActive: boolean;
    private element: HTMLElement;
    /*
    @Input() set xl(_class: string| string []) {
        console.info(_class);
        if (this.xlClass !== undefined || this.xlClass !== null) {
            this.xlActive = true;
            this.xlClass = _class;
            this.updateData(this.currentstate);
        }
    }
    */

    @Input() set xl(_class: string) {
        console.info(_class);
        if (this.xlClass !== undefined || this.xlClass !== null) {
            this.xlActive = true;
            this.xlClass = _class;
            this.updateData(this.currentstate);
        }
    }

    @Input() set lg(_class: string) {
        console.info(_class);
        if (this.lgClass !== undefined || this.lgClass !== null) {
            this.lgActive = true;
            this.lgClass = _class;
            this.updateData(this.currentstate);
        }
    }
    @Input() set md(_class: string) {
        if (this.mdClass !== undefined || this.mdClass !== null) {
            this.mdActive = true;
            this.mdClass = _class;
            this.updateData(this.currentstate);
        }
    }
    @Input() set sm(_class: string) {
        if (this.smClass !== undefined || this.smClass !== null) {
            this.smActive = true;
            this.smClass = _class;
            this.updateData(this.currentstate);
        }
    }
    @Input() set xs(_class: string) {
        if (this.xsClass !== undefined || this.xsClass !== null) {
            this.xsActive = true;
            this.xsClass = _class;
            this.updateData(this.currentstate);
        }
    }

    //public  statechanges: EventEmitter<any> = new EventEmitter();
    constructor(
        private _responsiveState: ResponsiveState,
        private el: ElementRef,
        private _renderer: Renderer
        //private _iterableDiffer:IterableDiffer, 
        //private _keyValueDiffer:KeyValueDiffer
        ) {
        this.element = el.nativeElement;
        }

    public ngOnInit():void {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this),
            value => {
                this.currentstate = value
            });
    }

    //Implements change detector
    public ngDoCheck():void{

    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private updateData(value: any): void {
        let update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            switch (value) {
                case "xl":
                    if (this.xlActive) this._renderer.setElementClass(this.element, this.xlClass, true);
                    if (this.lgActive) this._renderer.setElementClass(this.element, this.lgClass, false);
                    if (this.mdActive) this._renderer.setElementClass(this.element, this.mdClass, false);
                    if (this.smActive) this._renderer.setElementClass(this.element, this.smClass, false);
                    if (this.xsActive) this._renderer.setElementClass(this.element, this.xsClass, false);
                    break;
                case "lg":
                    if (this.xlActive) this._renderer.setElementClass(this.element, this.xlClass, false);
                    if (this.lgActive) this._renderer.setElementClass(this.element, this.lgClass, true);
                    if (this.mdActive) this._renderer.setElementClass(this.element, this.mdClass, false);
                    if (this.smActive) this._renderer.setElementClass(this.element, this.smClass, false);
                    if (this.xsActive) this._renderer.setElementClass(this.element, this.xsClass, false);
                    break;
                case "md":
                    if (this.xlActive) this._renderer.setElementClass(this.element, this.xlClass, false);
                    if (this.lgActive) this._renderer.setElementClass(this.element, this.lgClass, false);
                    if (this.mdActive) this._renderer.setElementClass(this.element, this.mdClass, true);
                    if (this.smActive) this._renderer.setElementClass(this.element, this.smClass, false);
                    if (this.xsActive) this._renderer.setElementClass(this.element, this.xsClass, false);
                    break;
                case "sm":
                    if (this.xlActive) this._renderer.setElementClass(this.element, this.xlClass, false);
                    if (this.lgActive) this._renderer.setElementClass(this.element, this.lgClass, false);
                    if (this.mdActive) this._renderer.setElementClass(this.element, this.mdClass, false);
                    if (this.smActive) this._renderer.setElementClass(this.element, this.smClass, true);
                    if (this.xsActive) this._renderer.setElementClass(this.element, this.xsClass, false);
                    break;
                case "xs":
                    if (this.xlActive) this._renderer.setElementClass(this.element, this.xlClass, false);
                    if (this.lgActive) this._renderer.setElementClass(this.element, this.lgClass, false);
                    if (this.mdActive) this._renderer.setElementClass(this.element, this.mdClass, false);
                    if (this.smActive) this._renderer.setElementClass(this.element, this.smClass, false);
                    if (this.xsActive) this._renderer.setElementClass(this.element, this.xsClass, true);
                    break;
                default:
            }
        }
    }


    private _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this._noRepeat = newValue;
            return true;
        }
    }
}






