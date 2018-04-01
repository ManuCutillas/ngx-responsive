/**
 * @name browser-info
 * @description Browser info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
export abstract class BrowserInfo {
    public currentstate: string;
    private _subscription: Subscription;
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(public _responsiveState: ResponsiveState) {}
    public connect(): Observable<any> {
        this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    get getBrowser(): Observable<any> {
        return this.replaySubject$.asObservable();
    }
    protected _updateData(value: any): void {
        this.replaySubject$.next(value);
    }
}
