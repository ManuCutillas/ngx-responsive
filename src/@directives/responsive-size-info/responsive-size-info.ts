/**
 * @name responsive-size-info
 * @description Responsive Size Info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';

export abstract class ResponsiveSizeInfo {
    private _subscription: Subscription;
    private _isBrowser: boolean = null;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject<any>();
    constructor( public _responsiveState: ResponsiveState,
        @Inject(PLATFORM_ID) protected _platformId
    ) {
        this._isBrowser = isPlatformBrowser(this._platformId);
    }
    public connect(): Observable<any> {
        if (this._isBrowser) {
            this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
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
    get getResponsiveSize(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
