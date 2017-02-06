import { EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../config/index';
export declare class UserAgentInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private cd;
    private _subscription_UserAgent;
    info: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    emitUserAgent(value: any): void;
}
