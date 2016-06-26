import { EventEmitter, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveState } from '../config/config';
export declare abstract class RESPONSIVE_BASE implements OnInit, OnDestroy {
    private templateRef;
    private viewContainer;
    private _responsiveState;
    private _noRepeat;
    private _sizes_grid_state;
    private _others_grid_state;
    private _directive;
    private _subscription_Bootstrap;
    private _subscription_Browser;
    private _subscription_Pixel_Ratio;
    private _subscription_Device;
    private _subscription_Orientation;
    private _subscription_Standard;
    private _subscription_IE_Version;
    private _subscription_custom_sizes;
    protected _showWhenTrue: boolean;
    private set_active_subscriptions;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState);
    protected eventChanges: EventEmitter<any>;
    protected setGrid(grid_state: any, directive: string): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private showHide(show);
    private updateView(value);
}
