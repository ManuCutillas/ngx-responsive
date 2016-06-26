import { TemplateRef, ViewContainerRef } from '@angular/core';
import { ResponsiveState } from '../config/config';
import { RESPONSIVE_BASE } from '../config/responsive-base';
export declare class ShowItSizes extends RESPONSIVE_BASE {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState);
    showItSizes: any;
}
export declare class HideItSizes extends RESPONSIVE_BASE {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState);
    hideItSizes: any;
}
