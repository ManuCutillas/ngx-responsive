/**
 * @name browser-info
 * @description Browser info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

export abstract class BrowserInfo {
    public currentstate: string;
    private _subscription: Subscription;
    private _isEnabledForPlatform: boolean = null;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(
        public _responsiveState: ResponsiveState,
        protected platformService: PlatformService
    ) {
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    public connect(): Observable<any> {
        if(this._isEnabledForPlatform) {
            this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
            .subscribe((data) => {
                this._updateData(data);
            });
        }
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        if (this._isEnabledForPlatform) {
           this._subscription.unsubscribe();
        }
    }
    get getBrowser(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
