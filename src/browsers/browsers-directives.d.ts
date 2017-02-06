import { EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';
export declare class IsChrome extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isChrome: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsFirefox extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isFirefox: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsSafari extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isSafari: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsOpera extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isOpera: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowItBrowser extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showItBrowser: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideItBrowser extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideItBrowser: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE9 extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE9: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE10 extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE10: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE11 extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE11: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE12 extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE12: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowIEVersion extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showIEVersion: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideIEVersion extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideIEVersion: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class BrowserInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    browserInfo: string[] | string;
    browser: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
export declare class IeInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private viewContainer;
    private cd;
    currentstate: string;
    private _subscription;
    private noRepeat;
    ieInfo: string[] | string;
    ieVersion: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateData(value: any): void;
    _ifValueChanged(oldValue: any, newValue: any): boolean;
}
