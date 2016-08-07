import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveState } from '../config/config';
export declare class UserAgentInfo implements OnInit, OnDestroy {
    private _responsiveState;
    private _subscription_UserAgent;
    info: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    emitUserAgent(value: any): void;
}
