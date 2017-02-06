import { EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RESPONSIVE_BASE, ResponsiveState } from '../config/index';
export declare class XL extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    xl: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class LG extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    lg: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class MD extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    md: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class SM extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    sm: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class XS extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    xs: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowItBootstrap extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showItBootstrap: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideItBootstrap extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideItBootstrap: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ResponsiveSizeInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private _noRepeat;
    responsiveSizeInfo: string[] | string;
    statechanges: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateData(value);
    private _ifValueChanged(oldValue, newValue);
}
