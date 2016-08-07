import { DoCheck, Directive, Input, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {ResponsiveState} from '../config/config';

@Directive({
    selector: "[responsive-window]"
})
export class ResponsiveWindow implements OnInit, OnDestroy, DoCheck {

    private _noRepeat: string;
    private element: HTMLElement;
    @Input('responsive-window') name: string;

    ////CONSTRUCTOR
    constructor(
        private _responsiveState: ResponsiveState,
        private el: ElementRef
        ) { this.element = el.nativeElement; }
    ////LIFECICLE METHODS
    public ngOnInit():void { this._responsiveState.registerWindow(this); }
    public ngDoCheck():void {
        let update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
        }
    }
    public ngOnDestroy() { this._responsiveState.unregisterWindow(this); }
    ////Public Methods
    public getWidth() { return this.element.offsetWidth; }
    ////Private Methods
    private _ifValueChanged(oldValue: any, newValue: any): boolean {
        if (oldValue === newValue) {
            return false;
        } else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
