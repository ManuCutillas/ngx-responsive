/**
 * @name devices-info
 * @description devices-info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';

export abstract class DevicesInfo {
    public currentstate: string;
    public _subscription: Subscription;
    private _isBrowser: boolean = null;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(protected _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) {
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    public connect(): Observable<any> {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.device$.pipe(distinctUntilChanged())
            .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }
    get getDevice(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
