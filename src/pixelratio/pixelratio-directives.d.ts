import { EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';
export declare class Is1xPixel extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    is1xPixel: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsRetina extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isRetina: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class Is4k extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isRetina: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class PixelRatioInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    pixelratioInfo: string[] | string;
    pixelratio: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
