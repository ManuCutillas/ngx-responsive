import { DoCheck, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveState } from '../config/config';
export declare class ResponsiveWindow implements OnInit, OnDestroy, DoCheck {
    private _responsiveState;
    private el;
    private _noRepeat;
    private element;
    name: string;
    constructor(_responsiveState: ResponsiveState, el: ElementRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    getWidth(): number;
    private _ifValueChanged(oldValue, newValue);
}
