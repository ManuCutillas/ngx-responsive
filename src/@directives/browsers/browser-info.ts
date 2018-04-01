
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ResponsiveState } from '../../@core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
export abstract class BrowserInfo {
    public currentstate: string;
    private _subscription: Subscription;
    public subject$: Subject<any> = new Subject();
    public replaySubject$: ReplaySubject<any> = new ReplaySubject();
    constructor(public _responsiveState: ResponsiveState) {}
    public connect(): void {
        this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
        .subscribe((data) => {
            console.log('this._responsiveState.browser$ ===>', data);
            this._updateData(data);
        });
    }
    public disconnect(): void {
        this._subscription.unsubscribe();
    }
    protected _updateData(value: any): void {
        this.subject$.next(value);
        this.replaySubject$.next(value);
    }
}
