import { TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config/index';
export declare class ShowItSizes extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    showItSizes: any;
}
export declare class HideItSizes extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    hideItSizes: any;
}
