import { EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';
export declare class IsSmartTv extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isSmartTv: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsDesktop extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isDesktop: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsTablet extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isTablet: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsMobile extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isMobile: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowItDevice extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showItDevice: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideItDevice extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideItDevice: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIphone extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIphone: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIpad extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIphone: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsAndroidMobile extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isAndroidMobile: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsAndroidTablet extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isAndroidTablet: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsWindowsPhone extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isWindowsPhone: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowItStandard extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showItStandard: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideItStandard extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideItStandard: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsPortrait extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isPortrait: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsLandscape extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isLandscape: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class DeviceInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    responsiveSizeInfo: string[] | string;
    device: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
export declare class DeviceStandardInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    deviceStandardInfo: string[] | string;
    standard: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
export declare class OrientationInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    responsiveSizeInfo: string[] | string;
    orientation: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
