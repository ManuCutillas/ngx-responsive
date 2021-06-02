/**
 * @name useragent-info
 * @description User agent info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { IUserAgent } from '../../@core/interfaces';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

export abstract class UserAgentInfo {
    public get getUserAgent(): ReplaySubject<IUserAgent> {
        return this._replaySubject$;
    }

    private readonly _replaySubject$: ReplaySubject<IUserAgent> = new ReplaySubject();

    private get _isBrowser(): boolean {
        return this.platformService.isBrowser;
    }

    private _subscription: Subscription;

    constructor(
        protected readonly responsiveState: ResponsiveState,
        protected readonly platformService: PlatformService
    ) {}

    public connect(): Observable<IUserAgent> {
        if (this._isBrowser) {
            this._subscription = this.responsiveState.userAgent$
                .pipe(distinctUntilChanged())
                .subscribe(data => {
                    this.emitUserAgent(data);
                });
        }
    
        return this._replaySubject$.asObservable();
    }

    public disconnect(): void {
        if (this._isBrowser) {
            this._subscription.unsubscribe();
        }
    }

    protected emitUserAgent(value: IUserAgent): void {
        this._replaySubject$.next(value);
    }
}
